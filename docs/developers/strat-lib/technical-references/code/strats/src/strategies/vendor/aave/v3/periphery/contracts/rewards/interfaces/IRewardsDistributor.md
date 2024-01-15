## IRewardsDistributor

Defines the basic interface for a Rewards Distributor.

### AssetConfigUpdated

```solidity
event AssetConfigUpdated(address asset, address reward, uint256 oldEmission, uint256 newEmission, uint256 oldDistributionEnd, uint256 newDistributionEnd, uint256 assetIndex)
```

_Emitted when the configuration of the rewards of an asset is updated._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the incentivized asset |
| reward | address | The address of the reward token |
| oldEmission | uint256 | The old emissions per second value of the reward distribution |
| newEmission | uint256 | The new emissions per second value of the reward distribution |
| oldDistributionEnd | uint256 | The old end timestamp of the reward distribution |
| newDistributionEnd | uint256 | The new end timestamp of the reward distribution |
| assetIndex | uint256 | The index of the asset distribution |

### Accrued

```solidity
event Accrued(address asset, address reward, address user, uint256 assetIndex, uint256 userIndex, uint256 rewardsAccrued)
```

_Emitted when rewards of an asset are accrued on behalf of a user._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the incentivized asset |
| reward | address | The address of the reward token |
| user | address | The address of the user that rewards are accrued on behalf of |
| assetIndex | uint256 | The index of the asset distribution |
| userIndex | uint256 | The index of the asset distribution on behalf of the user |
| rewardsAccrued | uint256 | The amount of rewards accrued |

### setDistributionEnd

```solidity
function setDistributionEnd(address asset, address reward, uint32 newDistributionEnd) external
```

_Sets the end date for the distribution_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The asset to incentivize |
| reward | address | The reward token that incentives the asset |
| newDistributionEnd | uint32 | The end date of the incentivization, in unix time format |

### setEmissionPerSecond

```solidity
function setEmissionPerSecond(address asset, address[] rewards, uint88[] newEmissionsPerSecond) external
```

_Sets the emission per second of a set of reward distributions_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The asset is being incentivized |
| rewards | address[] | List of reward addresses are being distributed |
| newEmissionsPerSecond | uint88[] | List of new reward emissions per second |

### getDistributionEnd

```solidity
function getDistributionEnd(address asset, address reward) external view returns (uint256)
```

_Gets the end date for the distribution_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The incentivized asset |
| reward | address | The reward token of the incentivized asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The timestamp with the end of the distribution, in unix time format |

### getUserAssetIndex

```solidity
function getUserAssetIndex(address user, address asset, address reward) external view returns (uint256)
```

_Returns the index of a user on a reward distribution_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | Address of the user |
| asset | address | The incentivized asset |
| reward | address | The reward token of the incentivized asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The current user asset index, not including new distributions |

### getRewardsData

```solidity
function getRewardsData(address asset, address reward) external view returns (uint256, uint256, uint256, uint256)
```

_Returns the configuration of the distribution reward for a certain asset_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The incentivized asset |
| reward | address | The reward token of the incentivized asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The index of the asset distribution |
| [1] | uint256 | The emission per second of the reward distribution |
| [2] | uint256 | The timestamp of the last update of the index |
| [3] | uint256 | The timestamp of the distribution end |

### getAssetIndex

```solidity
function getAssetIndex(address asset, address reward) external view returns (uint256, uint256)
```

_Calculates the next value of an specific distribution index, with validations._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The incentivized asset |
| reward | address | The reward token of the incentivized asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The old index of the asset distribution |
| [1] | uint256 | The new index of the asset distribution |

### getRewardsByAsset

```solidity
function getRewardsByAsset(address asset) external view returns (address[])
```

_Returns the list of available reward token addresses of an incentivized asset_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The incentivized asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | List of rewards addresses of the input asset |

### getRewardsList

```solidity
function getRewardsList() external view returns (address[])
```

_Returns the list of available reward addresses_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | List of rewards supported in this contract |

### getUserAccruedRewards

```solidity
function getUserAccruedRewards(address user, address reward) external view returns (uint256)
```

_Returns the accrued rewards balance of a user, not including virtually accrued rewards since last distribution._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user |
| reward | address | The address of the reward token |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Unclaimed rewards, not including new distributions |

### getUserRewards

```solidity
function getUserRewards(address[] assets, address user, address reward) external view returns (uint256)
```

_Returns a single rewards balance of a user, including virtually accrued and unrealized claimable rewards._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| assets | address[] | List of incentivized assets to check eligible distributions |
| user | address | The address of the user |
| reward | address | The address of the reward token |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The rewards amount |

### getAllUserRewards

```solidity
function getAllUserRewards(address[] assets, address user) external view returns (address[], uint256[])
```

_Returns a list all rewards of a user, including already accrued and unrealized claimable rewards_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| assets | address[] | List of incentivized assets to check eligible distributions |
| user | address | The address of the user |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | The list of reward addresses |
| [1] | uint256[] | The list of unclaimed amount of rewards |

### getAssetDecimals

```solidity
function getAssetDecimals(address asset) external view returns (uint8)
```

_Returns the decimals of an asset to calculate the distribution delta_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address to retrieve decimals |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint8 | The decimals of an underlying asset |

### EMISSION_MANAGER

```solidity
function EMISSION_MANAGER() external view returns (address)
```

_Returns the address of the emission manager_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the EmissionManager |

### getEmissionManager

```solidity
function getEmissionManager() external view returns (address)
```

_Returns the address of the emission manager.
Deprecated: This getter is maintained for compatibility purposes. Use the `EMISSION_MANAGER()` function instead._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the EmissionManager |

