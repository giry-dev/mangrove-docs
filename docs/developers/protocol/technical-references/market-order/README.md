---
description: Market orders on Mangrove
sidebar_position: 4
---

# Market orders

A **market order** is Mangrove's simplest way of buying or selling assets. Such (taker) orders are run against a specific [offer list](../offer-list/README.md) with its associated %%outbound|outbound%% token and %%inbound|inbound%% token. The liquidity taker specifies a max %%ratio|ratio%% she's willing to accept and how much she wishes to trade: Either how many _outbound_ tokens she wants or how many _inbound_ tokens she wishes to pay.

:::info **Mangrove Market Order = TradFi Limit Order**

Mangrove's market orders are _DeFi_ market orders - which are different from market orders in TradFi:

In TradFi, a market order is an order to buy or sell immediately at the best available price.

In DeFi, where transactions can be [front-run](https://www.investopedia.com/terms/f/frontrunning.asp) or [sandwiched](https://coinmarketcap.com/alexandria/article/what-are-sandwich-attacks-in-defi-and-how-can-you-avoid-them), adversaries may manipulate the best available price and thus extract value from a market order as there is no limit on the price. TradFi market orders are therefore unsafe for fully on-chain DEX'es like Mangrove.

To protect the user, Mangrove's market order therefore corresponds to a TradFi [**limit order**](https://www.investopedia.com/terms/l/limitorder.asp): An order to buy or sell at given price or better.

More precisely, Mangrove ensures that the "price" %%tick|tick%% of the offers matched with the order does not exceed the specified max tick.

:::

## Market order execution

When a market order is processed by Mangrove's matching engine, it consumes the offers on the selected [offer list](../offer-list/README.md) one by one, in order, and starting from lowest tick (offers with the same tick are executed in FIFO order).

Offers match if their %%tick|tick%% is below or equal to the specified max tick.

The market order stops when one of these conditions are met:

* only offers with tick > max tick are left,
* the end of the offer list has been reached, or
* the taker has received or paid the amount they specified.

For each matched offer, Mangrove takes the following steps:

1. Mangrove determines the amount of _outbound_ tokens the offer should deliver and how much _inbound_ token it should be paid:
   * _outbound amount_: Either all of what the offer gives or, if that exceeds what the taker wants, the residual amount needed to fill the market order.
   * _inbound amount_: Determined by the offer's tick: $inboundAmount = outboundAmount * 1.0001^{tick}$.
2. Mangrove sends _inbound_ tokens to the offer maker (EOA or [maker contract](../reactive-offer/maker-contract.md)).
3. Mangrove then executes the offer logic's `makerExecute` function (a no-op for an EOA).
4. If the `makerExecute` call is successful, Mangrove sends _outbound_ tokens to the taker. If the call or the transfer fail, Mangrove reverts the effects of steps 2. and 3.

Any failed [offer](../reactive-offer/) execution results in a [bounty](../reactive-offer/offer-provision.md#computing-the-provision-and-offer-bounty) being sent to the caller as compensation for the wasted gas.

## Market order functions

Mangrove provides two functions for executing market orders which differ in how the "price" limit is specified:

* `marketOrderByTick`: The limit is specified as a `maxTick` which matched offers should not exceed.
* `marketOrderByVolume`: The limit is specified as the ratio between two volumes, `takerGives/takerWants`, which offers should not exceed.

The `*ByVolume` variant is a convenience wrapper for the `*ByTick` variant: The provided volumes are converted to a corresponding `maxTick`, rounding down to the nearest tick allowed on the offer list, such that the taker does not pay more than specified.

The output from the two functions is the same.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="signature" label="Signature" default>

```solidity
function marketOrderByTick(
  OLKey memory olKey,
  Tick maxTick,
  uint fillVolume,
  bool fillWants,
  ) public returns (uint takerGot, uint takerGave, uint bounty, uint feePaid);

function marketOrderByVolume(
    OLKey memory olKey,
    uint takerWants,
    uint takerGives,
    bool fillWants
  ) external returns (uint takerGot, uint takerGave, uint bounty, uint feePaid);
```

  </TabItem>
  <TabItem value="events" label="Events">

```solidity
// Since the contracts that are called during the order may be partly reentrant, more logs could be emitted by Mangrove.
// We list here only the main expected logs.

// For each successful offer taken during the market order:
event OfferSuccess(
    bytes32 indexed olKeyHash, // hash of the OLKey (inbound token, outbound token and tickSpacing)
    address indexed taker, // address of the market order call
    uint indexed id,
    uint takerWants, // original wants of the order
    uint takerGives // original gives of the order
  );
  
// For each offer cleaned during the market order:
event OfferFail(
    bytes32 indexed olKeyHash, // hash of the OLKey (inbound token, outbound token and tickSpacing)
    address indexed taker, // address of the market order call
    uint indexed id,
    uint takerWants, // original wants of the order
    uint takerGives // original gives of the order
    uint penalty,
    // `mgvData` is either:
    // * `"mgv/makerRevert"` if `makerExecute` call reverted
    // * `"mgv/makerTransferFail"` if `outbound_tkn` transfer from the maker contract failed after `makerExecute`
    // * `"mgv/makerReceiveFail"` if `inbound_tkn` transfer to maker contract failed (e.g. contract's address is not allowed to receive `inbound_tkn`) 
    bytes32 mgvData
  );
  
// For each offer whose posthook reverted during second callback:
// 1. Loging offer failure
event OfferFailWithPosthookData(
    bytes32 indexed olKeyHash,
    address indexed taker,
    uint indexed id,
    uint takerWants,
    uint takerGives,
    uint penalty,
    bytes32 mgvData,
    // `posthookData` contains the first 32 bytes of the posthook revert reason
    // e.g the complete reason if posthook reverted with a string small enough.
    bytes32 posthookData
  );
  
// 2. Debiting maker from Offer Bounty
event Debit(address indexed maker, uint amount);

// Logging at the end of Market Order:
event OrderComplete(
    bytes32 indexed olKeyHash,
    address indexed taker,
    uint fee, // the fee paid by the taker
 );
```

  </TabItem>
  <TabItem value="revertStrings" label="Revert strings">

```solidity
// Gatekeeping
"mgv/dead" // Trying to take offers on a terminated Mangrove
"mgv/inactive" // Trying to take offers on an inactive offer list

// Overflow
"mgv/mOrder/takerWants/160bits" // taker wants too much of a market Order
"mgv/mOrder/takerGives/160bits" // taker gives too much in the market order

// Panic reverts
"mgv/sendPenaltyReverted" // Mangrove could not send the offer bounty to taker
"mgv/MgvFailToPayTaker" // Mangrove was unable to transfer outbound_tkn to taker (Taker blacklisted?)
```

  </TabItem>
  <TabItem value="solidity" label="Solidity">

```solidity
import {IMangrove} from "@mgv/src/IMangrove.sol";
import "@mgv/src/core/MgvLib.sol";

// context of the call

// IMangrove mgv = IMangrove(payable(<address of Mangrove>));
// Mangrove contract
IMangrove mgv = IMangrove(payable(mgv));

 // OLKey olkey = OLKey(<address of outbound token>, <address of inbound token>, <tick spacing>);
 // struct containing outbound_tkn, inbound_tkn and tickSpacing
OLKey memory olkey = OLKey(address(base), address(quote), 1);

// Tick maxTick = TickLib.tickFromVolumes(<raw amount of inbound token>, <raw amount of outbound token>);
// constructs max tick from a ratio between inbound and outbound token amounts
Tick maxTick = TickLib.tickFromVolumes(1_000_000, 1_000);

// marketOrderByTick
(uint takerGot, uint takerGave, uint bounty, uint feePaid) = mgv.marketOrderByTick(olKey, maxTick, 1 ether, true);

// marketOrderByVolume
(uint takerGot, uint takerGave, uint bounty, uint feePaid) = mgv.marketOrderByVolume(olKey, 1.1 ether, 1.9 ether, true);

```

  </TabItem>

<!-- ethers.js removed for now

  <TabItem value="ethersjs" label="ethers.js">

```javascript
const { ethers } = require("ethers");
// context
// outTkn: address of outbound token ERC20
// inbTkn: address of inbound token ERC20
// ERC20_abi: ERC20 abi
// MGV_address: address of Mangrove
// MGV_abi: Mangrove contract's abi
// signer: ethers.js transaction signer 

// loading ether.js contracts
const Mangrove = new ethers.Contract(
    MGV_address, 
    MGV_abi, 
    ethers.provider
    );

const InboundTkn = new ethers.Contract(
    inbTkn, 
    ERC20_abi, 
    ethers.provider
    );
    
const OutboundTkn = new ethers.Contract(
    outTkn, 
    ERC20_abi, 
    ethers.provider
    );
    
// if Mangrove is not approved yet for inbound token transfer.
await InboundTkn.connect(signer).approve(MGV_address, ethers.constant.MaxUint256);

const outDecimals = await OutboundTkn.decimals();
const inbDecimals = await InboundTkn.decimals();

// putting takerGives/Wants in the correct format
const takerGives = ethers.parseUnits("8.0", outDecimals);
const takerWants = ethers.parseUnits("5.0", inbDecimals);

// Market order at a limit price of 8 outbound tokens given for 5 inbound tokens received
const tx = await Mangrove.connect(signer).marketOrder(
    outTkn,
    inbTkn,
    takerWants,
    takerGives,
    true
    );
await tx.wait();
```

  </TabItem> -->

</Tabs>

### Inputs

#### `marketOrderByTick(olKey, maxTick, fillVolume, fillWants)`

* `olKey`: identifies the [offer list](../offer-list/README.md) and consists of:
  * `outbound_tkn`: address of the _outbound_ token (that the taker will buy).
  * `inbound_tkn`: address of the _inbound_ token (that the taker will spend).
  * `tickSpacing`: specifies the space between allowed ticks (see [Ticks, ratios, and prices](../tick-ratio.md) for details)
* `maxTick`: specifies the max tick that can be matched with this order
* `fillVolume`: the desired volume of tokens in either `olKey.outbound_tkn` or `olKey.inbound_tkn`.
  * If `fillWants` is `true`, `fillVolume` is in `olKey.outbound_tkn`. This means the taker specified how much they wish to receive ("buy").
  * If `fillWants` is `false`, `fillVolume` is in `olKey.inbound_tkn`. This means the taker specified how much they wish to send ("sell").
* `fillWants`: Whether to stop when the taker has received or spent a specified amount:
  * If `true`, the order is full when taker has received `fillVolume` of `olKey.outbound_tkn`.
  * If `false`, the order is full when taker has sent `fillVolume` of `olKey.inbound_tkn`.

#### `marketOrderByVolume(olKey, takerWants, takerGives, fillWants)`

* `olKey`: identifies the [offer list](../offer-list/README.md) and consists of:
  * `outbound_tkn`: address of the _outbound_ token (that the taker will buy).
  * `inbound_tkn`: address of the _inbound_ token (that the taker will spend).
  * `tickSpacing`: specifies the space between allowed ticks (see [Ticks, ratios, and prices](../tick-ratio.md) for details)
* `takerWants`: amount of _outbound_ token the taker wants. Must fit on 127 bits.
* `takerGives`: amount of _inbound_ token the taker gives. Must fit on 127 bits.
  * The ratio `takerGives/takerWants` specifies the max ratio (and thus tick) that can be matched with this order.
* `fillWants`: Whether to stop when the taker has received `takerWants` or spent `takerGives`:
  * If `true`, the order is full when taker has received `takerWants` of `olKey.outbound_tkn`.
  * If `false`, the order is full when taker has sent `takerGives` of `olKey.inbound_tkn`.

### Outputs

* `takerGot` is the net amount of _outbound_ tokens the taker has received (i.e., after applying the offer list [fee](../governance-parameters/local-variables.md#taker-fees) if any).
* `takerGave` is the amount of _inbound_ tokens the taker has sent.
* `bounty` is the amount of native tokens (in units of wei) the taker received in compensation for cleaning failing offers
* `feePaid` is the amount of `outbound_tkn` that was sent to Mangrove's vault in payment of the potential %%fee|taker-fee%% configured for the `olKey` [offer list](../offer-list/README.md#general-structure).

### Example

Let's consider the following DAI-WETH offer list with no fee:

| Tick    | Ratio (WETH/DAI) | Offer ID | Gives (DAI)  |
| ------- | ---------------- | -------- |------------- |
| -75103  | 0.0005476        | 77       | 925.26       |
| -75103  | 0.0005476        | 177      | 916.47       |
| -75041  | 0.0005510        | 42       | 871.76       |

The following two examples illustrate the difference between `fillWants = true` or `false`:

:::info Example 1
A taker calls `marketOrderByTick` on the offer list with:

* `maxTick` = -75000
  * corresponds to a max ratio of 0.0005539
* `fillVolume` = 2,500 * 10**18
* `fillWants` = `true`

Since `fillWants = true`, we have:

* `fillVolume` is in `olKey.outbound_tkn` and corresponds to 2,500 DAI
* the market order will be considered filled once 2,500 DAI has been received.

In summary, this corresponds to a **buy** order for 2,500 DAI and the taker is willing to pay up to `2,500 * 0.0005539 = 1.3832` WETH.

The market order will execute as follows:

1. Get 925.26 DAI for `925.26 * 0.0005476 = 0.5067` WETH from offer #77
2. Get 916.47 DAI for `916.47 * 0.0005476 = 0.5019` WETH from offer #177
3. Get the remaining `2500 - 925.26 - 916.47 = 658.27` DAI for `658.27 * 0.0005510 = 0.3627` WETH from offer #42.

In total, the taker gets 2,500 DAI and sends `0.5067 + 0.5019 + 0.3627 = 1.3713` WETH.
:::

:::info Example 2
A taker calls `marketOrderByTick` on the offer list with:

* `maxTick` = -75000
  * corresponds to a max ratio of 0.0005539
* `fillVolume` = 1.2 * 10**18
* `fillWants` = `false`

Since `fillWants = false`, we have:

* `fillVolume` is in `olKey.inbound_tkn` and corresponds to 1.2 WETH
* the market order will be considered filled once 1.2 WETH has been sent.

In summary, this corresponds to a **sell** order of 1.2 WETH and the taker wants to receive at least `1.2 / 0.0005539 = 2168.84` DAI.

1. Sell `925.26 * 0.0005476 = 0.5067` WETH for 925.26 DAI to offer #77
2. Sell `916.47 * 0.0005476 = 0.5019` WETH for 916.47 DAI to offer #177
3. Sell the remaining `1.2 - 0.5067 - 0.5019 = 0.1914` WETH for `0.1914 / 0.0005510 = 347.37` DAI to offer #42.

In total, the taker gets `925.26 + 916.47 + 347.37 = 2,189.10` DAI and sends 1.2 WETH.
:::

### More on market order behaviour

Suppose one wants to buy or sell some token `B` (base), using token `Q` (quote) as payment, on a market with tick spacing `T`.

* **Market buy:** A limit **buy** order for `x` `B` tokens, corresponds to a `marketOrderByTick` on the (`B`,`Q`,`T`) offer list with `fillWants` set to `true`, `fillVolume = x` (the volume one wishes to buy), and `maxTick` = $⌊log_{1.0001}(price\ limit)⌋$.
* **Market sell:** A limit **sell** order for `x` `B` tokens, corresponds to a `marketOrderByTick` on the (`Q`,`B`,`T`) offer list with
 `fillWants` set to `false`, `fillVolume = x` (the volume one wishes to sell), and `maxTick` = $⌊-log_{1.0001}(price\ limit)⌋$.


:::caution **On order residuals**

Contrary to [GTC orders](https://www.investopedia.com/terms/g/gtc.asp) on regular [order book](https://www.investopedia.com/terms/o/order-book.asp) based exchanges, the residual of your order (i.e., the volume you were not able to buy/sell due to hitting your price limit) will _not_ be put on the market as an offer. Instead, the market order will simply end partially filled.

It is possible to implement GTC orders through a %%maker contract|maker-contract%%. [MangroveOrder](../../../strat-lib/technical-references/code/strats/src/strategies/MangroveOrder.md) in the Strat Lib implements GTC and other advanced order types.

:::

## Bounties for taking failing offers

If an offer fails to deliver, the taker gets a %%bounty|bounty%% in native token to compensate for the gas spent on executing the offer. The bounty is paid by the %%offer owner|offer-owner%% and is taken from the %%provision|provision%% they deposited with Mangrove when posting the offer.

Refer to [Offer provisions](../reactive-offer/offer-provision.md) for details on how provisions and bounties work and are calculated.

## Token allowance

ERC20 tokens transfers are initiated by Mangrove using `transferFrom`. If Mangrove's `allowance` on the taker's address (for tokens to be spent) is too low, the order will revert.

## Active offer lists

Every Mangrove [offer list](../offer-list/README.md) can be either [active or inactive](../governance-parameters/local-variables.md#de-activating-an-offer-list), and Mangrove itself can be either [alive or dead](../governance-parameters/global-variables.md#other-governance-controlled-setters). Taking offers is only possible when Mangrove is alive and on offer lists that are active.
