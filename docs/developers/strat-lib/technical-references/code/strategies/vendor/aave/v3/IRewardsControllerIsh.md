## IRewardsControllerIsh

Defines the basic interface for a Rewards Controller.

### claimRewards

```solidity
function claimRewards(address[] assets, uint256 amount, address to, address reward) external returns (uint256)
```

_Claims reward for a user to the desired address, on all the assets of the pool, accumulating the pending rewards_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| assets | address[] | List of assets to check eligible distributions before claiming rewards |
| amount | uint256 | The amount of rewards to claim |
| to | address | The address that will be receiving the rewards |
| reward | address | The address of the reward token |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of rewards claimed |

### claimRewardsOnBehalf

```solidity
function claimRewardsOnBehalf(address[] assets, uint256 amount, address user, address to, address reward) external returns (uint256)
```

_Claims reward for a user on behalf, on all the assets of the pool, accumulating the pending rewards. The
caller must be whitelisted via "allowClaimOnBehalf" function by the RewardsAdmin role manager_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| assets | address[] | The list of assets to check eligible distributions before claiming rewards |
| amount | uint256 | The amount of rewards to claim |
| user | address | The address to check and claim rewards |
| to | address | The address that will be receiving the rewards |
| reward | address | The address of the reward token |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of rewards claimed |

### claimRewardsToSelf

```solidity
function claimRewardsToSelf(address[] assets, uint256 amount, address reward) external returns (uint256)
```

_Claims reward for msg.sender, on all the assets of the pool, accumulating the pending rewards_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| assets | address[] | The list of assets to check eligible distributions before claiming rewards |
| amount | uint256 | The amount of rewards to claim |
| reward | address | The address of the reward token |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of rewards claimed |

### claimAllRewards

```solidity
function claimAllRewards(address[] assets, address to) external returns (address[] rewardsList, uint256[] claimedAmounts)
```

_Claims all rewards for a user to the desired address, on all the assets of the pool, accumulating the pending rewards_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| assets | address[] | The list of assets to check eligible distributions before claiming rewards |
| to | address | The address that will be receiving the rewards |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| rewardsList | address[] | List of addresses of the reward tokens |
| claimedAmounts | uint256[] | List that contains the claimed amount per reward, following same order as "rewardList" |

### claimAllRewardsOnBehalf

```solidity
function claimAllRewardsOnBehalf(address[] assets, address user, address to) external returns (address[] rewardsList, uint256[] claimedAmounts)
```

_Claims all rewards for a user on behalf, on all the assets of the pool, accumulating the pending rewards. The caller must
be whitelisted via "allowClaimOnBehalf" function by the RewardsAdmin role manager_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| assets | address[] | The list of assets to check eligible distributions before claiming rewards |
| user | address | The address to check and claim rewards |
| to | address | The address that will be receiving the rewards |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| rewardsList | address[] | List of addresses of the reward tokens |
| claimedAmounts | uint256[] | List that contains the claimed amount per reward, following same order as "rewardsList" |

### claimAllRewardsToSelf

```solidity
function claimAllRewardsToSelf(address[] assets) external returns (address[] rewardsList, uint256[] claimedAmounts)
```

_Claims all reward for msg.sender, on all the assets of the pool, accumulating the pending rewards_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| assets | address[] | The list of assets to check eligible distributions before claiming rewards |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| rewardsList | address[] | List of addresses of the reward tokens |
| claimedAmounts | uint256[] | List that contains the claimed amount per reward, following same order as "rewardsList" |

