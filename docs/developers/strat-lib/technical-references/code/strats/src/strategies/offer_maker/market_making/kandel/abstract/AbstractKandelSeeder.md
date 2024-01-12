# Solidity API

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

### sow

```solidity
function sow(struct OLKey olKeyBaseQuote, bool liquiditySharing) external returns (contract GeometricKandel kandel)
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

### _deployKandel

```solidity
function _deployKandel(struct OLKey olKeyBaseQuote, bool liquiditySharing) internal virtual returns (contract GeometricKandel kandel)
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

