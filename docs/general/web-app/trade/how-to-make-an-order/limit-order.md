---
description: Limit Order
sidebar_position: 2
---

# Limit Order

import useBaseUrl from '@docusaurus/useBaseUrl';


:::caution
On Mangrove, Limit Orders have a requirement of a minimum amount per order which depends on the market. This requirement ensures that the gas cost of consuming the offers is not too high. You can find minimum amount required per order in the market details on the dApp or read about the [exact values here](#minimum-volume)
:::

## Steps

1. At the top left of the menu, choose "Limit" and either "Buy" or "Sell".

<img src={useBaseUrl('img/assets/choose_limit_order.png')} width="350px"/><br /><br />

2. Select the token pair you want to trade.

<img src={useBaseUrl('img/assets/select_pair_limit_order.png')} width="350px"/><br /><br />

3. Type in the amount of tokens you want to buy/sell.

4. Choose a limit average price for your limit order. You can also click the entries on the book (to the right) to automatically populate the corresponding limit price.
    * For a limit buy order, this is the highest price you are willing to pay for the tokens, and the order will only execute if the market price is at or below your specified limit.
    * For a limit sell order, this is the lowest price you are willing to accept for the tokens, and the order will only execute if the market price is at or above your specified limit.

<img src={useBaseUrl('img/assets/set_limit_price.png')} width="500px"/><br /><br />

5. In the "Advanced" section, you can choose from 3 types of limit orders.
    * **Immediate or Cancel (IOC)**: Your order attempts to execute immediately at the desired price. If successful, it's executed; if not, it's canceled.
    * **Good 'til time (GTT)**: Set an expiration date for your order (ex: active for 3 days, then canceled).
    * [**Fill or Kill (FOK)**](../../../../developers/SDK/guides/fill-or-kill.md): Your order is either executed fully or not executed at all (ex: you place an order for 1 ETH at $9,500; if only 0.8 ETH can be filled, it's canceled; if fully filled, it's executed).

<img src={useBaseUrl('img/assets/limit_order_advanced.png')} width="350px"/><br /><br />

:::info Note
If a "Good 'til time" limit order is [partially filled](../how-to-track-open-orders.md#order-is-partially-filled), a green message will display the transaction details, and the remainder will be reposted automatically.
:::


6. In the "Advanced" area, you can also select where you'd like to source your liquidity from. You can use liquidity your liquidity sitting on other protocols and post limit orders with it. When your offer is matched, the funds will be sourced from your "Send from" selection. Post trade execution, the received assets are moved to your chosen "Receive to" location.

<img src={useBaseUrl('img/assets/limit_order_sourcing.png')} width="300px"/><br /><br />

7. Click on "Buy" or "Sell" button (depending on your earlier choice). A card will appear, click on "Proceed" then "Approve", and confirm the transaction on your wallet. More information on approval in [this previous section](../approve-buy.md).

8. The pop-up updates itself - click "Proceed" to finalize your order (it will open your wallet once again).

9. Confirm the transaction on your wallet.

10. A confirmation pop-up will appear, along with a notification card below that will tell you when your order has been filled.

<br />
Congratulations, you have successfully completed your limit order! 🤓<br />
