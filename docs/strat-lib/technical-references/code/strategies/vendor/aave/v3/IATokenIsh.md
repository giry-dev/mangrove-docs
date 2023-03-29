## IATokenIsh

Defines the basic interface for an AToken.

### UNDERLYING_ASSET_ADDRESS

```solidity
function UNDERLYING_ASSET_ADDRESS() external view returns (address)
```

Returns the address of the underlying asset of this aToken (E.g. WETH for aWETH)

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the underlying asset |

### RESERVE_TREASURY_ADDRESS

```solidity
function RESERVE_TREASURY_ADDRESS() external view returns (address)
```

Returns the address of the Aave treasury, receiving the fees on this aToken.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | Address of the Aave treasury |

