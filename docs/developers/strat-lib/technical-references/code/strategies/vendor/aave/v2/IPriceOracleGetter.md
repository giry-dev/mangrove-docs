## IPriceOracleGetter

Interface for the Aave price oracle.

### getAssetPrice

```solidity
function getAssetPrice(address asset) external view returns (uint256)
```

_returns the asset price in ETH_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | the address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the ETH price of the asset |

