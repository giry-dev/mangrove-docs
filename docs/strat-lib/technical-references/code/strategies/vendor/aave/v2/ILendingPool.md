## ILendingPool

### Deposit

```solidity
event Deposit(address reserve, address user, address onBehalfOf, uint256 amount, uint16 referral)
```

_Emitted on deposit()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address initiating the deposit |
| onBehalfOf | address | The beneficiary of the deposit, receiving the aTokens |
| amount | uint256 | The amount deposited |
| referral | uint16 | The referral code used |

### Withdraw

```solidity
event Withdraw(address reserve, address user, address to, uint256 amount)
```

_Emitted on withdraw()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlyng asset being withdrawn |
| user | address | The address initiating the withdrawal, owner of aTokens |
| to | address | Address that will receive the underlying |
| amount | uint256 | The amount to be withdrawn |

### Borrow

```solidity
event Borrow(address reserve, address user, address onBehalfOf, uint256 amount, uint256 borrowRateMode, uint256 borrowRate, uint16 referral)
```

_Emitted on borrow() and flashLoan() when debt needs to be opened_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset being borrowed |
| user | address | The address of the user initiating the borrow(), receiving the funds on borrow() or just initiator of the transaction on flashLoan() |
| onBehalfOf | address | The address that will be getting the debt |
| amount | uint256 | The amount borrowed out |
| borrowRateMode | uint256 | The rate mode: 1 for Stable, 2 for Variable |
| borrowRate | uint256 | The numeric rate at which the user has borrowed |
| referral | uint16 | The referral code used |

### Repay

```solidity
event Repay(address reserve, address user, address repayer, uint256 amount)
```

_Emitted on repay()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The beneficiary of the repayment, getting his debt reduced |
| repayer | address | The address of the user initiating the repay(), providing the funds |
| amount | uint256 | The amount repaid |

### Swap

```solidity
event Swap(address reserve, address user, uint256 rateMode)
```

_Emitted on swapBorrowRateMode()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address of the user swapping his rate mode |
| rateMode | uint256 | The rate mode that the user wants to swap to |

### ReserveUsedAsCollateralEnabled

```solidity
event ReserveUsedAsCollateralEnabled(address reserve, address user)
```

_Emitted on setUserUseReserveAsCollateral()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address of the user enabling the usage as collateral |

### ReserveUsedAsCollateralDisabled

```solidity
event ReserveUsedAsCollateralDisabled(address reserve, address user)
```

_Emitted on setUserUseReserveAsCollateral()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address of the user enabling the usage as collateral |

### RebalanceStableBorrowRate

```solidity
event RebalanceStableBorrowRate(address reserve, address user)
```

_Emitted on rebalanceStableBorrowRate()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address of the user for which the rebalance has been executed |

### FlashLoan

```solidity
event FlashLoan(address target, address initiator, address asset, uint256 amount, uint256 premium, uint16 referralCode)
```

_Emitted on flashLoan()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| target | address | The address of the flash loan receiver contract |
| initiator | address | The address initiating the flash loan |
| asset | address | The address of the asset being flash borrowed |
| amount | uint256 | The amount flash borrowed |
| premium | uint256 | The fee flash borrowed |
| referralCode | uint16 | The referral code used |

### Paused

```solidity
event Paused()
```

_Emitted when the pause is triggered._

### Unpaused

```solidity
event Unpaused()
```

_Emitted when the pause is lifted._

### LiquidationCall

```solidity
event LiquidationCall(address collateralAsset, address debtAsset, address user, uint256 debtToCover, uint256 liquidatedCollateralAmount, address liquidator, bool receiveAToken)
```

_Emitted when a borrower is liquidated. This event is emitted by the LendingPool via
LendingPoolCollateral manager using a DELEGATECALL
This allows to have the events in the generated ABI for LendingPool._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| collateralAsset | address | The address of the underlying asset used as collateral, to receive as result of the liquidation |
| debtAsset | address | The address of the underlying borrowed asset to be repaid with the liquidation |
| user | address | The address of the borrower getting liquidated |
| debtToCover | uint256 | The debt amount of borrowed `asset` the liquidator wants to cover |
| liquidatedCollateralAmount | uint256 | The amount of collateral received by the liiquidator |
| liquidator | address | The address of the liquidator |
| receiveAToken | bool | `true` if the liquidators wants to receive the collateral aTokens, `false` if he wants to receive the underlying collateral asset directly |

### ReserveDataUpdated

```solidity
event ReserveDataUpdated(address reserve, uint256 liquidityRate, uint256 stableBorrowRate, uint256 variableBorrowRate, uint256 liquidityIndex, uint256 variableBorrowIndex)
```

