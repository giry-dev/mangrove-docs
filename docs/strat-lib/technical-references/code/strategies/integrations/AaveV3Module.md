## AaveV3Module

### IMPLEMENTATION

```solidity
address IMPLEMENTATION
```

address of the implementation contract

### POOL

```solidity
contract IPool POOL
```

address of the AAVE pool

### ORACLE

```solidity
contract IPriceOracleGetter ORACLE
```

_price oracle and pool address can be obtained from AAVE's address provider contract_

### INTEREST_RATE_MODE

```solidity
uint256 INTEREST_RATE_MODE
```

### REFERRAL_CODE

```solidity
uint16 REFERRAL_CODE
```

### constructor

```solidity
constructor(address _addressesProvider, uint256 _referralCode, uint256 _interestRateMode) public
```

contract's constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _addressesProvider | address | address of AAVE's address provider |
| _referralCode | uint256 | code used by aave to identify certain partners, this can be safely set to 0 |
| _interestRateMode | uint256 | interest rate mode for borrowing assets. 0 for none, 1 for stable, 2 for variable |

### _approveLender

```solidity
function _approveLender(contract IERC20 token, uint256 amount) internal
```

allows this contract to approve the POOL to transfer some underlying asset on its behalf

_this is a necessary step prio to supplying tokens to the POOL or to repay a debt_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the underlying asset for which approval is required |
| amount | uint256 | the approval amount |

### _exitMarket

```solidity
function _exitMarket(contract IERC20 underlying) internal
```

prevents the POOL to use some underlying as collateral

_this call will revert if removing the asset from collateral would put the account into a liquidation state_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| underlying | contract IERC20 | the token one wishes to remove collateral |

### _enterMarkets

```solidity
function _enterMarkets(contract IERC20[] underlyings) internal
```

allows the POOL to use some underlying tokens as collateral

_when supplying a token for the first time, it is automatically set as possible collateral so there is no need to call this function for it._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| underlyings | contract IERC20[] | the token one wishes to add as collateral |

### overlying

```solidity
function overlying(contract IERC20 asset) public view returns (contract IERC20 aToken)
```

convenience function to obtain the overlying of a given asset

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | contract IERC20 | the underlying asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| aToken | contract IERC20 | the overlying asset |

### debtToken

```solidity
function debtToken(contract IERC20 asset) public view returns (contract ICreditDelegationToken debtTkn)
```

convenience function to obtain the address of the non transferrable debt token overlying of some asset

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | contract IERC20 | the underlying asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| debtTkn | contract ICreditDelegationToken | the overlying debt token |

### _staticdelegatecall

```solidity
function _staticdelegatecall(bytes data) external
```

intermediate function to allow a call to be delagated to IMPLEMENTATION while preserving the a `view` attribute.

_scheme is as follows: for some `view` function `f` of IMPLEMENTATION, one does `staticcall(_staticdelegatecall(f))` which will retain for the `view` attribute_

### maxGettableUnderlying

```solidity
function maxGettableUnderlying(contract IERC20 asset, bool tryBorrow, address onBehalf) public view returns (uint256 maxRedeemableUnderlying, uint256 maxBorrowAfterRedeemInUnderlying)
```

Returns max redeem and borrow capacity conditional on a potential redeem.

_`maxBorrowAfterRedeemInUnderlying` is always 0 if `tryBorrow` is `false`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | contract IERC20 | the underlying asset to redeem and potentially borrow |
| tryBorrow | bool | also computes borrow capacity after all redeem is complete (costs extra gas) |
| onBehalf | address | user for whom max redeem/borrow is computed |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| maxRedeemableUnderlying | uint256 | maximum amount `onBehalf` can redeem of `asset` |
| maxBorrowAfterRedeemInUnderlying | uint256 | max amount `onBehalf` can borrow in `asset` ater redeeming of `maxRedeemableUnderlying`. |

### _repayThenDeposit

```solidity
function _repayThenDeposit(contract IERC20 token, address onBehalf, uint256 amount) internal
```

@notice

### _redeemThenBorrow

```solidity
function _redeemThenBorrow(contract IERC20 token, address onBehalf, uint256 amount, bool strict, address recipient) internal returns (uint256 got)
```

redeems liquidity on aave, if not enough liquidity is redeemed, tries to borrow what's missing.

_if `onBehalf != address(this)` then `this` needs to be approved by `onBehalf` using `approveDelegation` of the overlying debt token
function will only try to borrow if less than `amount` was redeemed and will not try to borrow more than what is missing, even if `strict` is not required.
this is forced by aave v3 currently not allowing to repay a debt that was incurred on the same block (so no gas optim can be used). Repaying on the next block would be dangerous as `onBehalf` position could possibly be liquidated_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset that needs to be redeemed |
| onBehalf | address | the account whose collateral is beeing redeemed and borrowed upon. |
| amount | uint256 | the target amount of `token` one needs to redeem |
| strict | bool | whether call allows contract to redeem more than amount (for gas optimization). |
| recipient | address | the target address to which redeemed and borrowed tokens should be sent |

### _borrow

```solidity
function _borrow(contract IERC20 token, uint256 amount, address onBehalf) internal
```

### _redeem

```solidity
function _redeem(contract IERC20 token, uint256 amount, address to) internal returns (uint256 redeemed)
```

### _supply

```solidity
function _supply(contract IERC20 token, uint256 amount, address onBehalf) internal
```

### _repay

```solidity
function _repay(contract IERC20 token, uint256 amount, address onBehalf) internal returns (uint256 repaid)
```

### _claimRewards

```solidity
function _claimRewards(contract IRewardsControllerIsh rewardsController, address[] assets) internal returns (address[] rewardsList, uint256[] claimedAmounts)
```

### borrowed

```solidity
function borrowed(address underlying, address account) public view returns (uint256)
```

