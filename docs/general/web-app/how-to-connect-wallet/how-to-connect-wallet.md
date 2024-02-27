---
description: How to connect your wallet
sidebar_position: 2
---


# How to connect your wallet

We suggest using Metamask as it's currently considered a highly reliable and stable wallet option. You're free to choose others if you wish.
Down below, you will find detailed steps to:

* [Connect to Mangrove mainnet](./how-to-connect-wallet.md#steps-to-connect-to-mangrove-mainnet-and-testnet) (and testnet)
* [Get some test tokens](./how-to-connect-wallet.md#steps-to-get-some-test-tokens-testnet) to spend on Mangrove testnet

import useBaseUrl from '@docusaurus/useBaseUrl';

## Steps to connect to Mangrove mainnet and testnet

1. Go to the Mangrove [app](https://app.mangrove.exchange/trade) (or [testnet app](https://testnet.mangrove.exchange/)), and connect your wallet by clicking on "Connect my wallet" - choose Metamask.

<img src={useBaseUrl('img/assets/connect-wallet-metamask.png')} width="100%"/><br /><br />

2. Select which account(s) you'd like to connect. Click "Next", and then "Connect".

<img src={useBaseUrl('img/assets/connect-wallet-account.png')} width="100%"/><br /><br />

3. Mangrove app is live on both Arbitrum and Polygon mainnet.

* **Arbitrum**: you need to be connected to the Arbitrum network. If you see a "Unsupported Network" pop-up, click "Switch network".
* **Polygon mainnet**: you need to be connected to the Polygon mainnet. If you see a "Unsupported Network" pop-up, click "Switch network".
* **Polygon Mumbai testnet**: you need to be connected to the Polygon Mumbai test network ([testnet app](https://testnet.mangrove.exchange/) only).

:::info Note
 If you see a "Unsupported Network" pop-up, click "Switch network".
:::

<img src={useBaseUrl('img/assets/connect-wallet-switch-network.png')} width="500px"/><br /><br />

4. Once connected, the offers in the order book will appear - you can now start using Mangrove app!

### Adding the networks manually

1. If you do not yet have the Mumbai test network registered, a pop-up asking you to approve its addition will show up. Click "Approve".

<img src={useBaseUrl('img/assets/connect-wallet-switch-approve-network.png')} width="300px"/><br /><br />

:::info
In case you do get a Chain ID error, you'll need to add the network manually. Rest assured, it's super easy - just follow the below steps.
:::

2. Add Mumbai testnet manually
    * First, click "Cancel".
    * Then, open Metamask again.
    * Click on your current network at the top, then on "Add network" at the bottom.
    <img src={useBaseUrl('img/assets/connect-wallet-switch-add-network.png')} width="300px"/>

    * A new web browser tab will open - click on "Add a network manually".
    <img src={useBaseUrl('img/assets/connect-wallet-switch-add-manually.png')} width="500px"/>

    * Key in the following information, and hit "Save":<br />
    *Network Name: Mumbai Testnet*<br />
    *New RPC URL: https://rpc-mumbai.maticvigil.com/*<br />
    *Chain ID: 80001*<br />
    *Currency Symbol: MATIC*<br />
    *Block Explorer URL: https://polygonscan.com/*<br />
    <img src={useBaseUrl('img/assets/connect-wallet-switch-add-manually-save.png')} width="500px"/>

    * A few confirmation pop-ups will appear - click "Got it" and "Switch to Mumbai testnet".
    <img src={useBaseUrl('img/assets/connect-wallet-confirmation.png')} width="300px"/>

    * You're done! You can now head back to Mangrove app.

## Steps to get some test tokens (testnet)

1. Click on your connected account at the top right corner, and then choose 'Faucet".
<img src={useBaseUrl('img/assets/test-tokens-faucet-list.png')} width="100%"/>

2. A new page will open, giving you options to grab various tokens. Feel free to click them out on the right, and get test tokens for yourselve. Remember that you will also need to get some natic tokens for gas fees (in MATIC), as well as one of the three available currencies available on Mangrove testnet at the moment (WETH, USDC, DAI).

3. To add MATIC tokens:
    * Head over this [page](https://faucet.polygon.technology/)
    * Key in your account address to receive the tokens.
    <img src={useBaseUrl('img/assets/test-tokens-matic.png')} width="100%"/>

    * Make sure the "Mumbai" testnet is selected, as well as "MATIC" tokens
    * Click "Submit", and "Confirm"
    * Done - a message displays, telling you you should receive your MATIC tokens within 1-2min

4. To add WBTC, WMATIC or USDT:
    * Click on "WBTC", "WMATIC", or "USDT" on the faucet pop-up
    * A field appears - type in an amount (or hit "Max"), and click "Mint".
    * Once again, Metamask opens - click "Confirm".
    * After a few seconds, a pop-up green success pop-up will appear at the bottom of your screen.
    * Done - you can now head back to the Trade page and start trading!
