---
description: How to connect your wallet
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# How to connect your wallet

We suggest using Metamask as it's currently considered a highly reliable and stable wallet option. You're free to choose others if you wish. Down below, you will find detailed steps to:

- [Connect to Mangrove mainnet](#steps-to-connect-to-mangrove-mainnet-and-testnet) (and testnet)
- [Get some test tokens](#steps-to-get-some-testnet-tokens) to spend on Mangrove testnet
 
## Steps to connect to Mangrove mainnet and testnet

1. Go to the [Mangrove app](https://app.mangrove.exchange/) (or [Mangrove testnet app](https://testnet.mangrove.exchange/)), and connect your wallet by clicking on "Connect my wallet" - choose Metamask.

<!-- TODO: Update this image -->
<img src={useBaseUrl('img/assets/connect-wallet-metamask.png')} width="100%"/><br /><br />

2. Select which account(s) you'd like to connect. Click "Next", and then "Connect".

<!-- TODO: Update this image -->
<img src={useBaseUrl('img/assets/connect-wallet-account.png')} width="100%"/><br /><br />

## Supported networks

- **Blast**: You need to be connected to the Blast network.
- **Blast testnet**: You need to be connected to the Blast sepolia network.

:::info Note
If you see a "Unsupported Network" pop-up, click "Change network".
:::
<!-- TODO: Update this image -->
<img src={useBaseUrl('img/assets/connect-wallet-switch-network.png')} width="500px"/><br /><br />

4. Once connected, the offers in the order book will appear - you can now start using Mangrove app!

### Adding the networks manually

:::info
If you do not yet have the networks registered, a pop-up will appear asking you to approve adding it. Click "Approve". If this fails, please follow the [guide that metamask wrote here](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC).
:::

If you do need to add the networks, you can find most of them on chainlist.org, but we have supplied the important ones here to make sure:

| Network Name  | RPC URL                  | Chain ID  | Currency Symbol | Block Explorer                |
| ------------- | ------------------------ | --------- | --------------- | ----------------------------- |
| Blast Sepolia | https://sepolia.blast.io | 168587773 | ETH             | https://testnet.blastscan.io/ |
| Blast         | https://blast.io         | 81457     | ETH             | https://blastscan.io/         |

## Steps to get some testnet tokens

1. Click on your connected account at the top right corner, and then choose 'Faucet".
 <!-- TODO: Update this image -->
   <img src={useBaseUrl('img/assets/test-tokens-faucet-list.png')} width="100%"/>

2. A new page will open, giving you options to grab various tokens. Feel free to click them out on the right, and get test tokens for yourself. Remember that you will also need to get some native tokens for gas fees (this depends on the network you are using!), as well as one of the three available currencies available on Mangrove testnet at the moment (WBTC, WETH, USDB).

3. To add native tokens:
   :::info
   This example is for Blast testnet, but there will be a slightly different process for other networks!
   :::
   - Head over this [page](https://www.alchemy.com/faucets/ethereum-sepolia)
   - Key in your account address to receive the tokens, this will give you Sepolia ETH.
   <!-- TODO: Update this image -->
     <img src={useBaseUrl('img/assets/test-tokens-matic.png')} width="100%"/>
   - Click "Send me ETH"
   - You should see a transaction in "Your transactions" which you can use to track the deposit of your tokens!

<!-- TODO: Make sure WBTC still behaves this way -->

4. To add WBTC:
   - Click "Mint".
   - Once again, your wallet opens - click "Confirm".
   - After a few seconds, a pop-up green success pop-up will appear at the bottom of your screen.
   - Done - you can now head back to the Trade page and start trading!

5. To add USDB or WETH:
   - Please follow the documentation provided by Blast