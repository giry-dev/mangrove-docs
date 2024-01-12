---
title: General
sidebar_position: 0
---

# Overview

<div class="text--justify">

Mangrove is an on-chain order book DEX that allows liquidity providers to post arbitrary smart contracts as offers.

</div>


import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/home_page.png')} width="100%"/>

## Total control over your offers

<div class="text--justify">

Mangrove's order book-based DEX [lists promises instead of locked commitments](./general/high-level/concepts/makers-takers-keepers/README.md). Liquidity can be shared, borrowed, lent somewhere and at the same time displayed on Mangrove, ready to be sourced when (and only when) an offer is taken.

</div>


## Smart offers

<div class="text--justify">

Smart contracts [can be attached to offers](./general/high-level/concepts/smart-offers.md), which gives the Maker total freedom in setting his sourcing trade parameters.

</div>

#### Powerful applications of smart offers

<div class="text--justify">

* [**Reactive liquidity:**](./developers/terms/reactive-liquidity.md) liquidity on offer is not locked on the Mangrove order book. As long as an offer posted on Mangrove is not taken, it can generate yield elsewhere on the chain.

* [**Last look:**](./developers/terms/last-look.md) smart offers allow you to code defensive mechanisms that adjust for market condition changes between offer posting and execution.

* [**Bounty:**](./general/high-level/concepts/bounty.md) every single failed offer is compensated with a bounty; Keeper bots can make money, and Takers don't lose any.

* **<font color="#47d77d">Permissionless:</font>** everyone can interact with the core protocol without having to ask permission nor risking to be censored.

* **<font color="#47d77d">Non-custodial:</font>** Mangrove users retain full control over their funds - the exchange does not hold custody of their assets.

</div>

<div>
<a class="button button--primary" href="../developers/strat-lib/getting-started/smart-offer">Post a smart offer</a>
</div>

## Deploy your own composable strategy

<div class="text--justify">

Mangrove enables liquidity providers to incorporate defensive code, post unprovisioned offers, and redisplay liquidity after their offers are taken.
</div>


#### Full control over your strategy parameters

<div class="text--justify">

* [**Amplified liquidity:**](./developers/terms/amplified-liquidity.md) optimize your trading potential by leveraging your liquidity across multiple pairs. For instance, you can create offers on WETH/USDC, WMATIC/USDC and WBTC/USDC pairs with an equal amount of USDC liquidity.

* [**Multi-liquidity sourcing:**](./developers/terms/reactive-liquidity.md) your smart offer on Mangrove can take advantage of liquidity sourcing from other sources and offering it to the taker, allowing for profitable arbitrage opportunities.

* [**Run AMMs strategies:**](./developers/strat-lib/README.md) provide liquidity on Mangrove’s order book in order to maximize your liquidity potential.

</div>

<div>
<a class="button button--primary" href="./developers/strat-lib">Create your strategy</a>
</div>

## Kandel strategy

<div class="text--justify">


[Kandel](./general/kandel/README.md) is an on-chain Automated Market Making strategy that focuses on order flow rather than price. It automatically posts Bids and Asks within your chosen market and price range to buy low and sell high, making a profit through the spread.

</div>

#### Features

<div class="text--justify">

* **<font color="#47d77d">On-chain market making bot</font>** Kandel is a market-making bot equivalent that operates solely on the blockchain. Unlike off-chain market making bots that experience delays, Kandel uses on-chain order flow to repost offers instantly, without any latency.

* **<font color="#47d77d">Profit from the spread:</font>** Kandel follows your configuration parameters to populate Bids and Asks offers. When those are taken, the profits are generated from the difference between the two, known as the spread.”

* **<font color="#47d77d">Compounding:</font>** you have the opportunity to accumulate profits generated from spreads and reinvest them back into your offers, a process commonly known as compounding.

* **<font color="#47d77d">Price range:</font>** since Kandel is an automated market-making strategy, the price range needs to be set. It consists of the lowest and highest prices in the price grid at which the market maker is willing to post its bids and asks on Mangrove DEX.

* **<font color="#47d77d">Earn extra yield on AAVE:</font>** since the liquidity on offer is not locked on the Mangrove order book, it can generate yield elsewhere on the chain. With Kandel, when an offer is taken, your liquidity can be sourced and redeposited on AAVE.

</div>

<div>
<a class="button button--primary" href="./general/kandel">Deploy your Kandel</a>
</div>

## Mangrove is a secure protocol

<div class="text--justify">

Mangrove is an open-source protocol that has been rigorously [audited](./general/audits.md) by the highly reputable and expert firm, ChainSec, ensuring the utmost security and reliability.

</div>
