---
description: How to determine gas requirements.
sidebar_position: 4
---

# Determining gas requirements

Determining %%gas requirements (gasreq)|gasreq%% for your offer logic in a maker contract is important to avoid failures, save on provision, and make offers as attractable as possible. There is a lot that can be said and calculated about gas requirements - we will focus on the essential here, and give you pointers for your own assessments.

## What to test

To determine the `gasreq`, you need to measure the **worst case gas usage **when %%`makerExecute`|makerExecute%% and %%`makerPosthook`|makerPosthook%% are called. There could be exception cases which are very gas costly, where you simply want the offer to fail instead (and you could skip those).

As a strat builder, you should **verify your gas usage** in some specific scenarios, and **compare deltas to other scenarios** tested [here](https://github.com/mangrovedao/mangrove-core/blob/develop/test/core/gas/README.md#scenarios). You should then use the results to set a `gasreq` for your strat which covers the desired worst-case scenarios. The gas measurements are for the inner-most operation.

The gasreq should be taken into account when [provisioning](../../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-provision.md).

## Exisiting strategies

### MangroveOrder

Here, we will calculate the optimum `gasreq` to use [MangroveOrder](../technical-references/code/strats/src/strategies/MangroveOrder.md), a Forwarder logic with a [simple router](../technical-references/router.md):

* MangroveOrder's most expensive case is `148451` (more details [here](https://github.com/mangrovedao/mangrove-strats/blob/350223c0c9766b526d4883fab5f4f904382878c4/test/strategies/MgvOrder.gasreq.t.sol#L18))

It's worth mentioning as well that there is a slightly more expensive path going through Mangrove core, which should be taken into account:
* `19675` is the comparable case for core (see [here](https://github.com/mangrovedao/mangrove-strats/blob/350223c0c9766b526d4883fab5f4f904382878c4/test/strategies/MgvOrder.gasreq.t.sol#L22))
* `22841` is the more expensive path, which would be if an offer existed in the same bin as the reposted offer (see [here](https://github.com/mangrovedao/mangrove-strats/blob/350223c0c9766b526d4883fab5f4f904382878c4/test/strategies/MgvOrder.gasreq.t.sol#L23))

The difference between the two is just above `3000`, hence we add that and round up to get an optimum `gasreq` of `82000` for MangroveOrder.



### Kandel

#### Standard Kandel

Here, we will calculate the optimum `gasreq` to use the [Kandel](/docs/general/kandel/README.md) strategy:

* Kandel's most expensive case is `121413` (see [here](https://github.com/mangrovedao/mangrove-strats/blob/350223c0c9766b526d4883fab5f4f904382878c4/test/strategies/kandel/Kandel.gasreq.t.sol#L21))

Similarly to [MangroveOrder](#mangroveorder), there is a more expensive path going through Mangrove core to be taken into account:
* `44339` is the comparable case for core (see [here](https://github.com/mangrovedao/mangrove-strats/blob/350223c0c9766b526d4883fab5f4f904382878c4/test/strategies/kandel/Kandel.gasreq.t.sol#L23))
* `45090` is the more expensive path, if another offer existed on the dual offer's bin (see [here](https://github.com/mangrovedao/mangrove-strats/blob/350223c0c9766b526d4883fab5f4f904382878c4/test/strategies/kandel/Kandel.gasreq.t.sol#L24))
* The difference is below `1000`.

Similarly for the primary offer:
* `19675` is the comparable case for core (see [here](https://github.com/mangrovedao/mangrove-strats/blob/350223c0c9766b526d4883fab5f4f904382878c4/test/strategies/kandel/Kandel.gasreq.t.sol#L27))
* `22841` is the more expensive path, if an offer existed in the same bin as the reposted offer (see [here](https://github.com/mangrovedao/mangrove-strats/blob/350223c0c9766b526d4883fab5f4f904382878c4/test/strategies/kandel/Kandel.gasreq.t.sol#L28))
* The difference is just above `3000`, so we add both (`4000`) and round it up to get `126000`.

#### Kandel-Aave

With [Kandel-Aave](/docs/general/kandel/kandel-aave/kandel-aave.md), the Strategy reserve (Unallocated and Published liquidity) is deposited on Aave:

* The most expensive case is `624677` (see [here](https://github.com/mangrovedao/mangrove-strats/blob/350223c0c9766b526d4883fab5f4f904382878c4/test/strategies/kandel/Kandel.gasreq.t.sol#L33-L34))
* However, that is with a specific pair of tokens, so it's not an upper bound.
* With the additional `4000` previously calculated and some rounding up, we amount to `629000`.