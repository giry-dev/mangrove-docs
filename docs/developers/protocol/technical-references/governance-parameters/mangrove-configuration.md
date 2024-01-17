---
description: Global governance parameters and Offer List specific parameters.
---

# Data structures and views

Ground truth for configuration can be found in the code [documentation](pathname:///MgvDoc/). All configuration options are under the control of [governance](README.md).

## MgvLib.MgvStructs.GlobalUnpacked

| Type        | Field      | Description   |
| ----------- | ---------- | ---------------|
| `address`   | `monitor`  | If enabled, acts as a gas price oracle for Mangrove and/or receives notifications when an offer is executed.                                                             |
| `bool`      | `useOracle`| If true, monitor will be used as a gas price oracle. Otherwise the internal gas price global parameter will be used.                                                                 |
| `bool`      | `notify`   | If true, monitor will be called every time an offer has been executed.                                                             |
| `uint`      | `gasprice`   | Internal gas price estimate, in gwei/gas. Used to calculate the provision required for writing offers.   
| `uint`      | `gasmax`     | Maximum gas an offer can require.                                                                                                                                         |
| `bool`      | `dead`       | If true, this Mangrove instance is dead and the only possible interactions are retracting offers and getting provisions back. Once true, it cannot be set back to false. |
| `uint`      | `maxRecursionDepth` | The maximum number of times a market order can recursively execute offers. This is a protection against stack overflows. |
| `uint`      | `maxGasreqForFailingOffers` | The maximum gasreq failing offers can consume in total. This is used in a protection against failing offers collectively consuming the block gas limit in a market order. |

## MgvLib.MgvStructs.LocalUnpacked

For every pair of addresses, there is a set of local parameters. Note that the parameters for the A/B pair might be different from the B/A pair parameters.

| Type                | Field     | Description   |
| ------------------- | -------- | ------------- |
| `bool`     | `active`   | If inactive, offers on this pair can only be retracted. |
| `uint`     | `fee`      | Fee in basis points, at most 500. |
| `Density`     | `density`  | Minimum amount of token an offer must promise per gas required. |
| `Field`     | `level3`  | Best bin in the level 3 of the tick tree. To find the next non-empty bin, it may be necessary to keep going up the tree until the root is reached. |
| `Field`     | `level2`  | Best bin in the level 2 of the tick tree. |
| `Field`     | `level1`  | Best bin in the level 1 of the tick tree. |
| `Field`     | `root`    | Root of the tick tree. |
| `uint`     | `kilo_offer_gasbase` | Represents the gas overhead used by processing the offer inside Mangrove + the overhead of initiating an entire order, in 1k gas increments. |
| `bool`     | `lock`     | ? |
| `uint`     | `last`     | ? |

## Views

:::info

The data structures containing Mangrove's global and local [configuration parameters](mangrove-configuration.md) are accessible via the public view function `configInfo(address outbound, address inbound)` function.

:::

:::info

For read/write efficiency, Mangrove provides access to configuration parameters in a packed manner via the getter `config(OLKey memory olKey).`

:::


[TBD SOLIDITY]

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="solidity" label="Solidity" default>

```solidity
import "src/IMangrove.sol";

// context of the call
address MGV;
address outTkn;
address inbTkn;

// getting Mangrove's global configuration parameters and those that pertain to the `(outTkn, inTkn)` offer list
// in an ABI compatible format (gas costly, use for offchain static calls)
(MgvStructs.GlobalUnpacked global, MgvStructs.LocalUnpacked local) = IMangrove(MGV)
.configInfo(outTkn, inTkn);

// getting packed config data (gas efficient)
(MgvStructs.GlobalPacked global32, MgvStructs.LocalPacked local32) = IMangrove(MGV)
.config(outTkn, inTkn);

// for all fields f of `GlobalUnpacked global` 
// one may unpack a specific element of `GlobalPacked global32` using the following scheme:
global.f == global32.f()

// for all fields f of `LocalUnpacked local` 
// a similar scheme applies to `LocalPacked local32`:
local.f == local32.f()

```

</TabItem>
</Tabs>