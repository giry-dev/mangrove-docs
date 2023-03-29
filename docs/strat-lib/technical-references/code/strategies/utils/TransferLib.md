## TransferLib

Transferring 0 or to self will be skipped.
ERC20 tokens returning bool instead of reverting are handled.

### transferToken

```solidity
function transferToken(contract IERC20 token, address recipient, uint256 amount) internal returns (bool)
```

This transfer amount of token to recipient address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | Token to be transferred |
| recipient | address | Address of the recipient the tokens will be transferred to |
| amount | uint256 | The amount of tokens to be transferred |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if transfer was successful; otherwise, false. |

### _transferToken

```solidity
function _transferToken(contract IERC20 token, address recipient, uint256 amount) private returns (bool)
```

This transfer amount of token to recipient address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | Token to be transferred |
| recipient | address | Address of the recipient the tokens will be transferred to |
| amount | uint256 | The amount of tokens to be transferred |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if transfer was successful; otherwise, false. |

### transferTokenFrom

```solidity
function transferTokenFrom(contract IERC20 token, address spender, address recipient, uint256 amount) internal returns (bool)
```

This transfer amount of token to recipient address from spender address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | Token to be transferred |
| spender | address | Address of the spender, where the tokens will be transferred from |
| recipient | address | Address of the recipient, where the tokens will be transferred to |
| amount | uint256 | The amount of tokens to be transferred |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if transfer was successful; otherwise, false. |

### _transferTokenFrom

```solidity
function _transferTokenFrom(contract IERC20 token, address spender, address recipient, uint256 amount) private returns (bool)
```

This transfer amount of token to recipient address from spender address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | Token to be transferred |
| spender | address | Address of the spender, where the tokens will be transferred from |
| recipient | address | Address of the recipient, where the tokens will be transferred to |
| amount | uint256 | The amount of tokens to be transferred |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if transfer was successful; otherwise, false. |

### _approveToken

```solidity
function _approveToken(contract IERC20 token, address spender, uint256 amount) private returns (bool)
```

ERC20 approval, handling non standard approvals that do not return a value

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the ERC20 |
| spender | address | the address whose allowance is to be given |
| amount | uint256 | of the allowance |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if approval was successful; otherwise, false. |

### approveToken

```solidity
function approveToken(contract IERC20 token, address spender, uint256 amount) internal returns (bool)
```

ERC20 approval, handling non standard approvals that do not return a value

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the ERC20 |
| spender | address | the address whose allowance is to be given |
| amount | uint256 | of the allowance |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if approval was successful; otherwise, false. |

