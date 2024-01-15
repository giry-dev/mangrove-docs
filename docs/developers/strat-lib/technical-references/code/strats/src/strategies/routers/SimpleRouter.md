## SimpleRouter

_Maker contracts using this router must make sure that the reserve approves the router for all asset that will be pulled (outbound tokens)
Thus a maker contract using a vault that is not an EOA must make sure this vault has approval capacities._

### __pull__

```solidity
function __pull__(contract IERC20 token, address owner, uint256 amount, bool strict) internal virtual returns (uint256 pulled)
```

transfers an amount of tokens from the reserve to the maker.

_requires approval from `owner` for `this` to transfer `token`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | Token to be transferred |
| owner | address | The account from which the tokens will be transferred. |
| amount | uint256 | The amount of tokens to be transferred |
| strict | bool | wether the caller maker contract wishes to pull at most `amount` tokens of owner. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| pulled | uint256 | The amount pulled if successful (will be equal to `amount`); otherwise, 0. |

### __push__

```solidity
function __push__(contract IERC20 token, address owner, uint256 amount) internal virtual returns (uint256)
```

transfers an amount of tokens from the maker to the reserve.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | Token to be transferred |
| owner | address |  |
| amount | uint256 | The amount of tokens to be transferred |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 |  |

### balanceOfReserve

```solidity
function balanceOfReserve(contract IERC20 token, address owner) public view returns (uint256)
```

Balance of a reserve

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset one wishes to know the balance of |
| owner | address |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the balance of the reserve |

### __checkList__

```solidity
function __checkList__(contract IERC20 token, address owner) internal view virtual
```

router-dependent implementation of the `checkList` function
verifies all required approval involving `this` router (either as a spender or owner)

_`checkList` returns normally if all needed approval are strictly positive. It reverts otherwise with a reason._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the asset whose approval must be checked |
| owner | address | the account that requires asset pulling/pushing |

