## IOfferLogic

It is an IMaker for Mangrove.

### LogIncident

```solidity
event LogIncident(contract IMangrove mangrove, contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId, bytes32 makerData, bytes32 mgvData)
```

Log incident (during post trade execution)

### SetRouter

```solidity
event SetRouter(contract AbstractRouter)
```

Logging change of router address

### offerGasreq

```solidity
function offerGasreq() external view returns (uint256 total)
```

Actual gas requirement when posting offers via this strategy. Returned value may change if this contract's router is updated.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| total | uint256 | gas cost including router specific costs (if any). |

### getMissingProvision

```solidity
function getMissingProvision(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 gasreq, uint256 gasprice, uint256 offerId) external view returns (uint256 missingProvision)
```

Computes missing provision to repost `offerId` at given `gasreq` and `gasprice` ignoring current contract's balance on Mangrove.

_if `offerId` is not in the Order Book, will simply return how much is needed to post_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token used to identify the order book |
| inbound_tkn | contract IERC20 | the inbound token used to identify the order book |
| gasreq | uint256 | the gas required by the offer. Give > type(uint24).max to use `this.offerGasreq()` |
| gasprice | uint256 | the upper bound on gas price. Give 0 to use Mangrove's gasprice |
| offerId | uint256 | the offer id. Set this to 0 if one is not reposting an offer |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| missingProvision | uint256 | to repost `offerId`. |

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

### provisionOf

```solidity
function provisionOf(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId) external view returns (uint256 provision)
```

computes the amount of native tokens that can be redeemed when deprovisioning a given offer.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list |
| inbound_tkn | contract IERC20 | the inbound token of the offer list |
| offerId | uint256 | the identifier of the offer in the offer list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| provision | uint256 | the amount of native tokens that can be redeemed when deprovisioning the offer |

### checkList

```solidity
function checkList(contract IERC20[] tokens) external view
```

verifies that this contract's current state is ready to be used by `msg.sender` to post offers on Mangrove

_throws with a reason if something (e.g. an approval) is missing._

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

```solidity
struct OfferArgs {
  contract IERC20 outbound_tkn;
  contract IERC20 inbound_tkn;
  uint256 wants;
  uint256 gives;
  uint256 gasreq;
  uint256 gasprice;
  uint256 pivotId;
  uint256 fund;
  bool noRevert;
}
```

### retractOffer

```solidity
function retractOffer(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId, bool deprovision) external returns (uint256 received)
```

Retracts an offer from an Offer List of Mangrove.

_An offer that is retracted without `deprovision` is retracted from the offer list, but still has its provisions locked by Mangrove.
Calling this function, with the `deprovision` flag, on an offer that is already retracted must be used to retrieve the locked provisions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list. |
| inbound_tkn | contract IERC20 | the inbound token of the offer list. |
| offerId | uint256 | the identifier of the offer in the (`outbound_tkn`,`inbound_tkn`) offer list |
| deprovision | bool | positioned if `msg.sender` wishes to redeem the offer's provision. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| received | uint256 | the amount of native tokens (in WEI) that have been retrieved by retracting the offer. |

### reserve

```solidity
function reserve(address maker) external view returns (address)
```

getter of the reserve address of `maker`.

_if no reserve is set for maker, default reserve is maker's address. Thus this function never returns `address(0)`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| maker | address | the address of the offer maker one wishes to know the reserve of. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | reserve_ the address of the offer maker's reserve of liquidity. |

### router

```solidity
function router() external view returns (contract AbstractRouter)
```

Contract's router getter.

_if contract has a no router, function returns `NO_ROUTER`._

