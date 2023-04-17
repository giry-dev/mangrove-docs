---
id: reserve-id
title: Reserve identifier
hoverText: An immutable address identifying the fund owner when using a router
---

When using a %%router|router%%'s pull (or push) methods, the reserve identifier of the %%maker contract|maker-contract%% is passed in order to identify where funds must be pulled from (or pushed to). The reserve identifier is ignored when the contract has no router.

## References

* The [Forwarder](../strat-lib/background/offer-maker/forwarder.md) building block is a Strat Lib building block intended to serve as the basis for maker contracts, with multiple %%offer owners|offer-owner%%.
* Read more about [Approval](../strat-lib/guides/approvals.md) considerations when using the Strat Lib.