# Solidity API

## CarefulMath

Derived from OpenZeppelin's SafeMath library
        https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/math/SafeMath.sol

### MathError

_Possible error codes that we can return_

```solidity
enum MathError {
  NO_ERROR,
  DIVISION_BY_ZERO,
  INTEGER_OVERFLOW,
  INTEGER_UNDERFLOW
}
```

### mulUInt

```solidity
function mulUInt(uint256 a, uint256 b) internal pure returns (enum CarefulMath.MathError, uint256)
```

_Multiplies two numbers, returns an error on overflow._

### divUInt

```solidity
function divUInt(uint256 a, uint256 b) internal pure returns (enum CarefulMath.MathError, uint256)
```

_Integer division of two numbers, truncating the quotient._

### subUInt

```solidity
function subUInt(uint256 a, uint256 b) internal pure returns (enum CarefulMath.MathError, uint256)
```

_Subtracts two numbers, returns an error on overflow (i.e. if subtrahend is greater than minuend)._

### addUInt

```solidity
function addUInt(uint256 a, uint256 b) internal pure returns (enum CarefulMath.MathError, uint256)
```

_Adds two numbers, returns an error on overflow._

### addThenSubUInt

```solidity
function addThenSubUInt(uint256 a, uint256 b, uint256 c) internal pure returns (enum CarefulMath.MathError, uint256)
```

_add a and b and then subtract c_

### min

```solidity
function min(uint256 a, uint256 b) internal pure returns (uint256)
```

_min and max functions_

### max

```solidity
function max(uint256 a, uint256 b) internal pure returns (uint256)
```

### MAXUINT

```solidity
uint256 MAXUINT
```

### MAXUINT96

```solidity
uint256 MAXUINT96
```

### MAXUINT24

```solidity
uint256 MAXUINT24
```

