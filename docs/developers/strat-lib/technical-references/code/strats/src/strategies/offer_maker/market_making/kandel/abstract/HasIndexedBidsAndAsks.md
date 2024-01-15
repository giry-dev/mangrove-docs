# Solidity API

## HasIndexedBidsAndAsks

_utilizes the `IHasOfferListOfOfferType` contract._

### SetLength

```solidity
event SetLength(uint256 value)
```

the length of the index has been set.
By emitting this data, an indexer will be able to keep track of what length is used.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | the length. |

### SetIndexMapping

```solidity
event SetIndexMapping(enum OfferType ba, uint256 index, uint256 offerId)
```

a new offer of type `ba` with `offerId` was created at price `index`
By emitting this data, an indexer will be able to keep track of what offer has what index.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type |
| index | uint256 | the index |
| offerId | uint256 | the Mangrove offer id. |

### length

```solidity
uint256 length
```

the length of the map.

### offerIdOfIndex

```solidity
function offerIdOfIndex(enum OfferType ba, uint256 index) public view returns (uint256 offerId)
```

maps index of offers to offer id on Mangrove.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type |
| index | uint256 | the index |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerId | uint256 | the Mangrove offer id. |

### indexOfOfferId

```solidity
function indexOfOfferId(enum OfferType ba, uint256 offerId) public view returns (uint256 index)
```

Maps an offer type and Mangrove offer id to index.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type |
| offerId | uint256 | the Mangrove offer id. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | uint256 | the index. |

### setIndexMapping

```solidity
function setIndexMapping(enum OfferType ba, uint256 index, uint256 offerId) internal
```

Sets the Mangrove offer id for an index and vice versa.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type |
| index | uint256 | the index |
| offerId | uint256 | the Mangrove offer id. |

### setLength

```solidity
function setLength(uint256 length_) internal
```

sets the length of the map.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| length_ | uint256 | the new length. |

