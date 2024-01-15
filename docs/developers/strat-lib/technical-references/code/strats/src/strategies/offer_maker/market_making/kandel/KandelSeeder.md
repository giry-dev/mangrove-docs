# Solidity API

## KandelSeeder

### NewKandel

```solidity
event NewKandel(address owner, bytes32 baseQuoteOlKeyHash, bytes32 quoteBaseOlKeyHash, address kandel)
```

a new Kandel has been deployed.
By emitting this data, an indexer will be able to keep track of what Kandel strats are deployed, what market its deployed on and who the owner is.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | the owner of the strat. This is indexed so that RPC calls can filter on it. |
| baseQuoteOlKeyHash | bytes32 | the hash of the base/quote offer list key. This is indexed so that RPC calls can filter on it. |
| quoteBaseOlKeyHash | bytes32 | the hash of the quote/base offer list key. This is indexed so that RPC calls can filter on it. |
| kandel | address | the address of the deployed strat. |

### constructor

```solidity
constructor(contract IMangrove mgv, uint256 kandelGasreq) public
```

constructor for `KandelSeeder`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment. |
| kandelGasreq | uint256 | the gasreq to use for offers. |

### _deployKandel

```solidity
function _deployKandel(struct OLKey olKeyBaseQuote, bool) internal returns (contract GeometricKandel kandel)
```

deploys a new Kandel contract for the given seed parameters.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyBaseQuote | struct OLKey | The OLKey for the outbound_tkn base and inbound_tkn quote offer list Kandel will act on, the flipped OLKey is used for the opposite offer list. |
|  | bool |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| kandel | contract GeometricKandel | the Kandel contract. |

