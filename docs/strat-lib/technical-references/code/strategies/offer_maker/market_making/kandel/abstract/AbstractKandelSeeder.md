## AbstractKandelSeeder

This seeder deploys Kandel strats on demand and binds them to an AAVE router if needed.

_deployer of this contract will gain aave manager power on the AAVE router (power to claim rewards and enter/exit markets)
when deployer is a contract one must therefore make sure it is able to call the corresponding functions on the router_

### MGV

```solidity
contract IMangrove MGV
```

The Mangrove deployment.

### KANDEL_GASREQ

```solidity
uint256 KANDEL_GASREQ
```

the gasreq to use for offers.

### constructor

```solidity
constructor(contract IMangrove mgv, uint256 kandelGasreq) internal
```

constructor for `AbstractKandelSeeder`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment. |
| kandelGasreq | uint256 | the gasreq to use for offers |

### NewAaveKandel

```solidity
event NewAaveKandel(address owner, contract IERC20 base, contract IERC20 quote, address aaveKandel, address reserveId)
```

a new Kandel with pooled AAVE router has been deployed.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | the owner of the strat. |
| base | contract IERC20 | the base token. |
| quote | contract IERC20 | the quote token. |
| aaveKandel | address | the address of the deployed strat. |
| reserveId | address | the reserve identifier used for the router. |

### NewKandel

```solidity
event NewKandel(address owner, contract IERC20 base, contract IERC20 quote, address kandel)
```

a new Kandel has been deployed.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | the owner of the strat. |
| base | contract IERC20 | the base token. |
| quote | contract IERC20 | the quote token. |
| kandel | address | the address of the deployed strat. |

### KandelSeed

```solidity
struct KandelSeed {
  contract IERC20 base;
  contract IERC20 quote;
  uint256 gasprice;
  bool liquiditySharing;
}
```

### sow

```solidity
function sow(struct AbstractKandelSeeder.KandelSeed seed) external returns (contract GeometricKandel kandel)
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

### _deployKandel

```solidity
function _deployKandel(struct AbstractKandelSeeder.KandelSeed seed) internal virtual returns (contract GeometricKandel kandel)
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

