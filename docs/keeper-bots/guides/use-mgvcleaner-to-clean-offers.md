---
sidebar_position: 1
sidebar_label: How to use the MgvCleaner contract to clean failing offers
---

# How to use the `MgvCleaner` contract to clean failing offers

Mangrove provides a [cleaner contract](/docs/contracts/technical-references/periphery/cleaner.md) called `MgvCleaner` to ease cleaning. This contract provides a `collect` method that calls [Mangrove.snipes](/docs/contracts/technical-references/taking-and-making-offers/taker-order/#offer-sniping) (forwarding the parameters unchanged) but will revert if any offer in the `targets` array succeed. Thus, cleaning via the cleaner contract guards you from offers unexpectedly succeeding when you try to snipe them to collect a bounty.

The prerequisites and steps needed to use the `MgvCleaner.collect` function are:

**Prerequisites**
- `msg.sender` must have approved Mangrove for spending `inbound_tkn` on the offer list you want to clean.

**Steps**
1. Call `MgvCleaner.collect(..)` specifying the offer list and an array of offers to clean. Refer to the documentation for [sniping](/docs/contracts/technical-references/taking-and-making-offers/taker-order/#offer-sniping) for details on the parameters.
2. The collected bounties (in native token) will be transferred to `msg.sender`.

If any offer doesn't fail, the call will revert with one of the following reasons:

| Revert reason | Description |
| --------------| ------------ |
| `"mgvCleaner/anOfferDidNotFail"` | An offer succeeded and `MgvCleaner` is approved to trade on Mangrove on behalf of `msg.sender` on that offer list. |
| `"mgv/lowAllowance"` | An offer succeeded and `MgvCleaner` is **not** approved to trade on Mangrove on behalf of `msg.sender` on that offer list. |


## Example

Assume you have a cleaning bot that has 900 DAI and has approved Mangrove for spending its DAI.

Your bot detects that offer #708 on the WETH/DAI offer list will fail. The offer `wants` 800 DAI and `gives` 0.6584 WETH,

To clean the offer, your cleaning bot triggers the following steps:

1. The bot calls `MgvCleaner.collect` with `targets` set to `[[708,type(uint96).max,0,type(uint).max]]` and `fillWants` set to `false`.
2. Mangrove will use the bot's DAI to execute offer #708 and revert the offer execution after noticing that the offer fails.
3. Because the offer failed, Mangrove transfers a bounty to `MgvCleaner`.
6. `MgvCleaner` transfers the bounty to the bot account.


# Further reading

- Borrowing funds for cleaning: [How to use borrowed funds for cleaning via Mangrove's delegation mechanism](./use-delegation-to-borrow-funds-for-cleaning)
- Background on why cleaning is needed in Mangrove: [The role of cleaning bots in Mangrove](../background/the-role-of-cleaning-bots-in-mangrove.md)