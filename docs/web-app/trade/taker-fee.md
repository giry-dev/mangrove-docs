---
description: Taker's fee
sidebar_position: 4
---


# Taker's fee

When a trade occur on Mangrove, a small fee is charged to the Taker taking an offer:
* It is a percentage of the total amount about to be traded
* Different trading pair have different fees (it usually depends on the market's volatily)
* The fee will be displayed before you [Confirm buy](./how-to-market-order.md#steps) when placing a Market or Limit order

Here is an example of what it looks like:

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/protofol-fee.png')} width="300px"/><br /><br />

# Fees for GTT resting limit orders

There is a special case scenario for resting limit orders (when using [GTT](./more-on-order-types.md#good-til-time-gtt)): Takers only pays a fee for the immediately executed part of the order, not on the resting one.



