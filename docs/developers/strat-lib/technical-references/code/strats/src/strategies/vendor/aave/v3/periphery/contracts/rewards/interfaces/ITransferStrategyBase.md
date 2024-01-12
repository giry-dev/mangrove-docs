# Solidity API

## ITransferStrategyBase

### EmergencyWithdrawal

```solidity
event EmergencyWithdrawal(address caller, address token, address to, uint256 amount)
```

### performTransfer

```solidity
function performTransfer(address to, address reward, uint256 amount) external returns (bool)
```

_Perform custom transfer logic via delegate call from source contract to a TransferStrategy implementation_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| to | address | Account to transfer rewards |
| reward | address | Address of the reward token |
| amount | uint256 | Amount to transfer to the "to" address parameter |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | Returns true bool if transfer logic succeeds |

### getIncentivesController

```solidity
function getIncentivesController() external view returns (address)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | Returns the address of the Incentives Controller |

### getRewardsAdmin

```solidity
function getRewardsAdmin() external view returns (address)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | Returns the address of the Rewards admin |

### emergencyWithdrawal

```solidity
function emergencyWithdrawal(address token, address to, uint256 amount) external
```

_Perform an emergency token withdrawal only callable by the Rewards admin_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | Address of the token to withdraw funds from this contract |
| to | address | Address of the recipient of the withdrawal |
| amount | uint256 | Amount of the withdrawal |

