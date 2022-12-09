## AaveRouter

### constructor

```solidity
constructor(address _addressesProvider, uint256 _referralCode, uint256 _interestRateMode, uint256 overhead) public
```

### __pull__

```solidity
function __pull__(contract IERC20 token, address reserve, address maker, uint256 amount, bool strict) internal virtual returns (uint256 pulled)
```

router-dependant implementation of the `pull` function

### __push__

```solidity
function __push__(contract IERC20 token, address reserve, address maker, uint256 amount) internal virtual returns (uint256)
```

router-dependant implementation of the `push` function

### reserveBalance

```solidity
function reserveBalance(contract IERC20 token, address reserve) public view virtual returns (uint256 available)
```

returns the amount of `token`s that can be made available for pulling by the maker contract

_when this router is pulling from a lender, this must return the amount of asset that can be withdrawn from reserve_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the asset one wishes to know the balance of |
| reserve | address | is the address identifying the location of the assets |

### approveLender

```solidity
function approveLender(contract IERC20 token, uint256 amount) external
```

### __checkList__

```solidity
function __checkList__(contract IERC20 token, address reserve) internal view virtual
```

router-dependent implementation of the `checkList` function

### __activate__

```solidity
function __activate__(contract IERC20 token) internal virtual
```

router-dependent implementation of the `activate` function

