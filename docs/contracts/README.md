---
description: The Mangrove DEX is an on-chain, order book-based exchange where offers are code.
sidebar_position: 1
---


# Introduction

:::info
For more general information about Mangrove, check out the [Concepts](../high-level/README.md) section.
:::

The Mangrove is an [EVM-compatible](https://ethereum.org/en/developers/docs/scaling/sidechains/#evm-compatibility) order book-based exchange protocol (a [DEX](https://ethereum.org/en/defi/)), in which offers can be bound to a [smart contract](https://ethereum.org/en/smart-contracts/).
The order book lists promises to trade, instead of locked commitments.

Here are some key items to learn about:

* Offer makers add [liquidity promises](./background/offer-maker.md) to Mangrove. They own offers in %%offer lists|offer-list%%  and manage contracts that react to [offer execution](technical-references/taking-and-making-offers/reactive-offer/executing-offers.md).
* Takers go to Mangrove to [find liquidity](background/offer-taker.md) by executing offers already in Mangrove.
* [Governance](technical-references/governance-parameters/README.md) adjusts Mangrove parameters, sets fees, and opens and closes new markets.

## Where do I start?

* Developer: a good entry-point to Mangrove protocol is the [Overview of Mangrove](./technical-references/overview.md) in the Technical Reference section.
* High level concepts: head ovber our [Concepts section](../high-level/README.md).


## Where can I join the community?

The Mangrove project is open source. Follow and contribute on [GitHub](https://github.com/mangrovedao/), and join the [Mangrove Discord](https://discord.gg/rk9Qthz5YE).


