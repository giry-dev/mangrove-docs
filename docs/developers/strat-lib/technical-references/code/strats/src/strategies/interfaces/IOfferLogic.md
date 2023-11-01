## IOfferLogic

It is an IMaker for Mangrove.

### LogIncident

```solidity
event LogIncident(bytes32 olKeyHash, uint256 offerId, bytes32 makerData, bytes32 mgvData)
```

Log incident (during post trade execution)
By emitting this data, an indexer can keep track of what incidents has happened.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | the hash of the offer list key. This is indexed so that RPC calls can filter on it. |
| offerId | uint256 | the Mangrove offer id. This is indexed so that RPC calls can filter on it. |
| makerData | bytes32 | from the maker. |
| mgvData | bytes32 | from Mangrove. |

### SetRouter

```solidity
event SetRouter(contract AbstractRouter router)
```

Logging change of router address
By emitting this an indexer can keep track of what router is used.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| router | contract AbstractRouter | the new router address. |

### setRouter

```solidity
function setRouter(contract AbstractRouter router_) external
```

sets a new router to pull outbound tokens from contract's reserve to `this` and push inbound tokens to reserve.

_new router needs to be approved by `this` to push funds to reserve (see `activate` function). It also needs to be approved by reserve to pull from it._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| router_ | contract AbstractRouter | the new router contract that this contract should use. Use `NO_ROUTER` for no router. |

### approve

```solidity
function approve(contract IERC20 token, address spender, uint256 amount) external returns (bool)
```

Approves a spender to transfer a certain amount of tokens on behalf of `this`.

_admin may use this function to revoke specific approvals of `this` that are set after a call to `activate`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the ERC20 token contract |
| spender | address | the approved spender |
| amount | uint256 | the spending amount |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | result of token approval. |

### provisionOf

```solidity
function provisionOf(struct OLKey olKey, uint256 offerId) external view returns (uint256 provision)
```

computes the amount of native tokens that can be redeemed when deprovisioning a given offer.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | the offer list key. |
| offerId | uint256 | the identifier of the offer in the offer list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| provision | uint256 | the amount of native tokens that can be redeemed when deprovisioning the offer |

### checkList

```solidity
function checkList(contract IERC20[] tokens) external view
```

verifies that this contract's current state is ready to be used to post offers on Mangrove

_throws with a reason if something (e.g. an approval) is missing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokens | contract IERC20[] | the list of tokens that are traded by this contract |

### activate

```solidity
function activate(contract IERC20[] tokens) external
```

performs the required approvals so as to allow `this` to interact with Mangrove on a set of assets.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokens | contract IERC20[] | the ERC20 `this` will approve to be able to trade on Mangrove's corresponding markets. |

### withdrawFromMangrove

```solidity
function withdrawFromMangrove(uint256 amount, address payable receiver) external
```

withdraws native tokens from `this` balance on Mangrove.

_Since a call is made to the `receiver`, this function is subject to reentrancy._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | the amount of WEI one wishes to withdraw. |
| receiver | address payable | the address of the receiver of the funds. |

### OfferArgs

Memory allocation for `_new/updateOffer`'s arguments.

_`owner` is required in `Forwarder` logics, when `_newOffer` or `_updateOffer` in called in a hook (`msg.sender==MGV`)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

```solidity
struct OfferArgs {
  struct OLKey olKey;
  Tick tick;
  uint256 gives;
  uint256 gasreq;
  uint256 gasprice;
  uint256 fund;
  bool noRevert;
}
```

### router

```solidity
function router() external view returns (contract AbstractRouter)
```

Contract's router getter.

_if contract has a no router, function returns `NO_ROUTER`._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract AbstractRouter | the router. |

### MGV

```solidity
function MGV() external view returns (contract IMangrove)
```

Contract's Mangrove getter

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IMangrove | the Mangrove contract. |

