---
description: How to track Open orders/Fills
sidebar_position: 5
---


# How to track Open orders/Fills


Once you've created a Market or Limit order, tracking entries will start appearing in the "Open orders" and "Fills" tabs at the bottom of the page. Here is what you can expect, based on the order type you execute.

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/open-orders.png')} width="100%"/><br /><br />

### Market order

The "Fills" table will list the result of the market order when it is included on chain.

### Limit order

Aa limit order consists of two parts:

* "Immediate execution" part (equivalent to a market order): we execute as much of the order as we can immediately. This may result in a zero, partial, or complete fill. This fill will be listed in the "Fills" table.

* Resting order: We post an offer on the book with the part of the order that was not filled by the immediate execution. Any time the offer is taken, a fill is added to the "Fills" table.


> 💡
> For example, if your Good 'til time limit order could not be immediately filled (fully or partially), an entry in "Open order" will show up, as well as an empty line (set at "0") in the "Fills" table.


## Open orders/Fills are market-specific

The "Open orders" and "Fills" tabs are market-specific. You will only see transactions for a specific market. If you change the selected market, other transactions will be displayed (or none, if you haven't executed any yet).

## Your order is partially filled

<img src={useBaseUrl('img/assets/partial-fill.png')} width="300px"/><br /><br />

If a "[Good 'til time](./how-to-limit-order.md#steps)" limit order is partially filled, a green message will display the transaction details, and the remainder will be reposted automatically.

## Your order hasn't been filled

<img src={useBaseUrl('img/assets/order-not-filled.png')} width="300px"/><br /><br />

In case your order isn't filled, an orange message will be displayed, and and shows a "0" line item in the "Fills" tab (for the currently selected market).

* **Market order**: if you see "0" in the "Fills" tab for your Market order, it means that it could not be filled. The reason might be that the price asked/offered was inconsistent with the market price at the time.

* **Limit order**: if you see "0" in the "Fills" tab for your "Good til time" Limit order, it means that it could not be filled at the time of the placement of the order. In case your order is fully or partially filled until the time of expiration, a fill is added to the "Fills" table to reflection how much of your oder has been taken/remains.

## Your order has an error

<img src={useBaseUrl('img/assets/order-error.png')} width="300px"/><br /><br />

This message could appear if there are issues with the blockchain, or gas problems.