---
title: Principal hooks
description: Description of the main hooks that can be overriden to customize offer logics.
sidebar_position: 1
---

## Customizing %%`makerExecute`|makerExecute%%

### Last look before trade

```solidity reference title="PrincipalHooks.sol"
https://github.com/mangrovedao/mangrove-core/blob/381004ea8ccea9958d9c6db84e5ac1dc6f6c3043/src/strategies/MangroveOffer.sol#L233-L241
```
* Input: [taker `order`](../../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-data-structures.md#mgvlibsingleorder)'s recap data. 
* Output: data to be passed to %%`makerPosthook`|makerPosthook%% if the call does not throw.
* Default behavior: returns `"mgvOffer/proceed"`.
* Usage: override to insert requirements so as to renege on trade prior to transfering funds, as `lastLook` is the first hook being called during an %%offer logic|offerLogic%%'s execution

### Managing taker's payment

```solidity reference title="PrincipalHooks.sol"
https://github.com/mangrovedao/mangrove-core/blob/381004ea8ccea9958d9c6db84e5ac1dc6f6c3043/src/strategies/MangroveOffer.sol#L217-L223
```
* Inputs: 
  * `amount` of %%inbound|inbound%% token received by the logic and that can still be relocated at the begining of this hook.  
  * [taker `order`](../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-data-structures.md#mgvlibsingleorder)'s recap data. 
* Output: amount of inbound tokens whose location are not yet determined at the end of this hook's execution.
* Default behavior: leaves all inbound tokens allocated to the balance of the maker contract and returns 0.
* Usage: override to change the location where taker's payment should be deposited. Override this only if this is important for outbound tokens delivery (for instance if inbound tokens are used to borrow).

### Sourcing liquidity

```solidity reference title="PrincipalHooks.sol"
https://github.com/mangrovedao/mangrove-core/blob/381004ea8ccea9958d9c6db84e5ac1dc6f6c3043/src/strategies/MangroveOffer.sol#L225-L231
```
* Input: `amount` of %%outbound|outbound%% tokens that needs to be brought to the balance of the maker contract at the begining of this hook's execution (in order to comply with the taker's order), and [taker `order`](../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-data-structures.md#mgvlibsingleorder)'s recap data. 
* Output: amount of outbound tokens that still need to be brought to the balance of the maker contract at the end of this hook's execution.
* Default behavior: returns the difference between the outbound token balance of the maker contract and `amount` if positive and 0 otherwise.
* Usage: override this hook to define a more complex strategy for sourcing liquidity (for instance redeem from a lender, transfer outbound token from an EOA etc.). This hook is used to call the logic's %%router|router%% if any.

## Customizing %%`makerPosthook`|makerPosthook%%


