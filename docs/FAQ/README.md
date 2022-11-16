---
title: FAQ
description: Frequently Asked Questions
sidebar_position: 1
---

# FAQ

## Where can I get Mangrove’s addresses?

The deployment addresses for the core contract for Mangrove, as well as the most important periphery contracts are available on [Contracts -> Deployment Addresses](../contracts/technical-references/contract-addresses.md).

## Who pays the fees on Mangrove?
Fees on Mangrove are paid by the taker: The fee is taken from the tokens that the taker has bought.

You can read more about fees here: [Taker fees](/docs/contracts/technical-references/governance-parameters/local-variables#taker-fees).

## Who pays the gas on Mangrove?

If the offer succeeds, the gas costs for the [execution of the trade](../contracts/technical-references/taking-and-making-offers/reactive-offer/executing-offers.md) are paid by the offer taker. If the offer fails the taker is compensated for these gas costs - see [What happens when an offer fails?](#what-happens-when-an-offer-fails)

## What happens when an offer fails?

Offers in the order book may fail when taken, either because the maker consciously chose to [renege on the offer to trade](../contracts/explanations/taker-compensation.md), or because the maker contract reverted for other reasons. In that case, the taker has wasted some gas, and will be compensated using the [offer provision](../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-provision.md) that the maker has already locked in on Mangrove.

