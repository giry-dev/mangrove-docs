---
id: reserve-id
title: Offer owner's reserve identifier
hoverText: An immutable address identifying fund owner when using a router
---

When using a %%router|router%%'s pull (or push) methods, maker contract's reserveId is passed in order to identify where funds must be pulled from (or pushed to). ReserveId is ignored when contract has no router.

## References

* The [Forwarder](../strat-lib/background/offer-maker/forwarder.md) building block is a Strat Lib building block intended to serve as the basis for maker contracts, with multiple offer owners.
* Read more about [Approval](../strat-lib/guides/approvals.md) considerations when using the Strat Lib.