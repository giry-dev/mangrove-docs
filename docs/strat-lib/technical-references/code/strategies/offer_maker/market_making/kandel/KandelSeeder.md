## KandelSeeder

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
function _deployKandel(struct AbstractKandelSeeder.KandelSeed seed) internal returns (contract GeometricKandel kandel)
```

deploys a new Kandel contract for the given seed.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| seed | struct AbstractKandelSeeder.KandelSeed | the parameters for the Kandel strat |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| kandel | contract GeometricKandel | the Kandel contract. |

