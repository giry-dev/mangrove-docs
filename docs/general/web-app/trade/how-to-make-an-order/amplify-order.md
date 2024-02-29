---
description: Amplified order
sidebar_position: 3
---

# Amplified order

:::caution
On Mangrove, Amplified Orders have a requirement of a minimum amount per order which depends on the market. This requirement ensures that the gas cost of consuming the offers is not too high. You can find minimum amount required per order in the market details on the dApp or read about the [exact values here](#minimum-volume)
:::


import useBaseUrl from '@docusaurus/useBaseUrl';

## What is an amplified order?

Leveraging Mangrove's core principle of unlocked liquidity, you can place a special limit order on the book with a promise to deliver when your offer is taken, and use the same funds on other markets.
When (and only when) your offer is taken, the funds will be sourced from your wallet and the transaction will be executed, retracting the offers on the other markets.

For example on a WMATIC/USDT pair, you can promise 1,000 USDT against some WMATIC, and promise that same amount on WETH/USDT, USDC/USDT, etc. You can do so on every market made of the same inbound currency (USDT in our example).

Here is a diagram generalizing this concept:

<img src={useBaseUrl('img/assets/amplified_order.png')} width="100%"/>

## Steps

1. At the top left of the menu, choose "Amplified"
   
<img src={useBaseUrl('img/assets/choose_amplified.png')} width="300px"/><br /><br />

2. Select where you would like your funds to be fetched from (in our case we are just going to use our wallet).

<img src={useBaseUrl('img/assets/amplified_select_token.png')} width="300px"/><br /><br />

3. Select the token and the amount you want to amplify.

<img src={useBaseUrl('img/assets/amplified_sourcing_amount.png')} width="300px"/><br /><br />

4. Select which assets (i.e. on which markets) you'd like to post your amplified order for. You can click "Add market" below to add more if you wish.

5. Choose a limit average price for each target asset of your amplified order.
   * This is the highest price you are willing to pay for the tokens, and the order will only execute if the market price is at or below your specified limit.

6. Select the destination for each target asset, i.e. where you would like them to be sent after the trade is executed.

<img src={useBaseUrl('img/assets/amplified_order_receiveto.png')} width="350px"/><br /><br />

7. In the "Advanced" section, you can choose from 3 types of amplified orders.
    * **Immediate or Cancel (IOC)**: Your order attempts to execute immediately at the desired price. If successful, it's executed; if not, it's canceled.
    * **Good 'til time (GTT)**: Set an expiration date for your order (ex: active for 3 days, then canceled).
    * [**Fill or Kill (FOK)**](../../../../developers/SDK/guides/fill-or-kill.md): Your order is either executed fully or not executed at all (ex: you place an order for 1 ETH at $9,500; if only 0.8 ETH can be filled, it's canceled; if fully filled, it's executed).

<img src={useBaseUrl('img/assets/limit_order_advanced.png')} width="350px"/><br /><br />

:::info Note
If a "Good 'til time" limit order is [partially filled](../how-to-track-open-orders.md#order-is-partially-filled), a green message will display the transaction details, and the remainder will be reposted automatically.
:::

## Minimum Volume

:::info Important
Due to the [density](../../../../developers/terms/density.md) on each market, there is a minimum token requirement when placing limit/amplified orders (except for [IOC orders](../more-on-order-types.md#immediate-or-cancel-ioc)). You can read more about why your transactions might be failing in the [FAQ](../../../FAQ/README.md#why-do-my-transactions-keep-failing).

| Market    | Minimum volume            |
| --------- | ------------------------- |
| WETH/USDB | 0.00060 WETH / 1.278 USDB |
| WBTC/USDB | 0.00003 WBTC / 1.542 USDB |
:::

1. Click on "Buy". A card will appear, click on "Proceed" then "Approve", and confirm the transaction on your wallet. More information on approval in [this previous section](../approve-buy.md).

2. You will be asked to confirm activation of your Smart Router, this is a step you only need to take once. You also will not need to do this if you have done any limit orders before!  

3.  The pop-up updates itself - click "Proceed" to finalize your order (it will open your wallet once again).

4.  Confirm the transaction on your wallet.

5.  A confirmation pop-up will appear, along with a notification card below that will tell you when your order has been filled.

<br />
Congratulations, you have successfully completed your amplified order! 🤓<br />