---
description: Protocol wide governance parameters.
---

# Global variables

### Gas price and oracle

:::info **Gas price**
**Gas price** (given is GWEI units) is a key parameter of Mangrove that [determines the remuneration](../taking-and-making-offers/reactive-offer/offer-provision.md#bounty) of takers for removing a failing offer from a list. In order to make sure takers are consistently over-compensated for the gas used, it should be kept well above average `tx.gasprice`.

:::

**Gas price** can be read from an outside Monitoring Contract. When the governance wishes to do so, it **must** enable this feature by letting the monitor (if any) act as a gas price oracle. This can be done using the governance restricted function `setUseOracle` of Mangrove.

If monitoring the gas price is not enabled, or if the value returned by the monitor is ill formed, Mangrove will use its global [`gasprice`](mangrove-configuration.md#mgvlib.global) parameter as fallback.&#x20;

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
    <TabItem value="signature" label="Signature" default>

```solidity
// Sets whether Mangrove uses the monitor as oracle for `gasprice` and `density` values.
function setUseOracle(bool useOracle) external;

// Sets the gasprice (in Mwei, 26 bits).
function setGasprice(uint gasprice) external;

// Sets the monitor/oracle. The `monitor/oracle` can provide real-time values for `gasprice` and `density` to Mangrove. It can also receive liquidity event notifications.
function setMonitor(address monitor) external;
```

</TabItem>
<TabItem value="events" label="Events">

```solidity
event SetGasprice(uint value); // Emitted when gas price is updated.
event SetMonitor(address value); // Emitted when a new monitor is set.
event SetUseOracle(bool value); // Logs `true` if Mangrove is set to use an external monitor to read gasprice. Logs `false` otherwise.
```

</TabItem>
</Tabs>

:::danger **Important point**

If allowing the monitor to act as a gas price Oracle, Governance **must** have previously deployed a Monitor Contract and set its address in Mangrove's configuration.

:::

### Other governance controlled setters

<Tabs>
<TabItem value="signature" label="Signature" default>

```solidity
// Sets the gasmax for Mangrove, the maximum amount of gas an offer can require to execute.
function setGasmax(uint gasmax) external;

// Sets a new governance address.
function setGovernance(address governanceAddress) external;

// Sets whether Mangrove notifies the Monitor when and offer is taken.
function setNotify(bool notify) external;

// Sets the maximum number of times a market order can recursively execute offers. This is a protection against stack overflows.
function setMaxRecursionDepth(uint maxRecursionDepth) external;

// Sets the maximum cumulative `gasreq` for failing offers during a market order before doing a partial fill.
function setMaxGasreqForFailingOffers(uint maxGasreqForFailingOffers) external;

// Kills the Mangrove instance. A dead instance cannot have offers executed or funds received, but offers can be retracted and funds can be withdrawn.
function kill() external;
```

</TabItem>
</Tabs>
