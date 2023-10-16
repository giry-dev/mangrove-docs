## AbstractRouter

Partial implementation and requirements for liquidity routers.

### ROUTER_GASREQ

```solidity
uint24 ROUTER_GASREQ
```

the amount of gas that is required for this router to be able to perform a `pull` and a `push`.

### boundMakerContracts

```solidity
mapping(address => bool) boundMakerContracts
```

the bound maker contracts which are allowed to call this router.

### onlyBound

```solidity
modifier onlyBound()
```

This modifier verifies that `msg.sender` an allowed caller of this router.

### boundOrAdmin

```solidity
modifier boundOrAdmin()
```

This modifier verifies that `msg.sender` is the admin or an allowed caller of this router.

### MakerBind

```solidity
event MakerBind(address maker)
```

logging bound maker contract

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| maker | address | the maker address |

### MakerUnbind

```solidity
event MakerUnbind(address maker)
```

logging unbound maker contract

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| maker | address | the maker address |

### constructor

```solidity
constructor(uint256 routerGasreq_) internal
```

constructor for abstract routers.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| routerGasreq_ | uint256 | is the amount of gas that is required for this router to be able to perform a `pull` and a `push`. |

### isBound

```solidity
function isBound(address mkr) public view returns (bool)
```

getter for the `makers: addr => bool` mapping

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mkr | address | the address of a maker contract |

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
function pull(contract IERC20 token, address reserveId, uint256 amount, bool strict) external returns (uint256 pulled)
```

pulls liquidity from the reserve and sends it to the calling maker contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the ERC20 managing the pulled asset |
| reserveId | address | identifies the fund owner (router implementation dependent). |
| amount | uint256 | of `token` the maker contract wishes to pull from its reserve |
| strict | bool | when the calling maker contract accepts to receive more funds from reserve than required (this may happen for gas optimization) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| pulled | uint256 | the amount that was successfully pulled. |

### __pull__

```solidity
function __pull__(contract IERC20 token, address reserveId, uint256 amount, bool strict) internal virtual returns (uint256)
```

router-dependent implementation of the `pull` function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | Token to be transferred |
| reserveId | address | determines the location of the reserve (router implementation dependent). |
| amount | uint256 | The amount of tokens to be transferred |
| strict | bool | wether the caller maker contract wishes to pull at most `amount` tokens of owner. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | pulled The amount pulled if successful; otherwise, 0. |

### push

```solidity
function push(contract IERC20 token, address reserveId, uint256 amount) external returns (uint256 pushed)
```

pushes assets from calling's maker contract to a reserve

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the asset the maker is pushing |
| reserveId | address | determines the location of the reserve (router implementation dependent). |
| amount | uint256 | is the amount of asset that should be transferred from the calling maker contract |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| pushed | uint256 | fraction of `amount` that was successfully pushed to reserve. |

### __push__

```solidity
function __push__(contract IERC20 token, address reserveId, uint256 amount) internal virtual returns (uint256 pushed)
```

router-dependent implementation of the `push` function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | Token to be transferred |
| reserveId | address | determines the location of the reserve (router implementation dependent). |
| amount | uint256 | The amount of tokens to be transferred |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| pushed | uint256 | The amount pushed if successful; otherwise, 0. |

### flush

```solidity
function flush(contract IERC20[] tokens, address reserveId) external
```

iterative `push` for the whole balance in a single call

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokens | contract IERC20[] | to flush |
| reserveId | address | determines the location of the reserve (router implementation dependent). |

### bind

```solidity
function bind(address makerContract) public
```

adds a maker contract address to the allowed makers of this router

_this function is callable by router's admin to bootstrap, but later on an allowed maker contract can add another address_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| makerContract | address | the maker contract address |

### _unbind

```solidity
function _unbind(address makerContract) internal
```

removes a maker contract address from the allowed makers of this router

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| makerContract | address | the maker contract address |

### unbind

```solidity
function unbind() external
```

removes `msg.sender` from the allowed makers of this router

### unbind

```solidity
function unbind(address makerContract) external
```

removes a makerContract from the allowed makers of this router

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| makerContract | address | the maker contract address |

### checkList

```solidity
function checkList(contract IERC20 token, address reserveId) external view
```

allows a makerContract to verify it is ready to use `this` router for a particular reserve

_`checkList` returns normally if all needed approval are strictly positive. It reverts otherwise with a reason._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the asset (and possibly its overlyings) whose approval must be checked |
| reserveId | address | of the tokens that are being pulled |

### __checkList__

```solidity
function __checkList__(contract IERC20 token, address reserveId) internal view virtual
```

router-dependent additional checks

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | is the asset (and possibly its overlyings) whose approval must be checked |
| reserveId | address | of the tokens that are being pulled |

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

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset one wishes to use the router for |

### balanceOfReserve

```solidity
function balanceOfReserve(contract IERC20 token, address reserveId) public view virtual returns (uint256)
```

Balance of a reserve

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset one wishes to know the balance of |
| reserveId | address | the identifier of the reserve |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the balance of the reserve |

