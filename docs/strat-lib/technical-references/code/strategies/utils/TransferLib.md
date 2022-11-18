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

### _transferToken

```solidity
function _transferToken(contract IERC20 token, address recipient, uint256 amount) private returns (bool)
```

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

