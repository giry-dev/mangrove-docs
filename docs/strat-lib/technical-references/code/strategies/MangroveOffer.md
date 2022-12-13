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

### MGV

```solidity
contract IMangrove MGV
```

### NO_ROUTER

```solidity
contract AbstractRouter NO_ROUTER
```

### OUT_OF_FUNDS

```solidity
bytes32 OUT_OF_FUNDS
```

### BELOW_DENSITY

```solidity
bytes32 BELOW_DENSITY
```

### REPOST_SUCCESS

```solidity
bytes32 REPOST_SUCCESS
```

### REPOST_FAILED

```solidity
bytes32 REPOST_FAILED
```

### mgvOrAdmin

```solidity
modifier mgvOrAdmin()
```

guards for restricting a function call to either `MGV` or `admin()`.

_When `msg.sender` is `MGV`, the function is being called either via `makerExecute` or `makerPosthook`._

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

### router

```solidity
function router() public view returns (contract AbstractRouter)
```

Contract's router getter.

_if contract has a no router, function returns `NO_ROUTER`._

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

### reserve

```solidity
function reserve(address maker) public view returns (address)
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

### __reserve__

```solidity
function __reserve__(address maker) internal view virtual returns (address)
```

hook to customize offer owner's reserve for the offer logic

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| maker | address | the offer owner's address whose address is being queried |

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

verifies that this contract's current state is ready to be used by `msg.sender` to post offers on Mangrove

_throws with a reason if something (e.g. an approval) is missing._

### __activate__

```solidity
function __activate__(contract IERC20 token) internal virtual
```

_override conservatively to define strat-specific additional activation steps._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the ERC20 one wishes this contract to trade on. |

### __checkList__

```solidity
function __checkList__(contract IERC20 token) internal view virtual
```

_override conservatively to define strat-specific additional check list_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the ERC20 one wishes this contract to trade on. |

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
function __posthookFallback__(struct MgvLib.SingleOrder order, struct MgvLib.OrderResult result) internal virtual returns (bytes32)
```

### __residualWants__

```solidity
function __residualWants__(struct MgvLib.SingleOrder order) internal virtual returns (uint256 new_wants)
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
| new_wants | uint256 | the new volume of `inbound_tkn` the offer will ask for on Mangrove |

### __residualGives__

```solidity
function __residualGives__(struct MgvLib.SingleOrder order) internal virtual returns (uint256 new_gives)
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
| new_gives | uint256 | the new volume of `outbound_tkn` the offer will give if fully taken. |

### __handleResidualProvision__

```solidity
function __handleResidualProvision__(struct MgvLib.SingleOrder order) internal virtual
```

Hook that defines what needs to be done to the part of an offer provision that was added to the balance of `this` on Mangrove after an offer has failed.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recal of the taker order that failed |

### __posthookSuccess__

```solidity
function __posthookSuccess__(struct MgvLib.SingleOrder order, bytes32 maker_data) internal virtual returns (bytes32 data)
```

Post-hook that implements default behavior when Taker Order's execution succeeded.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |
| maker_data | bytes32 | is the returned value of the `__lastLook__` hook, triggered during trade execution. The special value `"lastLook/retract"` should be treated as an instruction not to repost the offer on the book. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | bytes32 | can be: * `"posthook/filled"` when offer was completely filled * `"posthook/reposted"` when offer was partially filled and successfully reposted * Mangrove's revert reason (cast to a bytes32) when residual is below density or `this` balance on Mangrove is too low (and thus not reposted) |

### _updateOffer

```solidity
function _updateOffer(struct IOfferLogic.OfferArgs, uint256) internal virtual returns (bytes32)
```

template for start specific update offer function

### _provisionOf

```solidity
function _provisionOf(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId) internal view returns (uint256 provision)
```

computes the provision that can be redeemed if deprovisioning a certain offer

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list |
| inbound_tkn | contract IERC20 | the inbound otken of the offer list |
| offerId | uint256 | the id of the offer |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| provision | uint256 | the provision that can be redeemed |

### getMissingProvision

```solidity
function getMissingProvision(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 gasreq, uint256 gasprice, uint256 offerId) public view returns (uint256)
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
| [0] | uint256 |  |

