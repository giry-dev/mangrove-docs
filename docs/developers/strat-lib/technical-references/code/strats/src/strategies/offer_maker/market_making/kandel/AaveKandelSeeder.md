## AaveKandelSeeder

### NewAaveKandel

```solidity
event NewAaveKandel(address owner, bytes32 baseQuoteOlKeyHash, bytes32 quoteBaseOlKeyHash, address aaveKandel, address reserveId)
```

a new Kandel with pooled AAVE router has been deployed.
By emitting this data, an indexer will be able to keep track of what Kandel strats are deployed, what market its deployed on, who the owner is and what reserve they use.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | the owner of the strat. This is indexed so that RPC calls can filter on it. |
| baseQuoteOlKeyHash | bytes32 | the hash of the base/quote offer list key. This is indexed so that RPC calls can filter on it. |
| quoteBaseOlKeyHash | bytes32 | the hash of the quote/base offer list key. This is indexed so that RPC calls can filter on it. |
| aaveKandel | address | the address of the deployed strat. |
| reserveId | address | the reserve identifier used for the router. |

### AAVE_ROUTER

```solidity
contract AavePooledRouter AAVE_ROUTER
```

the Aave router.

### constructor

```solidity
constructor(contract IMangrove mgv, address addressesProvider, uint256 aaveKandelGasreq) public
```

constructor for `AaveKandelSeeder`. Initializes an `AavePooledRouter` with this seeder as manager.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment. |
| addressesProvider | address | address of AAVE's address provider |
| aaveKandelGasreq | uint256 | the total gasreq to use for executing a kandel offer |

### _deployKandel

```solidity
function _deployKandel(struct OLKey olKeyBaseQuote, bool liquiditySharing) internal returns (contract GeometricKandel kandel)
```

deploys a new Kandel contract for the given seed parameters.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyBaseQuote | struct OLKey | The OLKey for the outbound_tkn base and inbound_tkn quote offer list Kandel will act on, the flipped OLKey is used for the opposite offer list. |
| liquiditySharing | bool | if true, `msg.sender` will be used to identify the shares of the deployed Kandel strat. If msg.sender deploys several instances, reserve of the strats will be shared, but this will require a transfer from router to maker contract for each taken offer, since we cannot transfer the full amount to the first maker contract hit in a market order in case later maker contracts need the funds. Still, only a single AAVE redeem will take place. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| kandel | contract GeometricKandel | the Kandel contract. |

