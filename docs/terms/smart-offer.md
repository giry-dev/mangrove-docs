---
id: smart-offer
title: Smart offer
hoverText: An offer that is bound to a smart contract, as opposed to an on-the-fly offer.
---

A _smart offer_ is an offer that is bound to a smart contract. 

That contract is referred to as the %%maker contract|maker-contract%% and it implements an %%offer logic|offer-logic%%, which is called during trade settlement to source liquidity for the trade and to perform other maker-specific logic.

Smart offers can be contrasted with %%on-the-fly offers|on-the-fly-offer%% that are bound to EOAs and carry no logic.

## References
* [Making liquidity available](../contracts/background/offer-maker.md)
* [Maker contract](../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md).

