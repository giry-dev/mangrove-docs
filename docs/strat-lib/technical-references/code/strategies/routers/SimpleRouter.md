## SimpleRouter

`SimpleRouter` instances pull (push) liquidity directly from (to) the reserve

_Maker contracts using this router must make sure that the reserve approves the router for all asset that will be pulled (outbound tokens)
Thus a maker contract using a vault that is not an EOA must make sure this vault has approval capacities._

### __pull__

```solidity
function __pull__(contract IERC20 token, address reserve, address maker, uint256 amount, bool strict) internal virtual returns (uint256 pulled)
```

transfers an amount of tokens from the reserve to the maker.

_requires approval from `reserve` for `this` to transfer `token`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | Token to be transferred |
| reserve | address | The address of the reserve, where the tokens will be transferred from |
| maker | address | Address of the maker, where the tokens will be transferred to |
| amount | uint256 | The amount of tokens to be transferred |
| strict | bool | wether the caller maker contract wishes to pull at most `amount`. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| pulled | uint256 | The amount pulled if successful (will be equal to `amount`); otherwise, 0. |

### __push__

```solidity
function __push__(contract IERC20 token, address reserve, address maker, uint256 amount) internal virtual returns (uint256)
```

router-dependent implementation of the `push` function
transfers an amount of tokens from the maker to the reserve.

_requires approval from `maker` for `this` to transfer `token`.
will revert if transfer fails_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | Token to be transferred |
| reserve | address | The address of the reserve, where the tokens will be transferred to |
| maker | address | Address of the maker, where the tokens will be transferred from |
| amount | uint256 | The amount of tokens to be transferred |

### __withdrawToken__

```solidity
function __withdrawToken__(contract IERC20 token, address reserve, address recipient, uint256 amount) internal virtual returns (bool)
```

router-dependent implementation of the `withdrawToken` function
withdraws `amount` of reserve tokens and sends them to `recipient`

_this is called by maker's contract when originator wishes to withdraw funds from it._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the asset one wishes to withdraw |
| reserve | address | is the address identifying the location of the assets |
| recipient | address | is the address identifying the location of the recipient |
| amount | uint256 | is the amount of asset that should be withdrawn |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if transfer was successful; otherwise, false. |

### reserveBalance

```solidity
function reserveBalance(contract IERC20 token, address reserve) external view returns (uint256)
```

returns the amount of `token`s that can be made available for pulling by the maker contract

_when this router is pulling from a lender, this must return the amount of asset that can be withdrawn from reserve_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the asset one wishes to know the balance of |
| reserve | address | is the address identifying the location of the assets |

### __checkList__

```solidity
function __checkList__(contract IERC20 token, address reserve) internal view virtual
```

router-dependent implementation of the `checkList` function
verifies all required approval involving `this` router (either as a spender or owner)

_`checkList` returns normally if all needed approval are strictly positive. It reverts otherwise with a reason._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the asset whose approval must be checked |
| reserve | address | the reserve that requires asset pulling/pushing |

