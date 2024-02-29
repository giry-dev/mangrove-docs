---
title: Introduction
sidebar_position: 1
---

# Introduction

Mangrove is an [EVM-compatible](https://ethereum.org/en/developers/docs/scaling/sidechains/#evm-compatibility) order book [DEX](https://ethereum.org/en/defi/), in which offers can be bound to a [smart contract](https://ethereum.org/en/smart-contracts/). In the order book, offers exist in [offer lists](./technical-references/offer-list/README.md), on the "asks" side or the "bids" side.

Mangrove's order book lists promises to trade, instead of locked commitments:

* Offer makers add [liquidity promises](./background/offer-maker.md) to Mangrove. They own offers in %%offer lists|offer-list%%  and manage contracts that react to [offer execution](./technical-references/reactive-offer/executing-offers.md).
* Takers go to Mangrove to [find liquidity](./background/offer-maker.md) by executing offers already in Mangrove.
* [Governance](./technical-references/governance-parameters/README.md) adjusts Mangrove parameters, sets fees, and opens and closes markets.

:::info
For non-technical information about Mangrove, check out the [Concepts](/docs/general/high-level/concepts/smart-offers.md) section.
:::

## Where do I start?

A good entry-point to the developer documentation is the [Overview](./technical-references/overview.md) in the Technical Reference section.

## Where can I join the community?

The Mangrove project is open source. Follow and contribute on [GitHub](https://github.com/mangrovedao/), and join the [Mangrove Discord](https://discord.gg/rk9Qthz5YE).
