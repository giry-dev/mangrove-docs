## MintableERC20BLWithDecimals

### admins

```solidity
mapping(address => bool) admins
```

### __decimals

```solidity
uint256 __decimals
```

### constructor

```solidity
constructor(address admin, string name, string symbol, uint8 _decimals) public
```

### decimals

```solidity
function decimals() public view virtual returns (uint8)
```

_Returns the number of decimals used to get its user representation.
For example, if `decimals` equals `2`, a balance of `505` tokens should
be displayed to a user as `5.05` (`505 / 10 ** 2`).

Tokens usually opt for a value of 18, imitating the relationship between
Ether and Wei. This is the value {ERC20} uses, unless this function is
overridden;

NOTE: This information is only used for _display_ purposes: it in
no way affects any of the arithmetic of the contract, including
{IERC20-balanceOf} and {IERC20-transfer}._

### requireAdmin

```solidity
function requireAdmin() internal view
```

### addAdmin

```solidity
function addAdmin(address admin) external
```

### mint

```solidity
function mint(address to, uint256 amount) external
```

### mint

```solidity
function mint(uint256 amount) external
```

### mintRestricted

```solidity
function mintRestricted(address to, uint256 amount) internal
```

### mintAdmin

```solidity
function mintAdmin(address to, uint256 amount) external
```

### burn

```solidity
function burn(address account, uint256 amount) external
```

### blacklists

```solidity
function blacklists(address account) external
```

### whitelists

```solidity
function whitelists(address account) external
```

### pow

```solidity
function pow(uint256 n, uint256 e) public pure returns (uint256)
```

