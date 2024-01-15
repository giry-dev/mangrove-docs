## AaveV3BorrowerImplementation

### POOL

```solidity
contract IPool POOL
```

### ORACLE

```solidity
contract IPriceOracleGetter ORACLE
```

### constructor

```solidity
constructor(contract IPool pool, contract IPriceOracleGetter oracle) public
```

### Underlying

```solidity
struct Underlying {
  uint256 ltv;
  uint256 liquidationThreshold;
  uint256 decimals;
  uint256 price;
}
```

### Account

```solidity
struct Account {
  uint256 collateral;
  uint256 debt;
  uint256 borrowPower;
  uint256 redeemPower;
  uint256 ltv;
  uint256 liquidationThreshold;
  uint256 health;
  uint256 balanceOfUnderlying;
}
```

### $getCaps

```solidity
function $getCaps(address asset) public view returns (uint256, uint256)
```

### $maxGettableUnderlying

```solidity
function $maxGettableUnderlying(address asset, bool tryBorrow, address onBehalf) public view returns (uint256, uint256)
```

### $repayThenDeposit

```solidity
function $repayThenDeposit(uint256 interestRateMode, uint256 referralCode, contract IERC20 token, address onBehalf, uint256 amount) external
```

### $redeemThenBorrow

```solidity
function $redeemThenBorrow(uint256 interestRateMode, uint256 referralCode, contract IERC20 token, address onBehalfOf, uint256 amount, bool strict, address recipient) external returns (uint256)
```

