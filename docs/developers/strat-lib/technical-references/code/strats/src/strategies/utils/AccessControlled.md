## AccessControlled

The contract stores an admin address which is checked against `msg.sender` in the `onlyAdmin` modifier.
Additionally, a specific `msg.sender` can be verified with the `onlyCaller` modifier.

### SetAdmin

```solidity
event SetAdmin(address admin)
```

logs new `admin` of `this`
By emitting this data, an indexer will be able to keep track of what address is the admin of this contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| admin | address | The new admin. |

### _admin

```solidity
address _admin
```

The admin address.

### constructor

```solidity
constructor(address admin_) public
```

`AccessControlled`'s constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| admin_ | address | The address of the admin that can access privileged functions and also allowed to change the admin. Cannot be `address(0)`. |

### onlyAdmin

```solidity
modifier onlyAdmin()
```

This modifier verifies that `msg.sender` is the admin.

### onlyCaller

```solidity
modifier onlyCaller(address caller)
```

This modifier verifies that `msg.sender` is the caller.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| caller | address | The address of the caller that can access the modified function. |

### adminOrCaller

```solidity
modifier adminOrCaller(address caller)
```

This modifier verifies that `msg.sender` is either caller or the admin

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| caller | address | The address of a caller that can access the modified function. |

### admin

```solidity
function admin() public view returns (address current)
```

Retrieves the current admin.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| current | address | admin. |

### setAdmin

```solidity
function setAdmin(address admin_) public
```

This sets the admin. Only the current admin can change the admin.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| admin_ | address | The new admin. Cannot be `address(0)`. |

