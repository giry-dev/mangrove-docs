---
id: offer-owner
title: Offer owner
hoverText: An account that is allowed to post, update or retract a specific offer posted by a maker contract.
---

The **owner** of an offer posted by a %%maker contract|maker-contract%% on Mangrove is an account that is allowed to post, update or retract the offer via the public functions exposed by the contract. For maker contracts based on the [Direct](../strat-lib/explanations/offer-maker/direct.md) strategy, only the contract's admin can be an offer owner. Maker contracts that are based on the [Forwarder](../strat-lib/explanations/offer-maker/forwarder.md) strategy may have multiple offer owners.