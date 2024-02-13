---
description: How to place an amplified order
sidebar_position: 7
---

# How to place an amplified order

import useBaseUrl from '@docusaurus/useBaseUrl';

## What is an amplified order?

Leveraging Mangrove's core principle of unlocked liquidity, you can place a special limit order on the book with a promise to deliver when your offer is taken, and use the same funds on other markets.
When (and only when) your offer is taken, the funds will be sourced from your wallet and the transaction will be executed, retracting the offers on the other markets.

For example on a WMATIC/USDT pair, you can promise 1,000 USDT against some WMATIC, and promise that same amount on WETH/USDT, USDC/USDT, etc. You can do so on every market made of the same inbound currency (USDT in our example).

Here is a diagram generalizing this concept:

<img src={useBaseUrl('img/assets/amplified_order.png')} width="100%"/>

## Steps

1. At the top left of the menu, choose "Amplified" and either "Buy" or "Sell".

<img src={useBaseUrl('img/assets/choose_amplified.png')} width="300px"/><br /><br />

2. Select a token pair.

<img src={useBaseUrl('img/assets/amplified_select_token.png')} width="300px"/><br /><br />

3. Select where you would like your funds to be fetched from. For now, only the "Wallet" option is available.

4. Select the token and the amount you want to amplify.

<img src={useBaseUrl('img/assets/amplified_sourcing_amount.png')} width="300px"/><br /><br />

5. Select which assets (i.e. on wHich markets) you'd like to post your amplified order for. You can click "Add market" below to add more if you wish.

[TO CONTINUE FROM HERE]

6. Choose a limit average price for each target asset of your amplified order.
    * For an amplified buy order, this is the highest price you are willing to pay for the tokens, and the order will only execute if the market price is at or below your specified limit.
    * For an amplified sell order, this is the lowest price you are willing to accept for the tokens, and the order will only execute if the market price is at or above your specified limit.

7. In the "Advanced" section, you can choose from 3 types of limit orders.
    * **Immediate or Cancel (IOC)**: Your order attempts to execute immediately at the desired price. If successful, it's executed; if not, it's canceled.
    * **Good 'til time (GTT)**: Set an expiration date for your order (ex: active for 3 days, then canceled).
    * [**Fill or Kill (FOK)**](../../../developers/SDK/guides/fill-or-kill.md): Your order is either executed fully or not executed at all (ex: you place an order for 1 ETH at $9,500; if only 0.8 ETH can be filled, it's canceled; if fully filled, it's executed).

<img src={useBaseUrl('img/assets/limit_order_advanced.png')} width="350px"/><br /><br />

:::info Note
If a "Good 'til time" limit order is [partially filled](./how-to-track-open-orders.md#order-is-partially-filled), a green message will display the transaction details, and the remainder will be reposted automatically.
:::

:::info Important
Due to the [density](../../../developers/terms/density.md) on each market, there is a minimum token requirement when placing limit/amplified orders (except for [IOC orders](./more-on-order-types.md#immediate-or-cancel-ioc)). You can read more about why your transactions might be failing in the [FAQ](../../FAQ/README.md#why-do-my-transactions-keep-failing).

Market | Minimum volume
---|---
USDC/USDT | 21 USDC / 21 USDT
WETH/USDC | 0.010 WETH / 18 USDC
:::

6. Click on "Buy" or "Sell" button (depending on your earlier choice). A card will appear, click on "Proceed" then "Approve", and confirm the transaction on your wallet. More information on approval in [this previous section](./approve-buy.md).

7. The pop-up updates itself - click "Proceed" to finalize your order (it will open Metamask once again).

8. Confirm the transaction on your wallet.

9. A confirmation pop-up will appear, along with a notification card below that will tell you when your order has been filled.

<br />
Congratulations, you have successfully completed your limit order! 🤓<br />