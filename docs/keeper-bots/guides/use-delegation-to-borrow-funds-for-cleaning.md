---
sidebar_position: 2
---

# Using borrowed funds for cleaning via Mangrove's delegation mechanism

Cleaners can use Mangrove's [delegation mechanism](/docs/contracts/technical-references/taking-and-making-offers/taker-order/delegate-takers.md) to borrow funds for cleaning: Mangrove will allow an account to call `snipesFor` on behalf of a taker that has not approved that account, as long as all sniped offers fail. This enables borrowing of funds from any taker that has approved Mangrove for some token.

The Mangrove periphery contract `MgvCleaner` provides a utility method to make this easy: `collectByImpersonation`. The method is identical to the `collect` method except it takes an extra argument, which is the taker to impersonate/borrow funds from.

The prerequisites and steps needed to use the `MgvCleaner.collectByImpersonation` function are:

**Prerequisites**

- `takerToImpersonate` must have approved Mangrove for spending `inbound_tkn` on the offer list you want to clean.
- `takerToImpersonate` must have sufficient `inbound_tkn` funds for the snipe arguments

**Steps**

1. Call `MgvCleaner.collectByImpersonation(.., takerToImpersonate)` specifying the offer list and an array of offers to clean. Refer to the documentation for [sniping](../../contracts/technical-references/taking-and-making-offers/taker-order/README.md#offer-sniping) for details on the parameters.
2. The collected bounties (in native token) will be transferred to `msg.sender`.

If any offer doesn't fail, the call will revert with one of the following reasons:

| Revert reason | Description |
| --------------| ------------ |
| `"mgvCleaner/anOfferDidNotFail"` | An offer succeeded and `MgvCleaner` is approved to trade on Mangrove on behalf of `takerToImpersonate` on that offer list. |
| `"mgv/lowAllowance"` | An offer succeeded and `MgvCleaner` is **not** approved to trade on Mangrove on behalf of `takerToImpersonate` on that offer list. |

## Example

You have identified a whale that has 1,000,000 DAI and has approved Mangrove for spending its DAI.

You're running a cleaning bot and it has detected that offer #708 on the WETH/DAI offer list will fail. The offer `wants` 800.000 DAI and `gives` 615.3842 WETH.

To clean the offer using funds borrowed from the whale, your cleaning bot triggers the following steps:

1. The bot calls `MgvCleaner.collectByImpersonation` with `targets` set to `[[708,type(uint96).max,0,type(uint).max]]`, `fillWants` set to `false`, and `takerToImpersonate` set to the whale address.
2. Mangrove will use the whale's DAI to execute offer #708 and revert the offer execution after noticing that the offer fails.
3. Because the offer failed, Mangrove transfers a bounty to `MgvCleaner`.
6. `MgvCleaner` transfers the bounty to the bot account.



:::info **Impersonation only works for failing offers**

The impersonation trick only works for sniping of failing offers. Mangrove checks whether `msg.sender` is approved to send orders/snipes for the impersonated taker and reverts if it isn't the case. That check just happens `after` the order has completed and if all taken offers failed, no actual `inbound_tkn` funds were used and the check succeeds, because `msg.sender` is approved for 0 `inbound_tkn`s.

:::info


# Further reading

- Cleaning using your own funds: [Using the `MgvCleaner` contract to clean failing offers](./use-mgvcleaner-to-clean-offers)
- Background on why cleaning is needed in Mangrove: [The role of cleaning bots in Mangrove](../background/the-role-of-cleaning-bots-in-mangrove.md)
