---
sidebar_position: 1
sidebar_label: Using the `cleanByImpersonation` contract to clean failing offers
---

# Using the `cleanByImpersonation` function to clean failing offers

Mangrove provides a cleaner function accessible with `Mangrove.cleanByImpersonation` to ease [cleaning](../../contracts/technical-references/taking-and-making-offers/offer-cleaning.md).

It can be used to clean multiple offers, i.e. executes them and removes them from the book if they fail, transferring the failure penalty as bounty to the caller.

## But what if an offer succeeds?

If an offer succeeds, the execution of that offer is reverted, it stays in the book, and no bounty is paid; The `cleanByImpersonation` function itself will not revert.

:::info Note
Note that Mangrove won't attempt to execute an offer if the values in a target don't match its offer. To distinguish between a non-executed clean and a failed clean (due to the offer itself not failing), you must inspect the log (see [`MgvLib.sol`](https://github.com/mangrovedao/mangrove-core/blob/50bd387ea0f0a8e831ab937d0f9e67b93d804aa9/src/core/MgvLib.sol)) or check the received bounty.
:::

## Who can be impersonated?

Any `taker` can be impersonated when cleaning because:
* The function reverts if the offer succeeds, reverting any token transfers.
* After a `clean` where the offer has failed, all ERC20 token transfers have also been reverted - but the sender will still have received the bounty of the failing offers.


## Further reading

- Borrowing funds for cleaning: [Using borrowed funds for cleaning via Mangrove's delegation mechanism](./use-delegation-to-borrow-funds-for-cleaning)
- Background on why cleaning is needed in Mangrove: [The role of cleaning bots in Mangrove](../background/the-role-of-cleaning-bots-in-mangrove.md)
