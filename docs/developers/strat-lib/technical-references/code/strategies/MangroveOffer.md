## MangroveOffer

It contains the mandatory interface expected by Mangrove (`IOfferLogic` is `IMaker`) and enforces additional functions implementations (via `IOfferLogic`).

_Naming scheme:
`f() public`: can be used, as is, in all descendants of `this` contract
`_f() internal`: descendant of this contract should provide a public wrapper for this function, with necessary guards.
`__f__() virtual internal`: descendant of this contract should override this function to specialize it to the needs of the strat._

### OFFER_GASREQ

```solidity
uint256 OFFER_GASREQ
```

Gas requirement when posting offers via this strategy, excluding router requirement.

### MGV

```solidity
contract IMangrove MGV
```

The Mangrove deployment that is allowed to call `this` for trade execution and posthook.

### NO_ROUTER

```solidity
contract AbstractRouter NO_ROUTER
```

constant for no router

### __router

```solidity
contract AbstractRouter __router
```

The router to use for this strategy.

### REPOST_SUCCESS

```solidity
bytes32 REPOST_SUCCESS
```

The offer was successfully reposted.

### NEW_OFFER_SUCCESS

```solidity
bytes32 NEW_OFFER_SUCCESS
```

New offer successfully created.

### COMPLETE_FILL

```solidity
bytes32 COMPLETE_FILL
```

The offer was completely filled.

### Mgv

```solidity
event Mgv(contract IMangrove mgv)
```

The Mangrove deployment that is allowed to call `this` for trade execution and posthook.
  @param mgv The Mangrove deployment.

### receive

```solidity
receive() external payable virtual
```

Mandatory function to allow `this` to receive native tokens from Mangrove after a call to `MGV.withdraw(...,deprovision:true)`

_override this function if `this` contract needs to handle local accounting of user funds._

### constructor

```solidity
constructor(contract IMangrove mgv, uint256 gasreq) internal
```

`MangroveOffer`'s constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment that is allowed to call `this` for trade execution and posthook. |
| gasreq | uint256 | Gas requirement when posting offers via this strategy, excluding router requirement. |

### router

```solidity
function router() public view returns (contract AbstractRouter)
```

Contract's router getter.

_if contract has a no router, function returns `NO_ROUTER`._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract AbstractRouter | the router. |

### offerGasreq

```solidity
function offerGasreq() public view returns (uint256)
```

Actual gas requirement when posting offers via this strategy. Returned value may change if this contract's router is updated.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 |  |

### makerExecute

```solidity
function makerExecute(struct MgvLib.SingleOrder order) external returns (bytes32 ret)
```

`makerExecute` is the callback function to execute all offers that were posted on Mangrove by `this` contract.

_it may not be overriden although it can be customized using `__lastLook__`, `__put__` and `__get__` hooks.
NB #1: if `makerExecute` reverts, the offer will be considered to be refusing the trade.
NB #2: `makerExecute` may return a `bytes32` word to pass information to posthook w/o using storage reads/writes.
NB #3: Reneging on trade will have the following effects:
* Offer is removed from the Order Book
* Offer bounty will be withdrawn from offer provision and sent to the offer taker. The remaining provision will be credited to the maker account on Mangrove_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | a data structure that recapitulates the taker order and the offer as it was posted on mangrove |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| ret | bytes32 | a bytes32 word to pass information (if needed) to the posthook |

### makerPosthook

```solidity
function makerPosthook(struct MgvLib.SingleOrder order, struct MgvLib.OrderResult result) external
```

`makerPosthook` is the callback function that is called by Mangrove *after* the offer execution.
reverting during its execution will not renege on trade. Revert reason (casted to 32 bytes) is then logged by Mangrove in event `PosthookFail`.

_It cannot be overridden but can be customized via the hooks `__posthookSuccess__` and `__posthookFallback__` (see below)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | a data structure that recapitulates the taker order and the offer as it was posted on mangrove |
| result | struct MgvLib.OrderResult | a data structure that gathers information about trade execution |

### logRepostStatus

```solidity
function logRepostStatus(struct MgvLib.SingleOrder order, bytes32 makerData, bytes32 repostStatus) internal
```

takes care of status for reposting residual offer in case of a partial fill and logging of potential issues.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | a recap of the taker order |
| makerData | bytes32 | generated during `makerExecute` so as to log it if necessary |
| repostStatus | bytes32 | from the posthook that handles residual reposting |

### setRouter

```solidity
function setRouter(contract AbstractRouter router_) public
```

sets a new router to pull outbound tokens from contract's reserve to `this` and push inbound tokens to reserve.

_new router needs to be approved by `this` to push funds to reserve (see `activate` function). It also needs to be approved by reserve to pull from it._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| router_ | contract AbstractRouter | the new router contract that this contract should use. Use `NO_ROUTER` for no router. |

### approve

