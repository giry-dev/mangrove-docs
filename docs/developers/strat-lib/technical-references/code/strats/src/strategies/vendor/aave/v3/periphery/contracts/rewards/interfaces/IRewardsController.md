# Solidity API

## IRewardsController

Defines the basic interface for a Rewards Controller.

### ClaimerSet

```solidity
event ClaimerSet(address user, address claimer)
```

_Emitted when a new address is whitelisted as claimer of rewards on behalf of a user_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user |
| claimer | address | The address of the claimer |

### RewardsClaimed

```solidity
event RewardsClaimed(address user, address reward, address to, address claimer, uint256 amount)
```

_Emitted when rewards are claimed_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user rewards has been claimed on behalf of |
| reward | address | The address of the token reward is claimed |
| to | address | The address of the receiver of the rewards |
| claimer | address | The address of the claimer |
| amount | uint256 | The amount of rewards claimed |

### TransferStrategyInstalled

```solidity
event TransferStrategyInstalled(address reward, address transferStrategy)
```

_Emitted when a transfer strategy is installed for the reward distribution_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reward | address | The address of the token reward |
| transferStrategy | address | The address of TransferStrategy contract |

### RewardOracleUpdated

```solidity
event RewardOracleUpdated(address reward, address rewardOracle)
```

_Emitted when the reward oracle is updated_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reward | address | The address of the token reward |
| rewardOracle | address | The address of oracle |

### setClaimer

```solidity
function setClaimer(address user, address claimer) external
```

_Whitelists an address to claim the rewards on behalf of another address_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user |
| claimer | address | The address of the claimer |

### setTransferStrategy

```solidity
function setTransferStrategy(address reward, contract ITransferStrategyBase transferStrategy) external
```

_Sets a TransferStrategy logic contract that determines the logic of the rewards transfer_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reward | address | The address of the reward token |
| transferStrategy | contract ITransferStrategyBase | The address of the TransferStrategy logic contract |

### setRewardOracle

```solidity
function setRewardOracle(address reward, contract IEACAggregatorProxy rewardOracle) external
```

At the moment of reward configuration, the Incentives Controller performs
a check to see if the reward asset oracle is compatible with IEACAggregator proxy.
This check is enforced for integrators to be able to show incentives at
the current Aave UI without the need to setup an external price registry

_Sets an Aave Oracle contract to enforce rewards with a source of value._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reward | address | The address of the reward to set the price aggregator |
| rewardOracle | contract IEACAggregatorProxy | The address of price aggregator that follows IEACAggregatorProxy interface |

### getRewardOracle

```solidity
function getRewardOracle(address reward) external view returns (address)
```

_Get the price aggregator oracle address_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reward | address | The address of the reward |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The price oracle of the reward |

### getClaimer

```solidity
function getClaimer(address user) external view returns (address)
```

_Returns the whitelisted claimer for a certain address (0x0 if not set)_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The claimer address |

### getTransferStrategy

```solidity
function getTransferStrategy(address reward) external view returns (address)
```

_Returns the Transfer Strategy implementation contract address being used for a reward address_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reward | address | The address of the reward |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the TransferStrategy contract |

### configureAssets

```solidity
function configureAssets(struct RewardsDataTypes.RewardsConfigInput[] config) external
```

_Configure assets to incentivize with an emission of rewards per second until the end of distribution._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| config | struct RewardsDataTypes.RewardsConfigInput[] | The assets configuration input, the list of structs contains the following fields:   uint104 emissionPerSecond: The emission per second following rewards unit decimals.   uint256 totalSupply: The total supply of the asset to incentivize   uint40 distributionEnd: The end of the distribution of the incentives for an asset   address asset: The asset address to incentivize   address reward: The reward token address   ITransferStrategy transferStrategy: The TransferStrategy address with the install hook and claim logic.   IEACAggregatorProxy rewardOracle: The Price Oracle of a reward to visualize the incentives at the UI Frontend.                                     Must follow Chainlink Aggregator IEACAggregatorProxy interface to be compatible. |

### handleAction

```solidity
function handleAction(address user, uint256 totalSupply, uint256 userBalance) external
```

_Called by the corresponding asset on transfer hook in order to update the rewards distribution.
The units of `totalSupply` and `userBalance` should be the same._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user whose asset balance has changed |
| totalSupply | uint256 | The total supply of the asset prior to user balance change |
| userBalance | uint256 | The previous user balance prior to balance change |

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

