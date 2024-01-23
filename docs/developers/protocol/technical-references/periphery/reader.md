---
title: MgvReader
sidebar_position: 1
---

The `MgvReader` contract collects a number of view and pure functions that provide convenient views on Mangrove's state and various utilities for interacting with Mangrove.

## Configuration view functions

Functions for reading the Mangrove global and local configurations as ABI compatible structs instead of the packed configurations used in Mangrove itself.

See the [Governance Parameters](../governance-parameters/) section for more details.

### function `configInfo(olKey)`

Returns both the global configuration for `Mangrove` and the configuration of the given offer list in ABI compatible structs.

```solidity
function configInfo(OLKey memory olKey)
    external view
    returns (GlobalUnpacked memory _global, LocalUnpacked memory _local);
```

### function `globalUnpacked()`

Returns the global configuration for `Mangrove` in an ABI compatible struct.

```solidity
function globalUnpacked()
    external view
    returns (GlobalUnpacked memory);
```

### function `localUnpacked(olKey)`

Returns the configuration of the given offer list in an ABI compatible struct.

```solidity
function localUnpacked(OLKey memory olKey)
    external view
    returns (LocalUnpacked memory);
```

## Offer view functions

### function `offerInfo(olKey, offerId)`

Returns information about an offer in ABI compatible structs.

```solidity
function offerInfo(OLKey memory olKey, uint offerId)
    external view
    returns (OfferUnpacked memory offer, OfferDetailUnpacked memory offerDetail);
```

## Offer list view functions

### Function `isEmptyOB(olKey)`

Returns true if the given offer list is empty.

```solidity
function isEmptyOB(OLKey memory olKey)
    external view
    returns (bool);
```

### Function `offerListEndPoints(olKey, fromId, maxOffers)`

Returns two uints (`startId`, `length`):

`startId` is either:

- `fromId`, if the offer with that is live,
- the id of the best live offer, or
- 0 if the offer list is empty.

`length` is 0 if `startId == 0`. Otherwhise, it is the number of live offers as good or worse than the offer with id `startId`, though it can max be `maxOffers` as the function will not traverse more than `maxOffers` before returning.

```solidity
function offerListEndPoints(OLKey memory olKey, uint fromId, uint maxOffers)
    external view
    returns (uint startId, uint length);
```

### Function `packedOfferList(olKey, fromId, maxOffers)`

Returns up to `max` number of offers from the given offer list, optionally starting from a certain offer ID, in packed form:

```solidity
(uint nextOfferId, uint[] memory offerIds, Offer[] memory offers, OfferDetail[] memory offerDetails)
```

- `nextOfferId` is the id of next offer (0 means this is the last offer)
- `offerIds` is an array of offerIds in the order book
- `offers` (as bytes32) hold the core price volume information on offers
- `offerDetails` (as bytes32) holds maker address and provision/penalty-related info for offers.

The array will be of size `min(# of offers in out/in list, maxOffers)`.

Refer to the [Literate Source Code for Mangrove](../codebase.md) for more information on the structs used in Mangrove core.

```solidity
function packedOfferList(OLKey memory olKey, uint fromId, uint maxOffers)
    external view
    returns (uint, uint[] memory, Offer[] memory, OfferDetail[] memory);
```

### Function `offerList(olKey, fromId, maxOffers)`

As `packedOfferList` but returns the offers in ABI compatible structs:

```solidity
function offerList(OLKey memory olKey, uint fromId, uint maxOffers)
    external view
    returns (uint, uint[] memory, OfferUnpacked[] memory, OfferDetailUnpacked[] memory);
```

### function `nextOfferIdById(olKey, offerId)`

Get the ID of the offer after a given offer, given its id.

```solidity
function nextOfferIdById(OLKey memory olKey, uint offerId)
    external view
    returns (uint);
```

### function `nextOfferId(olKey, offer)`

Get the ID of the offer after a given offer.

```solidity
function nextOfferId(OLKey memory olKey, Offer offer)
    external view
    returns (uint);
```

### function `prevOfferIdById(olKey, offerId)`

Get the ID of the offer before a given offer, given its id.

```solidity
function nextOfferId(OLKey memory olKey, Offer offer)
    external view
    returns (uint);
```

