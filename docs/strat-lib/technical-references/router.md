---
title: Liquidity routing
description: Using modular contracts for just in time routing of liquidity.
sidebar_position: 2
---

# Routers

Maker contracts can be set to utilize a %%router|router%% in order to manage %%outbound|outbound%% and %%inbound|inbound%% tokens reserves of %%offer owners|offer-owner%%. Routers' interface are constrained by the `AbstractRouter` contract and use  %%hooks|hook%% to customize the public functions described below.

:::caution modifers
Function modifier `onlyMakers` requires that only an approved maker contract can call this functions. Modifier `onlyAdmin` requires function caller to be the admin of the router. Modifier `makerOrAdmin` is a disjunction of the both the above requirements.
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
function bind(address maker) public onlyAdmin;
```
Function approves `maker` as a user of the router. The `unbind` function can be called to revoke the approval. 

### Router activation

```solidity
function activate(IERC20 token) external makersOrAdmin;
```

* **Usage**: performs all router centric approvals that are necessary to route `token` liquidity. For instance a router using a lender might need to approve the lender for transfering `token` in deposit calls.
* **SimpleRouter behavior**: SimpleRouter does not need to approve any contract, and `activate` is a noop in that context.

### Router checklist

```solidity
function checkList(IERC20 token, address reserve) external view;
```
* **Usage**: verifies that the router has performed and received all the necessary approvals to route `token` liquidity for offer owner's `reserve`. The function throws with a reason when the first missing approval is detected.
* **SimpleRouter behavior**: it verifies that `reserve` has approved the router for `token` transfer. Does not throw if offer owner's `reserve` is the router itself.

:::info Plug and play routing

Since routers are autonomous smart contracts, it is possible to modify an offer logic withough redeploying the corresponding maker contracts. The `setRouter` function of all library based maker contracts can be used to set a new router. However the gas requirement of the offer logic is impacted by the router's design. To cope with this, routers provide the `routerGaseq()` function that returns the amount of gas that is necessary to cover a call to `pull` and `push`. 

Note that maker contracts' view `offerGasreq` returns the sum of the offer logic's raw %%`gasreq`|gasreq%% (withough taking router into account) and the router specific `gasreq`

:::


