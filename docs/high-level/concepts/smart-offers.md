---
description: Smart offers
sidebar_position: 1
---


# Smart offers

The main difference between Mangrove and other DEXs is the ability to attach code to offers (check out [Smart Offers](../../terms/smart-offer.md) for more information).
This translates into several disruptive mechanisms:

* **Reactive liquidity**⚡<br />
    The liquidity on offer on Mangrove **is not locked in a pool**. As long as an offer posted on Mangrove is not taken, it can generate yield elsewhere on the chain - Aave, Compound or Morpho are great examples of protocols where you could leave your liquidity to grow, waiting to be sourced.

* **Last look** 🛡️<br />
    Since an offer contains code, **defensive mechanisms can be baked in** to cancel a promise previously made:
    * For instance, if the market conditions are not anymore satisfactory at the time the offer is taken VS when it was posted
    * Code can cover any unwanted case scenarios (ex: high volatility), and therefore can mitigate/solve problems of [slippage and arbitrage] (LINKS)
    * Code helps make zero-latency trading decisions, with as much information as available on-chain at the time the trade occurs

* **Persistence** 🔁<br />
    Through the executed code, the **offer can automatically repost itself** on the order book. For someone who is posting offers (we call them [Makers](./makers-takers-keepers/makers.md), or Market Makers), this is very handy because they can immediately update the amount of tokens they are offering after some of it has been taken. People that take offers are called [Takers](./makers-takers-keepers/takers.md).

import useBaseUrl from '@docusaurus/useBaseUrl';

## Visual overview of Mangrove key mechanisms

<img src={useBaseUrl('img/assets/overview-smart-offer.png')} width="100%"/>