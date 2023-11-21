---
description: Basic taker side functions
sidebar_position: 3
---

# Taking offers

Offers on Mangrove can be taken with a [market order](#market-order).

## General considerations

### Token allowance

ERC20 tokens transfers are initiated by Mangrove using `transferFrom`. If Mangrove's `allowance` on the taker's address (for tokens to be spent) is too low, the order will revert.

### Active offer lists

Every Mangrove [offer list](../offer-list.md) can be either [active or inactive](../../governance-parameters/local-variables.md#de-activating-an-offer-list), and Mangrove itself can be either [alive or dead](../../governance-parameters/global-variables.md#other-governance-controlled-setters). Taking offers is only possible when Mangrove is alive and on offer lists that are active.

## Market order

A **Market Order** is Mangrove's simplest way of buying or selling assets. Such (taker) orders are run against a specific [offer list](../offer-list.md) with its associated %%outbound|outbound%% token and %%inbound|inbound%% token. The liquidity taker specifies how many _outbound_ tokens she %%wants|wants%% and how many _inbound_ tokens she %%gives|gives%%.


:::info **Mangrove Market Order = TradFi Limit Order**

Mangrove's market orders are _DeFi_ market orders - which are different from market orders in TradFi:

In TradFi, a market order is an order to buy or sell immediately at the best available price.

In DeFi, where transactions can be [front-run](https://www.investopedia.com/terms/f/frontrunning.asp) or [sandwiched](https://coinmarketcap.com/alexandria/article/what-are-sandwich-attacks-in-defi-and-how-can-you-avoid-them), adversaries may manipulate the best available price and thus extract value from a market order as there is no limit on the price. TradFi market orders are therefore unsafe for fully on-chain DEX'es like Mangrove.

To protect the user, Mangrove's market order therefore corresponds to a TradFi [**limit order**](https://www.investopedia.com/terms/l/limitorder.asp): An order to buy or sell at or below a given price.
More precisely, Mangrove ensures that the price of the offers matched with the order does not exceed the specified price.

:::


When an order is processed by Mangrove's matching engine, it consumes the offers in the selected [offer list](../offer-list.md), inside the corresponding bin. Offers in a [bin](../offer-list.md#bins-doubly-linked-lists) are executed in order, from the first to the last.
Execution works as follows:

1. Mangrove checks that the current offer's [entailed price](../offer-list.md#gives-ratio-and-entailed-price) is at least as good as the taker's price. Otherwise execution stops there.
2. Mangrove sends _inbound_ tokens to the current offer's associated [logic](../reactive-offer/maker-contract.md).
3. Mangrove then executes the offer logic.
4. If the call is successful, Mangrove sends _outbound_ tokens to the taker. If the call or the transfer fail, Mangrove reverts the effects of steps 2. and 3.
5. The taker's _wants_ and _gives_ are reduced.
6. If the taker's _wants_ has not been completely fulfilled, Mangrove moves back to step 1.

Any failed [offer](../reactive-offer/) execution results in a [bounty](../reactive-offer/offer-provision.md#computing-the-provision-and-offer-bounty) being sent to the caller as compensation for the wasted gas.

!!! [Revert strings, Soly and JS TBD] !!!

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="signature" label="Signature" default>

```solidity
function marketOrderForByVolume(
    OLKey memory olKey,
    uint takerWants,
    uint takerGives,
    bool fillWants
    address taker
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
"mgv/feeTransferFail" // Mangrove could not collect fees from the taker
"mgv/MgvFailToPayTaker" // Mangrove was unable to transfer outbound_tkn to taker (Taker blacklisted?)
```

  </TabItem>
  <TabItem value="solidity" label="Solidity">

```solidity
import "src/IMangrove.sol";
import {IERC20} from "src/MgvLib.sol";

// context of the call
address MGV;
address outTkn; // address offer's outbound token
address inbTkn; // address of offer's inbound token

uint outDecimals = IERC20(outTkn).decimals();
uint inbDecimals = IERC20(inbTkn).decimals();

// if Mangrove is not approved yet for inbound token transfer.
IERC20(inbTkn).approve(MGV, type(uint).max);

// a market order of 5 outbound tokens (takerWants) in exchange of 8 inbound tokens (takerGives)
(uint takerGot, uint takerGave, uint bounty, uint fee) = IMangrove(MGV)
.marketOrder({
    outbound_tkn: outTkn,
    inbound_tkn: inbTkn,
    takerWants: 5*10**outDecimals,
    takerGive: 8*10**inbDecimals,
    true
});
```

  </TabItem>
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

  </TabItem>
</Tabs>

### Inputs

* `outbound_tkn` address of the _outbound_ token (that the taker will buy).
* `inbound_tkn` address of the _inbound_ token (that the taker will spend).
* `tickSpacing` number of ticks that should be jumped between available price points.
* `takerWants` raw amount of outbound token the taker wants. Must fit on 160 bits.
* `takerGives` raw amount of _inbound_ token the taker gives. Must fit on 160 bits.
* `fillWants`
  * If `true`, the market order will stop as soon as `takerWants` _outbound_ tokens have been bought. It is conceptually similar to a _buy order_.
  * If `false`, the market order will continue until `takerGives` _inbound_ tokens have been spent. It is conceptually similar to _sell order_.
  * Note that market orders can stop for other reasons, such as the price being too high.
* `taker` address of the taker placing the market order

### Outputs

* `takerGot` is the net amount of _outbound_ tokens the taker has received (i.e., after applying the offer list [fee](../../governance-parameters/local-variables.md#taker-fees) if any).
* `takerGave` is the amount of _inbound_ tokens the taker has sent.
* `bounty` is the amount of native tokens (in units of wei) the taker received in compensation for cleaning failing offers
* `feePaid` is the amount of `outbound_tkn` that was sent to Mangrove's vault in payment of the potential %%fee|taker-fee%% associated to the `(outbound_tkn, inbound_tkn, tickSpacing)` [offer list](../offer-list.md#general-structure).&#x20;

:::tip **Specification**

At the end of a Market Order the following is guaranteed to hold:

* The taker will not spend more than `takerGives`.
* The price paid `takerGave/(`takerGot + fee`)` will be maximally close to `takerGives/takerWants:`for each offer taken, the amount paid will be $$\leq$$ the expected amount + 1.

:::

#### Example
[TO BE EDITED]

Consider the offer list below. As is usual for %%offer lists|offer-list%%, offers are ordered in the table by %%rank|offer-rank%%.

| ID | wants (USDC) | gives (DAI) |
| -- | ------------ | ----------- |
| 2  | 0.98         | 1           |
| 1  | 9.9          | 10          |

:::info **Example**

Consider the DAI-USDC offer list (with no fee) above. If a taker calls `marketOrder`on this offer list with`takerWants=2` and `takerGives = 2.2` she is ready to give away up to 2.2 USDC in order to get 2 DAI.

* If `fillWants` is `true` the market order will provide 2 DAI for 1.97 USDC.
  1. 1 DAI for 0.98 USDC from offer #2
  2. 1 DAI for 0.99 from offer #1
* If `fillWants` is `false` the market order will provide 2.2078 DAI for 2 USDC.
  1. 1 DAI for 0.98 USDC from offer #1
  2. 1.2078 DAI for the remaining 1.22 USDC from offer #2

:::


### More on market order behaviour

Mangrove's market orders are configurable using the three parameters `takerWants`, `takerGives` and `fillWants.` 

Suppose one wants to buy or sell some token `B` (base), using token `Q` (quote) as payment.

* **Market buy:** A limit **buy** order for x tokens B, corresponds to a `marketOrder` on the (`B`,`Q`) offer list with `takerWants=x` (the volume one wishes to buy) and with `takerGives` such that `takerGives/x` is the limit price cap, and setting `fillWants` to `true`.
* **Market sell:** A limit **sell** order for x tokens B, corresponds to a `marketOrder` on the (`Q`, `B`) offer list with `takerGives=x` (the volume one wishes to sell) and with `takerWants` such that `takerGives/x` is the limit price cap, and setting `fillWants` to `false`.

:::caution **On order residuals**

Contrary to [GTC orders](https://www.investopedia.com/terms/g/gtc.asp) on regular [order book](https://www.investopedia.com/terms/o/order-book.asp) based exchanges, the residual of your order (i.e., the volume you were not able to buy/sell due to hitting your price limit) will _not_ be put on the market as an offer. Instead, the market order will simply end partially filled.

:::

### Market order prices are volume-weighted

Consider the following A-B offer list:

| ID | Wants (B) | Gives (A) | Price (B per A) |
| -- | --------- | --------- | --------------- |
| 1  | 1         | 1         | 1               |
| 2  | 2         | 1         | 2               |
| 3  | 6         | 2         | 3               |

A regular limit order with `takerWants` set to 3 A and `takerGives` set to 6 B would consume offers until it hits an offer with a price above 2, so it would consume offers #1 and #2, but not offer #3.

In Mangrove, a "market order" with the same parameters will however consume offers #1 and #2 completely and #3 partially (for 3 Bs only), and result in the taker spending 6 (1+2+6/2) and receiving (1+1+2/2), which corresponds to a volume-weighted price of 2, complying with the Taker Order.




## Bounties for taking failing offers
If an offer fails to deliver, the taker gets a %%bounty|bounty%% in native token to compensate for the gas spent on executing the offer. The bounty is paid by the %%offer owner|offer-owner%% and are taken from the %%provision|provision%% they deposited with Mangrove when posting the offer. 

Refer to [Offer provisions](../reactive-offer/offer-provision.md) for details on how provisions and bounties work and are calculated.
