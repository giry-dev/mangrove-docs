---
id: bounty
title: Bounty
hoverText: A portion of an offer provision that is sent to the taker to compensate a failure to deliver.
---

The _bounty_ is a portion of an %%offer provision|provision%% that is sent to the taker to compensate a failure to deliver by the maker.

Bounties serve two purposes:
1. It compensates the taker for the gas spent on making the offer fail.
2. It incentivizes cleaning of the order books by sniping offers that will fail.

Bounties are paid by the %%offer owner|offer-owner%% and are taken from the [provision](./provision.md) they deposited with Mangrove when posting the offer.

## References
* [Provision and offer bounty](../protocol/technical-references/taking-and-making-offers/reactive-offer/offer-provision.md#provision-and-offer-bounty)
* [Cleaning offers](../protocol/background/offer-taker#cleaning-offers)