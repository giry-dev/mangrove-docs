---
description: Taker's fee
sidebar_position: 4
---

# Taker's fee

When a trade occur on Mangrove, a small fee is charged to the Taker taking an offer:
* It is a percentage of the tokens the Taker is about to receive
* Different trading pair have different fees (it usually depends on the market's volatily)
* The fee will be displayed before you [Confirm buy](./how-to-market-order.md#steps) when placing a Market or Limit order

## Current markets and fees

Market | Fee
---|---
USDC/USDT | 0%
WETH/USDC | 0.05%

:::info Example
* Taker buys 2 WETH at a unit price of 1100 USDC/WETH
* Fee: 5bps = 0.05%
* Fee to be paid: 2 WETH * 0.05% = 0.001 WETH
* Taker receives 2 WETH minus paid fee = 1.999 WETH
:::

Here is what it looks like on [Mangrove app](http://app.mangrove.exchange):

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/protofol-fee.png')} width="300px"/><br />

## Fees for GTT resting limit orders

There is a special case scenario for resting limit orders (when using [GTT](./more-on-order-types.md#good-til-time-gtt)): Takers only pays a fee for the immediately executed part of the order, not on the resting one.



