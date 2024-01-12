# Solidity API

## HasAaveBalanceMemoizer

_the memoizer works in the context of a single token and therefore should not be used across multiple tokens._

### BalanceMemoizer

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

```solidity
struct BalanceMemoizer {
  uint256 balanceOf;
  bool balanceOfMemoized;
  uint256 balanceOfOverlying;
  bool balanceOfOverlyingMemoized;
  contract IERC20 overlying;
  bool overlyingMemoized;
}
```

### constructor

```solidity
constructor(address addressesProvider) public
```

contract's constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| addressesProvider | address | address of AAVE's address provider |

### overlying

```solidity
function overlying(contract IERC20 token, struct HasAaveBalanceMemoizer.BalanceMemoizer memoizer) internal view returns (contract IERC20)
```

Gets the overlying for the token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the token. |
| memoizer | struct HasAaveBalanceMemoizer.BalanceMemoizer | the memoizer. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IERC20 | overlying for the token. |

### balanceOfOverlying

```solidity
function balanceOfOverlying(contract IERC20 token, struct HasAaveBalanceMemoizer.BalanceMemoizer memoizer) internal view returns (uint256)
```

Gets the balance for the overlying of the token, or 0 if there is no overlying.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the token. |
| memoizer | struct HasAaveBalanceMemoizer.BalanceMemoizer | the memoizer. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | balance of the overlying, or 0 if there is no overlying. |

### balanceOf

```solidity
function balanceOf(contract IERC20 token, struct HasAaveBalanceMemoizer.BalanceMemoizer memoizer) internal view returns (uint256)
```

Gets the balance of the token

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the token. |
| memoizer | struct HasAaveBalanceMemoizer.BalanceMemoizer | the memoizer. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | balance of the token. |

