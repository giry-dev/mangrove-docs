---
description: What offer gas requirements are.
sidebar_position: 3
---

# Gas requirement

Gas requirement (gasreq) is the total amount of gas that the %%offer logic|offer-logic%% requires to execute an offer. This is an important measure as it goes into calculating the [offer provision](./offer-provision.md) which is used to compensate the taker's wasted gas on offer failure.

The required gas depends on the actual code path taken in the contract, so it should cover the worst case where you want the offer to succeed. Recall that offer logic is both %%makerExecute|makerExecute%% and %%makerPosthook|makerPosthook%%, then the estimation has the following consequences:

* Underestimating gasreq: if offer logic runs out of gas during `makerExecute`, the maker is penalized and the taker gets a bounty. If `makerPosthook` runs out of gas, it is not executed (and offer bookkeeping that should have occurred in posthook is lost).
* Overestimating gasreq: offer is seen as less attractive for a taker (see [offer rank](../offer-list.md#offer-rank)) and requires more provision, it also requires more outbound token volume (to match %%density|density%%).

To get an idea of the gasreq for your contract, see [How to determine gas requirements](../../../../strat-lib/how-to-guides/howtoGasreq.md) which also covers extra details when using the strat library.

