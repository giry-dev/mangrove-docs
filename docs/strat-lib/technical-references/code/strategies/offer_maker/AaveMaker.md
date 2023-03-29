## AaveMaker

### reserves

```solidity
mapping(address => address) reserves
```

### retdata

```solidity
bytes32 retdata
```

### constructor

```solidity
constructor(contract IMangrove mgv, contract AbstractRouter router_, address deployer, uint256 gasreq, address addressesProvider) public
```

### tokenBalance

```solidity
function tokenBalance(contract IERC20 token, address reserveId) external view returns (uint256)
```

### __lastLook__

```solidity
function __lastLook__(struct MgvLib.SingleOrder) internal virtual returns (bytes32)
```

### __posthookSuccess__

```solidity
function __posthookSuccess__(struct MgvLib.SingleOrder order, bytes32 maker_data) internal returns (bytes32 data)
```

### supply

```solidity
function supply(contract IERC20 token, uint256 amount) public
```

### borrow

```solidity
function borrow(contract IERC20 token, uint256 amount) public
```

### approveLender

```solidity
function approveLender(contract IERC20 token, uint256 amount) public
```

### executeOperation

```solidity
function executeOperation(address token, uint256 amount, uint256 fees, address, bytes) external
```

### flashLoan

```solidity
function flashLoan(contract IERC20 token, uint256 amount) public
```

