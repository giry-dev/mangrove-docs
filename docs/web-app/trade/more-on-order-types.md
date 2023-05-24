---
description: More on orders types
sidebar_position: 6
---


# More on  orders types

This section details the differences between the different order types available on Mangrove:

* [Market order](./more-on-order-types.md#market-order)
* [Immediate or Cancel (IOC)](./more-on-order-types.md#immediate-or-cancel-ioc)
* [Good 'til time (GTT)](./more-on-order-types.md#good-til-time-gtt)
* [Fill or kill (FOK)](./more-on-order-types.md#fill-or-kill-fok)


## Market order

A market order is an order type used to buy or sell at the current market price.
* It is executed immediately, prioritizing speed over the specified price.
* The execution price of a market order may vary due to market fluctuations and order book liquidity.
* Unlike limit orders, market orders do not have a specific price parameter and **are subject to slippage**, where the executed price may differ from the expected price.

:::info Example
You place an market order to buy 1 WETH. Slippage will have an impact.
Your order could either:
* Be executed at 1,800 USDC
* Be executed at 1,850 USDC
* Be executed in several fills, depending on the liquidity available on the offer at the top of the order book (ex: 0.5 WETH at 1,800 + 0.5 WETH at 1,900 USDC)
:::


## Immediate or Cancel (IOC)
While it may seem similar to a market order, there is a fundamental difference.

* With an IOC order, you set a specific limit price at which you want the order to be executed.
* The order will either be immediately filled at that exact price, fully or partially, or canceled entirely. It's about ensuring that your order is executed at your desired price, or not executed at all.
* The IOC order **does not allow for slippage**, meaning it won't be filled at a different price than what you specified (unlike a market order).

:::info Example
You place an IOC order to buy 1 WETH at a max price limit of 1,800 USDC.
Your order could either:
* Be fully taken immediately, i.e. you get your 1 WETH at the desired price
* Be partially taken immediately, i.e. you get 0.8 WETH at the desired price, and the rest is "canceled" (there is no resting order asking for the remainder)
* Be canceled if there is no match on the order book
:::

## Good 'til time (GTT)

It allows you to set an expiry date for your limit order (ex: active for 3 days, then canceled if not filled).
A GTT order that was created, but that has not yet been filled will always show as "Filled" in the UI - it is a normal behavior.<br />

Let us explain:

* When placing a GTT order, Mangrove will try to fill it entirely at the desired price.

* Instant order: that is the first execution of the order. If it is a match and the fill is in full, it will be recorded in the UI.

* Resting order: if it can't be matched just yet, a fill at quantity "0" will be recorded in the UI for the instant order, and a resting order will be created.
    * That allows you to track in the UI that the order was successfully executed, even if no actual quantity was **yet** bought or sold.
    * It is crucial - without this, there would be no visual trace of what happened to the order you just placed (if not taken). 
    * Your resting order is then waiting to be filled. There could potentially be multiple fills for that same order. Typically, there will be one fill for the initial order (0 or any other amount taken), and  additional fills up until the resting order is fully taken.

* It ensures that even if there are partial fills or subsequent trades on the resting order, each execution is recorded separately.

:::info Example
You place an GTT order to buy 1 WETH at a max price limit of 1,800 USDC, with a time limit of 3 days.
Your order could either:
* Be fully taken immediately, i.e. you get your 1 WETH at the desired price. A fill of the transaction will be recorded in the UI.
* Not be taken immediately. A fill at quantity "0" will be recorded in the UI, and your order becomes "resting", waiting to be taken, either fully or partially. Each transaction will log a new fill until the order is fully taken.
* Be canceled if there is no match on the order book at the end of the set period.
:::

## Fill or Kill (FOK)

The KOF order is an "all or nothing" an instant order.
It is similar to the [IOC order](./more-on-order-types.md#immediate-or-cancel-ioc) in the sense that it executes immediately, but it does not allow for partial filling.


:::info Example
You place an FOK order to buy 1 WETH at a max price limit of 1,800 USDC.
Your order could either:
* Be fully taken immediately, i.e. you get your 1 WETH at the desired price
* Be canceled if there is no match on the order book
:::