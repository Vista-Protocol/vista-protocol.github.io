// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/solc-0.6/contracts/token/ERC20/ERC20.sol";
import "@chainlink/contracts/src/v0.6/interfaces/AggregatorInterface.sol";

// for index fund of top 10 avalanche tokens
contract AvaIndex {
    constructor() public {}
    fallback() external payable {}
    receive() external payable {}

    // ids of tokens on CoinMarketCap
    uint256[10] public tokens;

    // number of shares of each token per dollar invested
    uint256[10] public amounts;

    // dao votes every quarter about changing index components
    function set_tokens(uint256[10] memory tokens_) public {
        tokens = tokens_;
    }
    
    function replace_token(uint index, uint id) public {
        tokens[index] = id;
    }

    // call this to rebalance if any token's price * weight exceeds 20% of index oracle price
    // starting off, all tokens' price * weight is 10% of oracle price
    function set_amounts(uint256[10] memory amounts_) public {
        amounts = amounts_;
    }

    function composition() public view returns (uint256[10] memory, uint256[10] memory) {
        return (tokens, amounts);
    }
}