### function `prevOfferId(olKey, offer)`

Get the ID of the offer before a given offer.

```solidity
function prevOfferIdById(OLKey memory olKey, uint offerId)
    external view
    returns (uint);
```

## Offer list utility functions

### Function `minVolume(olKey, gasreq)`

Returns the minimum outbound_tkn volume that satisfies the %%density|density%% of the given offer list for an offer that requires `gasreq` gas.

```solidity
function minVolume(OLKey memory olKey, uint gasreq)
    external view
    returns (uint);
```

### Function `getProvision(olKey, gasreq, gasprice)`

Returns the provision necessary to post an offer that requires `gasreq` gas at `gasprice` on the given offer list. You can set `gasprice=0` or use the next overload to use Mangrove's internal gasprice estimate.

```solidity
function getProvision(OLKey memory olKey, uint gasreq, uint gasprice)
    external view
    returns (uint);
```

### Function `getProvision(olKey, gasreq)`

Returns the provision necessary to post an offer that requires `gasreq` gas at Mangrove's internal gasprice estimate on the given offer list.

```solidity
function getProvisionWithDefaultGasPrice(OLKey memory olKey, uint gasreq)
    external view
    returns (uint);
```

### Function `getFee(olKey, outVolume)`

Returns the fee that would be extracted from the given volume of `outbound_tkn` tokens on the given offer list.

```solidity
function getFee(OLKey memory olKey, uint outVolume)
    external view
    returns (uint);
```

### Function `minusFee(olKey, outVolume)`

Returns the given amount of `outbound_tkn` tokens minus the fee on the given offer list.

```solidity
function minusFee(OLKey memory olKey, uint outVolume)
    external view
    returns (uint);
```

## Simulation functions

These functions are a cheaper way to approximate the results of a market order than by actually executing it and reverting.

The `marketOrderBy*` functions simulate a market order on `Mangrove` and returns the cumulative `totalGot`, `totalGave` and `totalGasreq` for each offer traversed:

```solidity
struct VolumeData {
  uint totalGot;
  uint totalGave;
  uint totalGasreq;
}
```

In the simulation, it is assumed that offer execution is successful and uses exactly its `gasreq`.

The simulation does not account for `gasbase`. Furthermore:

- Calling this from an EOA will give you an estimate of the volumes you will receive, but you may as well `eth_call` Mangrove.
- Calling this from a contract will let the contract choose what to do after receiving a response.

Please refer to the section [Market orders](../market-order/README.md) for more information on market orders and the function parameters.

### Function `simulateMarketOrderByTick(olKey, maxTick, fillVolume, fillWants)`

Simulate a call to `Mangrove.marketOrderByTick`. Parameters are the same.

```solidity
function simulateMarketOrderByTick(
    OLKey memory olKey, 
    Tick maxTick, 
    uint fillVolume, 
    bool fillWants
)
    external view
    returns (VolumeData[] memory);
```

### Function `simulateMarketOrderByTick(olKey, maxTick, fillVolume, fillWants, accumulate)`

As the previous function, but optionally only return the total cumulative volume:

- If `accumulate` is `false`, only return the total cumulative volume.
- If `accumulate` is `true`, return the cumulative `totalGot`, `totalGave`, and `totalGasreq` for each offer traversed.

```solidity
function simulateMarketOrderByTick(
    OLKey memory olKey, 
    Tick maxTick, 
    uint fillVolume, 
    bool fillWants,
    bool accumulate
)
    external view
    returns (VolumeData[] memory);
```

### Function `simulateMarketOrderByVolume(olKey, takerWants, takerGives, fillWants)`

Simulate a call to `Mangrove.marketOrderByVolume`. Parameters are the same.

```solidity
function simulateMarketOrderByVolume(
    OLKey memory olKey,
    uint takerWants,
    uint takerGives,
    bool fillWants
)
    external view
    returns (VolumeData[] memory);
```

### Function `simulateMarketOrderByVolume(olKey, takerWants, takerGives, fillWants, accumulate)`

As the previous function, but optionally only return the total cumulative volume:

- If `accumulate` is `false`, only return the total cumulative volume.
- If `accumulate` is `true`, return the cumulative `totalGot`, `totalGave`, and `totalGasreq` for each offer traversed.

