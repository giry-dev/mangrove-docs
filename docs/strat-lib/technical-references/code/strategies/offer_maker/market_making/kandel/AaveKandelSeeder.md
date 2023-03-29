## AaveKandelSeeder

### AAVE_ROUTER

```solidity
contract AavePooledRouter AAVE_ROUTER
```

the Aave router.

### constructor

```solidity
constructor(contract IMangrove mgv, address addressesProvider, uint256 routerGasreq, uint256 aaveKandelGasreq) public
```

constructor for `AaveKandelSeeder`. Initializes an `AavePooledRouter` with this seeder as manager.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment. |
| addressesProvider | address | address of AAVE's address provider |
| routerGasreq | uint256 | is the amount of gas that is required for the AavePooledRouter to be able to perform a `pull` and a `push`. |
| aaveKandelGasreq | uint256 | the gasreq to use for offers besides the routerGasreq. |

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

