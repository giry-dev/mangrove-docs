---
description: Global governance parameters and Offer List specific parameters.
---

# Data structures and views

Ground truth for configuration can be found in the code [documentation](pathname:///MgvDoc/). All configuration options are under the control of [governance](README.md).

## GlobalUnpacked

| Type        | Field      | Description   |
| ----------- | ---------- | ---------------|
| `address`   | `monitor`  | If enabled, acts as a gas price oracle for Mangrove and/or receives notifications when an offer is executed. |
| `bool`      | `useOracle`| If `true`, monitor will be used as a gas price oracle. Otherwise, the internal gas price global parameter will be used. |
| `bool`      | `notify`   | If `true`, monitor will be called every time an offer has been executed. |
| `uint`      | `gasprice`   | Internal gas price estimate, in Mwei/gas. Used to calculate the provision required for writing offers. |
| `uint`      | `gasmax`     | Maximum gas an offer can require. |
| `bool`      | `dead`       | If `true`, this Mangrove instance is dead and the only possible interactions are retracting offers and getting provisions back. Once `true`, it cannot be set back to `false`. |
| `uint`      | `maxRecursionDepth` | The maximum number of times a market order can recursively execute offers. This is a protection against stack overflows. |
| `uint`      | `maxGasreqForFailingOffers` | The maximum gasreq failing offers can consume in total. This is used in a protection against failing offers collectively consuming the block gas limit in a market order. |

## LocalUnpacked

For every offer list, there is a set of local parameters. Note that the parameters for an (A,B,t) offer list might be different from the (B, A, t) offer list parameters.

Note that `root` and `level{1,2,3}` are part of the internal tick tree datastructure.

| Type                | Field     | Description   |
| ------------------- | -------- | ------------- |
| `bool`    | `active`             | If inactive, offers on this pair can only be retracted. |
| `uint`    | `fee`                | Fee in basis points, at most 255 (~2.5%). |
| `Density` | `density`            | Minimum amount of token an offer must promise per gas required. |
| `uint`    | `kilo_offer_gasbase` | Represents the gas overhead used by processing the offer inside Mangrove + the overhead of initiating an entire order, in 1k gas increments. |
| `bool`    | `lock`               | Re-entrancy and read-lock that is applied during order execution and cleaning. |
| `uint`    | `last`               | Counter for offer IDs, incremented every time a new offer is created. |
| `Field`   | `level3`             | Cache of level 3 for the best, non-empty tick of the tick tree. |
| `Field`   | `level2`             | Cache of level 2 for the best, non-empty  tick of the tick tree. |
| `Field`   | `level1`             | Cache of level 1 for the best, non-empty  tick of the tick tree. |
| `Field`   | `root`               | Root of the tick tree. |

## Views

:::info
The data structures containing Mangrove's global and local [configuration parameters](mangrove-configuration.md) are accessible via the public view function `configInfo(address outbound, address inbound)` function on the [`MgvReader`](../periphery/reader.md) periphery contract.
:::

:::info
For read/write efficiency, Mangrove provides access to configuration parameters in a packed manner via the getter `config(OLKey memory olKey).`
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="solidity" label="Solidity" default>

```solidity
import "src/IMangrove.sol";

// context of the call

// IMangrove mgv = IMangrove(payable(<address of Mangrove>));
// Mangrove contract
IMangrove mgv = IMangrove(payable(mangrove));

// MgvReader reader = MgvReader(<address of MgvReader>);
MgvReader reader = MgvReader(readerAddress);

// OLKey olkey = OLKey(<address of outbound token>, <address of inbound token>, <tick spacing>);
// struct containing outbound_tkn, inbound_tkn and tickSpacing
OLKey memory olkey = OLKey(address(base), address(quote), 1);

// getting packed config data (gas efficient)
(GlobalPacked global32, LocalPacked local32) = mgv.config(olKey);

// for all fields f of `GlobalUnpacked global` 
// one may unpack a specific element of `GlobalPacked global32` using the following scheme:
global.f == global32.f()

// for all fields f of `LocalUnpacked local` 
// a similar scheme applies to `LocalPacked local32`:
local.f == local32.f()

// getting Mangrove's global configuration parameters and those that pertain to the olKey offer list
// in an ABI compatible format (gas costly, use for off-chain static calls)
(GlobalUnpacked global, LocalUnpacked local) = reader.configInfo(olKey);
```

</TabItem>
</Tabs>
