---
description: The Mangrove is an on-chain, orderbook-based exchange where offers are code.
sidebar_position: 1
---


# What is Mangrove? 🌴

The Mangrove is an [EVM-compatible](https://ethereum.org/en/developers/docs/scaling/sidechains/#evm-compatibility) order book-based exchange protocol (a [DEX](https://ethereum.org/en/defi/)), in which offers can be bound to a [smart contract](https://ethereum.org/en/smart-contracts/).

The order book of Mangrove lists promises to trade, instead of locked commitments.

As a maker, when you [post an offer](technical-references/taking-and-making-offers/reactive-offer/) to the Mangrove order book, you also provide an address for a smart contract - the [maker contract](technical-references/taking-and-making-offers/reactive-offer/maker-contract). The maker contract is called by the Mangrove protocol, [*when*](technical-references/taking-and-making-offers/reactive-offer/maker-contract#offer-logic) your offer is [taken](technical-references/taking-and-making-offers/taker-order/), and [*after*](technical-references/taking-and-making-offers/reactive-offer/maker-contract#offer-post-hook) your offer was [taken](technical-references/taking-and-making-offers/taker-order/). 

## [When an offer is taken](technical-references/taking-and-making-offers/reactive-offer/maker-contract#offer-logic)

Mangrove calls the maker contract the first time, when an offer is attempted taken. This allows makers to source the liquidity *just-in-time* for the trade. It also allows the makers to [renege](explanations/taker-compensation) on the offer to trade (e.g, because the market conditions changed) by incorporating defensive code in the maker contract.

This means that offers posted to Mangrove need not be fully provisioned. As a maker, your liquidity can be shared, borrowed, lent and, at the same time, be displayed in the Mangrove's order book, ready to be sourced when, and only when, your offer is taken.

## [After an offer is taken](technical-references/taking-and-making-offers/reactive-offer/maker-contract#offer-post-hook)

Mangrove calls the maker contract a second time during the trade transaction, *after* the offer has been taken.

This allows makers, for instance, to repost another offer to redisplay their liquidity instantly - in a manner similar to Automated Market Makers (AMMs). 

### Where can I read more on how Mangrove handles trades?

Refer to the detailed section on [Executing Offers](technical-references/taking-and-making-offers/reactive-offer/executing-offers) for a detailed account on how offers are executed in Mangrove.


## How does the Mangrove protocol compare to other DEXs?

**TODO**
