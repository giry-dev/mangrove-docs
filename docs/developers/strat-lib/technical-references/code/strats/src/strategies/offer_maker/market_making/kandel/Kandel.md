# Solidity API

## Kandel

### constructor

```solidity
constructor(contract IMangrove mgv, struct OLKey olKeyBaseQuote, uint256 gasreq, address reserveId) public
```

Constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment. |
| olKeyBaseQuote | struct OLKey | The OLKey for the outbound_tkn base and inbound_tkn quote offer list Kandel will act on, the flipped OLKey is used for the opposite offer list. |
| gasreq | uint256 | the gasreq to use for offers |
| reserveId | address | identifier of this contract's reserve when using a router. |

### __posthookSuccess__

```solidity
function __posthookSuccess__(struct MgvLib.SingleOrder order, bytes32 makerData) internal virtual returns (bytes32 repostStatus)
```

