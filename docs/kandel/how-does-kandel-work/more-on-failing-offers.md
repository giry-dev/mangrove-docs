---
description: How does Kandel work
sidebar_position: 6
---


# More on failing offers


This section explains the reasons why some offers might fail using Kandel.


## Definition

When we talk about an offer "failing", we mean that it could not execute. An offer can also fail to update itself. While we won't go into details in this part of the documentation, it is important to mention and differentiate those cases to further understand Kandel strategy's behavior.

* [`makerExecute()`](../../developers/strat-lib/technical-references/code/strategies/MangroveOffer/#makerexecute): it is the callback function that is called when an offer is matched. Its role is to execute all offers that were posted on Mangrove by a given contract.
    * A failure in `makerExecute()` means the trade is canceled, and the [bounty](/developers/terms/bounty) is given to the Taker as a [compensation](../../developers/contracts/technical-references/taking-and-making-offers/taker-order/#bounties-for-taking-failing-offers). The offer is removed from the book.


* [`makerPosthook()`](../../developers/strat-lib/technical-references/code/strategies/MangroveOffer/#makerposthook): it is the callback function that is called after the offer execution (i.e. after a successful execution of `makerExecute()`).
    * A failure in `makerPosthook()` means the offer cannot update or repost itself after being taken. It does not cancel the trade, since it is called after `makerExecute()`.

> 💡
> For a more visual explanation, see the [call sequence overview](../../developers/contracts/technical-references/overview#call-sequence-overview) diagram.

## Kandel and `makerExecute()` failure

After launching a Kandel strategy, Bids and Asks are populated with a [certain volume](./parameters.md). Kandel strategy's contract is handling all the posting for the user, using liquidity that has been previously deposited.<br />
Therefore, since the user is not in charge of writing and maintaining the smart contract, failures to execute [`makerExecute()`](../../developers/strat-lib/technical-references/code/strategies/MangroveOffer/#makerexecute) can be almost entirely ruled out, with the exception of some very specific scenarios such as:

* Someone severely modifies the volume distribution/sourcing methods, creating issues when a Kandel Bid/Ask is taken (via the SDK)

* Kandel runs on AAVE, and the user's liquidity is not available for sourcing at the time the offer is taken. That could happen if the user's funds are suddenly borrowed entirely (on AAVE)


## Kandel and `makerPosthook()` failure

The main failures that Kandel could run into are linked to reposting Bids and Asks. This has little incidence for the user, nor does it affect the behavior of his Kandel strategy.<br />
Non-reposted liquidity will be placed into the [Unallocated liquidity](./strategy-reserve#unallocated-liquidity) reserve, and the offer will be "empty" for Kandel, until the user replenishes it.<br />

> 💡
> If too many empty offers stack up, it would diminish Kandel's ability to profit from the spread, and therefore the overall generated yield. Kandel is not intended as a "set and forget" strategy, and needs ongoing maintenance and checks.

<br />

Reposting offers is handled with [`makerPosthook()`](../../developers/strat-lib/technical-references/code/strategies/MangroveOffer/#makerposthook), and failure could happen if:

* The residual of a partially taken offer is too small with regard to [density](/developers/terms/density):
    * A partially taken offer is the result of a Taker either partially [sniping](../../developers/contracts/technical-references/taking-and-making-offers/taker-order/#offer-sniping) an offer, or placing a Market order
    * If an offer is almost entirely taken, the remainder (dust) could be too small to pass the density check, leading to a failure to repost itself


* Kandel runs out of gas during the execution of the `makerPosthook()` because the gas requirements suddenly changed
    * This is unlikely to happen, but it theoretically could (if the order book becomes very dense in offers, for example)
