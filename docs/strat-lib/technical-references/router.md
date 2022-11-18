---
title: Liquidity routing
description: Using modular contracts for just in time routing of liquidity.
sidebar_position: 2
---

# Routers

Maker contracts can be set to utilize a %%router|router%% in order to manage %%outbound|outbound%% and %%inbound|inbound%% tokens reserves. Routers' interface are constrained by the `AbstractRouter` contract and use  %%hooks|hook% to customize the public functions described below.

:::caution `onlyMaker`
Function modifier `onlyMaker` indicates that only approved maker contracts can call the router on this functions.
:::

:::info `SimpleRouter`
The `SimpleRouter` contract provides a (simple) router instance. We illustrate usage of the main router functions through it. 
:::


## Liquidity flows

Routers receive requests from approved %%maker contracts|maker-contract%% (see [gatekeeping](#gatekeeping)). Request can be either to manage inbound (offer taker's payment) or outbound cash flow.

### Push request

```solidity
function push(IERC20 token, address reserve, uint amount) external onlyMakers returns (uint pushed);
```
* **Input**: 
  * `token` is the asset the maker contract wishes to push
  * `reserve` of the offer owner whose funds are being pushed
  * `amount` is the amount of asset that should be transferred from the calling maker contract
* **Output**: fraction of `amount` that was successfully `pushed` to offer owner's `reserve`.
* **Usage**: transfer funds from the maker contracts to an offer owner's reserve. For instance if the reserve is an account on a lender, the router will have a custom `push` that will take care of calling the proper deposit function.   
* **SimpleRouter behavior**: transfer funds from `msg.sender` to `reserve`. Returns 0 if transfer failed, returns `amount` otherwise.

### Pull request

```
solidity 
function pull(IERC20 token, address reserve, uint amount, bool strict) external onlyMakers returns (uint pulled);
```
* **Input**: 
  * `token` is the asset the maker contract wishes to push
  * `reserve` of the offer owner whose funds are being pushed
  * `amount` is the amount of asset that should be transferred from `reserve` to the calling maker contract
* **Output**: fraction of `amount` that was successfully `pulled` to `msg.sender`.
* **Usage**: transfer funds from an offer owner's reserve to the calling maker contracts. For instance if the reserve is an account on a lender, the router will have a custom `pull` that will take care of calling the proper redeem function.   
* **SimpleRouter behavior**: transfer funds from `reserve` to `msg.sender`. Returns 0 if transfer failed, returns `amount` otherwise.


## Gatekeeping

### Binding a router to a maker contract

```solidity 
function bind(address maker) public
```

### Router activation and checklist

## Gas requirements






