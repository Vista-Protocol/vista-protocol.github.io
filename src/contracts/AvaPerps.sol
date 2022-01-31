// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/solc-0.6/contracts/token/ERC20/ERC20.sol";
import "@chainlink/contracts/src/v0.6/interfaces/AggregatorInterface.sol";

contract ERC20Copy is ERC20("USD Coin", "USDC") {
    function mint(uint amount) public {
        _mint(msg.sender, amount);
    }
}

// for index fund of top 10 avalanche tokens
contract AvaIndex {
    constructor() public {}
    fallback() external payable {}
    receive() external payable {}

    // ids of tokens on CoinMarketCap
    string[10] tokens = ["LINK","REN","AMPL","ORN","AVAX","ALEPH","SWAP","ANY","SUSHI","REEF"];

    // number of shares of each token per dollar invested
    uint256[10] amounts = [464900, 24308800, 9724700, 2114400, 122500, 13606100, 8241500, 430800, 1686600, 785307600];

    uint256[10] prices = [1706341978, 33845402, 94641014, 472652650, 7028340501, 50853610, 98272974, 1994998203, 424475879, 1016431];

    uint constant peg_multiplier = 10 ** 8;
    uint index_price = peg_multiplier;

    function set_index_price(uint price) public {
        index_price = price;
    }
    
    function replace_token(uint index, string memory token) public {
        tokens[index] = token;
        amounts[index] = 0; // sentinel for cloud function to know rebalancing is needed
    }

    // call this to rebalance if any token's price * weight exceeds 20% of index oracle price
    // starting off, all tokens' price * weight is 10% of oracle price
    function set_amounts(uint256[10] memory amounts_) public {
        amounts = amounts_;
    }

    // call this to rebalance if any token's price * weight exceeds 20% of index oracle price
    // starting off, all tokens' price * weight is 10% of oracle price
    function set_prices(uint256[10] memory prices_) public {
        prices = prices_;
    }

    function composition() public view returns (
        string[10] memory, uint256[10] memory, uint256[10] memory, uint
    ) {
        return (tokens, amounts, prices, index_price);
    }
}

