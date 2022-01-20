import * as React from 'react';
import { Typography } from '@mui/material';

const text = `
The First Index on Avalanche
$20,000
This Colony prize pool of $20,000 will encourage developers to build the first index on Avalanche. An index is a great tool to get exposure to different assets/coins, and that is why Colony would like to create an index with the top 10 market cap projects inside the Avalanche ecosystem.

In this index, Colony will deploy capital (close to $2M) but would like to open its functionalities to other market participants. Therefore, Colony aims at creating a pool where anyone can commit USDT to be exposed to these projects.

Talented developers will be able to build an optimal process to allow users to access the growth of the Avalanche ecosystem through Colony’s Index. Depending on the time allocated to building the index, there is 3 different levels referring to how far one can push the Index concept and related functionalities.

Level 1 - Index Exposition:

It allows users to commit 1 stable-coin (USDT for example) to a pool
The pool is deploying the committed capital equally into the top 10 projects by market cap on Avalanche
It allows users to get large exposure to several assets in a short time without increasing the Tx cost (batch)
It allows users to redeem the capital committed in the pool in a short time (batch)

Level 2 – LP Token Generation:

It allows users to commit with 1 stable-coin to a pool (same Index pool) and receive Colony Index LP tokens
LP tokens are needed to unlock the shares of capital provided in the pool by the user.
It allows users to open/close a trove with their Colony Index LP Token as collateral vs. Colony Stable coin.

Level 3 - Use Optimization (Automated Staking) :

The goal is to allow users to be exposed to each of the Index projects with the best ROI possible. For example, owning Trader Joe tokens is great, but it’s better if you can stake it.

Index Rules:

10 constituents being the highest market cap on Avalanche (Stable-Coin excluded)
Equally weighted (10% weight on each constituent)
Rebalancing based on predefined rules, such as “every week”, or “every time a constituent weight reaches above 20%“.
Modification of constituents, if a new project reaches the top 10 by market cap, it can be integrated to the index. The DAO will vote on index constituents every quarter (to add/remove tokens from the index).
If any question regarding the index or Colony, the Moralis Discord is a place where people can freely share ideas and discuss solutions.
`;

export default function Prompt() {
    return (
        <Typography
            sx={{ whiteSpace: 'pre-line'}}
        >
            {text}
        </Typography>
    );
}
