---
title: Reader
sidebar_position: 1
---

## View Functions - `MgvReader`

The `MgvReader` contract collects a number of view functions that provide convenient views on the Mangrove core state.

### Function `offerListEndPoints`

Returns two uints (`startId`, `length`). `startId` is the id of the best live offer with id equal or greater than
`fromId`, 0 if there is no such offer. 

`length` is 0 if `startId == 0`. Otherwhise, it is the number of live offers as good or worse than the offer with id `startId`.

```solidity
function offerListEndPoints(
        address outbound_tkn, 
        address inbound_tkn, 
        uint fromId, 
        uint maxOffer
) public view returns (uint startId, uint length)
```

### Function `packedOfferList`

Returns the orderbook for the `outbound_tkn`/`inbound_tkn` pair in packed form: 
`(uint nextOfferId, uint[] memory offerIds, MgvStructs.OfferPacked[] memory offers, MgvStructs.OfferDetailPacked[] memory offerDetails)`.

* `nextOfferId` is the id of next offer (0 means this is the last offer)
* `offerIds` is an array of offerIds in the orderbook 
* `offers` (as bytes32) hold the core price volume information on offers
* `offerDetails` (as bytes32) holds maker address and provision/penalty-related info for offers

The array will be of size `min(# of offers in out/in list, maxOffers)`.

Refer to the [Annotated Code for Mangrove Core](../codebase.md) for more information on the structs used in Mangrove core.

```solidity
function packedOfferList(
    address outbound_tkn, 
    address inbound_tkn, 
    uint fromId, 
    uint maxOffers
) public view returns (
    uint, 
    uint[] memory, 
    MgvStructs.OfferPacked[] memory, 
    MgvStructs.OfferDetailPacked[] memory)
```

### Function `offerList`

Returns the orderbook for the `outbound_tkn/inbound_tkn` pair in unpacked form: `(uint nextOfferId, uint[] memory offerIds, MgvStructs.OfferUnpacked[] memory offers, MgvStructs.OfferDetailUnpacked[] memory offerDetails)`.

* `nextOfferId` is the id of next offer (0 means this is the last offer)
* `offerIds` is an array of offerIds in the orderbook 
* `offers` (as structs) hold the core price volume information on offers
* `offerDetails` (as structs) holds maker address and provision/penalty-related info for offers

The array will be of size `min(# of offers in out/in list, maxOffers)`.

Refer to the [Annotated Code for Mangrove Core](../codebase.md) for more information on the structs used in Mangrove core.

```solidity
function offerList(
    address outbound_tkn, 
    address inbound_tkn, 
    uint fromId, 
    uint maxOffers
) public view returns (
    uint, 
    uint[] memory, 
    MgvStructs.OfferUnpacked[] memory, 
    MgvStructs.OfferDetailUnpacked[] memory
)
```

### Function `minVolume`

Returns the minimum `outbound_tkn` volume to give on the `outbound_tkn/inbound_tkn` offer list for an offer that requires `gasreq` gas.

```solidity
function minVolume(
    address outbound_tkn, 
    address inbound_tkn, 
    uint gasreq
) public view returns (uint)
```

### Function `getProvision`

Returns the provision necessary to post an offer on the `outbound_tkn/inbound_tkn` offer list. You can set `gasprice=0` or use the second overload of `getProvision` to use Mangrove's internal gasprice estimate.

```solidity
function getProvision(
    address outbound_tkn, 
    address inbound_tkn, 
    uint ofr_gasreq, 
    uint ofr_gasprice
) public view returns (uint)
```

```solidity
function getProvision(
    address outbound_tkn, 
    address inbound_tkn, 
    uint gasreq
) public view returns (uint)
```

### Function `isEmptyOB`

The view function `isEmptyOB` is a sugar function for checking whether a offer list is empty. There is no offer with id 0, so if the id of the offer list's best offer is 0, it means the offer list is empty.

```solidity
function isEmptyOB(address outbound_tkn, address inbound_tkn) public view returns (bool)
```

### Function `getFee`

Returns the fee that would be extracted from the given volume of `outbound_tkn` tokens on Mangrove's `outbound_tkn/inbound_tkn` offer list.

```solidity
function getFee(address outbound_tkn, address inbound_tkn, uint outVolume) public view returns (uint)
```

### Function `minusFee`

Returns the given amount of `outbound_tkn` tokens minus the fee on Mangrove's `outbound_tkn/inbound_tkn` offer list.

```solidity
function minusFee(address outbound_tkn, address inbound_tkn, uint outVolume) public view returns (uint) 
```

### Functions `global` and `local`

View functions `global` and `local` are sugar functions for getting only the `global` or `local` (specific to the `outbound_tkn/inbound_tkn` offer list) configuration for Mangrove.

```solidity
function global() public view returns (MgvStructs.GlobalPacked)
function local(address outbound_tkn, address inbound_tkn) public view returns (MgvStructs.LocalPacked)
```

### Function `marketOrder`

The `marketOrder` function simulates a market order on Mangrove and returns the cumulative `totalGot`, `totalGave` and `totalGasreq` for each offer traversed. 

Please refer to the section [Market Order in Taking Offers](../taking-and-making-offers/taker-order/README.md) for more information on market orders.

It the simulation, it is assumed that offer execution is successful and uses exactly its `gasreq`. 

The simulation does not account for `gasbase`. Furthermore,

* Calling this from an EOA will give you an estimate of the volumes you will receive, but you may as well `eth_call` Mangrove.
* Calling this from a contract will let the contract choose what to do after receiving a response.
* If `!accumulate` is set, only return the total cumulative volume.

```solidity
function marketOrder(
address outbound_tkn,
address inbound_tkn,
uint takerWants,
uint takerGives,
bool fillWants,
bool accumulate
) public view returns (VolumeData[] memory)
```

## Source Code

The [`MgvReader` source](https://github.com/mangrovedao/mangrove-core/blob/master/src/periphery/MgvReader.sol) is available.

:::danger Deployment Address

Please refer to [Deployment Addresses](../contract-addresses.md) to verify the address of `MgvReader` for a particular chain.

:::