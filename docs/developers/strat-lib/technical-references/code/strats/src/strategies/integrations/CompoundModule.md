## WETH

### deposit

```solidity
function deposit() external payable
```

### withdraw

```solidity
function withdraw(uint256) external
```

## CompoundModule

### ErrorOnRedeem

```solidity
event ErrorOnRedeem(bytes32 olKeyHash, uint256 offerId, uint256 amount, uint256 errorCode)
```

### ErrorOnMint

```solidity
event ErrorOnMint(bytes32 olKeyHash, uint256 offerId, uint256 amount, uint256 errorCode)
```

### ComptrollerError

```solidity
event ComptrollerError(address comp, uint256 errorCode)
```

### overlyings

```solidity
mapping(contract IERC20 => contract IcERC20) overlyings
```

### comptroller

```solidity
contract IComptroller comptroller
```

### oracle

```solidity
contract ICompoundPriceOracle oracle
```

### weth

```solidity
contract WETH weth
```

### constructor

```solidity
constructor(address _unitroller, address wethAddress) public
```

### isCeth

```solidity
function isCeth(contract IcERC20 ctoken) internal view returns (bool)
```

### underlying

```solidity
function underlying(contract IcERC20 ctoken) internal view returns (contract IERC20)
```

### _approveLender

```solidity
function _approveLender(contract IcERC20 ctoken, uint256 amount) internal returns (bool)
```

### _enterMarkets

```solidity
function _enterMarkets(address[] ctokens) internal
```

### _exitMarket

```solidity
function _exitMarket(contract IcERC20 ctoken) internal
```

### _claimComp

```solidity
function _claimComp() internal
```

### isPooled

```solidity
function isPooled(contract IERC20 token) public view returns (bool)
```

### Heap

struct to circumvent stack too deep error in `maxGettableUnderlying` function

```solidity
struct Heap {
  uint256 ctokenBalance;
  uint256 cDecimals;
  uint256 decimals;
  uint256 exchangeRateMantissa;
  uint256 liquidity;
  uint256 collateralFactorMantissa;
  uint256 maxRedeemable;
  uint256 balanceOfUnderlying;
  uint256 priceMantissa;
  uint256 underlyingLiquidity;
  enum CarefulMath.MathError mErr;
  uint256 errCode;
}
```

### maxGettableUnderlying

```solidity
function maxGettableUnderlying(address _ctoken, address account) public view returns (uint256, uint256)
```

Computes maximal maximal redeem capacity (R) and max borrow capacity (B|R) after R has been redeemed
returns (R, B|R)

### compoundRedeem

```solidity
function compoundRedeem(uint256 amountToRedeem, struct MgvLib.SingleOrder order) internal returns (uint256)
```

### _mint

```solidity
function _mint(uint256 amount, contract IcERC20 ctoken) internal returns (uint256 errCode)
```

### compoundMint

```solidity
function compoundMint(uint256 amount, struct MgvLib.SingleOrder order) internal returns (uint256 missing)
```

