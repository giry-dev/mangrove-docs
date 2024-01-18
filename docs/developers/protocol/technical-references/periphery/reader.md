---
title: MgvReader
sidebar_position: 1
---

The `MgvReader` contract collects a number of view functions that provide convenient views on Mangrove's core state.

### Function `offerListEndPoints`

Returns two uints (`startId`, `length`). `startId` is the id of the best live offer with id equal or greater than
`fromId`, 0 if there is no such offer. 

`length` is 0 if `startId == 0`. Otherwhise, it is the number of live offers as good or worse than the offer with id `startId`.

```solidity
function offerListEndPoints(
    OLKey memory olKey, 
    uint fromId, 
    uint maxOffers
) public view returns (uint startId, uint length)
```

### Function `packedOfferList`

Returns the order book for the `outbound_tkn`/`inbound_tkn`/`tickSpacing` (`olkey`) pair in packed form: 
`(uint nextOfferId, uint[] memory offerIds, Offer[] memory offers, OfferDetail[] memory offerDetails)`.

* `nextOfferId` is the id of next offer (0 means this is the last offer)
* `offerIds` is an array of offerIds in the order book 
* `offers` (as bytes32) hold the core price volume information on offers
* `offerDetails` (as bytes32) holds maker address and provision/penalty-related info for offers

The array will be of size `min(# of offers in out/in list, maxOffers)`.

Refer to the [Annotated Code for Mangrove Core](../codebase.md) for more information on the structs used in Mangrove core.

```solidity
function packedOfferList(
    OLKey memory olKey, 
    uint fromId, 
    uint maxOffers
) public view returns (
    uint, 
    uint[] memory, 
    Offer[] memory, 
    OfferDetail[] memory)
```

### Function `offerList`

Returns the order book for the `outbound_tkn`/`inbound_tkn`/`tickSpacing` (`olkey`) pair in unpacked form: `(uint nextOfferId, uint[] memory offerIds, OfferUnpacked[] memory offers, OfferDetailUnpacked[] memory offerDetails)`.

* `nextOfferId` is the id of next offer (0 means this is the last offer)
* `offerIds` is an array of offerIds in the order book
* `offers` (as structs) hold the core price volume information on offers
* `offerDetails` (as structs) holds maker address and provision/penalty-related info for offers

The array will be of size `min(# of offers in out/in list, maxOffers)`.

Refer to the [Annotated Code for Mangrove Core](../codebase.md) for more information on the structs used in Mangrove core.

```solidity
function offerList(
    OLKey memory olKey, 
    uint fromId, 
    uint maxOffers
) public view returns (
    uint, 
    uint[] memory, 
    OfferUnpacked[] memory, 
    OfferDetailUnpacked[] memory)
```

### Function `minVolume`

Returns the minimum `outbound_tkn` volume to give on the `outbound_tkn`/`inbound_tkn`/`tickSpacing` (`olkey`) offer list for an offer that requires `gasreq` gas.

```solidity
function minVolume(
    OLKey memory olKey, 
    uint gasreq
) public view returns (uint)
```

### Function `getProvision`

Returns the provision necessary to post an offer on the `outbound_tkn`/`inbound_tkn`/`tickSpacing` (`olkey`) offer list. You can set `gasprice=0` or use the second function `getProvisionWithDefaultGasPrice` to use Mangrove's internal gasprice estimate.

```solidity
function getProvision(
    OLKey memory olKey, 
    uint ofr_gasreq, 
    uint ofr_gasprice
) public view returns (uint)
```

```solidity
  function getProvisionWithDefaultGasPrice(
    OLKey memory olKey, 
    uint ofr_gasreq
) public view returns (uint)

```

### Function `isEmptyOB`

The view function `isEmptyOB` is a sugar function for checking whether a offer list is empty. There is no offer with id 0, so if the id of the offer list's best offer is 0, it means the offer list is empty.

```solidity
function isEmptyOB(OLKey memory olKey) external view returns (bool)
```

### Function `getFee`

Returns the fee that would be extracted from the given volume of `outbound_tkn` tokens on Mangrove's `outbound_tkn`/`inbound_tkn`/`tickSpacing` (`olkey`) offer list.

```solidity
function getFee(OLKey memory olKey, uint outVolume) external view returns (uint)
```

### Function `minusFee`

Returns the given amount of `outbound_tkn` tokens minus the fee on Mangrove's `outbound_tkn`/`inbound_tkn`/`tickSpacing` (`olkey`) offer list.

```solidity
function minusFee(OLKey memory olKey, uint outVolume) external view returns (uint)

```

### Functions `global` and `local`

View functions `global` and `local` are sugar functions for getting only the `global` or `local` (specific to the `outbound_tkn`/`inbound_tkn`/`tickSpacing` (`olkey`) offer list) configuration for Mangrove.

```solidity
function global() external view returns (Global _global)

  function local(OLKey memory olKey) external view returns (Local _local)
```

### Function `marketOrder`


The `marketOrderByTick` and `marketOrderByVolume` functions simulate a market order on Mangrove and returns the cumulative `totalGot`, `totalGave` and `totalGasreq` for each offer traversed. 

Please refer to the section [Market orders](../market-order/README.md) for more information on market orders.

It the simulation, it is assumed that offer execution is successful and uses exactly its `gasreq`. 

The simulation does not account for `gasbase`. Furthermore,

* Calling this from an EOA will give you an estimate of the volumes you will receive, but you may as well `eth_call` Mangrove.
* Calling this from a contract will let the contract choose what to do after receiving a response.
* If `!accumulate` is set, only return the total cumulative volume.

```solidity
function simulateMarketOrderByTick(
    OLKey memory olKey, 
    Tick maxTick, 
    uint fillVolume, 
    bool fillWants
    )public view returns (VolumeData[] memory)

function simulateMarketOrderByVolume(
    OLKey memory olKey,
    uint takerWants,
    uint takerGives,
    bool fillWants,
    bool accumulate
) public view returns (VolumeData[] memory)


```

## Source Code

The [`MgvReader` source](https://github.com/mangrovedao/mangrove-core/blob/2ae172805fd8b309c30b2dc877dba66245abbb3e/src/periphery/MgvReader.sol) is available.
