# Solidity API

## IForwarder

Interface for contracts that manage liquidity on Mangrove on behalf of multiple offer makers

### NewOwnedOffer

```solidity
event NewOwnedOffer(bytes32 olKeyHash, uint256 offerId, address owner)
```

Logging new offer owner
By emitting this data, an indexer will be able to keep track of the real owner of an offer

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | the hash of the offer list key. This is indexed to allow RPC calls to filter on it. |
| offerId | uint256 | the Mangrove offer id. This is indexed to allow RPC calls to filter on it. |
| owner | address | the offer maker that can manage the offer. It is indexed to allow RPC calls to filter on it. |

### offerOwners

```solidity
function offerOwners(bytes32 olKeyHash, uint256[] offerIds) external view returns (address[] offer_owners)
```

view on offer owners.

_if `offerIds[i]==address(0)` if and only if this offer has no owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | the hash of the offer list key. |
| offerIds | uint256[] | an array of offer identifiers on the offer list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offer_owners | address[] | an array of the same length where the address at position i is the owner of `offerIds[i]` |

### ownerOf

```solidity
function ownerOf(bytes32 olKeyHash, uint256 offerId) external view returns (address owner)
```

view on an offer owner.

_`ownerOf(in,out,id)` is equivalent to `offerOwners(in, out, [id])` but more gas efficient._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | the hash of the offer list key. |
| offerId | uint256 | the offer identifier on the offer list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | the offer maker that can manage the offer. |

