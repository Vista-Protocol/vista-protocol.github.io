# Using Vista Protocol
In order to use Vista Protocol, you have to take 2 simple steps.

1. Add the Avalanche Fuji Testnet to Metamask ([instructional video](https://www.loom.com/share/746a6d2b0dce4cc58dff561489c4639c))
2. Get some test AVAX on the Fuji Tesnet ([instructional video](https://www.loom.com/share/6f3fad3b41894e11acc41c3d6edf030a))


# Getting Started with Create React App

## Branch Descriptions

* master: default, should be most updated
* avaindex: used to contain just George's independing Avalanche Index work; a couple recent commits were copying in components from the figma-inspired design
* figma: the one-page app based on Ishaan's figma design

## TODO

* Admin page
    * replace components of admin page
        * when a component's market cap drops out of the top ten on Avalanche
        * Colony DAO votes on this every quarter; might make a 'Replace' button in the frontend just for demo purposes
    * rebalance component weights
        * when starting the index, component weights (# shares) calculated to make all components make up 10 cents of every dollar put into the index
        * either periodically or every time the index price is checked (when one component makes up over 20 cents of each dollar), weights should be rebalanced
        * might make a button just for demo
* About page
    * talk about 2 signature products: leveraged avax and avalanche etf
        * reorganize to add more info
    * avax-perp blurb: I'm currently working with two others on a leveraged perpetual futures platform, for the Moralis Hackathon. Our technique, adapted from the Drift protocol, allows us to create a derivative asset without needing to hold the base asset (Avalanche token, AVAX). Along with an ETF tracking the top assets on the Avalanche network, we allow users to go long or short at the leverage multiple we choose. It's not deployed yet, as we're working on a test network.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 

Get started 

`yarn install`

Start the app

`yarn start`

View [src/index](src/index.js)
