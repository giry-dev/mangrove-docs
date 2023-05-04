## DirectWithBidsAndAsksDistribution

### LOW_VOLUME

```solidity
bytes32 LOW_VOLUME
```

The offer has too low volume to be posted.

### PopulateStart

```solidity
event PopulateStart()
```

logs the start of a call to populate

### PopulateEnd

```solidity
event PopulateEnd()
```

logs the end of a call to populate

### RetractStart

```solidity
event RetractStart()
```

logs the start of a call to retractOffers

### RetractEnd

```solidity
event RetractEnd()
```

logs the end of a call to retractOffers

### constructor

```solidity
constructor(contract IMangrove mgv, uint256 gasreq, address reserveId) internal
```

Constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment. |
| gasreq | uint256 | the gasreq to use for offers |
| reserveId | address | identifier of this contract's reserve when using a router. |

### Distribution

```solidity
struct Distribution {
  uint256[] indices;
  uint256[] baseDist;
  uint256[] quoteDist;
}
```

### populateChunk

```solidity
function populateChunk(struct DirectWithBidsAndAsksDistribution.Distribution distribution, uint256[] pivotIds, uint256 firstAskIndex, uint256 gasreq, uint256 gasprice) internal
```

Publishes bids/asks for the distribution in the `indices`. Caller should follow the desired distribution in `baseDist` and `quoteDist`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| distribution | struct DirectWithBidsAndAsksDistribution.Distribution | the distribution of base and quote for indices. |
| pivotIds | uint256[] | the pivots to be used for the offers. |
| firstAskIndex | uint256 | the (inclusive) index after which offer should be an ask. |
| gasreq | uint256 | the amount of gas units that are required to execute the trade. |
| gasprice | uint256 | the gasprice used to compute offer's provision. |

### populateIndex

```solidity
function populateIndex(enum OfferType ba, uint256 offerId, uint256 index, struct IOfferLogic.OfferArgs args) internal returns (bytes32 result)
```

publishes (by either creating or updating) a bid/ask at a given price index.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | whether the offer is a bid or an ask. |
| offerId | uint256 | the Mangrove offer id (0 for a new offer). |
| index | uint256 | the price index. |
| args | struct IOfferLogic.OfferArgs | the argument of the offer. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| result | bytes32 | the result from Mangrove or Direct (an error if `args.noRevert` is `true`). |

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

