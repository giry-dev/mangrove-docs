## AccessControlled

The contract stores an admin address which is checked against `msg.sender` in the `onlyAdmin` modifier.
Additionally, a specific `msg.sender` can be verified with the `onlyCaller` modifier.

### SetAdmin

```solidity
event SetAdmin(address admin)
```

logs new `admin` of `this`

### constructor

```solidity
constructor(address admin_) public
```

`AccessControlled`'s constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| admin_ | address | The address of the admin that can access privileged functions and also allowed to change the admin. Cannot be `address(0)`. |

### onlyCaller

```solidity
modifier onlyCaller(address caller)
```

This modifier verifies that `msg.sender` is the caller.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| caller | address | The address of the caller that can access the modified function. |

### admin

```solidity
function admin() public view returns (address)
```

Retrieves the current admin.

### onlyAdmin

```solidity
modifier onlyAdmin()
```

This modifier verifies that `msg.sender` is the admin.

### setAdmin

```solidity
function setAdmin(address admin_) public
```

This sets the admin. Only the current admin can change the admin.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| admin_ | address | The new admin. Cannot be `address(0)`. |