_Emitted when the state of a reserve is updated. NOTE: This event is actually declared
in the ReserveLogic library and emitted in the updateInterestRates() function. Since the function is internal,
the event will actually be fired by the LendingPool contract. The event is therefore replicated here so it
gets added to the LendingPool ABI_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| liquidityRate | uint256 | The new liquidity rate |
| stableBorrowRate | uint256 | The new stable borrow rate |
| variableBorrowRate | uint256 | The new variable borrow rate |
| liquidityIndex | uint256 | The new liquidity index |
| variableBorrowIndex | uint256 | The new variable borrow index |

### deposit

```solidity
function deposit(address asset, uint256 amount, address onBehalfOf, uint16 referralCode) external
```

_Deposits an `amount` of underlying asset into the reserve, receiving in return overlying aTokens.
- E.g. User deposits 100 USDC and gets in return 100 aUSDC_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset to deposit |
| amount | uint256 | The amount to be deposited |
| onBehalfOf | address | The address that will receive the aTokens, same as msg.sender if the user   wants to receive them on his own wallet, or a different address if the beneficiary of aTokens   is a different wallet |
| referralCode | uint16 | Code used to register the integrator originating the operation, for potential rewards.   0 if the action is executed directly by the user, without any middle-man |

### withdraw

```solidity
function withdraw(address asset, uint256 amount, address to) external returns (uint256)
```

_Withdraws an `amount` of underlying asset from the reserve, burning the equivalent aTokens owned
E.g. User has 100 aUSDC, calls withdraw() and receives 100 USDC, burning the 100 aUSDC_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset to withdraw |
| amount | uint256 | The underlying amount to be withdrawn   - Send the value type(uint256).max in order to withdraw the whole aToken balance |
| to | address | Address that will receive the underlying, same as msg.sender if the user   wants to receive it on his own wallet, or a different address if the beneficiary is a   different wallet |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The final amount withdrawn |

### borrow

```solidity
function borrow(address asset, uint256 amount, uint256 interestRateMode, uint16 referralCode, address onBehalfOf) external
```

_Allows users to borrow a specific `amount` of the reserve underlying asset, provided that the borrower
already deposited enough collateral, or he was given enough allowance by a credit delegator on the
corresponding debt token (StableDebtToken or VariableDebtToken)
- E.g. User borrows 100 USDC passing as `onBehalfOf` his own address, receiving the 100 USDC in his wallet
  and 100 stable/variable debt tokens, depending on the `interestRateMode`_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset to borrow |
| amount | uint256 | The amount to be borrowed |
| interestRateMode | uint256 | The interest rate mode at which the user wants to borrow: 1 for Stable, 2 for Variable |
| referralCode | uint16 | Code used to register the integrator originating the operation, for potential rewards.   0 if the action is executed directly by the user, without any middle-man |
| onBehalfOf | address | Address of the user who will receive the debt. Should be the address of the borrower itself calling the function if he wants to borrow against his own collateral, or the address of the credit delegator if he has been given credit delegation allowance |

### repay

```solidity
function repay(address asset, uint256 amount, uint256 rateMode, address onBehalfOf) external returns (uint256)
```

Repays a borrowed `amount` on a specific reserve, burning the equivalent debt tokens owned
- E.g. User repays 100 USDC, burning 100 variable/stable debt tokens of the `onBehalfOf` address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the borrowed underlying asset previously borrowed |
| amount | uint256 | The amount to repay - Send the value type(uint256).max in order to repay the whole debt for `asset` on the specific `debtMode` |
| rateMode | uint256 | The interest rate mode at of the debt the user wants to repay: 1 for Stable, 2 for Variable |
| onBehalfOf | address | Address of the user who will get his debt reduced/removed. Should be the address of the user calling the function if he wants to reduce/remove his own debt, or the address of any other other borrower whose debt should be removed |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The final amount repaid |

### swapBorrowRateMode

```solidity
function swapBorrowRateMode(address asset, uint256 rateMode) external
```

_Allows a borrower to swap his debt between stable and variable mode, or viceversa_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset borrowed |
| rateMode | uint256 | The rate mode that the user wants to swap to |

### rebalanceStableBorrowRate

```solidity
function rebalanceStableBorrowRate(address asset, address user) external
```

_Rebalances the stable interest rate of a user to the current stable rate defined on the reserve.
- Users can be rebalanced if the following conditions are satisfied:
    1. Usage ratio is above 95%
    2. the current deposit APY is below REBALANCE_UP_THRESHOLD * maxVariableBorrowRate, which means that too much has been
       borrowed at a stable rate and depositors are not earning enough_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset borrowed |
| user | address | The address of the user to be rebalanced |

### setUserUseReserveAsCollateral

```solidity
function setUserUseReserveAsCollateral(address asset, bool useAsCollateral) external
```

_Allows depositors to enable/disable a specific deposited asset as collateral_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset deposited |
| useAsCollateral | bool | `true` if the user wants to use the deposit as collateral, `false` otherwise |

### liquidationCall

```solidity
function liquidationCall(address collateralAsset, address debtAsset, address user, uint256 debtToCover, bool receiveAToken) external
```

