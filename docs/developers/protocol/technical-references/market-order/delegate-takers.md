---
description: Executing market orders on behalf of another address
---

# Delegation

Takers may provide allowances on specific offer lists, so other addresses (called "delegate takers") can execute market orders in their name. Allowance may be set using the `approve` function, or through an [EIP712](https://eips.ethereum.org/EIPS/eip-712) permit using the `permit` function.

Allowances are set on a token pair (A, B) without specifying `tickSpacing`, meaning "delegate taker has the right to trade token A against token B at any `tickSpacing`".

## Setting Allowance

To set allowance, use either the `permit` or `approve` function:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="signature" label="Signature" default>

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

function approve(
    address outbound_tkn,
    address inbound_tkn,
    address spender,
    uint value
  ) external returns (bool);
```

</TabItem>
</Tabs>

### Inputs

#### `permit()`

* `(outbound_tkn, inbound_tkn)` the outbound and inbound tokens of the offer lists on which the Delegate Taker will be permitted to execute market orders.
* `owner` the address of the taker providing the permit.
* `spender` the address of the Delegate Taker.
* `value` the maximal amount of inbound tokens the Delegate Taker is permitted to spend.
* `deadline` the block number beyond which the delegator's signature can no longer be used to obtain permission.
* `(v,r,s)` the `secp256k1` [signature](https://eips.ethereum.org/EIPS/eip-2612) identifying the `owner`.

#### `approve()`

* `(outbound_tkn, inbound_tkn)` the outbound and inbound tokens of the offer lists on which the Delegate Taker will be permitted to execute market orders.
* `spender` the address of the Delegate Taker.
* `value` the maximal amount of inbound tokens the Delegate Taker is permitted to spend.

`msg.sender` is the taker who is approving `spender`.

## Delegated Order Taking

Once a Delegate Taker has an allowance from a taker, she can use the delegated market order variants `marketOrderFor*` which work identically to the [standard market order functions](README.md#market-order) but require an additional `taker` address:

```solidity
function marketOrderForByTick(
  OLKey memory olKey,
  Tick maxTick,
  uint fillVolume,
  bool fillWants,
  address taker
  ) external returns (uint takerGot, uint takerGave, uint bounty, uint feePaid);

function marketOrderForByVolume(
    OLKey memory olKey,
    uint takerWants,
    uint takerGives,
    bool fillWants,
    address taker
  ) external returns (uint takerGot, uint takerGave, uint bounty, uint feePaid);
```
