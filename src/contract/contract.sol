// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract Index is ERC20("Tether USD", "USDT.e") {

    // state variables

    // contract state

    uint256 public quote;
    uint256 public base;
    uint256 public k;
    uint256 public price;
    address public admin;

    uint256 constant multiple = 10 ** 6;
    uint256[10] public ids;
    uint256[10] public amounts;

    // user functions

    mapping(address => uint256) public usdt;
    mapping(address => uint256) public index;

    function get_balance() public view returns (uint256) {
        return balanceOf(msg.sender);
    }

    function get_usdt() public view returns (uint256) {
        return usdt[msg.sender];
    }

    function get_index() public view returns (uint256) {
        return usdt[msg.sender];
    }

    event txn(bool buy, uint256 amount, uint256 index_balance);

    // functions

    function update_price() public {
        price = quote * 10 ** 6 / base;
    }

    constructor(uint256 amount) {
        admin = msg.sender;
        quote = amount;
        base = quote;
        k = quote * base;
        update_price();
    }

    // will not be in mainnet version, just to supply fake USDT
    function mint(uint256 amount) public {
        _mint(msg.sender, amount);
    }

    // funding rates

    // contract state functions

    // use rarely
    function set_k(uint256 amount) public {
        require(amount >= k);
        k = amount;
    }

    function modify() public {
        // call external api which calls rebalance below
    }

    // called by external api
    function rebalance(uint256[10] memory ids_, uint256[10] memory amounts_) public {
        for (uint i = 0; i < 10; i++) {
            ids[i] = ids_[i];
            amounts[i] = amounts_[i];
        }
    }

    // user functions

    // user sends usdt to contract admin
    function deposit_usdt(uint256 amount) public {
        transfer(admin, amount);
        usdt[msg.sender] += amount;
    }

    // contract admin sends usdt to user
    // must be called by admin
    // will revert if admin doesn't have enough real usdt
    function withdraw_usdt(address user, uint256 amount) public {
        require(amount <= usdt[user]);
        transfer(user, amount);
        usdt[user] -= amount;
    }

    // like mutual fund, invest $ and get some share of fund
    // raise quote amt and lower base amt
    function buy_index(uint256 amount_index) public payable {
        uint256 base1 = base - amount_index;
        uint256 quote1 = k / base1;
        uint256 amount_usdt = quote1 - quote;

        // use '>' to guarantee some collateral remaining
        require(usdt[msg.sender] > amount_usdt);

        index[msg.sender] += amount_index;
        usdt[msg.sender] -= amount_usdt;

        quote = quote1;
        base = base1;
        update_price();
    }
	
    // amount in $
    // lower quote amt and raise base amt
    function sell_index(uint256 amount_index) public {
        require(index[msg.sender] >= amount_index);

        uint256 base1 = base + amount_index;
        uint256 quote1 = k / base1;
        uint256 amount_usdt = quote - quote1;

        index[msg.sender] -= amount_index;
        usdt[msg.sender] += amount_usdt;

        quote = quote1;
        base = base1;
        update_price();
    }
}