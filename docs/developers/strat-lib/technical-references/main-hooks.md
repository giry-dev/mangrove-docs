---
title: Principal hooks
description: Description of the main hooks that can be overridden to customize offer logics.
sidebar_position: 1
---

## Customizing %%`makerExecute`|makerExecute%%

### Last look before trade

```solidity reference title="Last look before trade"
https://github.com/mangrovedao/mangrove-strats/blob/f668a492212b4d2d844f4469f54f04b0e9e83f07/src/strategies/MangroveOffer.sol#L218-L226
```

* **Input**: [taker `order`](../../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-data-structures.md#mgvlibsingleorder)'s recap data.
* **Output**: data to be passed to %%`makerPosthook`|makerPosthook%% if the call does not throw.
* **Default behavior**: returns `"mgvOffer/proceed"`.
* **Usage**: override to insert requirements so as to renege on trade prior to transferring funds, as `lastLook` is the first hook being called during an %%offer logic|offer-logic%%'s execution

### Managing taker's payment

```solidity reference title="Managing taker's payment"
https://github.com/mangrovedao/mangrove-strats/blob/f668a492212b4d2d844f4469f54f04b0e9e83f07/src/strategies/MangroveOffer.sol#L202-L208
```

* **Input**s: 
  * `amount` of %%inbound|inbound%% token received by the logic and that can still be relocated at the beginning of this hook.  
  * [taker `order`](../../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-data-structures.md#mgvlibsingleorder)'s recap data.
* **Output**: amount of inbound tokens whose location are not yet determined at the end of this hook's execution.
* **Default behavior**: leaves all inbound tokens allocated to the balance of the maker contract and returns 0.
* **Usage**: override to change the location where taker's payment should be deposited. Override this only if this is important for outbound tokens delivery (for instance if inbound tokens are used to borrow).

### Sourcing liquidity

```solidity reference title="Sourcing liquidity"
https://github.com/mangrovedao/mangrove-strats/blob/f668a492212b4d2d844f4469f54f04b0e9e83f07/src/strategies/MangroveOffer.sol#L210-L216
```

* **Input**: 
  * `amount` of %%outbound|outbound%% tokens that needs to be brought to the balance of the maker contract at the beginning of this hook's execution (in order to comply with the taker's order).
  * [taker `order`](../../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-data-structures.md#mgvlibsingleorder)'s recap data.
* **Output**: amount of outbound tokens that still need to be brought to the balance of the maker contract at the end of this hook's execution.
* **Default behavior**: returns the difference between the outbound token balance of the maker contract and `amount` if positive and 0 otherwise.
* **Usage**: override this hook to define a more complex strategy for sourcing liquidity (for instance redeem from a lender, transfer outbound token from an EOA etc.). This hook is used to call the logic's %%router|router%% if any.

## Customizing %%`makerPosthook`|makerPosthook%%

### Posthook after trade success

```solidity reference title="Posthook after trade success"
https://github.com/mangrovedao/mangrove-strats/blob/f668a492212b4d2d844f4469f54f04b0e9e83f07/src/strategies/MangroveOffer.sol#L267-L277
```

* **Input**:
  * [taker `order`](../../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-data-structures.md#mgvlibsingleorder)'s recap data.
  * `maker_data` either the message returned by `makerExecute`'s [last look](#last-look-before-trade) if trade execution did not revert, or the revert reason (truncated to its first 32 bytes).
* **Output**: a `bytes32` that can be passed to the overridden hook and ignored otherwise.
* **Default behavior**: reposts offer residual in case of a partial fill, adapting what the offer gives to match the original price of the offer.
* **Usage**: this hook is only reached in the offer logic if trade was settled correctly by Mangrove. Override this hook to customize what should be done after the maker offer was taken (market makers would post an offer on the other side of the spread for instance).

### Posthook after trade failure

```solidity reference title="Posthook after trade failure"
https://github.com/mangrovedao/mangrove-strats/blob/f668a492212b4d2d844f4469f54f04b0e9e83f07/src/strategies/MangroveOffer.sol#L228-L238
```

* **Input**:
  * [taker `order`](../../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-data-structures.md#mgvlibsingleorder)'s recap data.
  * `result` Mangrove recap of failed trade data [result](../../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-data-structures.md#mgvliborderresult)
* **Output**: a `bytes32` that can be passed to the overridden hook and ignored otherwise.
* **Default behavior**: Skipped.
* **Usage**: this hook is only reached in the offer logic if trade was not settled correctly by Mangrove. Override this hook to customize what should be done after the maker offer has failed. Note that if this hook is reached during offer logic's execution, maker contract has already emitted the following log:

```solidity reference title="Offer logic's incident log"
https://github.com/mangrovedao/mangrove-strats/blob/f668a492212b4d2d844f4469f54f04b0e9e83f07/src/strategies/interfaces/IOfferLogic.sol#L12-L26
```
