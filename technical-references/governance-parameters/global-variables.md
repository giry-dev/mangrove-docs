# Global variables

### Gas price and oracle

{% hint style="info" %}
**Gas price** (given is GWEI units) is a key parameter of Mangrove that [determines the remuneration](../taking-and-making-offers/reactive-offer/offer-provision.md#offer-bounty-computation) of Offer Cleaners. In order to make sure takers are consistently over-compensated for the gas used in consuming a failing offer, it should be kept by the Governance above average `tx.gasprice`.
{% endhint %}

**Gas price** can be read from an outside [Monitoring Contract](../../explanations/around-the-mangrove/mangroves-ecosystem/monitor.md). When the governance wishes to do so, it MUST enable this feature by letting [Monitoring Contract](../../explanations/around-the-mangrove/mangroves-ecosystem/monitor.md) (if any) act as a gas price oracle. This can be done using the governance restricted function `setUseOracle` of Mangrove.

If monitoring the **gas price** is not enabled, or if the value returned by the monitor overflows, Mangrove will use its global configuration [`gasprice`](mangrove-configuration.md#mgvlib.global) parameter as fallback. Changing Mangrove's storage [`gasprice`](mangrove-configuration.md#mgvlib.global) is done using the governance restricted function `setGasprice`.

{% tabs %}
{% tab title="Signatures" %}
```solidity
// Governance lets the monitor determine gasprice
function setUseOracle(bool useOracle) public;

// Governance sets the fallback gasprice value (in GWEI)
function setGasprice(uint gasprice) public;

// Governance sets a new monitor
function setMonitor(address monitor) public;
```
{% endtab %}

{% tab title="Events" %}
```solidity
event SetGasprice(uint gasprice); // emitted when gas price is updated
event SetMonitor(address monitor); // emitted when a new monitor is set
event SetUseOracle(bool value); // logs `true` if Mangrove is set to use an external monitor to read gasprice. Logs `false` otherwise
```
{% endtab %}
{% endtabs %}

{% hint style="danger" %}
**Important points**

* Caller of `setUseOracle` and `setGasprice` **must** be the address of the [Governance user or contract](global-variables.md#setting-up-a-governance-contract) (if one has been [set](global-variables.md#setting-up-the-governance-address)).
* If allowing the monitor to act as a gas price Oracle, Governance **must** have previously deployed a [Monitor Contract](../../explanations/around-the-mangrove/mangroves-ecosystem/monitor.md) and [set its address](global-variables.md#setting-up-the-monitor-address) in Mangrove's configuration.
{% endhint %}

### Other governance controlled setters

{% tabs %}
{% tab title="Signature" %}
```solidity
// Governance sets maximum allowed gas per offer
function setGasmax(uint gasmax) public;
// Changing governance address
function setGovernance(address value);
// Changing treasury address
function setVault(address value);
// (de)activates sending trade notification to governance contract (e.g. for rewards programs)
function setNotify(bool value);
// set maximum gas amount an offer may require to execute
function setGasmax(uint value);
// permanently puts mangrove into a killed state (Mangrove rejects all taker and maker orders, only retracting offer is possible)
function kill();

```
{% endtab %}
{% endtabs %}