```solidity
function simulateMarketOrderByVolume(
    OLKey memory olKey,
    uint takerWants,
    uint takerGives,
    bool fillWants,
    bool accumulate
)
    external view
    returns (VolumeData[] memory);
```

## Open markets tracking

`Mangrove` itself does not provide a way to enumerate the currently open offer lists. Instead, open markets can be tracked by off-chain indexing of the `SetActive` event or by using the following functions in `MgvReader`.

`MgvReader` holds an array of open markets and this array can be permissionlessly updated using the `updateMarket` function. Mangrove governance will normally do this whenever a market is opened or closed.

Note that (contrary to `Mangrove` itself) these functions track markets, not just single offer lists. A market is modelled with this struct:

```solidity
struct Market {
  address tkn0;
  address tkn1;
  uint tickSpacing;
}
```

This struct represents both offer lists of the market: (`tkn0`, `tkn1`, `tickSpacing`) and (`tkn1`, `tkn0`, `tickSpacing`).

Note that `Market` is non-oriented offer lists, ie. there is no base/quote orientation and `Market(tkn0, tkn1, tickSpacing)` is equivalent to `Market(tkn1, tkn0, tickSpacing)`.

Functions that return the configuration of a market, returns the following struct which contains the configuration of both of the offer lists:

```solidity
struct MarketConfig {
  LocalUnpacked config01;
  LocalUnpacked config10;
}
```

### function `numOpenMarkets()`

Returns the number of open markets.

```solidity
function numOpenMarkets()
    external view
    returns (uint);
```

### function `openMarkets()`

Returns all open markets on `Mangrove` and their configurations.

If the $i$th market is (`tkn0`,`tkn1`,`tickSpacing`), then the $i$th config will be a `MarketConfig` where `config01` is the config for the (`tkn0`,`tkn1`,`tickSpacing`) offer list, and config10 is the config for the (`tkn1`,`tkn0`,`tickSpacing`) offer list.

```solidity
function openMarkets()
    external view
    returns (Market[] memory, MarketConfig[] memory);
```

### function `openMarkets(withConfig)`

As `openMarkets()` but can optionally skip querying `Mangrove` for all the market configurations (in which case the returned configuration array will be empty).

```solidity
function openMarkets(bool withConfig)
    external view
    returns (Market[] memory, MarketConfig[] memory);
```

### function `openMarkets(from, maxLen)`

Get a slice of open markets, with accompanying market configs. The `from` parameter is an index into `MgvReader`'s internal array of open markets.

```solidity
function openMarkets(uint from, uint maxLen)
    external view
    returns (Market[] memory markets, MarketConfig[] memory configs)
```

### function `openMarkets(from, maxLen, withConfig)`

As `openMarkets(from, maxLen)` but can optionally skip querying `Mangrove` for all the market configurations (in which case the returned configuration array will be empty).

```solidity
function openMarkets(uint from, uint maxLen, bool withConfig)
    external view
    returns (Market[] memory markets, MarketConfig[] memory configs);
```

### function `isMarketOpen(market)`

Returns `true` if market is open; otherwise, `false`.

NB: May not reflect the true state of the market on Mangrove if `updateMarket` was not called recently enough.

```solidity
function isMarketOpen(Market memory market)
    external view
    returns (bool);
```

### function `marketConfig(market)`

Return the configuration for the given market.

In the returned `config` struct, `config01` and `config10` follow the order given in arguments. I.e, `config01` is the configuration for the (`tkn0`, `tkn1`, `tickSpacing`) offer list.

This function queries `Mangrove` so all the returned info is up-to-date.

```solidity
function marketConfig(Market memory market)
    external view
    returns (MarketConfig memory config);
```

### function `updateMarket(market)`

Permissionless update of `MgvReader`'s state to reflect whether the given market is open or closed. Will consider a market open iff either of the offer lists identified by `market` are open on Mangrove.

Normally called by governance when a market is opened or closed.

```solidity
function updateMarket(Market memory market)
    external;
```

## Source Code

The [`MgvReader` source](https://github.com/mangrovedao/mangrove-core/blob/2ae172805fd8b309c30b2dc877dba66245abbb3e/src/periphery/MgvReader.sol) is available.
