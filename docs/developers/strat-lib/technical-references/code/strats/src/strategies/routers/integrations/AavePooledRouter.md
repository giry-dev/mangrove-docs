# Solidity API

## AavePooledRouter

maker contracts deposit/withdraw their user(s) fund(s) on this router, which maintains an accounting of shares attributed to each depositor

_deposit is made via `pushAndSupply`, and withdraw is made via `pull` with `strict=true`.
this router ensures an optimal gas cost complexity when the following strategy is used:
* on the offer logic side:
   * in `makerExecute`, check whether logic is the first caller to the router. This is done by checking whether the balance of outbound tokens of the router is below the required amount. If so the logic should return a special bytes32 (say `"firstCaller"`) to makerPosthook.
   * in `__put__`  the logic stores incoming liquidity on the strat balance
   * in `__get__` the logic pulls liquidity from the router in a non strict manner
   * in __posthookSuccess|Fallback__ the logic pushes both inbound and outbound tokens to the router. If message from makerExecute is `"firstCaller"`, the logic additionally asks the router to supply all its outbound and inbound tokens to AAVE. This can be done is a single step by calling `pushAndSupply`
* on the router side:
   * `__pull__`  checks whether local balance of token is below required amount. If so it pulls all its funds from AAVE (this includes funds that do not belong to the owner of the calling contract) and sends to caller all the owner's reserve (according to the shares attributed to the owner - except in case of liquidity sharing where only requested amount is transferred). This router then decreases owner's shares accordingly. (note that if AAVE has no liquidity crisis, then the owner's shares will be temporarily 0)
   * `__push__` transfers the requested amount of tokens from the calling maker contract and increases owner's shares, but does not supply on AAVE_

### aaveManager

```solidity
address aaveManager
```

the manager which controls which pools are allowed.

### SetAaveManager

```solidity
event SetAaveManager(address manager)
```

The `aaveManager` has been set.
By emitting this data, an indexer will be able to keep track of what manager is used.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| manager | address | the new manager. |

### AaveIncident

```solidity
event AaveIncident(contract IERC20 token, address maker, address reserveId, bytes32 aaveReason)
```

An error occurred during deposit to AAVE.
By emitting this data, an indexer will be able to keep track of what incidents that has happened.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the deposited token. This is indexed so that RPC calls can filter on it. |
| maker | address | the maker contract that was calling `pushAndSupply`. This is indexed so that RPC calls can filter on it. |
| reserveId | address | the reserve identifier that was calling `pushAndSupply`. This is indexed so that RPC calls can filter on it. |
| aaveReason | bytes32 | the reason from AAVE. |

### _totalShares

```solidity
mapping(contract IERC20 => uint256) _totalShares
```

the total shares for each token, i.e. the total shares one would need to possess in order to claim the entire pool of tokens.

### _sharesOf

```solidity
mapping(contract IERC20 => mapping(address => uint256)) _sharesOf
```

the number of shares for a reserve for a token, i.e. the shares of this router that are attributed to a particular reserve.

### OFFSET

```solidity
uint256 OFFSET
```

offset for initial shares to be minted

_this amount must be big enough to avoid minting 0 shares via "donation"
see https://github.com/code-423n4/2022-09-y2k-finance-findings/issues/449
mitigation proposed here: https://ethereum-magicians.org/t/address-eip-4626-inflation-attacks-with-virtual-shares-and-assets/12677_

### INIT_MINT

```solidity
uint256 INIT_MINT
```

initial shares to be minted

### constructor

```solidity
constructor(address addressesProvider) public
```

contract's constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| addressesProvider | address | address of AAVE's address provider |

### sharesOf

```solidity
function sharesOf(contract IERC20 token, address reserveId) public view returns (uint256 shares)
```

returns the shares of this router that are attributed to a particular reserve

_`sharesOf(token,id)/totalShares(token)` represent the portion of this contract's balance of `token`s that the `reserveId` can claim_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the address of the asset |
| reserveId | address | the reserve identifier |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| shares | uint256 | the amount of shares attributed to `reserveId`. |

### totalShares

```solidity
function totalShares(contract IERC20 token) public view returns (uint256 total)
```

returns the total shares one would need to possess in order to claim the entire pool of tokens

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| total | uint256 | the total amount of shares |

### totalBalance

```solidity
function totalBalance(contract IERC20 token) external view returns (uint256 balance)
```

theoretically available funds to this router either in overlying or in tokens (part of it may not be redeemable from AAVE)

_this function relies on the AAVE promise that aToken are in one-to-one correspondence with claimable underlying and use the same decimals_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset whose balance is required |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | of the asset |

### _totalBalance

```solidity
function _totalBalance(contract IERC20 token, struct HasAaveBalanceMemoizer.BalanceMemoizer memoizer) internal view returns (uint256 balance)
```

`totalBalance` with memoization of balance queries

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset whose balance is required |
| memoizer | struct HasAaveBalanceMemoizer.BalanceMemoizer | the memoizer |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | of the asset |

### balanceOfReserve

```solidity
function balanceOfReserve(contract IERC20 token, address reserveId) public view returns (uint256)
```

computes available funds (modulo available liquidity on AAVE) for a given reserve

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset one wants to know the balance of |
| reserveId | address | the identifier of the reserve whose balance is queried |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | available funds for the reserve |

### _balanceOfReserve

```solidity
function _balanceOfReserve(contract IERC20 token, address reserveId, struct HasAaveBalanceMemoizer.BalanceMemoizer memoizer) internal view returns (uint256 balance)
```

`balanceOfReserve` with memoization of balance queries

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset one wants to know the balance of |
| reserveId | address | the identifier of the reserve whose balance is queried |
| memoizer | struct HasAaveBalanceMemoizer.BalanceMemoizer | the memoizer |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | available funds for the reserve |

### _sharesOfAmount

```solidity
function _sharesOfAmount(contract IERC20 token, uint256 amount, struct HasAaveBalanceMemoizer.BalanceMemoizer memoizer) internal view returns (uint256 shares)
```

computes how many shares an amount of tokens represents

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the address of the asset |
| amount | uint256 | of tokens |
| memoizer | struct HasAaveBalanceMemoizer.BalanceMemoizer | the memoizer |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| shares | uint256 | the shares that correspond to amount |

### _mintShares

```solidity
function _mintShares(contract IERC20 token, address reserveId, uint256 amount, struct HasAaveBalanceMemoizer.BalanceMemoizer memoizer) internal
```

mints a certain quantity of shares for a given asset and assigns them to a reserve

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the address of the asset |
| reserveId | address | the address of the reserve who will be assigned new shares |
| amount | uint256 | the amount of assets added to the reserve |
| memoizer | struct HasAaveBalanceMemoizer.BalanceMemoizer | the memoizer |

### _burnShares

```solidity
function _burnShares(contract IERC20 token, address reserveId, uint256 amount, struct HasAaveBalanceMemoizer.BalanceMemoizer memoizer) internal
```

burns a certain quantity of reserve's shares for a given asset

_if one is trying to burn shares from a pool that doesn't have any, the call to `_sharesOfAmount` will return `INIT_MINT`
and thus this contract will throw with "AavePooledRouter/insufficientFunds", even if one is trying to burn 0 shares._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the address of the asset |
| reserveId | address | the address of the reserve who will have shares burnt |
| amount | uint256 | the amount of assets withdrawn from reserve |
| memoizer | struct HasAaveBalanceMemoizer.BalanceMemoizer | the memoizer |

### __push__

```solidity
function __push__(contract IERC20 token, address reserveId, uint256 amount) internal returns (uint256)
```

Deposit funds on this router from the calling maker contract

_no transfer to AAVE is done at that moment._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | Token to be transferred |
| reserveId | address | determines the location of the reserve (router implementation dependent). |
| amount | uint256 | The amount of tokens to be transferred |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 |  |

### flushBuffer

```solidity
function flushBuffer(contract IERC20 token, bool noRevert) public returns (bytes32 reason)
```

deposit router-local balance of an asset on the AAVE pool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the address of the asset |
| noRevert | bool | does not revert if supplies throws |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| reason | bytes32 | for revert from Aave. |

### pushAndSupply

```solidity
function pushAndSupply(contract IERC20 token0, uint256 amount0, contract IERC20 token1, uint256 amount1, address reserveId) external returns (uint256 pushed0, uint256 pushed1)
```

pushes each given token from the calling maker contract to this router, then supplies the whole router-local balance to AAVE

_an offer logic should call this instead of `flush` when it is the last posthook to be executed
this can be determined by checking during __lastLook__ whether the logic will trigger a withdraw from AAVE (this is the case if router's balance of token is empty)
this call be performed even for tokens with 0 amount for the offer logic, since the logic can be the first in a chain and router needs to flush all
this function is also to be used when user deposits funds on the maker contract_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token0 | contract IERC20 | the first token to deposit |
| amount0 | uint256 | the amount of `token0` to deposit |
| token1 | contract IERC20 | the second token to deposit |
| amount1 | uint256 | the amount of `token1` to deposit |
| reserveId | address | the reserve whose shares should be increased |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| pushed0 | uint256 | the amount of token0 that were successfully pushed |
| pushed1 | uint256 | the amount of token1 that were successfully pushed |

### __pull__

```solidity
function __pull__(contract IERC20 token, address reserveId, uint256 amount, bool strict) internal returns (uint256)
```

router-dependent implementation of the `pull` function

_outside a market order (i.e if `__pull__` is not called during offer logic's execution) the `token` balance of this router should be empty.
This may not be the case when a "donation" occurred to this contract or if the maker posthook failed to push funds back to AAVE
If the donation is large enough to cover the pull request we use the donation funds
if `strict` is not true and when several strats share the same RESERVE_ID, there is a risk that if one of the strat reverts in posthook, it will not
deposit funds back onto the router which would make the other strats sharing the RESERVE_ID fail to deliver._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | Token to be transferred |
| reserveId | address | determines the location of the reserve (router implementation dependent). |
| amount | uint256 | The amount of tokens to be transferred |
| strict | bool | wether the caller maker contract wishes to pull at most `amount` tokens of owner. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | pulled The amount pulled if successful; otherwise, 0. |

### redeemAndTransfer

```solidity
function redeemAndTransfer(contract IERC20 token, address reserveId, uint256 amountToTransfer, uint256 amountToRedeem, struct HasAaveBalanceMemoizer.BalanceMemoizer memoizer) internal
```

redeems some funds from AAVE pool and transfer some amount to msg.sender.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset to transfer |
| reserveId | address | the shares on which funds are being drawn |
| amountToTransfer | uint256 | final amount of asset to transfer |
| amountToRedeem | uint256 | funds that need to be pulled from AAVE for final transfer to succeed |
| memoizer | struct HasAaveBalanceMemoizer.BalanceMemoizer | the memoizer |

### withdraw

```solidity
function withdraw(contract IERC20 token, address reserveId, uint256 amount) external
```

withdraw funds from the pool on behalf of some reserve id

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset to withdraw |
| reserveId | address | the identifier of the share holder |
| amount | uint256 | the amount to withdraw. Use type(uint).max to require withdrawal of the total balance of the caller |

### __checkList__

```solidity
function __checkList__(contract IERC20 token, address reserveId) internal view
```

router-dependent additional checks

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the asset (and possibly its overlyings) whose approval must be checked |
| reserveId | address | of the tokens that are being pulled |

### __activate__

```solidity
function __activate__(contract IERC20 token) internal virtual
```

router-dependent implementation of the `activate` function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset one wishes to use the router for |

### revokeLenderApproval

```solidity
function revokeLenderApproval(contract IERC20 token) external
```

revokes pool approval for a certain asset. This router will no longer be able to deposit on AAVE Pool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the address of the asset whose approval must be revoked. |

### exitMarket

```solidity
function exitMarket(contract IERC20 token) external
```

prevents AAVE from using a certain asset as collateral for lending

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset address |

### enterMarket

```solidity
function enterMarket(contract IERC20[] tokens) external
```

re-allows AAVE to use certain assets as collateral for lending

_market is automatically entered at first deposit_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokens | contract IERC20[] | the asset addresses |

### claimRewards

```solidity
function claimRewards(address[] assets) external returns (address[] rewardList, uint256[] claimedAmounts)
```

allows AAVE manager to claim the rewards attributed to this router by AAVE

_if some rewards are eligible they are sent to `aaveManager`_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| assets | address[] | the list of overlyings (aToken, debtToken) whose rewards should be claimed |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| rewardList | address[] | the addresses of the claimed rewards |
| claimedAmounts | uint256[] | the amount of claimed rewards |

### setAaveManager

```solidity
function setAaveManager(address aaveManager_) public
```

sets a new AAVE manager

_if any reward is active for pure lenders, `aaveManager` will be able to claim them_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| aaveManager_ | address | the new address of the AAVE manager |

