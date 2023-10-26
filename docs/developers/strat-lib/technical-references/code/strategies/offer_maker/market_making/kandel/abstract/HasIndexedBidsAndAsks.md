## HasIndexedBidsAndAsks

_utilizes the `IHasTokenPairOfOfferType` contract._

### MGV

```solidity
contract IMangrove MGV
```

The Mangrove deployment.

### SetLength

```solidity
event SetLength(uint256 value)
```

the length of the index has been set.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | the length. |

### SetIndexMapping

```solidity
event SetIndexMapping(enum OfferType ba, uint256 index, uint256 offerId)
```

a new offer of type `ba` with `offerId` was created at price `index`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type |
| index | uint256 | the index |
| offerId | uint256 | the Mangrove offer id. |

### constructor

```solidity
constructor(contract IMangrove mgv) internal
```

Constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment. |

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

### getOffer

```solidity
function getOffer(enum OfferType ba, uint256 index) public view returns (OfferPacked offer)
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
| offer | OfferPacked | the Mangrove offer. |

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

