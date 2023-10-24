---
title: FAQ
description: Frequently Asked Questions
sidebar_position: 2
---

# FAQ

<details><summary>

### Where can I get Mangrove’s addresses?
</summary>

The deployment addresses for the core contract for Mangrove, as well as the most important periphery contracts are available at [Contracts → Deployment Addresses](../../developers/contracts/technical-references/contract-addresses.md).
</details>


<details><summary>

### Who pays the fees on Mangrove?
</summary>
Fees on Mangrove are paid by the taker: The fee is taken from the tokens that the taker has bought.

Read more about fees [here](../web-app/trade/taker-fee.md), and also [here](../../developers/contracts/technical-references/governance-parameters/local-variables.md#taker-fees)
</details>


<details><summary>

### Why do my transactions keep failing?
</summary>

Here are a few reasons as to why your transactions are failing on Mangrove exchange:
* The amount of gas or slippage you selected is too low - we encourage you to tweak those values and find out what works best for your trades.
* The [density](../../developers/terms/density.md) for your Limit order is too low - if you're trying to place a Limit order with a small amount, your order will fail and will not be executed. Mangrove requires that you provide a token amount greater than the amount of gas the triggered offer requires to be executed (called density).
    * You can check the minimum volume required to post an offer/Limit order [here](../web-app/trade/taker-fee.md).

💡 Note: if you still want to place a limit order with a small amount (ex: 10 USDC), you can avoid the density check by using [IOC (Immediate Or Cancel)](../web-app/trade/more-on-order-types.md#immediate-or-cancel-ioc) orders. 

</details>

<details><summary>

### The approval amount for my limit orders seems odd - what is going on?

</summary>

**TL;DR**
* A rule of thumb for limit orders to avoid order failure due to lack of approval is to make sure you approve at least double the amount you target (or infinite approval).
* The easy way to do this is to use the "Use default" option on Metamask when executing an approval.


**Let's now clarify the difference between the "Max" and "Use default" approval values offered by Metamask.**
* "Max" will give you the maximum amount available in your wallet.

* If you have ticked the "allow infinite approval" on Mangrove app, "Use default" will give you an "infinite approval" amount.

* If you have unticked the "allow infinite approval" on Mangrove app, "Use default" will give you the maximum amount available in your wallet based on what you've keyed in. That amount differs **whether you are executing a market order or a limit order**.

**Example (no infinite approval)**

* Market order: if you want to buy some WMATIC with let's say 20 USDT, "Use default" will set the approval amount at _20 + slippage_. For a 2% slippage, the amount to approve would be 20.4 USDT.

* Limit order: if you want to buy some WMATIC for 20 USDT of worth with a limit order (ex: Good til time), "Use default" will set the approval amount at _40 (20 * 2)_.
    * If you have multiple open limit orders for the same token, the approvals then need to compound.
    * Example: if you create another Good til time limit order for 20 USDT of worth, the approval amount will be 40 (previous limit order) + 40 (new limit order) = 80 USDT.

</details>


<details><summary>

### Where is my transaction history?
</summary>

Which order type are you trying to execute?
There are subtle differences between the various limit orders available on our Trade page. They might appear/be processed differently. We encourage you to first read the [More on order types](../web-app/trade/more-on-order-types.md) section.
</details>


<details><summary>

### Who pays the gas on Mangrove?
</summary>

If the offer succeeds, the gas costs for the [execution of the trade](../../developers/contracts/technical-references/taking-and-making-offers/reactive-offer/executing-offers.md) are paid by the offer taker. If the offer fails the taker is compensated for these gas costs - see [What happens when an offer fails?](#what-happens-when-an-offer-fails)
</details>

<details><summary>

### What happens when an offer fails?
</summary>

Offers in the order book may fail when taken, either because the maker consciously chose to [renege on the offer to trade](../../developers/contracts/background/taker-compensation.md), or because the maker contract reverted for other reasons. In that case, the taker has wasted some gas and will be compensated using the [offer provision](../../developers/contracts/technical-references/taking-and-making-offers/reactive-offer/offer-provision.md) (in native token) that the maker has deposited in Mangrove.
</details>

<details><summary>

### Are Mangrove market orders the same as traditional market orders?
</summary>

Mangrove's [market orders](../../developers/contracts/technical-references/taking-and-making-offers/taker-order/README.md) are DeFi market orders - which are different from market orders in TradFi:

In TradFi, a market order is an order to buy or sell immediately at the best available price.

In DeFi, where transactions can be [front-run](https://www.investopedia.com/terms/f/frontrunning.asp) or [sandwiched](https://coinmarketcap.com/alexandria/article/what-are-sandwich-attacks-in-defi-and-how-can-you-avoid-them), adversaries may manipulate the best available price and thus extract value from a market order as there is no limit on the price. TradFi market orders are therefore unsafe for fully on-chain DEX'es like Mangrove.

To protect the user, Mangrove's market order therefore corresponds to a [**limit order**](https://www.investopedia.com/terms/l/limitorder.asp) in TradFi: An order to buy or sell at or below a given price.
More precisely, Mangrove ensures that the **average** price of the offers matched with the order does not exceed the specified price.

TL;DR: Mangrove market order = TradFi limit order.
</details>