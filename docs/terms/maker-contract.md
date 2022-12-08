---
id: maker-contract
title: Maker Contract
hoverText: A maker contract is a smart contract that is bound to a smart offer posted on Mangrove. 
---

A _maker contract_ is a smart contract that is bound to a %%smart offer|smart-offer%% posted on Mangrove. 
It is the contract that is called by Mangrove should the offer be matched during a [taker order](../contracts/technical-references/taking-and-making-offers/taker-order/README.md).

In addition to implementing the %%offer logic|offer-logic%% it must provide public functions to post and update offers on Mangrove.

## References

* Technical reference for [maker contracts](../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md)
* The [Strat Lib](../strat-lib/README.md) provides makers with a basis for writing custom maker contracts.