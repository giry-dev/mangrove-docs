---
description: Offer cleaning
sidebar_position: 6
---

# Cleaning offers

It is also possible to target specific offer IDs in the [offer list](./offer-list/README.md). This is called **Offer Cleaning**. This [section](../../keeper-bots/guides/use-borrowed-funds-for-cleaning.md) provides details on how to safely trigger failing offers and make a profit doing so.


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

MgvLib.CleanTarget[] memory targets = new MgvLib.CleanTarget[](1);
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


### Inputs

* `olkey` struct containing:
  * `outbound_tkn` is the address of the outbound token (that the taker will buy).
  * `inbound_tkn` is the address of the inbound token (that the taker will spend).
  * `tickSpacing` is the number of ticks that should be jumped between available price points.
* `targets` is a `CleanTarget[]` with each `CleanTarget` identifying an offer to clean and the execution parameters that will make it fail.
* `taker` is the address of the taker placing the order

:::caution **Protection against malicious offer updates**

Offers can be updated, so if `targets` was just an array of `offerId`s, there would be no way to protect against a malicious offer update mined right before a `clean`. The offer could suddenly have a worse price, or require a lot more gas.

If you only want to take offers without any checks on the offer contents, you can simply:

* Set `gasreq` to `type(uint).max`, and
* Set `tick` to `maxTick`.

:::

### Outputs

* `successes` is the number of successfully cleaned offers.
* `bounty` is the total bounty received.

#### Example

| Tick    | Ratio (WETH/DAI) | Offer ID | Gives (DAI)  | Gas required |
| ------- | ---------------- | -------- |------------- | ------------ |
| -79815  | 0.0003419        | 77       | 925.26       | 250,000      |
|         |                  | 177      | 916.47       | 270,000      |
| -79748  | 0.0003442        | 42       | 871.76       | 300,000      |

:::info **Example**

Consider the offers above on the DAI-WETH offer list. Let's construct a `clean` call. 

First, we'll construct the following `targets` array. As a reminder, `targets` is an array of `CleanTarget[]`. The `CleanTarget` struct holds the following:
  * `uint offerId`
  * `Tick tick`
  * `uint gasreq`
  * `uint takerWants` // can be retrieved using Gives and the Ratio.

Declaring some `targets` using the above table:
* `targets[0] = [77, -79815, 250_000, 0.3163]`
* `targets[1] = [42, -79748, 300_000, 0.3000]`

Here, `mgv` is the core Mangrove contract and `olkey` is the struct containing the token addresses and `tickSPacing` parameters corresponding to an offer list. Putting it together, the call to `cleanByImpersonation` would look like this:

```
MgvLib.CleanTarget[] memory targets = new MgvLib.CleanTarget[](1);
targets[0] = MgvLib.CleanTarget(77, -79815, 250_000, 0.3163);
targets[1] = MgvLib.CleanTarget(42, -79748, 300,000, 0.3000);
mgv.cleanByImpersonation(olKey, targets, address(this));
```
:::


## Bounties for taking failing offers
If an offer fails to deliver, the taker gets a %%bounty|bounty%% in native token to compensate for the gas spent on executing the offer. The bounty is paid by the %%offer owner|offer-owner%% and are taken from the %%provision|provision%% they deposited with Mangrove when posting the offer. 

Refer to [Offer provisions](./reactive-offer/offer-provision.md) for details on how provisions and bounties work and are calculated.
