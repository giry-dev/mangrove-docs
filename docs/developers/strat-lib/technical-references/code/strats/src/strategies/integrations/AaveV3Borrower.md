## AaveV3Borrower

### IMPLEMENTATION

```solidity
address IMPLEMENTATION
```

address of the implementation contract

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

### debtToken

```solidity
function debtToken(contract IERC20 asset, uint256 interestRateMode) public view returns (contract ICreditDelegationToken debtTkn)
```

convenience function to obtain the address of the non transferrable debt token overlying of some asset

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | contract IERC20 | the underlying asset |
| interestRateMode | uint256 | the interest rate (stable or variable) of the debt token |

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

Returns max redeem R and borrow capacity B|R, which would occur after the redeem.

_`maxBorrowAfterRedeemInUnderlying` is always 0 if `tryBorrow` is `false`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | contract IERC20 | the underlying asset to withdraw and potentially borrow |
| tryBorrow | bool | also computes borrow capacity after all redeem is complete (costs extra gas). |
| onBehalf | address | user for whom max redeem/borrow is computed |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| maxRedeemableUnderlying | uint256 | maximum amount `onBehalf` can redeem of `asset` |
| maxBorrowAfterRedeemInUnderlying | uint256 | max amount `onBehalf` can borrow in `asset` ater redeeming of `maxRedeemableUnderlying`. |

### getCaps

```solidity
function getCaps(contract IERC20 asset) public view returns (uint256 supplyCap, uint256 borrowCap)
```

### _repayThenDeposit

```solidity
function _repayThenDeposit(contract IERC20 token, address onBehalf, uint256 amount) internal
```

deposits assets on AAVE by first repaying debt if any and then supplying to the pool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset one is depositing |
| onBehalf | address | the account one is repaying and supplying for |
| amount | uint256 | of asset one is repaying and supplying |

### _redeemThenBorrow

```solidity
function _redeemThenBorrow(contract IERC20 token, address onBehalf, uint256 amount, bool strict, address recipient) internal returns (uint256 got)
```

withdraws liquidity on aave, if not enough liquidity is withdrawn, tries to borrow what's missing.

_if `onBehalf != address(this)` then `this` needs to be approved by `onBehalf` using `approveDelegation` of the overlying debt token
function will only try to borrow if less than `amount` was redeemed and will not try to borrow more than what is missing, even if `strict` is not required.
this is forced by aave v3 currently not allowing to repay a debt that was incurred on the same block (so no gas optim can be used). Repaying on the next block would be dangerous as `onBehalf` position could possibly be liquidated_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset that needs to be redeemed |
| onBehalf | address | the account whose collateral is beeing withdrawn and borrowed upon. |
| amount | uint256 | the target amount of `token` one needs to redeem |
| strict | bool | whether call allows contract to redeem more than amount (for gas optimization). |
| recipient | address | the target address to which redeemed and borrowed tokens should be sent |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| got | uint256 | how much asset was transfered to caller |

### _borrow

```solidity
function _borrow(contract IERC20 token, uint256 amount, address onBehalf) internal
```

tries to borrow some assets from the pool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset one is borrowing |
| amount | uint256 |  |
| onBehalf | address | the account whose collateral is being used to borrow (caller must be approved by `onBehalf` -if different- using `approveDelegation` from the corresponding debt token (variable or stable)) |

### _repay

```solidity
function _repay(contract IERC20 token, uint256 amount, address onBehalf) internal returns (uint256 repaid)
```

repays debt to the pool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset one is repaying |
| amount | uint256 | of assets one is repaying |
| onBehalf | address | account whose debt is being repaid |

### borrowed

```solidity
function borrowed(address underlying, address account) public view returns (uint256 debt)
```

returns the debt of a user

_user can only borrow underlying in variable or stable, not both_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| underlying | address | the asset whose debt balance is being viewed |
| account | address | the account whose debt balance is being viewed |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| debt | uint256 | the amount of tokens (in units of `underlying`) that should be repaid to the pool |

