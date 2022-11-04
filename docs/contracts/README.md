---
description: The Mangrove is an on-chain, orderbook-based exchange where offers are code.
sidebar_position: 1
---

# Contracts Overview

<i>TODO: Overview of Contracts section</i>

![A bird's-eye view of the Mangrove ecosystem.](../../static/img/assets/contactMap.png)

## Who interacts with Mangrove

There are 3 types of actors in play:

* Offer makers add [liquidity promises](explanations/offer-maker/README.md) to Mangrove. They own offers in [offer lists](te/takin/../../technical-references/taking-and-making-offers/market.md) and must manage contracts that react to [offer execution](technical-references/taking-and-making-offers/reactive-offer/offer-data-structures.md).
* Takers go to Mangrove to [find liquidity](explanations/offer-taker.md) by executing offers already in Mangrove.
* [Governance](technical-references/governance-parameters/README.md) adjusts Mangrove parameters, opens new pairs, sets fees, etc.
