---
description: How to place a limit order
sidebar_position: 4
---

# How to place a limit order

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/limit-order.gif')} width="100%"/><br /><br />


## Steps

1. Choose whether to "Buy" or "Sell" and click on the Limit button.

2. Select the token pair you want to trade.

3. Type in the amount of tokens you want to buy/sell. The amount to be sent will automatically appear.

4. Choose a limit average price for your limit order. 
    * For a limit buy order, this is the highest price you are willing to pay for the tokens, and the order will only execute if the market price is at or below your specified limit.
    * For a limit sell order, this is the lowest price you are willing to accept for the tokens, and the order will only execute if the market price is at or above your specified limit.

5. Choose from 3 types of limit orders:
    * **Immediate or Cancel**: Your order attempts to execute immediately at the desired price. If successful, it's executed; if not, it's canceled.
    * **Good 'til time**: Set an expiration date for your order (ex: active for 3 days, then canceled).
    * [**Fill or kill**](../../SDK/guides/fill-or-kill.md): Your order is either executed fully or not executed at all (ex: you place an order for 1 ETH at $9,500; if only 0.8 ETH can be filled, it's canceled; if fully filled, it's executed).

> 💡
> If a "Good 'til time" limit order is [partially filled](./how-to-track-open-orders.md#order-is-partially-filled), a green message will display the transactino details, and the remainder will be reposted automatically.

6. Click on "Approve and buy/sell". A card will appear, click on "Allow 'token'" and confirm the transaction on your wallet.

7. Click "Done" to close the pop-up.

8. Another card appears: verify the information, click on "Confirm buy/sell" and confirm the transaction on your wallet.

9. Click on "Done".

10. Wait for the green notification card to appear, stating that your order has been filled.

<br />
Congratulations, you have successfully completed your limit order! 🤓<br />