# Solidity API

## RewardsDataTypes

### RewardsConfigInput

```solidity
struct RewardsConfigInput {
  uint88 emissionPerSecond;
  uint256 totalSupply;
  uint32 distributionEnd;
  address asset;
  address reward;
  contract ITransferStrategyBase transferStrategy;
  contract IEACAggregatorProxy rewardOracle;
}
```

### UserAssetBalance

```solidity
struct UserAssetBalance {
  address asset;
  uint256 userBalance;
  uint256 totalSupply;
}
```

### UserData

```solidity
struct UserData {
  uint104 index;
  uint128 accrued;
}
```

### RewardData

```solidity
struct RewardData {
  uint104 index;
  uint88 emissionPerSecond;
  uint32 lastUpdateTimestamp;
  uint32 distributionEnd;
  mapping(address => struct RewardsDataTypes.UserData) usersData;
}
```

### AssetData

```solidity
struct AssetData {
  mapping(address => struct RewardsDataTypes.RewardData) rewards;
  mapping(uint128 => address) availableRewards;
  uint128 availableRewardsCount;
  uint8 decimals;
}
```

