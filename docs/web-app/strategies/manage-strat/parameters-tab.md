---
description: Parameters tab
sidebar_position: 4
---


# Parameters tab

**[Strategies page is coming soon]**

Your strategy can have one of three statuses: active, inactive, or closed. Depending on the status, alerts may be displayed for your price range or gas.


## Information cards

You can find descriptions of these in the [Overview tab](./overview-tab.md#information-cards).

* Return
* Unrealized PnL
* Total inventory


## Price range

Similarly to when you created your strategy, you can edit your price range by either dragging the limits on the market depth chart or using the percentage inputs. The market depth chart displayed on the strategy page allows you to see the real-time buy (Bids) and sell (Asks) offers on the Mangrove DEX for a given market.


## Unallocated inventory

This is the amount of quote and base token (of your chosen trading pair) deposited into your Kandel strategy, and are not published on the selected market. These funds consist of your deposits, profits from the spread and funds of offers that [failed to repost](../../../kandel/how-does-kandel-work/more-on-failing-offers.md). The [unallocated liquidity](../../../kandel/how-does-kandel-work/strategy-reserve.md#unallocated-liquidity) can be withdrawn or re-invested into the strategy.

You can perform the following actions:

* **Deposit**: you can deposit additional inventory 

* **Withdraw**: you can transfer out a chosen amount of unallocated funds to your wallet

* **Publish**: a chosen amount of unallocated funds can be sent to the "Published inventory", to be actively used by your Kandel strategy


## Published inventory

This is the amount of quote and base token (of your chosen trading pair) used by Kandel and published as active offers (i.e. bids and asks).

You can perform the following actions:

* **Un-publish**: you can move funds from active offers out to your "Unallocated inventory"

* [**Close strategy**](../key-actions-questions/how-to-close-strat.md): you can manually stop and close off your Kandel strategy


## Bounty

Use the "Add bounty" button to top up the amount of [bounty](../../../terms/bounty) you leave available to your Kandel strategy.
The bounty is a provision (in the network's native token) sent to the taker to compensate for a [failure to deliver](../../../kandel/how-does-kandel-work/more-on-failing-offers.md). It is a requirement for all offers published on Mangrove markets.