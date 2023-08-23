---
description: How to track open and past orders
sidebar_position: 6
---


# How to track open and past orders


Once you've created a Market or Limit order, tracking entries will start appearing in the "Open orders" and "History" tabs at the bottom of the page. Here is what you can expect, based on the order type you execute.

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/open-orders.png')} width="100%"/><br />

### Market order

The "History" tab will list the result of a market order when it is included on chain.

### Limit order

A limit order consists of two parts:

* "Immediate execution" part (equivalent to a market order): we execute as much of the order as we can immediately. This may result in a zero, partial, or complete fill. This fill will be listed in the "History" tab.

* Resting order: We post an offer on the book with the part of the order that was not filled by the immediate execution. Any time the offer is taken, an entry is added to the "History" tab.


> 💡
> For example, if your Good 'til time limit order could not be immediately filled (fully or partially), an entry in "Open order" will show up, as well as an empty line (set at "0") in the "History" tab.


## Open and past orders are market-specific

The "Open orders" and "History" tabs are market-specific. You will only see transactions for a specific market. If you change the selected market, other transactions will be displayed (or none, if you haven't executed any yet).

## Your order is partially filled

<img src={useBaseUrl('img/assets/partial-fill.png')} width="300px"/><br /><br />


If a "[Good 'til time](./how-to-limit-order.md#steps)" limit order is partially filled, a green message will display the transaction details, and the remainder will be reposted automatically.

## Your order hasn't been filled

<img src={useBaseUrl('img/assets/order-not-filled.png')} width="300px"/><br /><br />


In case your order isn't filled, an orange message will be displayed, and and shows a "0" line item in the "History" tab (for the currently selected market).

* **Market order**: if you see "0" in the "History" tab for your Market order, it means that it could not be filled. The reason might be that the price asked/offered was inconsistent with the market price at the time.

* **Limit order**: if you see "0" in the "History" tab for your "Good til time" Limit order, it means that it could not be filled at the time of the placement of the order. In case your order is fully or partially filled until the time of expiration, a "Not Filled" entry is added to the "History" table to reflection how much of your oder has been taken/remains.

<img src={useBaseUrl('img/assets/limit-order-not-filled.png')} width="100%"/><br /><br />

## Your order has an error

<img src={useBaseUrl('img/assets/order-error.png')} width="300px"/><br /><br />


This message could appear if there are issues with the blockchain, or gas problems.

## Unable to return your data

In some rare busy cases, due to excessive demand, the UI might temporarily not be able to fetch your data. Rest assured, it would only be for a short while.

<img src={useBaseUrl('img/assets/history-excessive-demand.png')} width="100%"/>