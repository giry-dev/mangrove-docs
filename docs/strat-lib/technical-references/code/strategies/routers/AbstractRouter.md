## AbstractRouter

Partial implementation and requirements for liquidity routers.

### ROUTER_GASREQ

```solidity
uint24 ROUTER_GASREQ
```

### onlyMakers

```solidity
modifier onlyMakers()
```

This modifier verifies that `msg.sender` an allowed caller of this router.

### makersOrAdmin

```solidity
modifier makersOrAdmin()
```

This modifier verifies that `msg.sender` is the admin or an allowed caller of this router.

### constructor

```solidity
constructor(uint256 routerGasreq_) internal
```

constructor for abstract routers.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| routerGasreq_ | uint256 | is the amount of gas that is required for this router to be able to perform a `pull` and a `push`. |

### makers

```solidity
function makers(address mkr) public view returns (bool)
```

getter for the `makers: addr => bool` mapping

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mkr | address | the address of a maker |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if `mkr` is authorized to call this router. |

### routerGasreq

```solidity
function routerGasreq() public view returns (uint256 overhead)
```

view for gas overhead of this router.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| overhead | uint256 | the added (overapproximated) gas cost of `push` and `pull`. |

### pull

```solidity
function pull(contract IERC20 token, address reserve, uint256 amount, bool strict) external returns (uint256 pulled)
```

pulls liquidity from an offer maker's reserve to `msg.sender`'s balance

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the ERC20 managing the pulled asset |
| reserve | address | where `amount` of `token` should be pulled from |
| amount | uint256 | of `token` the maker contract wishes to get |
| strict | bool | when the calling maker contract accepts to receive more `token` than required (this may happen for gas optimization) |

### __pull__

```solidity
function __pull__(contract IERC20 token, address reserve, address maker, uint256 amount, bool strict) internal virtual returns (uint256)
```

router-dependant implementation of the `pull` function

### push

```solidity
function push(contract IERC20 token, address reserve, uint256 amount) external returns (uint256 pushed)
```

pushes assets from maker contract's balance to the specified reserve

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the asset the maker is pushing |
| reserve | address | is the address identifying where the transferred assets should be placed to |
| amount | uint256 | is the amount of asset that should be transferred from the calling maker contract |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| pushed | uint256 | fraction of `amount` that was successfully pushed to reserve. |

### __push__

```solidity
function __push__(contract IERC20 token, address reserve, address maker, uint256 amount) internal virtual returns (uint256)
```

router-dependant implementation of the `push` function

### flush

```solidity
function flush(contract IERC20[] tokens, address reserve) external
```

iterative `push` in a single call

### reserveBalance

```solidity
function reserveBalance(contract IERC20 token, address reserve) external view virtual returns (uint256)
```

returns the amount of `token`s that can be made available for pulling by the maker contract

_when this router is pulling from a lender, this must return the amount of asset that can be withdrawn from reserve_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the asset one wishes to know the balance of |
| reserve | address | is the address identifying the location of the assets |

### bind

```solidity
function bind(address maker) public
```

adds a maker contract address to the allowed makers of this router

_this function is callable by router's admin to bootstrap, but later on an allowed maker contract can add another address_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| maker | address | the maker contract address |

### unbind

```solidity
function unbind(address maker) public
```

removes a maker contract address from the allowed makers of this router

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| maker | address | the maker contract address |

### unbind

```solidity
function unbind() external
```

removes `msg.sender` from the allowed makers of this router

### checkList

```solidity
function checkList(contract IERC20 token, address reserve) external view
```

verifies all required approval involving `this` router (either as a spender or owner)

_`checkList` returns normally if all needed approval are strictly positive. It reverts otherwise with a reason._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the asset (and possibly its overlyings) whose approval must be checked |
| reserve | address | the reserve that requires asset pulling/pushing |

### __checkList__

```solidity
function __checkList__(contract IERC20 token, address reserve) internal view virtual
```

router-dependent implementation of the `checkList` function

### activate

```solidity
function activate(contract IERC20 token) external
```

performs necessary approval to activate router function on a particular asset

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset one wishes to use the router for |

### __activate__

```solidity
function __activate__(contract IERC20 token) internal virtual
```

router-dependent implementation of the `activate` function

