// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract Index is ERC20("Tether USD", "USDT.e") {

    // state variables

    // contract state

    uint256 public quote;
    uint256 public base;
    uint256 public k;
    address public admin;

    uint256 constant multiple = 10 ** 6;
    uint256[10] public ids;
    uint256[10] public amounts;

    // user functions

    mapping(address => uint256) public usdt;
    mapping(address => uint256) public index;

    // functions

    constructor(uint256 amount) {
        admin = msg.sender;
        quote = amount;
        base = quote;
        k = quote * base;
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

    function rebalance(uint256[10] memory ids_, uint256[10] memory amounts_) public {
        ids = ids_;
        amounts = amounts_;
    }

    function composition() public view returns (uint256[10] memory, uint256[10] memory) {
        return (ids, amounts);
    }

    // deposited usdt <-> regular usdt

    function deposit_usdt(uint256 amount) public {
        transfer(address(this), amount);
        // above will halt function if msg.sender doesn't have enough in balance
        usdt[msg.sender] += amount;
    }

    function withdraw_usdt(uint256 amount) public payable {
        require(usdt[msg.sender] >= amount);
        usdt[msg.sender] -= amount;
        ERC20(address(this)).transfer(msg.sender, amount);
    }

    // deposited usdt <-> index token

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
    }
	
    function sell_index(uint256 amount_index) public {
        require(index[msg.sender] >= amount_index);

        uint256 base1 = base + amount_index;
        uint256 quote1 = k / base1;
        uint256 amount_usdt = quote - quote1;

        index[msg.sender] -= amount_index;
        usdt[msg.sender] += amount_usdt;

        quote = quote1;
        base = base1;
    }
}