---
sidebar_position: 7
---

# Safe offer logic guidelines

## Gatekeeping

### Offer logic should only be called by Mangrove

External functions of an %%offer logic|offer-logic%%, `makerExecute` and `makerPosthook`, should only be callable if `msg.sender` is Mangrove. %%Maker contracts|maker-contract%% implemented with the strat library take care of this by construction.

### Public functions that are called by offer logic
It is sometimes convenient to define public function that can also be called internally during offer logic's execution. If such function needs to be restricted to privileged access, one cannot simply use `require(msg.sender == admin_address)` as `msg.sender` will be Mangrove when the function is called internally by the offer logic. Using a guard of the form `require(msg.sender == admin_address || msg.sender == mangrove_address)` will work though (notice that internal call preserves `msg.sender` of `makerExecute`).

## Token amounts
%%Outbound|outbound%% and %%inbound|inbound%% tokens may have different decimals. Mangrove always use raw amounts, so offer do not have directly a price but a %%wants|wants%% and a %%gives|gives%% both expressed in raw token amounts. 

## Which part of your %%Maker contract|maker-contract%% should not be in the %%offer logic|offer-logic%%?
Functions in offer logic are automatically executed by Mangrove, who is then `msg.sender`. Beware that taker is not necessarily `tx.origin`, as a contract could be acting as a taker. Importantly, make sure that your logic is not exploitable by context manipulation, which could force your offer to fail.

## How to factor your offer logic between %%`makerExecute`|makerExecute%% and %%`makerPosthook`|makerPosthook%%.

**Must** be in maker execute: 
* decision to renege on trade
* every moves that are needed to bring liquidity promised to the taker. 

The offer logic in `makerExecute` **should** be gas bounded since an out-of-gas exception will lead to Mangrove transferring your whole %%provision|provision%% to the taker as a %%bounty|bounty%%.

**Must** be in `makerPoshtook`:
* any write action to the %%offer list|offer-list%% to which the currently executed offer belongs.
* any logging of a revert reason raised during `makerExecute`. The (truncated to a bytes32) reason is passed to `makerPosthook` in the `makerData` field.

**Should** be in `makerPosthook`:
* actions that are not gas bounded, such as posting or updating an offer on Mangrove (unless you have a clear %%pivotId|pivot-id%%).
* in general, calls which may raise an exception that should not cause the current trade execution to fail.
* offer logic that revert during `makerPosthook` do not abort trade and Mangrove will emit a `PosthookFail` log.

## Hooks that make your contract dev friendly

### Activate functions

The [`activate(IERC20[] calldata tokens)`](../technical-references/code/strategies/MangroveOffer.md#activate) public function of all strat library based maker contracts, enables one to perform all maker contract centric approvals, for the provided token list, in a single transaction. If your implementation requires more approval from the maker contract you **should** add them by overriding the `__activate__` hook. For instance assume your offer logic requires depositing asset on a lender's pool and the corresponding function requires an approval from the depositor, either you should approve the lender each time your logic deposits, or if you would rather approve once for all (with infinite approval), then you should add the approval to activate using:
```solidity
__activate__(IERC20 token) internal override {
    super.__activate__(token); // perform all pre defined approvals
    token.approve({spender: <lender>, owner: address(this), amount:type(uint).max});
}
``` 

The [`activate(IERC20[] calldata tokens)`](../technical-references/code/strategies/routers/AbstractRouter.md#activate) function follows the same pattern for custom %%routers|router%% (see router [activation](../technical-references/router.md#router-activation)).

:::info cascading activation
The activate function's default behavior is to perform the maker contract's activations and then ask its router (if any) to perform its own.
:::

### Checklist functions

[`checkList(IERC20[] calldata tokens)`](../technical-references/code/strategies/MangroveOffer.md#checklist) is a dev friendly view function that reverts whenever the `tokens` list contains an ERC20 token that `msg.sender` cannot yet use to trade using the maker contract, typically because it requires an approval from `msg.sender`. The revert reason should be documented or as self contained as possible. Following the `activate` pattern, this function can be augmented with additional checks, using the `__checkList__` hook.

Router use a similar [function](../technical-references/code/strategies/routers/AbstractRouter.md#checklist) to verify that maker contract can source tokens via the router (see router [checklist](../technical-references/router.md#router-checklist)).

:::info cascading checkList
The checkList function's default behavior is to perform maker contract's checkList and then ask its router (if any) to perform its own.
:::



## Keepers as offer maintainers
A failing offer should not be the consequence of a bug in your offer logic, but rather be a feature of it. Raising an exception during `makerExecute` is the proper way to cancel a trade if your logic deems it necessary. You should customize the [last look](../technical-references/main-hooks.md#last-look-before-trade) %%hook|hook%% for this, in order to fail early in the trade and save you money. For instance, if your logic relies on funds being on a lender, and a price oracle as a relative protection against arbitrage, you should check the oracle before redeeming the funds from the lender.
