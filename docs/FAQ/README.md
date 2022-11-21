---
title: FAQ
description: Frequently Asked Questions
sidebar_position: 1
---

# FAQ

<details><summary>

## Where can I get Mangrove’s addresses?
</summary>

The deployment addresses for the core contract for Mangrove, as well as the most important periphery contracts are available at [Contracts → Deployment Addresses](../contracts/technical-references/contract-addresses.md).
</details>

<details><summary>

## Who pays the fees on Mangrove?
</summary>
Fees on Mangrove are paid by the taker: The fee is taken from the tokens that the taker has bought.

Read more about fees here: [Taker fees](../contracts/technical-references/governance-parameters/local-variables.md#taker-fees).
</details>

<details><summary>

## Who pays the gas on Mangrove?
</summary>

If the offer succeeds, the gas costs for the [execution of the trade](../contracts/technical-references/taking-and-making-offers/reactive-offer/executing-offers.md) are paid by the offer taker. If the offer fails the taker is compensated for these gas costs - see [What happens when an offer fails?](#what-happens-when-an-offer-fails)
</details>

<details><summary>

## What happens when an offer fails?
</summary>

Offers in the order book may fail when taken, either because the maker consciously chose to [renege on the offer to trade](../contracts/explanations/taker-compensation.md), or because the maker contract reverted for other reasons. In that case, the taker has wasted some gas and will be compensated using the [offer provision](../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-provision.md) (in native token) that the maker has deposited in Mangrove.
</details>

<details><summary>

## Are Mangrove market orders the same as traditional market orders?
</summary>

Mangrove's [market orders](../contracts/technical-references/taking-and-making-offers/taker-order/README.md) are DeFi market orders which are different from market orders in TradFi:

In TradFi, a market order is an order to buy or sell immediately at the best available price.

In DeFi, where transactions can be [front-run](https://www.investopedia.com/terms/f/frontrunning.asp) or [sandwiched](https://coinmarketcap.com/alexandria/article/what-are-sandwich-attacks-in-defi-and-how-can-you-avoid-them), adversaries may manipulate the best available price and thus extract value from a market order as there is no limit on the price. TradFi market orders are therefore unsafe for fully on-chain DEX'es like Mangrove.

To protect the user, Mangrove's market order therefore corresponds to a [**limit order**](https://www.investopedia.com/terms/l/limitorder.asp) in TradFi: An order to buy or sell at or below a given price.
More precisely, Mangrove ensures that the **average** price of the offers matched with the order does not exceed the specified price.

TL;DR: Mangrove market order = TradFi limit order.
</details>