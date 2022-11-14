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

**TODO**

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

**TODO**

```solidity
function minVolume(
    address outbound_tkn, 
    address inbound_tkn, 
    uint gasreq
) public view returns (uint)
```

### Function `getProvision`

**TODO**

```solidity
function getProvision(
    address outbound_tkn, 
    address inbound_tkn, 
    uint ofr_gasreq, 
    uint ofr_gasprice
) public view returns (uint)
```

and

**TODO**

```solidity
function getProvision(
    address outbound_tkn, 
    address inbound_tkn, 
    uint gasreq
) public view returns (uint)
```

### Functions `isEmptyOB`, `getFee`, and `minusFee`

**TODO**

```solidity
function isEmptyOB(address outbound_tkn, address inbound_tkn) public view returns (bool)
function getFee(address outbound_tkn, address inbound_tkn, uint outVolume) public view returns (uint)
function minusFee(address outbound_tkn, address inbound_tkn, uint outVolume) public view returns (uint) 
```

### Functions `global` and `local`

**TODO**

```solidity
function global() public view returns (MgvStructs.GlobalPacked)
function local(address outbound_tkn, address inbound_tkn) public view returns (MgvStructs.LocalPacked)
```

### Function `marketOrder`

**TODO**

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