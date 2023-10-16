---
description: Global governance parameters and Offer List specific parameters.
---

# Data structures and views

Ground truth for configuration can be found in the code [documentation](pathname:///MgvDoc/). All configuration options are under the control of [governance](README.md).

## MgvLib.MgvStructs.GlobalUnpacked

| Name        | Type      | Description                                                                                                                                                              |
| ----------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `gasprice`  | `uint16`  | Internal gas price estimate, in gwei/gas. Used to calculate the provision required for writing offers.                                                                   |
| `monitor`   | `address` | If enabled, acts as a gas price oracle for Mangrove and/or receives notifications when an offer is executed.                                                             |
| `useOracle` | `bool`    | If true, monitor will be used as a gas price oracle. Otherwise the internal gas price global parameter will be used.                                                     |
| `notify`    | `bool`    | If true, monitor will be called every time an offer has been executed.                                                                                                   |
| `gasmax`    | `uint24`  | Maximum gas an offer can require.                                                                                                                                        |
| `dead`      | `bool`    | If true, this Mangrove instance is dead and the only possible interactions are retracting offers and getting provisions back. Once true, it cannot be set back to false. |

## MgvLib.MgvStructs.LocalUnpacked

For every pair of addresses, there is a set of local parameters. Note that the parameters for the A/B pair might be different from the B/A pair parameters.

| Name                | Type     | Description                                                                     |
| ------------------- | -------- | ------------------------------------------------------------------------------- |
| `active`            | `bool`   | If inactive, offers on this pair can only be retracted.                         |
| `fee`               | `uint16` | Fee in basis points, at most 500.                                               |
| `density`           | `uint32` | Minimum amount of token an offer must promise per gas required.                 |
| `offer_gasbase`     | `uint24` | Gas overhead associated with taking one offer.                                  |

## Views

:::info

The data structures containing Mangrove's global and local [configuration parameters](mangrove-configuration.md) are accessible via the public view function `configInfo(address outbound, address inbound)` function.

:::

:::info

For read/write efficiency, Mangrove provides access to configuration parameters in a packed manner via the getter `config(address outbound, address inbound).`

:::

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