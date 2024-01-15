# Solidity API

## AaveV3Lender

### POOL

```solidity
contract IPool POOL
```

The AAVE pool retrieved from the pool provider.

### ADDRESS_PROVIDER

```solidity
contract IPoolAddressesProvider ADDRESS_PROVIDER
```

The AAVE pool address provider.

### constructor

```solidity
constructor(address addressesProvider) public
```

contract's constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| addressesProvider | address | address of AAVE's address provider |

### _approveLender

```solidity
function _approveLender(contract IERC20 token, uint256 amount) internal
```

allows this contract to approve the POOL to transfer some underlying asset on its behalf

_this is a necessary step prior to supplying tokens to the POOL or to repay a debt_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the underlying asset for which approval is required |
| amount | uint256 | the approval amount |

### _exitMarket

```solidity
function _exitMarket(contract IERC20 underlying) internal
```

prevents the POOL from using some underlying as collateral

_this call will revert if removing the asset from collateral would put the account into a liquidation state_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| underlying | contract IERC20 | the token one wishes to remove collateral |

### _enterMarkets

```solidity
function _enterMarkets(contract IERC20[] underlyings) internal
```

allows the POOL to use some underlying tokens as collateral

_when supplying a token for the first time, it is automatically set as possible collateral so there is no need to call this function for it._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| underlyings | contract IERC20[] | the token one wishes to add as collateral |

### overlying

```solidity
function overlying(contract IERC20 asset) public view returns (contract IERC20 aToken)
```

convenience function to obtain the overlying of a given asset

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | contract IERC20 | the underlying asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| aToken | contract IERC20 | the overlying asset |

### _redeem

```solidity
function _redeem(contract IERC20 token, uint256 amount, address to) internal returns (uint256 redeemed)
```

redeems funds from the pool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset one is trying to redeem |
| amount | uint256 | of assets one wishes to redeem |
| to | address | is the address where the redeemed assets should be transferred |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| redeemed | uint256 | the amount of asset that were transferred to `to` |

### _supply

```solidity
function _supply(contract IERC20 token, uint256 amount, address onBehalf, bool noRevert) internal returns (bytes32)
```

supplies funds to the pool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset one is supplying |
| amount | uint256 | of assets to be transferred to the pool |
| onBehalf | address | address of the account whose collateral is being supplied to and which will receive the overlying |
| noRevert | bool | does not revert if supplies throws |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | reason for revert from Aave. |

### _claimRewards

```solidity
function _claimRewards(address[] assets, address to) internal returns (address[] rewardsList, uint256[] claimedAmounts)
```

rewards claiming.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| assets | address[] | list of overlying for which one is claiming awards |
| to | address | whom the rewards should be sent |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| rewardsList | address[] | the address of assets that have been claimed |
| claimedAmounts | uint256[] | the amount of assets that have been claimed |

### checkAsset

```solidity
function checkAsset(contract IERC20 asset) public view returns (bool)
```

verifies whether an asset can be supplied on pool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | contract IERC20 | the asset one wants to lend |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the asset can be supplied on pool |

