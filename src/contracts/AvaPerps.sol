// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/solc-0.6/contracts/token/ERC20/ERC20.sol";
import "@chainlink/contracts/src/v0.6/interfaces/AggregatorInterface.sol";

contract ERC20Copy is ERC20("USD Coin", "USDC") {
    function mint(uint amount) public {
        _mint(msg.sender, amount);
    }
}

contract PriceConsumer {

    // cannot set constant because uninitialized
    AggregatorInterface internal priceFeed;

    constructor() public {
        priceFeed = AggregatorInterface(0x5498BB86BC934c8D34FDA08E81D444153d0D06aD);
		// above address for Avalanche Testnet, AVAX / USD, 8 decimals
    }
  
    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int256) {
        return priceFeed.latestAnswer();
    }

    /**
     * Returns the timestamp of the latest price update
     */
    function getLatestPriceTimestamp() public view returns (uint256) {
        return priceFeed.latestTimestamp();
    }
}

// this means the AvaPerps contract contains all ERC20 stuff
// in the real version, we'll do something like this:
// IERC20 USDC_CONTRACT = IERC20(USDT_CONTRACT_ADDRESS);
// and call USDC_CONTRACT.transfer(address, uint256), etc.
contract AvaPerps is PriceConsumer {
    // user collateral + positions information
    mapping(address => UserInfo) user; 
    // stays the same with multiple markets

    function get_user_collateral() public view returns (uint) {
        return user[msg.sender].collateral;
    }

    function get_user_base() public view returns (int) {
        return user[msg.sender].position.base_asset_amount;
    }

    function get_amm_base() public view returns (uint) {
        return amm.base_asset_amount;
    }

    function get_amm_quote() public view returns (uint) {
        return amm.quote_asset_amount;
    }

    // all information relevant to user
    struct UserInfo {
        address user_address;
        uint collateral; // usdc balance
        MarketPosition position; // array if more than one market
    }

    struct MarketPosition {
        // uint market_index; - not necessary in V0
        int base_asset_amount; // amount of xAVAX
        // base_asset_amount is negative when shorting

        uint quote_asset_notional_amount; // how much xAVAX is worth in xUSD; not sure if necessary
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
        // above not necessary, we harcode in PriceConsumer contract

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
    uint constant peg_multiplier = 10 ** 6;

    // our contract on avalanche testnet
    // address constant USDC_CONTRACT_ADDRESS = 0x8dC460712519ab2Ed3028F0cff0D044c5EC0Df0C;

    // random contract on javascript vm (remix default)
    address constant USDC_CONTRACT_ADDRESS = 0xd9145CCE52D386f254917e481eB44e9943F39138;

    ERC20Copy USDC_CONTRACT;
    Market market;
    AMM amm;
    address owner;

    constructor() public {
        owner = msg.sender;
        USDC_CONTRACT = ERC20Copy(USDC_CONTRACT_ADDRESS);

        amm = AMM(
            0x5498BB86BC934c8D34FDA08E81D444153d0D06aD, // not necessary
            1000 * peg_multiplier,
            100000 * peg_multiplier,
            0,
            0,
            3600, // 1 hour in seconds
            0,
            0
        );
        market = Market(true, 0, 0, 0, 0, amm);
    }

    // global collateral vault
    // escrows (holds) all USDC collateral
    // address collateral_account;
    // CHANGE: contract itself will be escrow

    // Adds new user
    // Rewrite this function
    function initialize_user() public {
        MarketPosition memory position = MarketPosition(0, 0, 0);
        UserInfo memory u = UserInfo(msg.sender, 0, position);
        user[msg.sender] = u;
    }

    // Adds new perpetual asset
    // Not needed in V0
    // Contract needs to inherit Ownable
    // function initalize_market() public {
    //     require(msg.sender == owner);

    //     Market m = Market(true, 0, 0, 0, 0);
    //     Markets.push(m);
    // };

    // user must approve avaperps contract address thru usdc contract
    // https://ethereum.stackexchange.com/questions/46318/how-can-i-transfer-erc20-tokens-from-a-contract-to-an-user-account/46360
    function deposit_collateral(uint amount) public {
        USDC_CONTRACT.transferFrom(msg.sender, address(this), amount);

        user[msg.sender].collateral += amount;
    }

    // NEED TO REWRITE
    // contract admin sends usdt to user
    // must be called by admin
    // will revert if admin doesn't have enough real usdt
    function withdraw_collateral(uint amount) public {
        require(user[msg.sender].collateral >= amount);

        USDC_CONTRACT.transfer(msg.sender, amount);

        user[msg.sender].collateral -= amount;
    }


    // i don't know what direction means
    // function open_position(bool direction, uint amount /*, 
    //                     uint market_index, uint limit price*/) {
    //     // Settle user funding payments
    //     settle_funding_payment();

    //     // Determine price and decrease user's

    //     // 
    //     // Making trade smaller
    //     if (direction & user[msg.sender] < 0)
    //     {
    //         uint min 
    // }


    // beforehand, initialize Market market and AMM amm objects, with those names
    function open_position(uint256 amount_xavax) public {
        // modify user

        uint256 k = amm.base_asset_amount * amm.quote_asset_amount;
        uint256 base1 = amm.base_asset_amount - amount_xavax;
        uint256 quote1 = k / base1;
        // QUESTION: do we store k?
        uint256 amount_xusdc = quote1 - amm.quote_asset_amount;

        // using '>' forces users to always have some collateral left
        // helpful for funding rates
        require(
            user[msg.sender].collateral > amount_xusdc &&
            get_user_base() >= 0
        );

        user[msg.sender].collateral -= amount_xusdc;
        user[msg.sender].position.base_asset_amount += int(amount_xavax);
        user[msg.sender].position.quote_asset_notional_amount += amount_xusdc;

        // modify amm

        amm.base_asset_amount = base1;
        amm.quote_asset_amount = quote1;
    
        amm.mark_twap = amm.quote_asset_amount / amm.base_asset_amount * peg_multiplier;
        // amm.mark_twap_ts = int(amm.mark_twap) - getLatestPrice(); // oracle price

        // that function defined in chainlink's PriceConsumer contract
    }
	
    function close_position(uint256 amount_xavax) public {
        // modify user

        uint256 k = amm.base_asset_amount * amm.quote_asset_amount;
        uint256 base1 = amm.base_asset_amount + amount_xavax;
        uint256 quote1 = k / base1;
        // QUESTION: do we store k?
        uint256 amount_xusdc = amm.quote_asset_amount - quote1;

        require(user[msg.sender].position.base_asset_amount >= int(amount_xavax));

        user[msg.sender].collateral += amount_xusdc;
        user[msg.sender].position.base_asset_amount -= int(amount_xavax);
        user[msg.sender].position.quote_asset_notional_amount -= amount_xusdc;

        // modify amm

        amm.base_asset_amount = base1;
        amm.quote_asset_amount = quote1;
    
        amm.mark_twap = amm.quote_asset_amount / amm.base_asset_amount * peg_multiplier;
        // amm.mark_twap_ts = int(amm.mark_twap) - getLatestPrice();
        // that function defined in chainlink's PriceConsumer contract
    }
	
    // beforehand, initialize Market market and AMM amm objects, with those names
    function open_short(uint256 amount_xavax) public {
        // modify user

        uint256 k = amm.base_asset_amount * amm.quote_asset_amount;
        uint256 base1 = amm.base_asset_amount + amount_xavax;
        uint256 quote1 = k / base1;
        // QUESTION: do we store k?
        uint256 amount_xusdc = amm.quote_asset_amount - quote1;

        // using '>' forces users to always have some collateral left
        // helpful for funding rates
        require(
            user[msg.sender].collateral > amount_xusdc &&
            get_user_base() <= 0
        );

        user[msg.sender].collateral -= amount_xusdc;
        user[msg.sender].position.base_asset_amount -= int(amount_xavax);

        // modify amm

        amm.base_asset_amount = base1;
        amm.quote_asset_amount += amount_xusdc;
    
        amm.mark_twap = amm.quote_asset_amount / amm.base_asset_amount * peg_multiplier;
        // amm.mark_twap_ts = int(amm.mark_twap) - getLatestPrice(); // oracle price

        // that function defined in chainlink's PriceConsumer contract
    }
	
    function close_short(uint256 amount_xavax) public {
        // modify user

        uint256 k = amm.base_asset_amount * amm.quote_asset_amount;
        uint256 base1 = amm.base_asset_amount - amount_xavax;
        uint256 quote1 = k / base1;
        // QUESTION: do we store k?
        uint256 amount_xusdc = quote1 - amm.quote_asset_amount;

        require(-user[msg.sender].position.base_asset_amount >= int(amount_xavax));

        user[msg.sender].collateral += amount_xusdc;
        user[msg.sender].position.base_asset_amount += int(amount_xavax);

        // modify amm

        amm.base_asset_amount = base1;
        amm.quote_asset_amount -= amount_xusdc;
    
        amm.mark_twap = amm.quote_asset_amount / amm.base_asset_amount * peg_multiplier;
        // amm.mark_twap_ts = int(amm.mark_twap) - getLatestPrice();
        // that function defined in chainlink's PriceConsumer contract
    }

    // function check_liquidate(address seller) public {
    //     uint256 base_asset_amount = user[seller].position.base_asset_amount;
    //     uint256 index = user[seller].position.buys.length - 1;
    //     uint256 total_cost;
    //     while (base_asset_amount > user[seller].position.buys[index].amount_xavax) {
    //         base_asset_amount -= user[seller].position.buys[index].amount_xavax;
    //         total_cost += user[seller].position.buys[index].amount_usdc;
    //         index--;
    //     }
    //     total_cost += user[seller].position.buys[index].amount_usdc * (
    //         base_asset_amount / user[seller].position.buys[index].amount_xavax
    //     );
        
    //     uint256 total_value = user[seller].position.base_asset_amount * getLatestPrice();
    //     // right side of inequality means $10 in USDC
    //     if (total_value - total_cost <= 10 ** 7) {
    //         user[seller].collateral = 0; // sorry pal, taking your USDC
    //         close_position(user[seller].position.base_asset_amount, seller);
    //     }
    // }
}

// for index fund of top 10 avalanche tokens
contract AvaIndex {
    constructor() public {}
    fallback() external payable {}
    receive() external payable {}

    // ids of tokens on CoinMarketCap
    uint256[10] public tokens;

    // number of shares of each token per dollar invested
    uint256[10] public weights;

    // dao votes every quarter about changing index components
    function set_tokens(uint256[10] memory tokens_) public {
        tokens = tokens_;
    }

    // call this to rebalance if any token's price * weight exceeds 20% of index oracle price
    // starting off, all tokens' price * weight is 10% of oracle price
    function set_weights(uint256[10] memory weights_) public {
        weights = weights_;
    }

    function composition() public view returns (uint256[10] memory, uint256[10] memory) {
        return (tokens, weights);
    }
}