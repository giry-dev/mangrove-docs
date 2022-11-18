## AaveDeepRouter

### constructor

```solidity
constructor(address _addressesProvider, uint256 _referralCode, uint256 _interestRateMode) public
```

### __pull__

```solidity
function __pull__(contract IERC20 token, address reserve, address maker, uint256 amount, bool strict) internal virtual returns (uint256 pulled)
```

router-dependant implementation of the `pull` function

### __checkList__

```solidity
function __checkList__(contract IERC20 token, address reserve) internal view virtual
```

router-dependent implementation of the `checkList` function

