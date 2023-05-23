---
description: How to connect your wallet
sidebar_position: 2
---


# How to connect your wallet

We suggest using Metamask as it's currently considered a highly reliable and stable wallet option.

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/connect-metamask.gif')} width="70%"/>

## Steps to connect to Mangrove testnet

1. To connect your wallet on the Mangrove DEX, click on "Connect my wallet" and choose Metamask.

<img src={useBaseUrl('img/assets/connect-wallet-metamask.png')} width="500px"/><br /><br />

2. Select which account(s) you'd like to connect. Click "Next", and then "Connect".

<img src={useBaseUrl('img/assets/connect-wallet-account.png')} width="500px"/><br /><br />

3. To use our Testnet, you need to be connected to the Polygon Mumbai test network. If you see a "Unsupported Network" pop-up, click "Switch network".

<img src={useBaseUrl('img/assets/connect-wallet-switch-network.png')} width="500px"/><br /><br />

4. If you do not yet have the Mumbai test network registered, a pop-up asking you to approve its addition will show up. Click "Approve".

<img src={useBaseUrl('img/assets/connect-wallet-switch-approve-network.png')} width="300px"/><br /><br />

:::info
In case you do get a Chain ID error, you'll need to add the network manually. Rest assured, it's super easy - just follow the below steps.
:::

* First, click "Cancel".
* Then, open Metamask again.
* Click on your current network at the top, then on "Add network" at the bottom.
<img src={useBaseUrl('img/assets/connect-wallet-switch-add-network.png')} width="300px"/>

* A new web browser tab will open - click on "Add a network manually".
<img src={useBaseUrl('img/assets/connect-wallet-switch-add-manually.png')} width="500px"/>

* Key in the following information, and hit "Save":
    * *Network Name: Mumbai Testnet*
    * *New RPC URL: https://rpc-mumbai.maticvigil.com/*
    * *Chain ID: 80001*
    * *Currency Symbol: MATIC*
    * *Block Explorer URL: https://polygonscan.com/*

<img src={useBaseUrl('img/assets/connect-wallet-switch-add-manually-save.png')} width="500px"/>

* A few confirmation pop-ups will appear - click "Got it" and "Switch to Mumbai testnet".
<img src={useBaseUrl('img/assets/connect-wallet-confirmation.png')} width="300px"/>

* You're done! You can now head back to Mangrove app.

5. Once connected, the offers in the order book will appear - you can now start using Mangrove app!


