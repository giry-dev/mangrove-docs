---
title: Overview
description: Overview of Mangrove ecosystem
sidebar_position: 1
---

# Overview of Mangrove's ecosystem

The illustration below depicts a bird's-eye view of the Mangrove ecosystem. The main actors are depicted as well as their most important interactions.

![A bird's-eye view of Mangrove ecosystem.](/img/assets/contactMap.png)

The Mangrove contract is depicted in the middle, with the three most important actors interacting with Mangrove around it:

* [Offer makers](#makers) add [liquidity promises](../background/offer-maker.md) to Mangrove. 
    
* [Takers](#takers) use Mangrove to [find liquidity](../background/offer-taker.md) by executing offers published on Mangrove.

* Cleaners identify offers that will fail to deliver the promised liquidity and [clean](../../keeper-bots/guides/use-borrowed-funds-for-cleaning) them, i.e. remove them from the book in exchange for a bounty.

* [Governance](#governance) adjusts Mangrove [parameters](./governance-parameters/README.md) such as setting fees or opening and closing markets.

## Takers

As a taker on Mangrove you take offers published by makers as liquidity promises. Offers are taken using [market orders](taking-and-making-offers/taker-order/README.md#market-order).

Takers typically operate via a web front-end or with the help of the TypeScript [SDK](../../SDK/README.md) for developing off-chain apps to interact with the Mangrove ecosystem.

## Makers

Makers own [offers](taking-and-making-offers/reactive-offer/README.md), which live in %%offer lists|offer-list%% in the Mangrove order book. 

As a maker you have the choice of posting two kinds of offers:

* %%On-the-fly offers|on-the-fly-offer%% posted directly from an EOA. Such offers have no logic attached, and the promised liquidity should be available on the EOA, when the offer is matched during a trade.
* %%Smart offers|smart-offer%% posted via a smart contract - called a %%maker contract|maker-contract%%. When a smart offer is matched by a taker order during trade execution, the maker contract will be called and given the opportunity to execute its %%offer logic|offer-logic%%. 

### Smart offers

Smart offers are where Mangrove really distinguishes itself from other DEXes, so we shall discuss them in a bit more detail in this overview.

The offer logic of the maker contract is called twice by the Mangrove protocol during trade execution: [when the smart offer is taken](#when-a-smart-offer-is-taken) and [after the smart offer was taken](#after-a-smart-offer-is-taken).

### When a smart offer is taken

Mangrove calls the offer logic of the maker contract a [first time](taking-and-making-offers/reactive-offer/maker-contract.md#trade-execution), via the callback function %%`makerExecute`|makerExecute%%, when an offer is matched by a taker order. This happens immediately prior to trade settlement allowing makers to source liquidity %%reactively|reactive-liquidity%% and *just-in-time* for the trade. It also allows makers to %%renege|renege%% on the offer to trade by incorporating defensive code (called %%last look|last-look%%) in the maker contract (e.g., because the market conditions changed).

This implies that offers posted to Mangrove need not be fully provisioned. As a maker, your liquidity can be shared, borrowed, lent, and, at the same time, be displayed in Mangrove's order book - ready to be sourced when, and only when, your offer is taken.

### After a smart offer is taken

Mangrove calls the offer logic of the maker contract a [second time](taking-and-making-offers/reactive-offer/maker-contract.md#offer-post-hook), via the callback function %%`makerPosthook`|makerPosthook%% during trade execution immediately *after* the offer has been taken.

This allows makers to, for instance, post another offer to redisplay their liquidity instantly, in a manner similar to [Automated Market Makers (AMMs)](https://coinmarketcap.com/alexandria/glossary/automated-market-maker-amm).

## Call sequence overview

The diagram below summarizes the call sequence induced by a taker order. Notice that first the `makerExecute` functions is executed for all offers, and only subsequently are the `makerPosthook` functions of the offers executed.


import useBaseUrl from '@docusaurus/useBaseUrl';

<div class="text--center">
<img src={useBaseUrl('/img/assets/execution.png')} width="75%"/>
</div>

## Where can I read more?

* The concepts of ticks and ratio are crucial in Mangrove - you'll want to [get familiar with them](./tick-ratio.md) first.
* Refer to the section on [Creating and Updating Offers](taking-and-making-offers/reactive-offer/README.md).
* Read more about [Offer Execution](taking-and-making-offers/reactive-offer/executing-offers.md) on Mangrove.
* Read about the freely available [Strat Library](../../strat-lib/README.md) - a repository of Solidity code to help write your own custom maker contract.
* Read about the TypeScript [SDK](../../SDK/README.md) for developing off-chain apps to interact with Mangrove ecosystem.

## Governance

The Mangrove Governance may set a number of parameters, which governs how Mangrove operates globally or for specific pairs. Refer to the section on [Governance Parameters](./governance-parameters/README.md) for details.


