## DataTypes

### ReserveData

```solidity
struct ReserveData {
  struct DataTypes.ReserveConfigurationMap configuration;
  uint128 liquidityIndex;
  uint128 variableBorrowIndex;
  uint128 currentLiquidityRate;
  uint128 currentVariableBorrowRate;
  uint128 currentStableBorrowRate;
  uint40 lastUpdateTimestamp;
  address aTokenAddress;
  address stableDebtTokenAddress;
  address variableDebtTokenAddress;
  address interestRateStrategyAddress;
  uint8 id;
}
```

### ReserveConfigurationMap

```solidity
struct ReserveConfigurationMap {
  uint256 data;
}
```

### UserConfigurationMap

```solidity
struct UserConfigurationMap {
  uint256 data;
}
```

### InterestRateMode

```solidity
enum InterestRateMode {
  NONE,
  STABLE,
  VARIABLE
}
```

### LTV_MASK

```solidity
uint256 LTV_MASK
```

### LIQUIDATION_THRESHOLD_MASK

```solidity
uint256 LIQUIDATION_THRESHOLD_MASK
```

### LIQUIDATION_BONUS_MASK

```solidity
uint256 LIQUIDATION_BONUS_MASK
```

### DECIMALS_MASK

```solidity
uint256 DECIMALS_MASK
```

### ACTIVE_MASK

```solidity
uint256 ACTIVE_MASK
```

### FROZEN_MASK

```solidity
uint256 FROZEN_MASK
```

### BORROWING_MASK

```solidity
uint256 BORROWING_MASK
```

### STABLE_BORROWING_MASK

```solidity
uint256 STABLE_BORROWING_MASK
```

### RESERVE_FACTOR_MASK

```solidity
uint256 RESERVE_FACTOR_MASK
```

### LIQUIDATION_THRESHOLD_START_BIT_POSITION

```solidity
uint256 LIQUIDATION_THRESHOLD_START_BIT_POSITION
```

_For the LTV, the start bit is 0 (up to 15), hence no bitshifting is needed_

### LIQUIDATION_BONUS_START_BIT_POSITION

```solidity
uint256 LIQUIDATION_BONUS_START_BIT_POSITION
```

### RESERVE_DECIMALS_START_BIT_POSITION

```solidity
uint256 RESERVE_DECIMALS_START_BIT_POSITION
```

### IS_ACTIVE_START_BIT_POSITION

```solidity
uint256 IS_ACTIVE_START_BIT_POSITION
```

### IS_FROZEN_START_BIT_POSITION

```solidity
uint256 IS_FROZEN_START_BIT_POSITION
```

### BORROWING_ENABLED_START_BIT_POSITION

```solidity
uint256 BORROWING_ENABLED_START_BIT_POSITION
```

### STABLE_BORROWING_ENABLED_START_BIT_POSITION

```solidity
uint256 STABLE_BORROWING_ENABLED_START_BIT_POSITION
```

### RESERVE_FACTOR_START_BIT_POSITION

```solidity
uint256 RESERVE_FACTOR_START_BIT_POSITION
```

### getParams

```solidity
function getParams(struct DataTypes.ReserveConfigurationMap configMap) internal pure returns (uint256, uint256, uint256, uint256, uint256)
```

### isUsingAsCollateral

```solidity
function isUsingAsCollateral(struct DataTypes.UserConfigurationMap configMap, uint256 reserveIndex) internal pure returns (bool)
```

