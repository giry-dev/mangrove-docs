---
description: Taking offers on behalf of another address
---

# Delegation

## Approve or Permit

A **Taker** **Order** on Mangrove can be sent on behalf of a taker, in which case the delegate taker needs to be approved or permitted to draw the required inbound tokens from the taker.

:::info

Approving a Delegate Taker for inbound tokens MUST be done via the standard `approve` function of the ERC20 managing the inbound token of the offer list. The approval MUST be enough to cover `takerGives` amount of inbound tokens of the `snipesFor` or `marketOrderFor` calls.
:::

Alternatively, Mangrove allows the taker to `permit` a delegate taker to act on their behalf.

:::danger Important
Approval are made for all offer lists, regardless of `tickSpacing`.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="function" label="Function" default>

```solidity
function permit(
    address outbound_tkn,
    address inbound_tkn,
    address owner,
    address spender,
    uint value,
    uint deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external;
```

</TabItem>
</Tabs>

* `(outbound_tkn, inbound_tkn)` the outbound and inbound token of the offer list on which the Delegate Taker will be permitted to operate.
* `owner` the address of the taker providing the inbound tokens for the Delegate Taker.
* `spender` the address of the Delegate Taker.
* `value` the maximal amount of inbound tokens the Delegate Taker is permitted to use.
* `deadline` the block number beyond which the delegator's signature can no longer be used to obtain permission.
* `(v,r,s)` the `secp256k1` [signature](https://eips.ethereum.org/EIPS/eip-2612) identifying the `owner` of the delegated funds.

## Delegated Order Taking

Once a Delegate Taker is approved or permitted by a taker, she can use the delegated Taker Orders variant `marketOrderForByTick` and which work similarly to the [standard market order versions](README.md#market-order) but require an additional `taker` address.

<Tabs>
<TabItem value="signature" label="Signature" default>

```solidity
function marketOrderForByTick(
  OLKey memory olKey,
  Tick maxTick,
  uint fillVolume,
  bool fillWants,
  ) public returns (uint takerGot, uint takerGave, uint bounty, uint feePaid);

function marketOrderForByVolume(
    OLKey memory olKey,
    uint takerWants,
    uint takerGives,
    bool fillWants
  ) external returns (uint takerGot, uint takerGave, uint bounty, uint feePaid);
```

</TabItem>
</Tabs>

### `marketOrderForByTick()`

#### Inputs

* `olkey` struct containing:
  * `outbound_tkn` address of the _outbound_ token (that the taker will buy).
  * `inbound_tkn` address of the _inbound_ token (that the taker will spend).
  * `tickSpacing` number of ticks that should be jumped between available price points.
* `maxTick` limit price the order is ready to pay (the log base 1.0001 of the price)
* `fillWants`
  * If `true`, the market order will stop as soon as `takerWants` _outbound_ tokens have been bought. It is conceptually similar to a _buy order_.
  * If `false`, the market order will continue until `takerGives` _inbound_ tokens have been spent. It is conceptually similar to _sell order_.
  * Note that market orders can stop for other reasons, such as the price being too high.
* `taker` address of the taker placing the market order

#### Outputs

* `takerGot` is the net amount of _outbound_ tokens the taker has received (i.e., after applying the offer list [fee](../../governance-parameters/local-variables.md#taker-fees) if any).
* `takerGave` is the amount of _inbound_ tokens the taker has sent.
* `bounty` is the amount of native tokens (in units of wei) the taker received in compensation for cleaning failing offers
* `feePaid` is the amount of `outbound_tkn` that was sent to Mangrove's vault in payment of the potential %%fee|taker-fee%% associated to the `(outbound_tkn, inbound_tkn, tickSpacing)` [offer list](../offer-list.md#general-structure).&#x20;


### `marketOrderForByVolume()`

#### Inputs

* `olkey` same as previously.
* `takerWants` raw amount of outbound token the taker wants. Must fit on 160 bits.
* `takerGives` raw amount of _inbound_ token the taker gives. Must fit on 160 bits.
* `fillWants` same as previously.
* `taker` same as previously.

#### Outputs

* Same as previously.

