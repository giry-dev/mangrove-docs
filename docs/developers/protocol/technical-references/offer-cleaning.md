---
description: Offer cleaning
sidebar_position: 6
---

# Cleaning offers

Offers on Mangrove may fail during a market order. When they do, the taker is compensated for the gas wasted on making the offer fail in the form of a %%bounty|bounty%% in native tokens paid from the failing offer's %%provision|provision%% which the %%offer owner|offer-owner%% deposited with Mangrove when posting the offer. Refer to [Offer provisions](./reactive-offer/offer-provision.md) for details on how provisions and bounties work and are calculated.

From the taker's perspective, failing offers are a nuisance: They consume gas when running limit orders and they pollute the price and depth information of the market. It's important to note, that failing offers are only a nuisance, not a risk: Users are compensated for gas spent on making the offer fail and the limit avg. price will never be exceeded.

Therefore Mangrove provides a facility for removing specific failing offers and receiving the bounty without running a market order. This is called **Offer Cleaning**.

:::info
You can read more about [the role of cleaning here](../../keeper-bots/background/the-role-of-cleaning-bots-in-mangrove.md).
:::

Mangrove's `cleanByImpersonation` function allows anyone to clean a failing offer, by providing the execution parameters that will make it fail. The function will execute the specified offers, including token transfers, and (1) reward the cleaner and remove the offer from the book if the offer fails or (2) revert the offer execution if it succeeds and keep the offer in the book; in both cases, all token transfers are reverted.

Since this cleaning involves actual token transfers (though they will be reverted) Mangrove requires the caller to specify a taker account from which the inbound tokens will be transferred. In effect, this taker account will be impersonated during cleaning, hence `*ByImpersonation`.

The taker must of course have approved Mangrove for transferring the inbound token on their behalf. And cleaners are free to specify _any_ account, including accounts they do not control.

:::info Impersonated takers are unaffected
The takers that are impersonated during cleaning are unaffected: All token transfers made inside `cleanByImpersonation` will be reverted.
:::

## `cleanByImpersonation(olKey, targets, taker)`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="signature" label="Signature" default>

```solidity
function cleanByImpersonation(
  OLKey memory olKey, 
  MgvLib.CleanTarget[] calldata targets, 
  address taker
  ) external returns (uint successes, uint bounty);

struct CleanTarget {
  uint offerId;
  Tick tick;
  uint gasreq;
  uint takerWants;
}
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
<TabItem value="revert" label="Revert strings">

```javascript
// Gatekeeping
"mgv/dead" // Trying to take offers on a terminated Mangrove
"mgv/inactive" // Trying to take offers on an inactive offer list
"mgv/clean/protected" //?
"mgv/clean/offerNotLive" //?

// Overflow
"mgv/clean/takerWants/tooBig" // takerWants for clean overflows

// Wrong inputs
'mgv/clean/tick/outOfRange' //?
"mgv/clean/tickMismatch" //?
"mgv/clean/gasreqTooLow" //?


// Panic reverts
"mgv/sendPenaltyReverted" // Mangrove could not send Offer Bounty to taker
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

// if Mangrove is not approved yet for inbound token transfer.
IERC20(inbTkn).approve(MGV, type(uint).max);

MgvLib.CleanTarget[] memory targets = new MgvLib.CleanTarget[](2);
targets[0] = MgvLib.CleanTarget(77, -79815, 250_000, 0.3163);
targets[1] = MgvLib.CleanTarget(42, -79748, 300_000, 0.3000);

// cleaning the offer using olkey, the previous array of target offers and this contract's address as taker
(uint successes, uint bounty) = mgv.cleanByImpersonation(
  olkey, 
  targets,
  address(this)
);
```

</TabItem>

<!-- ethers.js removed for now
<TabItem value="ethersjs" label="ethers.js">

```javascript
// context
<strong>// outTkn: address of outbound token ERC20
</strong>// inbTkn: address of inbound token ERC20
// ERC20_abi: ERC20 abi
// MGV_address: address of Mangrove
// MGV_abi: Mangrove contract's abi
// signer: transaction signer 

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

// preparing snipes data
const outDecimals = await OutboundTkn.decimals();
const inbDecimals = await InboundTkn.decimals();

