## DirectWithBidsAndAsksDistribution

### PopulateStart

```solidity
event PopulateStart()
```

logs the start of a call to populate
By emitting this, an indexer will be able to know that the following events are in the context of populate.

### PopulateEnd

```solidity
event PopulateEnd()
```

logs the end of a call to populate
By emitting this, an indexer will know that the previous PopulateStart event is over.

### RetractStart

```solidity
event RetractStart()
```

logs the start of a call to retractOffers
By emitting this, an indexer will be able to know that the following events are in the context of retract.

### RetractEnd

```solidity
event RetractEnd()
```

logs the end of a call to retractOffers
By emitting this, an indexer will know that the previous RetractStart event is over.

### constructor

```solidity
constructor(contract IMangrove mgv, address reserveId) internal
```

Constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment. |
| reserveId | address | identifier of this contract's reserve when using a router. |

### DistributionOffer

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

```solidity
struct DistributionOffer {
  uint256 index;
  Tick tick;
  uint256 gives;
}
```

### Distribution

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

```solidity
struct Distribution {
  struct DirectWithBidsAndAsksDistribution.DistributionOffer[] asks;
  struct DirectWithBidsAndAsksDistribution.DistributionOffer[] bids;
}
```

### populateChunkInternal

```solidity
function populateChunkInternal(struct DirectWithBidsAndAsksDistribution.Distribution distribution, uint256 gasreq, uint256 gasprice) internal
```

Publishes bids/asks for the distribution in the `indices`. Care must be taken to publish offers in meaningful chunks. For instance, for Kandel an offer and its dual should be published in the same chunk (one being optionally initially dead).

_Gives of 0 means create/update and then retract offer (but update price, gasreq, gasprice of the offer)_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| distribution | struct DirectWithBidsAndAsksDistribution.Distribution | the distribution of bids and asks to populate |
| gasreq | uint256 | the amount of gas units that are required to execute the trade. |
| gasprice | uint256 | the gasprice used to compute offer's provision. |

### populateOfferListChunkInternal

```solidity
function populateOfferListChunkInternal(struct DirectWithBidsAndAsksDistribution.DistributionOffer[] offers, enum OfferType ba, struct IOfferLogic.OfferArgs args) internal
```

populates one of the offer lists with the given offers

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| offers | struct DirectWithBidsAndAsksDistribution.DistributionOffer[] | the offers to populate |
| ba | enum OfferType | whether to populate bids or asks |
| args | struct IOfferLogic.OfferArgs | a reused offer creation args structure with defaults passed from caller. |

### populateIndex

```solidity
function populateIndex(enum OfferType ba, uint256 offerId, uint256 index, struct IOfferLogic.OfferArgs args, uint256 minGives) internal
```

publishes (by either creating or updating) a bid/ask at a given price index.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | whether the offer is a bid or an ask. |
| offerId | uint256 | the Mangrove offer id (0 for a new offer). |
| index | uint256 | the price index. |
| args | struct IOfferLogic.OfferArgs | the argument of the offer. `args.gives=0` means offer will be created/updated and then retracted. |
| minGives | uint256 | the minimum gives to satisfy density requirement - used for creating/updating offers when args.gives=0. |

### retractOffers

```solidity
function retractOffers(uint256 from, uint256 to) public
```

retracts and deprovisions offers of the distribution interval `[from, to[`.

_use in conjunction of `withdrawFromMangrove` if the user wishes to redeem the available WEIs._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | uint256 | the start index. |
| to | uint256 | the end index. |

### retractOffersOnOfferList

```solidity
function retractOffersOnOfferList(uint256 from, uint256 to, enum OfferType ba) internal
```

retracts and deprovisions offers of the distribution interval `[from, to[` for the given offer type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | uint256 | the start index. |
| to | uint256 | the end index. |
| ba | enum OfferType | the offer type. |

### getOffer

```solidity
function getOffer(enum OfferType ba, uint256 index) public view returns (Offer offer)
```

gets the Mangrove offer at the given index for the offer type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type. |
| index | uint256 | the index. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offer | Offer | the Mangrove offer. |

### offeredVolume

```solidity
function offeredVolume(enum OfferType ba) public view returns (uint256 volume)
```

gets the total gives of all offers of the offer type.

_function is very gas costly, for external calls only._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | offer type. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| volume | uint256 | the total gives of all offers of the offer type. |

