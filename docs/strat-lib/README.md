---
description: The Mangrove strat library are contract building blocks for writing safe and efficient market making strats for Mangrove.
sidebar_position: 1
---

# What is the Strat Library?

The Mangrove strat library is a repository of solidity code that will help you write a custom %%maker contracts|makerContract%% able to manage offers on the Mangrove.

## Choosing the right starting point

Depending on the complexity of the %%offer logic|offerLogic%% your contract implements you have to choose from which building block you will base you contract on. At the very least your logic must provide an implementation of the [`IMaker`](https://github.com/mangrovedao/mangrove-core/blob/8c2724650c8b0cf3180cbbeb0d4b48d9c1cf9f98/src/MgvLib.sol#L159) interface [required by Mangrove](../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md). 

### Who will use the maker contract?

### How does the offer logic source its liquidity during trade execution?

### Does the offer logic post offers on Mangrove?


