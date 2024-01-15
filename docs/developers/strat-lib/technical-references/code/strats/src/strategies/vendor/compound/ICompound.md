# Solidity API

## ICompoundPriceOracle

### getUnderlyingPrice

```solidity
function getUnderlyingPrice(contract IcERC20 cToken) external view returns (uint256)
```

## IComptroller

### oracle

```solidity
function oracle() external returns (contract ICompoundPriceOracle priceFeed)
```

### markets

```solidity
function markets(address cToken) external view returns (bool isListed, uint256 collateralFactorMantissa, bool isComped)
```

### enterMarkets

```solidity
function enterMarkets(address[] cTokens) external returns (uint256[])
```

### exitMarket

```solidity
function exitMarket(address cToken) external returns (uint256)
```

### getAccountLiquidity

```solidity
function getAccountLiquidity(address user) external view returns (uint256 errorCode, uint256 liquidity, uint256 shortfall)
```

### claimComp

```solidity
function claimComp(address holder) external
```

### checkMembership

```solidity
function checkMembership(address account, contract IcERC20 cToken) external view returns (bool)
```

## IcERC20

### redeem

```solidity
function redeem(uint256 withdrawTokens) external returns (uint256)
```

### borrow

```solidity
function borrow(uint256 borrowAmount) external returns (uint256)
```

### repayBorrow

```solidity
function repayBorrow(uint256 repayAmount) external returns (uint256)
```

### repayBorrow

```solidity
function repayBorrow() external payable
```

### repayBorrowBehalf

```solidity
function repayBorrowBehalf(address borrower, uint256 repayAmount) external returns (uint256)
```

### repayBorrowBehalf

```solidity
function repayBorrowBehalf(address borrower) external payable
```

### balanceOfUnderlying

```solidity
function balanceOfUnderlying(address owner) external returns (uint256)
```

### getAccountSnapshot

```solidity
function getAccountSnapshot(address account) external view returns (uint256, uint256, uint256, uint256)
```

### borrowRatePerBlock

```solidity
function borrowRatePerBlock() external view returns (uint256)
```

### supplyRatePerBlock

```solidity
function supplyRatePerBlock() external view returns (uint256)
```

### totalBorrowsCurrent

```solidity
function totalBorrowsCurrent() external returns (uint256)
```

### borrowBalanceCurrent

```solidity
function borrowBalanceCurrent(address account) external returns (uint256)
```

### borrowBalanceStored

```solidity
function borrowBalanceStored(address account) external view returns (uint256)
```

### exchangeRateCurrent

```solidity
function exchangeRateCurrent() external returns (uint256)
```

### exchangeRateStored

```solidity
function exchangeRateStored() external view returns (uint256)
```

### getCash

```solidity
function getCash() external view returns (uint256)
```

### accrueInterest

```solidity
function accrueInterest() external returns (uint256)
```

### seize

```solidity
function seize(address liquidator, address borrower, uint256 seizeTokens) external returns (uint256)
```

### redeemUnderlying

```solidity
function redeemUnderlying(uint256 redeemAmount) external returns (uint256)
```

### mint

```solidity
function mint(uint256 mintAmount) external returns (uint256)
```

### mint

```solidity
function mint() external payable
```

### underlying

```solidity
function underlying() external view returns (address)
```

### isCToken

```solidity
function isCToken() external view returns (bool)
```

