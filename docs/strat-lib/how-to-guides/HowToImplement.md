---
sidebar_position: 1
---

# How to implement a safe offer logic

## Gatekeeping
Verify external function's caller. Tricky public function that might be called during offer logic's execution.

## Token amounts
%%Outbound|outbound%% and %%inbound|inbound%% tokens may have different decimals. Mangrove always use raw amounts.

## %%Maker contract|makerContract%% or %%offer logic|offerLogic%%?
Functions in offer logic are automatically executed by Mangrove who is then `msg.sender` (taker is `tx.origin`). If it is exploitable by price manipulation, the taker can force you to do stuff (lastLook is there to protect). Dangers are: oracle manipulation, or liquiditation. Better have risky moves being admin controlled.

## %%`makerExecute`|makerExecute%% or %%`makerPosthook`|makerPosthook%%?

**Must** be in maker execute: 
* decision to renege on trade
* every moves that are needed to bring liquidity promised to the taker. 

`makerExecute` should be gas bounded because out of gas exception exposes you to transfering your whole %%provision|provision%% to the taker as a %%bounty|bounty%%.

**Must** be in `makerPoshtook`:
* any write action to the %%offer list|offerList%% to which the currently executed offer belongs.

**Should** be in `makerPosthook`:
* not stricly gas bounded actions such as posting or updating an offer on Mangrove
* in general calls which may raise an exception that should not cause the current trade execution to fail.

## Keepers as krankers
An offer that fails should not come from a bug in your offer logic, but rather be a feature of it. Raising an exception during `makerExecute` is the proper way to cancel a trade if your logic deems it necessary. You should customize the `lastLook` %%hook|hook%% for this, in order to fail early in the trade and save you money. For instance, if your logic relies on funds being on a lender, and a price oracle as a relative protection against arbitrage, you should check the oracle before redeeming the funds from the lender.
