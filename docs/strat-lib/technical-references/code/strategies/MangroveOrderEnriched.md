## MangroveOrderEnriched

### next

```solidity
mapping(contract IERC20 => mapping(contract IERC20 => mapping(address => mapping(uint256 => uint256)))) next
```

This maintains a mapping of owners to offers via linked offerIds.

_`next[outbound_tkn][inbound_tkn][owner][id] = id'` with `next[outbound_tkn][inbound_tkn][owner][0]==0` iff owner has no offers on the semi book (out,in)_

### constructor

```solidity
constructor(contract IMangrove mgv, address deployer) public
```

`MangroveOrderEnriched`'s constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment that is allowed to call `this` contract for trade execution and posthook and on which `this` contract will post offers. |
| deployer | address | The address of the deployer will be set as admin for both this contract and the router, which are both `AccessControlled` contracts. |

### __logOwnershipRelation__

```solidity
function __logOwnershipRelation__(address owner, contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId) internal virtual
```

Overridden to keep track of all offers for all owners.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | the owner of the new offer |
| outbound_tkn | contract IERC20 | the outbound token used to identify the order book |
| inbound_tkn | contract IERC20 | the inbound token used to identify the order book |
| offerId | uint256 | the id of the new offer |

### offersOfOwner

```solidity
function offersOfOwner(address owner, contract IERC20 outbound_tkn, contract IERC20 inbound_tkn) external view returns (uint256[] live, uint256[] dead)
```

Retrieves all offers for owner. We let this view function consume loads of gas units in exchange of a rather minimalistic state bookkeeping.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | the owner to get all offers for |
| outbound_tkn | contract IERC20 | the outbound token used to identify the order book |
| inbound_tkn | contract IERC20 | the inbound token used to identify the order book |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| live | uint256[] | ids of offers which are in the order book (see `Mangrove.isLive`) |
| dead | uint256[] | ids of offers which are not in the order book |

