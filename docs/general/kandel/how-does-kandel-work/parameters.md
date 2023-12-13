---
description: Parameters
sidebar_position: 3
---


# Parameters

This section describes Kandel's parameters. For more contextual information, head over to the [visual explanation](./step-by-step-visual-explanation.md).

Parameters | Description
---|---
Pair | The pair represents the chosen market on which a Kandel strategy is running.<br /><br />*Example: ETH/USDC is a trading pair*
Price range | The price range is needed to run any market-making strategy. It consists of the lowest and highest prices in the price grid at which Kandel instance posts its bids and asks.<br /><br />*Example of a price range:<br />• Lowest price = 1000 USDC per ETH<br />• Highest price = 1500 USDC per ETH*
Current price | The current price of the base token that is used for constructing the price distribution.<br /><br />*Example: the price of ETH is used for the ETH/USDC pair*
Number of price points | The number of price points on which Kandel will deploy its liquidity (bids and asks).
Ratio | The ratio defines the distance between price points which is derived using geometric progression. <br /><br />*Example: <br />• Ratio is `0.01` <br />• Mid price is `1000` <br />• Price point below mid price: `10000.99`<br />• Price point above mid price: `10001.01`<br /><br />*Additionally, the ratio could be derived from price points `PricePoint(i+1) / PricePoint(i) - 1`. *<br />Example: `1010 / 1000 - 1 = 0.01`*
Step size |  It is the distance between an executed bid/ask and its [dual offer](../../../developers/terms/dual-offer.md).<br /><br />Whenever a Kandel ask is taken at a given price point, Kandel uses the amount of quote just received to place a bid at a lower price point. With a step size of 1, it will place the bid at the price point immediately below. With a step size of 2, Kandel will repost two price points below, etc. (Technical aside: if in attempting to repost say 3 steps below Kandel hits the boundaries of its range it will transport as far below as possible). The same applies symmetrically for bids.<br /><br />Using a step size ≥ 2 allows one to publish a more continuous liquidity on the books, regularising the strat’s PnL, while at the same time keeping a reasonable spread between price points. Indeed, what matters to PnL is not the distance between price points, but how far money moves along the price grid each time an offer is taken. 
Initial inventory | The initial inventory is the amount of base tokens and quote tokens that must be deposited into the strategy. The minimum to be deposited into the strategy depends on the selected price range and [density](../../../developers/terms/density.md) of the selected market.<br /><br /> *Example on the ETH/USDC pair:<br />• Base token is ETH<br />• Quote token is USDC*
[Bounty](../../../developers/terms/bounty.md) | It is the required amount of native tokens to be deposited into the strategy. A [provision](../../../developers/terms/provision.md) is required to post an offer, in order to pay a potential [bounty](../../../developers/terms/bounty.md). The bounty is only a subset, smaller in value than the provision.<br /><br />The provision covers the whole price grid, hence:<br />• *Kandel provision = Provision per offer x Number of price points x 2*<br />• Note: we add a "x2" factor since each price point could be both an ask and a bid.<br /><br />*Example: if the selected pair is on the Polygon network, the bounty would be an amount of MATIC tokens.*
Compounding rate | The compounding rate is the percentage of the spread to be reinvested into the strategy.<br />It can be set between 0% and 100% (SDK users only).