const snipe1 = [ // first snipe spec
         offer1, //offer id
         ethers.parseUnits("1.5",outDecimals), //takerWants from offer1
         ethers.parseUnits("2.0",inbDecimals), //takerGives to offer1
         100000 // 100,000 gas units to execute
     ];
const snipe2 = [ // second snipe spec
         offer2, //offer id
         ethers.parseUnits("1.5",outDecimals), //takerWants from offer1
         ethers.parseUnits("2.2",inbDecimals), //takerGives to offer1
         50000
     ];
     
// triggering snipes
await Mangrove.connect(signer).snipes(
    outTkn,
    inbTkn,
    [snipe1, snipe2],
    true // fillwants
    );
```

  </TabItem> -->
</Tabs>

### Prerequisites

The prerequisites and steps needed to use the `Mangrove.cleanByImpersonation` function are:

- `taker` must have approved Mangrove for spending `inbound_tkn` on the offer list you want to clean.
- `taker` must have sufficient `inbound_tkn` funds for the execute arguments

### Inputs

- `olKey`: identifies the [offer list](./offer-list/README.md) and consists of:
  - `outbound_tkn`: address of the _outbound_ token (that the taker will buy).
  - `inbound_tkn`: address of the _inbound_ token (that the taker will spend).
  - `tickSpacing`: specifies the space between allowed ticks (see [Ticks, ratios, and prices](./tick-ratio.md) for details)
- `targets`: an array of where each `CleanTarget` identifies an offer to clean and the execution parameters that will make it fail:
  - `offerId`: the ID of the offer to clean.
  - `tick`: the offer's expected tick. If this doesn't match when the tx is executed, cleaning of the offer will not be attempted to avoid wasting gas since the cleaning assumptions have changed.
  - `gasreq`: the offer's expected gasreq. If this is lower than the offer's actual gasreq when the tx is executed, cleaning of the offer will not be attempted to avoid wasting gas since the cleaning assumptions have changed.
  - `takerWants`: the amount to request from the offer.
- `taker`: the address of the taker to impersonate.

:::caution **Protection against malicious offer updates**

Offers can be updated, so if `targets` was just an array of `offerId`s, there would be no way to protect against a malicious offer update mined right before a `clean`. The offer could suddenly have a worse price, or require a lot more gas.

If you only want to take offers without any checks on the offer contents, you can simply:

- Set `gasreq` to `type(uint).max`, and
- Set `tick` to `maxTick`.

:::

### Outputs

- `successes` is the number of successfully cleaned offers.
- `bounty` is the total bounty received and transferred to `msg.sender`.

### Example

Consider the offers on this DAI-WETH offer list and let's construct a `cleanByImpersonation` call.

| Tick    | Ratio (WETH/DAI) | Offer ID | Gives (DAI)  | Gas required |
| ------- | ---------------- | -------- |------------- | ------------ |
| -79815  | 0.0003419        | 77       | 925.26       | 250,000      |
| -79815  | 0.0003419        | 177      | 916.47       | 270,000      |
| -79748  | 0.0003442        | 42       | 871.76       | 300,000      |

Let's say we've detected that offers 77 and 42 will fail. We can now construct the following `targets` array:

- `targets[0] = [77, -79815, 250_000, 925.26]`
- `targets[1] = [42, -79748, 300_000, 871.76]`.

We also know the address of a `taker` who has approved Mangrove to transfer a sufficient amount of WETH on their behalf, such that it could pay for executing the most expensive of the offers. Remember, the transfers will be reverted after each cleaning, so the `taker` need only have sufficient funds for the most expensive offer, not the total of the offers cleaned.

Putting it together, the call to `cleanByImpersonation` would look like this (assuming `mgv` is ):

```solidity
IMangrove mgv = IMangrove(payable(<address of Mangrove>));

OLKey memory olkey = OLKey(<address of DAI>, <address of WETH>, 1);

MgvLib.CleanTarget[] memory targets = new MgvLib.CleanTarget[](2);
targets[0] = MgvLib.CleanTarget(77, -79815, 250_000, 0.3163);
targets[1] = MgvLib.CleanTarget(42, -79748, 300,000, 0.3000);

mgv.cleanByImpersonation(olKey, targets, taker);
```