```solidity
function approve(contract IERC20 token, address spender, uint256 amount) public returns (bool)
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

### activate

```solidity
function activate(contract IERC20[] tokens) external
```

performs the required approvals so as to allow `this` to interact with Mangrove on a set of assets.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokens | contract IERC20[] | the ERC20 `this` will approve to be able to trade on Mangrove's corresponding markets. |

### checkList

```solidity
function checkList(contract IERC20[] tokens) external view
```

verifies that Mangrove is allowed to pull tokens from this contract.

_throws with a reason if something (e.g. an approval) is missing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokens | contract IERC20[] | the list of tokens that are traded by this contract |

### __activate__

```solidity
function __activate__(contract IERC20 token) internal virtual
```

override conservatively to define strat-specific additional activation steps.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the ERC20 one wishes this contract to trade on. |

### __checkList__

```solidity
function __checkList__(contract IERC20 token) internal view virtual
```

verifies that Mangrove is allowed to pull tokens from this contract and other strat specific verifications.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | a token that is traded by this contract |

### withdrawFromMangrove

```solidity
function withdrawFromMangrove(uint256 amount, address payable receiver) public
```

withdraws native tokens from `this` balance on Mangrove.

_Since a call is made to the `receiver`, this function is subject to reentrancy._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | the amount of WEI one wishes to withdraw. |
| receiver | address payable | the address of the receiver of the funds. |

### __put__

```solidity
function __put__(uint256 amount, struct MgvLib.SingleOrder order) internal virtual returns (uint256 missingPut)
```

Hook that implements where the inbound token, which are brought by the Offer Taker, should go during Taker Order's execution.

_if the last nested call to `__put__` returns a non zero value, trade execution will revert_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | of `inbound` tokens that are on `this` contract's balance and still need to be deposited somewhere |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| missingPut | uint256 | (<=`amount`) is the amount of `inbound` tokens whose deposit location has not been decided (possibly because of a failure) during this function execution |

### __get__

```solidity
function __get__(uint256 amount, struct MgvLib.SingleOrder order) internal virtual returns (uint256 missingGet)
```

Hook that implements where the outbound token, which are promised to the taker, should be fetched from, during Taker Order's execution.

_if the last nested call to `__get__` returns a non zero value, trade execution will revert_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | of `outbound` tokens that still needs to be brought to the balance of `this` contract when entering this function |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| missingGet | uint256 | (<=`amount`), which is the amount of `outbound` tokens still need to be fetched at the end of this function |

### __lastLook__

```solidity
function __lastLook__(struct MgvLib.SingleOrder order) internal virtual returns (bytes32 data)
```

Hook that implements a last look check during Taker Order's execution.

___lastLook__ should revert if trade is to be reneged on. If not, returned `bytes32` are passed to `makerPosthook` in the `makerData` field._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | bytes32 | is a message that will be passed to posthook provided `makerExecute` does not revert. |

### __posthookFallback__

```solidity
function __posthookFallback__(struct MgvLib.SingleOrder order, struct MgvLib.OrderResult result) internal virtual returns (bytes32 data)
```

Post-hook that implements fallback behavior when Taker Order's execution failed unexpectedly.

_`result.mgvData` is Mangrove's verdict about trade success
`result.makerData` either contains the first 32 bytes of revert reason if `makerExecute` reverted or the returned `bytes32`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |
| result | struct MgvLib.OrderResult | contains information about trade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | bytes32 | contains verdict and reason about the executed trade. |

### __residualWants__

```solidity
function __residualWants__(struct MgvLib.SingleOrder order) internal virtual returns (uint256 newWants)
```

Given the current taker order that (partially) consumes an offer, this hook is used to declare how much `order.inbound_tkn` the offer wants after it is reposted.

_default is to require the original amount of tokens minus those that have been given by the taker during trade execution._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is being treated. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| newWants | uint256 | the new volume of `inbound_tkn` the offer will ask for on Mangrove |

### __residualGives__

```solidity
function __residualGives__(struct MgvLib.SingleOrder order) internal virtual returns (uint256 newGives)
```

Given the current taker order that (partially) consumes an offer, this hook is used to declare how much `order.outbound_tkn` the offer gives after it is reposted.

_default is to require the original amount of tokens minus those that have been sent to the taker during trade execution._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is being treated. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| newGives | uint256 | the new volume of `outbound_tkn` the offer will give if fully taken. |

### __handleResidualProvision__

```solidity
function __handleResidualProvision__(struct MgvLib.SingleOrder order) internal virtual
```

Hook that defines what needs to be done to the part of an offer provision that was added to the balance of `this` on Mangrove after an offer has failed.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that failed |

### __posthookSuccess__

```solidity
function __posthookSuccess__(struct MgvLib.SingleOrder order, bytes32 makerData) internal virtual returns (bytes32 data)
```

Post-hook that implements default behavior when Taker Order's execution succeeded.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |
| makerData | bytes32 | is the returned value of the `__lastLook__` hook, triggered during trade execution. The special value `"lastLook/retract"` should be treated as an instruction not to repost the offer on the book. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | bytes32 | can be: * `COMPLETE_FILL` when offer was completely filled * returned data of `_updateOffer` signalling the status of the reposting attempt. |

### _updateOffer

```solidity
function _updateOffer(struct IOfferLogic.OfferArgs args, uint256 offerId) internal virtual returns (bytes32)
```

Updates the offer specified by `offerId` on Mangrove with the parameters in `args`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | struct IOfferLogic.OfferArgs | A memory struct containing the offer parameters to update. |
| offerId | uint256 | An unsigned integer representing the identifier of the offer to be updated. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | status a `bytes32` value representing either `REPOST_SUCCESS` if the update is successful, or an error message if an error occurs and `OfferArgs.noRevert` is `true`. If `OfferArgs.noRevert` is `false`, the function reverts with the error message as the reason. |

### _provisionOf

```solidity
function _provisionOf(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId) internal view returns (uint256 provision)
```

computes the provision that can be redeemed if deprovisioning a certain offer

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list |
| inbound_tkn | contract IERC20 | the inbound token of the offer list |
| offerId | uint256 | the id of the offer |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| provision | uint256 | the provision that can be redeemed |

