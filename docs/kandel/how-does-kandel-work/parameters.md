---
description: Parameters
sidebar_position: 3
---


# Parameters

:::info
Kandel strategy is coming soon!
:::

This section describes Kandel's parameters. For more contextual information, head over to the [visual explanation](./step-by-step-visual-explanation.md).

Parameters | Description
---|---
Pair | The pair represents the chosen market on which a Kandel strategy is running.<br /><br />*Example: ETH/USDC is a trading pair*
Price range | The price range is needed to run any market-making strategy. It consists of the lowest and highest prices in the price grid at which Kandel instance posts its bids and asks.<br /><br />*Example of a price range:<br />• Lowest price = 1000 USDC per ETH<br />• Highest price = 1500 USDC per ETH*
Initial inventory | The initial inventory is the amount of base tokens and quote tokens that must be deposited into the strategy. The minimum to be deposited into the strategy depends on the selected price range and [density](../../terms/density.md) of the selected market.<br /><br /> *Example on the ETH/USDC pair:<br />• Base token is ETH<br />• Quote token is USDC*
Current price | The current price of the base token that is used for constructing the price distribution.<br /><br />*Example: the price of ETH is used for the ETH/USDC pair*
Price distribution | It is a distribution of price levels/grid points within a selected price range. Kandel starts from the *Min price*, all the way up to the *Max price*. It is calculated using geometric progression and a key metric called "ratio": <br /><br />*Price at index i = Min_price x Ratio ^ i*
Volume distribution | It defines how liquidity is spread throughout the price grid (previously defined as the price distribution in the [visual step-by-step](./step-by-step-visual-explanation))
Step size | It is the distance between an executed bid/ask and its dual offer. In the case of an offer is taken at price p :<br />• Lowest price = 1000 USDC per ETH<br />• Highest price = 1500 USDC per ETH<br /><br />*Example: if step size=1, it means that if a bid is taken at an index i, the ask ([dual offer](../../terms/dual-offer.md)) is posted at an index i+1*
[Provision](../../terms/provision.md) | It is the required amount of native tokens to be deposited into the strategy. A [provision](../../terms/provision.md) is required to post an offer on Mangrove; native tokens are used to cover failing offers.<br /><br />It covers the whole price grid, hence:<br />• *Kandel provision = Provision per offer x Number of price points x 2*<br />• Note: we add a "x2" factor since each price point could be both an ask and a bid.<br /><br />*Example: if the selected pair is on the Polygon network, the native token provision would be an amount of MATIC tokens.*
Compounding rate | Compounding rate is the percentage of the spread to be reinvested into the strategy.<br />More information on compounding [in the next section](./compounding).