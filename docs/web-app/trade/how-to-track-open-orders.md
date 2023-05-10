---
description: How to track open orders/fills
sidebar_position: 5
---


# How to track open orders/fills

Once you've created an order, it will appear in the "Open orders" tab at the bottom of the page.
As soon as your order is successfully executed, it will be moved to the "Fills" tab.

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/open-orders.png')} width="100%"/><br /><br />

## Open orders/Fills are market-specific

The "Open orders" and "Fills" tabs are market-specific. You will only see transactions for a specific market. If you change the selected market, other transactions will be displayed (or none, if you haven't executed any yet).

## Your order is partially filled

<img src={useBaseUrl('img/assets/partial-fill.png')} width="300px"/><br /><br />

If a "[Good 'til time](./how-to-limit-order.md#steps)" limit order is partially filled, a green message will display the transaction details, and the remainder will be reposted automatically.

## Your order hasn't been filled

<img src={useBaseUrl('img/assets/order-not-filled.png')} width="300px"/><br /><br />

In the case your order isn't filled, an orange message will be displayed, and and shows a "0" line item in the "Fills" tab (for the currently selected market).

### Market order
If you see "0" in the "Fills" tab for your Market order, it means that it could not be filled. The reason might be that the price asked/offered was inconsistent with the market price at the time.

### Limit order
If you see "0" in the "Fills" tab for your "Good til time" Limit order, it means that it could not be filled at the time of the placement of the order. In case your order is fully or partially filled until the time of expiration, the corresponding amount (0 in this case) would be updated with the filled amount.

## Your order has an error

<img src={useBaseUrl('img/assets/order-error.png')} width="300px"/><br /><br />

This message could appear if there are issues with the blockchain, or gas problems.