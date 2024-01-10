---
sidebar_position: 1
---

# Using borrowed funds for cleaning

Mangrove's `cleanByImpersonation` function allows anyone to clean a failing offer, by providing the execution parameters that will make it fail. The function will execute the specified offers, including token transfers, and (1) reward the cleaner and remove the offer from the book if the offer fails or (2) revert the offer execution if it succeeds and keep the offer in the book; in both cases, all token transfers are reverted.

Since this cleaning involves actual token transfers (though they will be reverted) Mangrove requires the caller to specify a taker account from which the inbound tokens will be transferred. In effect, this taker account will be impersonated during cleaning, hence `*ByImpersonation`.

The taker must of course have approved Mangrove for transferring the inbound token on their behalf. And cleaners are free to specify _any_ account, including accounts they do not control.

:::info Impersonated takers are unaffected
The takers that are impersonated during cleaning are unaffected: All token transfers made inside `cleanByImpersonation` will be reverted.
:::

The prerequisites and steps needed to use the `Mangrove.cleanByImpersonation` function are:

**Prerequisites**

- `taker` must have approved Mangrove for spending `inbound_tkn` on the offer list you want to clean.
- `taker` must have sufficient `inbound_tkn` funds for the execute arguments

**Steps**

1. Call `Mangrove.cleanByImpersonation(olKey, targets, taker)` specifying the offer list, an array of offers to clean, and the taker to impersonate.
    - The targert are `MgvLib.CleanTarget` structs which has the following fields:
        - `offerId`: The offer to clean.
        - `tick`: The offer's expected tick. If this doesn't match when the tx is executed, cleaning of the offer will not be attempted to avoid wasting gas since the cleaning assumptions have changed.
        - `gasreq`: The offer's expected gasreq. If this is lower than the offer's actual gasreq when the tx is executed, cleaning of the offer will not be attempted to avoid wasting gas since the cleaning assumptions have changed.
        - `takerWants`: The amount to request from the offer.
2. The collected bounties (in native token) will be transferred to `msg.sender`.

If an offer doesn't fail, only the execution of that offer will be reverted; the call to `cleanByImpersonation` will not revert.

The return values are the number of successfully cleaned offers and the total bounty received.

Note that Mangrove won't attempt to execute an offer if the values in a `CleanTarget` don't match its offer (as desribed above). To distinguish between a non-executed clean and a fail clean (due to the offer itself not failing), you must inspect the log (see `MgvLib.sol`) or check the received bounty.


## Example

You have identified a whale that has 2,000,000 DAI and has approved Mangrove for spending its DAI.

You're running a cleaning bot and it has detected that offer #708 on a WETH-DAI %%offer list|offer-list%% will fail when fully taken. The offer `gives` 615.3842 WETH at tick 75,171, corresponding to a price of 1,838.53 DAI/WETH. Thus, fully taking it requires 1,131,396.159384 DAI which corresponds to a raw value of `113139615938400000000000000`.

To clean the offer using funds borrowed from the whale, your cleaning bot triggers the following steps:

1. The bot calls `Mangrove.cleanByImpersonation` with `targets` set to `[[708,75171,0,type(uint).max,113139615938400000000000000]]` and `taker` set to the whale address.
2. Mangrove will use the whale's DAI to execute offer #708 and revert the offer execution after noticing that the offer fails.
3. Because the offer failed, Mangrove transfers a bounty to `msg.sender`.


# Further reading

- Background on why cleaning is needed in Mangrove: [The role of cleaning bots in Mangrove](../background/the-role-of-cleaning-bots-in-mangrove.md)
