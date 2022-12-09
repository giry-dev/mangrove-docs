## AavePoolManager

### constructor

```solidity
constructor(address _addressesProvider, uint256 _referralCode, uint256 _interestRateMode, uint256 overhead) public
```

### redeem

```solidity
function redeem(contract IERC20 token, address reserve, uint256 amount, address to) external
```

### borrow

```solidity
function borrow(contract IERC20 token, address reserve, uint256 amount, address to) external
```

### repay

```solidity
function repay(contract IERC20 token, address reserve, uint256 amount, address from) external
```

### supply

```solidity
function supply(contract IERC20 token, address reserve, uint256 amount, address from) external
```

### claimRewards

```solidity
function claimRewards(contract IRewardsControllerIsh rewardsController, address[] assets) external returns (address[] rewardsList, uint256[] claimedAmounts)
```

