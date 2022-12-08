---
id: offer-logic
title: Offer Logic
hoverText: The part of a maker contract that is executed as a consequence of a call by Mangrove when processing a taker order.
---

The _offer logic_ is the part of the %%maker contract|maker-contract%% that executes as a consequence of a call by Mangrove. The offer logic is split into [trade execution](../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md#trade-execution) implemented by %%`makerExecute`|makerExecute%%
and [trade posthook](../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md#trade-posthook) implemented by %%`makerPosthook`|makerPosthook%%.

## References
* [Offer Logic](../contracts/background/offer-maker.md#executing-offers)
* [Offer execution](../contracts/technical-references/taking-and-making-offers/reactive-offer/executing-offers.md)