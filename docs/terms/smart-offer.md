---
id: smart-offer
title: Smart Offer
hoverText: An offer that is bound to a smart contract, as opposed to an on-the-fly offer.
---

A _smart offer_ is an offer that is bound to a smart contract. This is in contrast with %%on-the-fly offers|on-the-fly-offer%% that are bound directly to an EOA (i.e., an Externally-Owned Account, cf. [ethereum.org -> Account Types](https://ethereum.org/en/developers/docs/accounts/#types-of-account)).

The contract bound to the smart offer is referred to as the %%maker contract|maker-contract%%. It implements an %%offer logic|offer-logic%%, which is called during trade settlement to source liquidity for the trade and to perform other maker-specific logic.


## References
* [Making liquidity available](../contracts/background/offer-maker.md)
* [Maker contract](../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md)

