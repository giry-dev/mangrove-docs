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

### askOfferIdOfIndex

```solidity
mapping(uint256 => uint256) askOfferIdOfIndex
```

Mangrove's offer id of an ask at a given index.

### bidOfferIdOfIndex

```solidity
mapping(uint256 => uint256) bidOfferIdOfIndex
```

Mangrove's offer id of a bid at a given index.

### indexOfAskOfferId

```solidity
mapping(uint256 => uint256) indexOfAskOfferId
```

An inverse mapping of askOfferIdOfIndex. E.g., indexOfAskOfferId[42] is the index in askOfferIdOfIndex at which ask of id #42 on Mangrove is stored.

### indexOfBidOfferId

```solidity
mapping(uint256 => uint256) indexOfBidOfferId
```

An inverse mapping of bidOfferIdOfIndex. E.g., indexOfBidOfferId[42] is the index in bidOfferIdOfIndex at which bid of id #42 on Mangrove is stored.

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

