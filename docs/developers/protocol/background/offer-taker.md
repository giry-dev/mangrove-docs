---
description: How to tap into Mangrove's liquidity
sidebar_position: 1
---

# Taking available liquidity

Offers on Mangrove can be taken with a market order.

A market order consumes the offers starting from the best price, making sure that the limit price set by the taker is always satisfied.

import useBaseUrl from '@docusaurus/useBaseUrl';

<div class="text--center">
<img src={useBaseUrl('/img/assets/takerOrder1.png')} width="50%"/>
</div>


### Taking offers

The way to consume liquidity on Mangrove is through a market order, a configurable type of order that executes offers from best to worst. The [Market order](../technical-references/market-order/README.md) section details how market orders work.

### Cleaning offers

Offers on Mangrove can fail. Liquidity-taking functions can also be used to trigger failing offers and take them out of Mangrove - it is called [cleaning offers](../technical-references/offer-cleaning.md).

### Delegation

An allowance mechanism lets you separate the address that provides the funds and the address that originates the buy/sell transactions. The [Delegation](../technical-references/market-order/delegate-takers.md) section details how to let other addresses use your funds.
