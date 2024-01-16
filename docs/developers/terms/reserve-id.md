---
id: reserve-id
title: Reserve identifier
hoverText: An immutable address identifying the fund owner when using a router
---

When using a [router](/docs/developers/terms/router.md)'s pull (or push) methods, the reserve identifier of the [maker contract](/docs/developers/terms/maker-contract.md) is passed in order to identify where funds must be pulled from (or pushed to). The reserve identifier is ignored when the contract has no router.

## References

* The [Forwarder](../strat-lib/background/offer-maker/forwarder.md) building block is a Strat Lib building block intended to serve as the basis for maker contracts, with multiple [offer owners](/docs/developers/terms/offer-owner.md).
* Read more about [Approval](../strat-lib/guides/approvals.md) considerations when using the Strat Lib.