_Function to liquidate a non-healthy position collateral-wise, with Health Factor below 1
- The caller (liquidator) covers `debtToCover` amount of debt of the user getting liquidated, and receives
  a proportionally amount of the `collateralAsset` plus a bonus to cover market risk_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| collateralAsset | address | The address of the underlying asset used as collateral, to receive as result of the liquidation |
| debtAsset | address | The address of the underlying borrowed asset to be repaid with the liquidation |
| user | address | The address of the borrower getting liquidated |
| debtToCover | uint256 | The debt amount of borrowed `asset` the liquidator wants to cover |
| receiveAToken | bool | `true` if the liquidators wants to receive the collateral aTokens, `false` if he wants to receive the underlying collateral asset directly |

### flashLoan

```solidity
function flashLoan(address receiverAddress, address[] assets, uint256[] amounts, uint256[] modes, address onBehalfOf, bytes params, uint16 referralCode) external
```

_Allows smartcontracts to access the liquidity of the pool within one transaction,
as long as the amount taken plus a fee is returned.
IMPORTANT There are security concerns for developers of flashloan receiver contracts that must be kept into consideration.
For further details please visit https://developers.aave.com_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiverAddress | address | The address of the contract receiving the funds, implementing the IFlashLoanReceiver interface |
| assets | address[] | The addresses of the assets being flash-borrowed |
| amounts | uint256[] | The amounts amounts being flash-borrowed |
| modes | uint256[] | Types of the debt to open if the flash loan is not returned:   0 -> Don't open any debt, just revert if funds can't be transferred from the receiver   1 -> Open debt at stable rate for the value of the amount flash-borrowed to the `onBehalfOf` address   2 -> Open debt at variable rate for the value of the amount flash-borrowed to the `onBehalfOf` address |
| onBehalfOf | address | The address  that will receive the debt in the case of using on `modes` 1 or 2 |
| params | bytes | Variadic packed params to pass to the receiver as extra information |
| referralCode | uint16 | Code used to register the integrator originating the operation, for potential rewards.   0 if the action is executed directly by the user, without any middle-man |

### getUserAccountData

```solidity
function getUserAccountData(address user) external view returns (uint256 totalCollateralETH, uint256 totalDebtETH, uint256 availableBorrowsETH, uint256 currentLiquidationThreshold, uint256 ltv, uint256 healthFactor)
```

_Returns the user account data across all the reserves_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| totalCollateralETH | uint256 | the total collateral in ETH of the user |
| totalDebtETH | uint256 | the total debt in ETH of the user |
| availableBorrowsETH | uint256 | the borrowing power left of the user |
| currentLiquidationThreshold | uint256 | the liquidation threshold of the user |
| ltv | uint256 | the loan to value of the user |
| healthFactor | uint256 | the current health factor of the user |

### initReserve

```solidity
function initReserve(address reserve, address aTokenAddress, address stableDebtAddress, address variableDebtAddress, address interestRateStrategyAddress) external
```

### setReserveInterestRateStrategyAddress

```solidity
function setReserveInterestRateStrategyAddress(address reserve, address rateStrategyAddress) external
```

### setConfiguration

```solidity
function setConfiguration(address reserve, uint256 configuration) external
```

### getConfiguration

```solidity
function getConfiguration(address asset) external view returns (struct DataTypes.ReserveConfigurationMap)
```

_Returns the configuration of the reserve_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset of the reserve |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct DataTypes.ReserveConfigurationMap | The configuration of the reserve |

### getUserConfiguration

```solidity
function getUserConfiguration(address user) external view returns (struct DataTypes.UserConfigurationMap)
```

_Returns the configuration of the user across all the reserves_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The user address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct DataTypes.UserConfigurationMap | The configuration of the user |

### getReserveNormalizedIncome

```solidity
function getReserveNormalizedIncome(address asset) external view returns (uint256)
```

_Returns the normalized income normalized income of the reserve_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset of the reserve |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The reserve's normalized income |

### getReserveNormalizedVariableDebt

```solidity
function getReserveNormalizedVariableDebt(address asset) external view returns (uint256)
```

_Returns the normalized variable debt per unit of asset_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset of the reserve |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The reserve normalized variable debt |

### getReserveData

```solidity
function getReserveData(address asset) external view returns (struct DataTypes.ReserveData)
```

_Returns the state and configuration of the reserve_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset of the reserve |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct DataTypes.ReserveData | The state of the reserve |

### finalizeTransfer

```solidity
function finalizeTransfer(address asset, address from, address to, uint256 amount, uint256 balanceFromAfter, uint256 balanceToBefore) external
```

### getReservesList

```solidity
function getReservesList() external view returns (address[])
```

### getAddressesProvider

```solidity
function getAddressesProvider() external view returns (contract ILendingPoolAddressesProvider)
```

### setPause

```solidity
function setPause(bool val) external
```

### paused

```solidity
function paused() external view returns (bool)
```

