## Kandel

### constructor

```solidity
constructor(contract IMangrove mgv, contract IERC20 base, contract IERC20 quote, uint256 gasreq, uint256 gasprice, address reserveId) public
```

Constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment. |
| base | contract IERC20 | Address of the base token of the market Kandel will act on |
| quote | contract IERC20 | Address of the quote token of the market Kandel will act on |
| gasreq | uint256 | the gasreq to use for offers |
| gasprice | uint256 | the gasprice to use for offers |
| reserveId | address | identifier of this contract's reserve when using a router. |

### __posthookSuccess__

```solidity
function __posthookSuccess__(struct MgvLib.SingleOrder order, bytes32 makerData) internal virtual returns (bytes32 repostStatus)
```

