---
description: Overview tab
sidebar_position: 3
---


# Overview tab

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/overview_tab.png')} width="70%"/><br /><br />

## Information cards

* **Return**: the average monthly return of your Kandel strategy (or in other word, the growth rate of your wealth). It is calculated by dividing the [profits from the spread](../../../kandel/README.md) and the impermanent loss by the [published liquidity](../../../kandel/how-does-kandel-work/strategy-reserve.md#published-liquidity) for a period of time. It is then averaged out per day for that period, and extrapolated to obtain the monthly average.
    * Return = (profit from spread + impermanent loss) / published liquidity
> 💡
> For the sake of this calculation, the published liquidity is converted entirely to USDC.

* **Unrealized PnL**: potential profit or loss that you would earn if you were to close your strategy right now. It is calculated by comparing the USD value of your average entry price to the current index price. The difference between these two values determines the size and direction of your unrealized gain or loss.

* **Total "token A/B" inventory**: amount of base tokens and quote tokens that must be deposited into the strategy.


## Offers

### Depth chart

The strategy management page showcases a dynamic market depth chart for a specific market on the Mangrove DEX, presenting real-time buy (Bids) and sell (Asks) orders. This visual representation also highlights your strategy's price range and utilizes green, red, and gray dots to denote its offer price grid.

* <font color="#5cd19b">Green range</font>: range for bids
* <font color="#5cd19b">Green dots</font>: active bids
* <font color="#eb525a">Red range</font>: range for asks
* <font color="#eb525a">Red dots</font>: active asks
* <font color="#a7adcd">Grey dots</font>: empty offers


<img src={useBaseUrl('img/assets/kandel_depth_chart.png')} width="70%"/>

### List of active offers

Beneath the chart, you'll find your strategy's orders list, displaying:

* the type (Bid/Ask)
* the estimated price of Token A in Token B
* the base (quantity of Token A offered)
* the quote (quantity of Token B) requested

In the screenshot below, Token A is WETH and Token B is USDC (WETH/USDC market).

<img src={useBaseUrl('img/assets/kandel_offers_list.png')} width="70%"/><br /><br />


👉 **More about <font color="#5cd19b">green</font> / <font color="#eb525a">red</font> / <font color="#a7adcd">grey</font> dots:**

1. If you navigate on a green/red dot, the relevant offer is highlighted on the list. You can check the price at which an offer is posted, as well as the base and quote amounts.

2. You are also able to refill empty offers (grey dots) by hovering over them and selecting "Refill offer".