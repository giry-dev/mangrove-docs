---
title: Developers
sidebar_position: 1
---

# Welcome to the Developers Doc

The Mangrove is an [EVM-compatible](https://ethereum.org/en/developers/docs/scaling/sidechains/#evm-compatibility) order book-based exchange protocol (a [DEX](https://ethereum.org/en/defi/)), in which offers can be bound to a [smart contract](https://ethereum.org/en/smart-contracts/).

The order book of Mangrove lists promises to trade, instead of locked commitments.

* Offer makers add [liquidity promises](./contracts/background/offer-maker.md) to Mangrove. They own offers in %%offer lists|offer-list%%  and manage contracts that react to [offer execution](./contracts/technical-references/taking-and-making-offers/reactive-offer/executing-offers.md).
* Takers go to Mangrove to [find liquidity](./contracts/background/offer-maker.md) by executing offers already in Mangrove.
* [Governance](./contracts/technical-references/governance-parameters/README.md) adjusts Mangrove parameters, sets fees, and opens and closes new markets.

> 💡
> For non technical information about Mangrove, check out the [Concepts](./general.md) section.

## Where do I start?

A good entry-point to the developer documentation for Mangrove protocol is the [Overview of Mangrove](./contracts/technical-references/overview.md) in the Technical Reference section.

## Where can I join the community?

The Mangrove project is open source. Follow and contribute on [GitHub](https://github.com/mangrovedao/), and join the [Mangrove Discord](https://discord.gg/rk9Qthz5YE).