// this means the AvaPerps contract contains all ERC20 stuff
// in the real version, we'll do something like this:
// IERC20 USDC_CONTRACT = IERC20(USDT_CONTRACT_ADDRESS);
// and call USDC_CONTRACT.transfer(address, uint256), etc.
contract AvaPerps is AvaIndex {
    // user collateral + positions information
    mapping(address => UserInfo) user; 
    // stays the same with multiple markets

    function user_collateral() public view returns (uint) {
        return user[msg.sender].collateral;
    }

    function user_base(uint index) public view returns (int) {
        return user[msg.sender].positions[index].base_asset_amount;
    }

    function user_quote() public view returns (uint) {
        return user[msg.sender].quote_asset_amount;
    }

    struct UserInfo {
        address user_address;
        uint collateral; // usdc balance
        uint quote_asset_amount;
        MarketPosition[5] positions; // array if more than one market
    }

    struct MarketPosition {
        // uint market_index; - not necessary in V0
        int base_asset_amount; // amount of xAVAX
        // base_asset_amount is negative when shorting

        int last_cum_funding; // unrealized funding
    }

    // all relevant information for xAVAX
    struct Market {
        bool initialized; // has market started?
        int base_asset_amount; 	// cumulative user position (can be + or - if users are long or short)
        uint quote_asset_notional_amount; // xUSD value of base_asset_amount
        uint open_interest; // size of all positions (long and short)
        uint volume; // not sure why this can't be stored off-chain
        AMM amm; // see below
    }

    // array of Markets - not necessary in V0
    // Market[] Markets;

    // all relevant information for pricing
    // need to do more research on peg_multiplier
    struct AMM {
        address oracle; // Chainlink address to get price feeds from

        uint base_asset_amount; // amount of xAVAX in vAMM
        uint quote_asset_amount; // amount of xUSD in vAMM; same value of base_asset_amount
        int cum_funding_rate; // cumulative funding rate; why not off-chain?
        int funding_rate; // funding rate for this hour; why not off-chain?
        int periodicity; // how often funding rates are taken; why not off-chain?
        uint mark_twap; // vAMM price = (quote_asset_amount/base_asset_amount) * peg_multiplier
        int mark_twap_ts; // vAMM price - oracle price
    }

    // smart contract that takes (partial) fees for insurance
    // controlled by admin at first, later by DAO
    // will require some functions to withdraw money for repegging and payments to users affected by bugs 
    address insurance_account;
    uint leverage = 5;

    // our contract on avalanche testnet
    address constant USDC_CONTRACT_ADDRESS = 0x8dC460712519ab2Ed3028F0cff0D044c5EC0Df0C;

    // random contract on javascript vm (remix default)
    // address constant USDC_CONTRACT_ADDRESS = 0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8;

    ERC20Copy USDC_CONTRACT = ERC20Copy(USDC_CONTRACT_ADDRESS);
    Market market;
    address owner;
    // int index_price = 0;

    // index, avax, btc, eth, link
    address[5] internal oracles = [
        0x5498BB86BC934c8D34FDA08E81D444153d0D06aD,
        0x5498BB86BC934c8D34FDA08E81D444153d0D06aD,
        0x31CF013A08c6Ac228C94551d535d5BAfE19c602a,
        0x86d67c3D38D2bCeE722E601025C25a575021c6EA,
        0x34C4c526902d88a3Aa98DB8a9b802603EB1E3470
    ];
    AMM[5] public amms;

    // if index = 0, meaning index, return state variable
    function oracle_price(uint index) public view returns (uint) {
        if (index == 0) {
            return index_price;
        }
        else {
            return uint(
                AggregatorInterface(oracles[index]).latestAnswer()
            );
        }
    }

    function initialize_amm() internal {
        AMM memory amm;
        for (uint i = 0; i < 5; i++) {
            amm = AMM(
                oracles[i],
                1000 * peg_multiplier,
                1000 * uint(oracle_price(i)),
                0,
                0,
                3600, // 1 hour in seconds
                0,
                0
            );
            amms[i] = amm;
        }
    }

    constructor() public {
        owner = msg.sender;

        initialize_amm();
    }
    
    function set_leverage(uint lev) public {
        leverage = lev;
    }

    function deposit_collateral(uint amount_usdc) public {
        USDC_CONTRACT.transferFrom(msg.sender, address(this), amount_usdc);
        user[msg.sender].collateral += amount_usdc;
        user[msg.sender].quote_asset_amount += amount_usdc * leverage;
    }

    // each xusdc is worth 1 usdc / leverage
    function withdraw_collateral(uint amount_usdc) public {
        require(
            user[msg.sender].quote_asset_amount >= amount_usdc * leverage,
            "not enough liquid usdc"
        );

        user[msg.sender].quote_asset_amount -= amount_usdc * leverage;
        user[msg.sender].collateral -= amount_usdc;
        USDC_CONTRACT.transfer(msg.sender, amount_usdc);
    }

    function open_long(uint index, uint256 amount_xusdc) public {
        // require(
        //     user_base() >= 0,
        //     "cannot open long while short"
        // );

        uint256 k = amms[index].base_asset_amount * amms[index].quote_asset_amount;
        uint256 quote1 = amms[index].quote_asset_amount + amount_xusdc;
        uint256 base1 = k / quote1;
        uint256 amount_xavax = amms[index].base_asset_amount - base1;

        // using '>' forces users to always have some collateral left
        // helpful for funding rates
        require(
            user_quote() > amount_xusdc,
            "cannot afford cost"
        );

        user[msg.sender].quote_asset_amount -= amount_xusdc;
        user[msg.sender].positions[index].base_asset_amount += int(amount_xavax);

        // modify amm

        amms[index].base_asset_amount = base1;
        amms[index].quote_asset_amount = quote1;
    }
	
    function close_long(uint index, uint256 amount_xusdc) public {
        // modify user

        uint256 k = amms[index].base_asset_amount * amms[index].quote_asset_amount;
        uint256 quote1 = amms[index].quote_asset_amount - amount_xusdc;
        uint256 base1 = k / quote1;
        uint256 amount_xavax = base1 - amms[index].base_asset_amount;

        require(
            user_base(index) >= int(amount_xavax),
            "not enough base_asset to sell"
        );

        user[msg.sender].quote_asset_amount += amount_xusdc;
        user[msg.sender].positions[index].base_asset_amount -= int(amount_xavax);

        // modify amm

        amms[index].base_asset_amount = base1;
        amms[index].quote_asset_amount = quote1;
    }
	
    function open_short(uint index, uint256 amount_xusdc) public {
        // require(
        //     user_base() <= 0,
        //     "cannot open short while long"
        // );

        require(
            amms[index].quote_asset_amount > amount_xusdc,
            "cannot make quote_asset pool go negative"
        );

        uint256 k = amms[index].base_asset_amount * amms[index].quote_asset_amount;
        uint256 quote1 = amms[index].quote_asset_amount - amount_xusdc;
        uint256 base1 = k / quote1;
        uint256 amount_xavax = base1 - amms[index].base_asset_amount;

        // using '>' forces users to always have some collateral left
        // helpful for funding rates
        require(
            user_quote() > amount_xusdc,
            "cannot afford cost"
        );

        user[msg.sender].quote_asset_amount -= amount_xusdc;
        user[msg.sender].positions[index].base_asset_amount -= int(amount_xavax);

        // modify amm

        amms[index].base_asset_amount = base1;
        amms[index].quote_asset_amount = quote1;
    }
	
    function close_short(uint index, uint256 amount_xusdc) public {
        // modify user

        uint256 k = amms[index].base_asset_amount * amms[index].quote_asset_amount;
        uint256 quote1 = amms[index].quote_asset_amount + amount_xusdc;
        uint256 base1 = k / quote1;
        uint256 amount_xavax = amms[index].base_asset_amount - base1;

        require(
            -user_base(index) >= int(amount_xavax),
            "not enough shorts to close"
        );

        user[msg.sender].quote_asset_amount += amount_xusdc;
        user[msg.sender].positions[index].base_asset_amount += int(amount_xavax);

        // modify amm

        amms[index].base_asset_amount = base1;
        amms[index].quote_asset_amount = quote1;
    }
}