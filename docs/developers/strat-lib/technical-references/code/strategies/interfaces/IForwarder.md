## IForwarder

Interface for contracts that manage liquidity on Mangrove on behalf of multiple offer makers

### NewOwnedOffer

```solidity
event NewOwnedOffer(contract IMangrove mangrove, contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId, address owner)
```

Logging new offer owner

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mangrove | contract IMangrove | Mangrove contract on which the offer is posted |
| outbound_tkn | contract IERC20 | the outbound token of the offer list. |
| inbound_tkn | contract IERC20 | the inbound token of the offer list. |
| offerId | uint256 | the Mangrove offer id. |
| owner | address | the offer maker that can manage the offer. |

### offerOwners

```solidity
function offerOwners(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256[] offerIds) external view returns (address[] offer_owners)
```

view on offer owners.

_if `offerIds[i]==address(0)` if and only if this offer has no owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list. |
| inbound_tkn | contract IERC20 | the inbound token of the offer list. |
| offerIds | uint256[] | an array of offer identifiers on the offer list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offer_owners | address[] | an array of the same length where the address at position i is the owner of `offerIds[i]` |

### ownerOf

```solidity
function ownerOf(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId) external view returns (address owner)
```

view on an offer owner.

_`ownerOf(in,out,id)` is equivalent to `offerOwners(in, out, [id])` but more gas efficient._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list. |
| inbound_tkn | contract IERC20 | the inbound token of the offer list. |
| offerId | uint256 | the offer identifier on the offer list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | the offer maker that can manage the offer. |

