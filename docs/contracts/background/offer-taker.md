---
description: How to tap into Mangrove's liquidity
sidebar_position: 2
---

# Taking available liquidity

Offers on Mangrove can be taken [in three ways](./offer-taker.md#taking-offers):

* With a market order
* By sniping individual offers
* With a [limit order](../../strat-lib/technical-references/code/strategies/MangroveOrder)

:::info Note
A limit order on Mangrove can be executed using [MangroveOrder](../../strat-lib/technical-references/code/strategies/MangroveOrder). It is part of the [Strat library](../../strat-lib/README.md).
:::

## Market order

A market order consumes the offers starting from the best price, making sure that the limit price set by the taker is always satisfied.

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/takerOrder1.png')} width="450px"/><br /><br />


## Offer sniping

A taker may snipe a custom set of offers, targeting those that have the lowest required gas for instance.

<img src={useBaseUrl('img/assets/takerOrder2.png')} width="450px"/><br /><br />


## More information on taking offers

The [Taking offers](../technical-references/taking-and-making-offers/taker-order/README.md) section details how market orders work, and covers [offer sniping](../technical-references/taking-and-making-offers/taker-order/#offer-sniping) as well, wherein one can target individual offers.

## Cleaning offers

Offers on Mangrove can fail. Liquidity-taking functions can also be used to trigger failing offers and take them out of Mangrove.

> 💡
> The [Cleaning offers](../../keeper-bots/guides/use-mgvcleaner-to-clean-offers.md) section details how to safely trigger failing offers and make a profit doing so.

## Delegation

An allowance mechanism lets you separate the address that provides the funds and the address that originates the buy/sell transactions.

> 💡
> The [Delegation](../technical-references/taking-and-making-offers/taker-order/delegate-takers.md) section details how to let other addresses use your funds.
