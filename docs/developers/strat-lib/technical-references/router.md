---
title: Liquidity routing
description: Using modular contracts for just in time routing of liquidity.
sidebar_position: 2
---

# Routers

:::caution Work in progress
This page is currently being updated - thank you for your understanding.
:::

Maker contracts can be set to utilize a %%router|router%% in order to manage %%outbound|outbound%% and %%inbound|inbound%% tokens reserves of %%offer owners|offer-owner%%. Routers' interface are constrained by the `AbstractRouter` contract and use  %%hooks|hook%% to customize the public functions described below.

:::caution modifiers
Function modifier `onlyMakers` requires that only an approved maker contract can call this functions. Modifier `onlyAdmin` requires function caller to be the admin of the router. Modifier `makerOrAdmin` is a disjunction of both the above requirements.
:::

## Useful routers

### `SimpleRouter`

The [`SimpleRouter` contract](./code/strats/src/strategies/routers/SimpleRouter) provides a (simple) router instance. We illustrate the usage of the main router functions through it.

### `SmartRouter`

[LINK TO BE EDITED]

The [`SmartRouter` contract](https://github.com/mangrovedao/mangrove-strats/blob/feat/smartRouter/src/strategies/routers/SmartRouter.sol) delegates pull and push logic implementation to arbitrary contracts that implement the [`AbstractRoutingLogic` interface](https://github.com/mangrovedao/mangrove-strats/blob/feat/smartRouter/src/strategies/routing_logic/abstract/AbstractRoutingLogic.sol). It implements `SimpleRouter` as its default route.

## Liquidity flows

Routers receive requests from approved %%maker contracts|maker-contract%% (see [gatekeeping](#gatekeeping)). Request can be either to manage inbound (offer taker's payment) or outbound cash flow.

### Push request

```solidity reference title=""
https://github.com/mangrovedao/mangrove-strats/blob/82d730230ed2457b4f7bcdbaa7efb012db528203/src/strategies/routers/abstract/AbstractRouter.sol#L64-L69
```

* **Input**:
  * `token` is the asset the maker contract wishes to push
  * `reserveId` is the address of the offer owner whose funds are being pushed
  * `amount` is the amount of asset that should be transferred from the calling maker contract
* **Output**: fraction of `amount` that was successfully `pushed` to offer owner's `reserveId`.
* **Usage**: transfer funds from the maker contracts to an offer owner's reserve. For instance if the reserve is an account on a lender, the router will have a custom `push` that will take care of calling the proper deposit function.
* **SimpleRouter behavior**: transfer funds from `msg.sender` to `reserveId`. Returns 0 if transfer failed, returns `amount` otherwise.

### Pull request

```solidity reference title=""
https://github.com/mangrovedao/mangrove-strats/blob/82d730230ed2457b4f7bcdbaa7efb012db528203/src/strategies/routers/abstract/AbstractRouter.sol#L43-L49
```

* **Input**:
  * `token` is the asset the maker contract wishes to pull
  * `reserveId` is the address of the offer owner where the funds need to be pulled from
  * `amount` is the amount of asset that should be transferred from `reserveId` to the calling maker contract
  * `strict` is used when the calling maker contract accepts to receive more funds from reserve than required (this may happen for gas optimization)
* **Output**: fraction of `amount` that was successfully `pulled` to `msg.sender`.
* **Usage**: transfer funds from an offer owner's reserve to the calling maker contracts. For instance if the reserve is an account on a lender, the router will have a custom `pull` that will take care of calling the proper redeem function.
* **SimpleRouter behavior**: transfer funds from `reserveId` to `msg.sender`. Returns 0 if transfer failed, returns `amount` otherwise.

## Gatekeeping

### Binding a router to a maker contract

```solidity reference title=""
https://github.com/mangrovedao/mangrove-strats/blob/82d730230ed2457b4f7bcdbaa7efb012db528203/src/strategies/routers/abstract/AbstractRouter.sol#L43-L49
```

Function approves `makerContract` as a user of the router. The [`unbind`](https://github.com/mangrovedao/mangrove-strats/blob/82d730230ed2457b4f7bcdbaa7efb012db528203/src/strategies/routers/abstract/AbstractRouter.sol#L110-L113) function can be called to revoke the approval.

### Router activation

```solidity reference title=""
https://github.com/mangrovedao/mangrove-strats/blob/82d730230ed2457b4f7bcdbaa7efb012db528203/src/strategies/routers/abstract/AbstractRouter.sol#L138-L140
```

* **Usage**: performs all router centric approvals that are necessary to route `token` liquidity. For instance a router using a lender might need to approve the lender for transferring `token` in deposit calls.
* **SimpleRouter behavior**: SimpleRouter does not need to approve any contract, and `activate` is a no-op in that context.

### Router checklist

```solidity reference title=""
https://github.com/mangrovedao/mangrove-strats/blob/82d730230ed2457b4f7bcdbaa7efb012db528203/src/strategies/routers/abstract/AbstractRouter.sol#L121-L125
```

* **Usage**: verifies that the router has performed and received all the necessary approvals to route `token` liquidity for offer owner's `reserveId`. The function throws with a reason when the first missing approval is detected.
* **SimpleRouter behavior**: it verifies that `reserveId` has approved the router for `token` transfer. Does not throw if offer owner's `reserveId` is the router itself.

:::info Plug and play routing
Since routers are autonomous smart contracts, it is possible to modify an offer logic without redeploying the corresponding maker contracts. The `setRouter` function of all library based maker contracts can be used to set a new router. By setting a new router for the maker contract, you are indirectly modifying the offer logic of the contract. However the gas requirement of the offer logic is impacted by the router's design. To cope with this, routers provide the `routerGaseq()` function that returns the amount of gas that is necessary to cover a call to `pull` and `push`.

Note that maker contracts' view `offerGasreq` returns the sum of the offer logic's raw %%`gasreq`|gasreq%% (without taking router into account) and the router specific `gasreq`
:::
