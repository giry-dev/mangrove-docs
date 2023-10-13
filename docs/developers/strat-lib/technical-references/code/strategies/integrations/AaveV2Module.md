## AaveModule

### ErrorOnRedeem

```solidity
event ErrorOnRedeem(address outbound_tkn, address inbound_tkn, uint256 offerId, uint256 amount, string errorCode)
```

### ErrorOnMint

```solidity
event ErrorOnMint(address outbound_tkn, address inbound_tkn, uint256 offerId, uint256 amount, string errorCode)
```

### lendingPool

```solidity
contract ILendingPool lendingPool
```

### priceOracle

```solidity
contract IPriceOracleGetter priceOracle
```

### referralCode

```solidity
uint16 referralCode
```

### constructor

```solidity
constructor(address _addressesProvider, uint256 _referralCode) public
```

### _approveLender

```solidity
function _approveLender(contract IERC20 token, uint256 amount) internal
```

approval of overlying contract by the underlying is necessary for minting and repaying borrow
user must use this function to do so.

### _exitMarket

```solidity
function _exitMarket(contract IERC20 underlying) internal
```

exits markets

### _enterMarkets

```solidity
function _enterMarkets(contract IERC20[] underlyings) internal
```

### overlying

```solidity
function overlying(contract IERC20 asset) public view returns (contract IERC20 aToken)
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

### maxGettableUnderlying

```solidity
function maxGettableUnderlying(contract IERC20 asset, bool tryBorrow, address onBehalf) public view returns (uint256, uint256)
```

Computes maximal maximal redeem capacity (R) and max borrow capacity (B|R) after R has been redeemed
returns (R, B|R)

### aaveRedeem

```solidity
function aaveRedeem(uint256 amountToRedeem, address onBehalf, struct MgvLib.SingleOrder order) internal returns (uint256)
```

### _supply

```solidity
function _supply(uint256 amount, address token, address onBehalf) internal
```

### aaveMint

```solidity
function aaveMint(uint256 amount, address onBehalf, struct MgvLib.SingleOrder order) internal returns (uint256)
```

user need to approve ctoken in order to mint

