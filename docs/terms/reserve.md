---
id: reserve
title: Reserve
hoverText: Location of offer owners' funds for offer logic's execution.
---

%%Offer owners|offer-owner%% may customize where their funds should be deposited (%%inbound|inbound%% tokens) and fetched (%%outbound|outbound%%) tokens during the %%offer logic|offer-logic%% execution. If the reserve is placed at another address than the offer owner itself, the reserve must approve the offer owner to use them for maker contracts that accept several offer owners.

## References

* The [Forwarder](../strat-lib/background/offer-maker/forwarder.md) building block is a [Strat Lib](../strat-lib/README.md) building block intended to serve as the basis for maker contracts, with multiple offer owners.
* Read more about [Approval](../strat-lib/guides/approvals.md) considerations when using the Strat Lib.