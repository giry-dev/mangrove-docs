---
description: How to write Mangrovian offers
sidebar_position: 5
---

# Creating & Updating offers

## Posting a new offer

New offers will mostly be posted by [maker contracts](maker-contract.md) able to source liquidity when asked by Mangrove.

Offers posted via maker contracts are called %%smart offers|smart-offer%% - as opposed to %%on-the-fly offers|on-the-fly-offer%% made from EOA's.

Offers on Mangrove can be posted in two ways which differ in how the "price" (%%ratio|ratio%%) is specified:

* `newOfferByTick`: The "price" is specified as a tick.
* `newOfferByVolume`: The "price" is specified as the ratio between two volumes, `wants/gives`.

The `*ByVolume` variant is a convenience wrapper for the `*ByTick` variant: The provided volumes are converted to a corresponding `tick`.

The output from the two functions is the same.

:::info

Both functions are payable and can be used to credit the maker contract's balance on Mangrove on the fly. A non-zero `msg.value` will allow Mangrove to credit the maker's balance prior to locking the %%provision|provision%% of the newly posted offer.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="signature" label="Signature" default>

```solidity
 function newOfferByTick(
    OLKey memory olKey,
    Tick tick, 
    uint gives, 
    uint gasreq, 
    uint gasprice
) external payable returns (uint offerId);

function newOfferByVolume(
    OLKey memory olKey,
    uint wants,
    uint gives,
    uint gasreq,
    uint gasprice
) external payable returns (uint offerId);
```

</TabItem>
<TabItem value="events" label="Events">

```solidity
// logging new offer's data 
event OfferWrite(
  bytes32 indexed olKeyHash,
  address indexed maker, // account that created the offer, will be called upon execution
  int tick,
  uint gives,
  uint gasprice, // gasprice that was used to compute the offer bounty
  uint gasreq,
  uint id // id of the new offer
);

// `maker` balance on Mangrove (who is `msg.sender`) is debited of `amount` WEIs to provision the offer
event DebitWei(address maker, uint amount);

// `maker` balance on Mangrove is credited of `amount` WEIs if `msg.value > 0`.
event CreditWei(address maker, uint amount); 
```

</TabItem>

<TabItem value="revertStrings" label="Revert strings">

```solidity
// Gatekeeping
"mgv/dead"     // Mangrove contract is terminated
"mgv/inactive" // Trying to post an offer in an inactive market

// Order book has reached its maximal number of orders (2**24)
"mgv/offerIdOverflow" // Unlikely as max offer id is 2**24

// Overflow
"mgv/writeOffer/gasprice/tooBig"
"mgv/writeOffer/gives/tooBig"

// Invalid values
"mgv/writeOffer/gasreq/tooHigh" // gasreq above gasmax
"mgv/writeOffer/gives/tooLow"   // gives should be greater than 0
"mgv/writeOffer/density/tooLow" // wants / (gasreq + overhead) below density
"mgv/writeOffer/tick/outOfRange"

// Insufficient provision
"mgv/insufficientProvision"     // provision of `msg.sender` should cover offer bounty
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

// OLKey olKey = OLKey(<address of outbound token>, <address of inbound token>, <tick spacing>);
// struct containing outbound_tkn, inbound_tkn and tickSpacing
OLKey memory olKey = OLKey(address(base), address(quote), 1);

// Tick tick = TickLib.tickFromRatio(mantissa,exponent);
// ratios are represented as a (mantissa,exponent) pair which represents the number `mantissa * 2**-exponent`
// calculates the tick from a desired 1.25 ratio (1.25 = 20 * 2^(-4))
Tick tick = TickLib.tickFromRatio(20, 4);

// creates an offer at tick
mgv.newOfferByTick(olKey, tick, 1 ether, 10_000, 0);

// creates an offer at ⌈wants/tick⌉
mgv.newOfferByVolume(olKey, 1 ether, 1 ether, 10_000, 0);
```

</TabItem>

<!-- ether.js removed for now
<TabItem value="ethersjs" label="ethers.js">

```typescript
const {ethers} = require("ethers");
// context 
// outTkn_address: address of outbound token ERC20
// inbTkn_address: address of inbound token ERC20
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
    inbTkn_address, 
    ERC20_abi, 
    ethers.provider
    );
    
const OutboundTkn = new ethers.Contract(
    outTkn_address, 
    ERC20_abi, 
    ethers.provider
    );
    
// if Mangrove is not approved yet for outbound token transfer.
await OutboundTkn.connect(signer).approve(MGV_address, ethers.constant.MaxUint256);

const outDecimals = await OutboundTkn.decimals();
const inbDecimals = await InboundTkn.decimals();

// putting takerGives/Wants in the correct format
const gives:ethers.BigNumber = ethers.parseUnits("8.0", outDecimals);
const wants:ethers.BigNumber = ethers.parseUnits("5.0", inbDecimals);

const {global, local} = await Mangrove.configInfo(outTkn_address,inbTkn_address);
// Market order at a limit average price of 8 outbound tokens given for 5 inbound tokens received
tx = await Mangrove.connect(signer).newOffer(
    outTkn_address,
    inbTkn_address,
    wants,
    gives,
    0, // offer with no logic do not require additional gas to execute
    global.gasprice, // using mangrove's gasprice
    0,  // using best offer as pivot
    {value: (local.offer_gasbase.mul(global.gasprice).mul(10**9))} // putting funds on Mangrove to cover for offer bounty
    );
await tx.wait();

```

</TabItem> -->
</Tabs>

### Inputs

The two function only differ in one input. They both functions take these inputs:

* `olKey`: identifies the [offer list](../offer-list/README.md) and consists of:
  * `outbound_tkn`: address of the _outbound_ token (that the offer will send).
  * `inbound_tkn`: address of the _inbound_ token (that the offer will receive).
  * `tickSpacing`: specifies the space between allowed ticks (see [Ticks, ratios, and prices](../tick-ratio.md) for details)
* `gives`: the amount of outbound tokens promised by the offer. **Must** fit in 127 bits and be strictly positive. **Must** provide enough volume w.r.t. to `gasreq` and offer list's %%density|density%% parameter.
* `gasreq`: the amount of gas that will be given to the offer's account. **Must** fit in 24 bits and be lower than [`gasmax`](../governance-parameters/mangrove-configuration.md#globalunpacked). Should be sufficient to cover all calls to the maker contract's %%offer logic|offer-logic%% (%%`makerExecute`|makerExecute%%) and %%`makerPosthook`|makerPosthook%%). **Must** be compatible with the offered volume `gives` and the offer list's %%density|density%% parameter. (See also %%gasreq|gasreq%%.)
* `gasprice`: gas price override in Mwei/gas used to compute the order %%provision|provision%% (see also [offer bounties](offer-provision.md)). Any value lower than Mangrove's current %%gasprice|gasprice%% will be ignored (thus 0 means "use Mangrove's current %%gasprice|gasprice%%"). **Must** fit in 26 bits.

#### `newOfferByTick(olKey, tick, gives, gasreq, gasprice)`

* `tick`: the desired "price" tick of the offer. The actual tick of the offer will be the smallest tick `offerTick > tick` that satisfies `offerTick % tickSpacing == 0`.

#### `newOfferByVolume(olKey, wants, gives, gasreq, gasprice)`

* `wants`: the amount of inbound tokens requested by the offer. **Must** fit in 127 bits and be strictly positive.
  * The ratio `wants/gives` (rounded down) specifies the desired "price" ratio and thus tick.

### Outputs

* `offerId` the %%id|offer-id%% of the newly created offer. Note that offer ids are scoped to %%offer lists|offer-list%%, so many offers can share the same id if they belong to different offer lists.

:::danger **Provisioning**

Since offers can fail, Mangrove requires each offer to be %%provisioned|provision%% in native token. If an offer fails, part of that provision will be sent to the caller that executed the offer, as compensation.

Make sure that your offer is [well-provisioned](offer-provision.md#checking-an-account-balance) before calling `newOffer*`, otherwise the call will fail. The easiest way to go is to send a comfortable amount of native token to Mangrove from your offer-posting contract. Mangrove will remember your balance and use it when necessary.

:::

:::danger **Offer execution**

* If the offer account is a contract, it should implement the [IMaker](maker-contract.md) interface. At the very least, it must have a function with signature [`makerExecute(MgvLib.SingleOrder calldata order)`](maker-contract.md#offer-execution) or it will systematically revert when called by Mangrove.
* `gives` and `gasreq` are subject to [density](../governance-parameters/local-variables.md#density) constraints on the amount of _outbound_ token provided per gas spent.
* The offer account will need to give Mangrove a high enough allowance in _outbound_ tokens since Mangrove will use the ERC20 standard's `transferFrom` function to source your tokens.

:::

## Updating an existing offer

As for `newOffer`, offers on Mangrove can be updated in two ways which differ in how the "price" (%%ratio|ratio%%) is specified:

* `updateOfferByTick`: The "price" is specified as a tick.
* `updateOfferByVolume`: The "price" is specified as the ratio between two volumes, `wants/gives`.

The `*ByVolume` variant is a convenience wrapper for the `*ByTick` variant: The provided volumes are converted to a corresponding `tick`.

The output from the two functions is the same.

:::info

Both functions are payable and can be used to credit the maker contract's balance on Mangrove on the fly. A non-zero `msg.value` will allow Mangrove to credit the maker's balance prior to locking the %%provision|provision%% of the updated offer.

:::

<Tabs>
<TabItem value="signature" label="Signature" default>

```solidity
function updateOfferByTick( 
    OLKey memory olKey,
    Tick tick,
    uint gives,
    uint gasreq,
    uint gasprice,
    uint offerId
) external payable;

function updateOfferByVolume( 
    OLKey memory olKey,
    uint wants,
    uint gives,
    uint gasreq,
    uint gasprice,
    uint offerId
) external payable;
```

</TabItem>
<TabItem value="events" label="Events">

```solidity
event OfferWrite(
  bytes32 indexed olKeyHash,
  address indexed maker, // account that created the offer, will be called upon execution
  int tick,
  uint gives,
  uint gasprice, // gasprice that was used to compute the offer bounty
  uint gasreq,
  uint id // id of the new offer
);
// if old offer bounty is insufficient to cover the update, 
// `maker` is debited of `amount` WEIs to complement the bounty
event DebitWei(address maker, uint amount);
 
// if old offer bounty is greater than the actual bounty, 
// `maker` is credited of the corresponding `amount`.
event CreditWei(address maker, uint amount);
```

</TabItem>
<TabItem value="revertStrings" label="Revert strings">

```solidity
// Gatekeeping
"mgv/dead"     // Mangrove contract is terminated
"mgv/inactive" // Trying to update an offer in an inactive market

// Type error in the arguments
"mgv/writeOffer/gasprice/tooBig"
"mgv/writeOffer/gives/tooBig"

// Invalid values
"mgv/writeOffer/gasreq/tooHigh" // gasreq above gasmax
"mgv/writeOffer/gives/tooLow"   // gives should be greater than 0
"mgv/writeOffer/density/tooLow" // wants / (gasreq + overhead) below density
"mgv/writeOffer/tick/outOfRange"

// Invalid caller
"mgv/updateOffer/unauthorized"  // caller must be the account that created the offer

// Insufficient provision
"mgv/insufficientProvision"     // provision of caller no longer covers the offer bounty
```

</TabItem>
<TabItem value="soldity" label="Solidity">

```solidity
import {IMangrove} from "@mgv/src/IMangrove.sol";
import "@mgv/src/core/MgvLib.sol";

// continuing from the previous example for the creation of new offers
// context of the call:
    // mgv: address of Mangrove's deployment typed as IMangrove
    // olKey struct containing outbound_tkn, inbound_tkn and tickSpacing

// creates an offer at `tick` and store its ID in ofrId_1
uint ofrId_1 = mgv.newOfferByTick(olKey, tick, 1 ether, 10_000, 0);

// getting packed (outTkn, inbTkn, tickSpacing) offer list data
Offer offer_1 = mgv.offers(olKey, ofrId_1);
OfferDetail detail_1 = mgv.offerDetails(olKey, ofrId_1);

// update the offer with the "ByTick" version
mgv.updateOfferByTick(
  olKey,
  tick,
  offer_1.gives() * 9 / 10, // decrease what offer gives by 10%
  detail_1.gasreq(), // keep offer's current gasreq 
  detail_1.gasprice(), // keep offer's current gasprice
  ofrId_1 // id of the offer to be updated 
);

// retrieves the amount of wants from the tick and gives
uint wants = TickLib.inboundFromOutbound(tick, offer_1.gives());

// update the offer with the "ByVolume" version
mgv.updateOfferByVolume(
  olKey,
  wants, // keep what the offer wants
  offer_1.gives() * 12 / 10, // increase what offer gives by 20%
  detail_1.gasreq(), // keep offer's current gasreq 
  detail_1.gasprice(), // keep offer's current gasprice
  ofrId_1 // id of the offer to be updated 
);
```

</TabItem>
</Tabs>

### Inputs

* `offerId` is the %%offer id|offer-id%% of the offer to be updated.
* All other parameters are the same as `newOfferByTick` and `newOfferByVolume` - see [above](#posting-a-new-offer).

### Outputs

None.

:::info **Offer updater**

An offer can only be updated if `msg.sender` is the account that created the offer.

:::

:::caution **Reusing offers**

After being executed or [retracted](#retracting-an-offer), an offer is moved out of the %%offer list|offer-list%%. It can still be updated and reinserted in the offer list. It is generally recommended to update offers instead of creating new ones, as it costs much less gas.
:::

## Retracting an offer

An offer can be withdrawn from the order book via the `retractOffer` function described below.

<Tabs>
<TabItem value="signature" label="Signature" default>

```solidity
function retractOffer(
  OLKey memory olKey,
  uint offerId,
  bool deprovision
) external returns (uint provision);
```

</TabItem>
<TabItem value="events" label="Events">

```solidity
// emitted on all successful retractions
event OfferRetract(
  bytes32 indexed olKeyHash,
  address indexed maker,
  uint id, // the id of the offer that has been removed from the offer list
  bool deprovision
);

// emitted if offer is deprovisioned
event Credit(
  address maker, // account being credited
  uint amount    // amount (in wei) being credited to the account
); 
```

</TabItem>
<TabItem value="revertStrings" label="Revert strings">

```solidity
"mgv/retractOffer/unauthorized" // only the offer's Maker Contract may call.
```

</TabItem>
<TabItem value="solidity" label="Solidity">

```solidity
import {IMangrove} from "@mgv/src/IMangrove.sol";

// continuing from the previous example for the creation of new offers
// context of the call:
    // mgv: address of Mangrove's deployment typed as IMangrove
    // olKey struct containing outbound_tkn, inbound_tkn and tickSpacing
    // ofrId_1: offer identifier of the offer created in the examples for new offer creation

// retracting offer with ID = ofrId_1
mgv.retractOffer(
  olKey,
  ofrId_1, // id of the offer to be retracted
  false // no deprovision of the offer, saves gas if one wishes to repost the offer later
);
...
```

</TabItem>
</Tabs>

### Inputs

* `olKey`: identifies the offer list, see details [above](#posting-a-new-offer).
* `offerId`: is the %%id|offer-id%% of the offer to be retracted.
* `deprovision`: if `true`, will free the offer's %%provision|provision%% so that you can [withdraw](offer-provision.md#withdrawing) them. Otherwise, will leave the provision in the offer.

### Outputs

* `provision`: amount of native token deprovisioned for the offer (in wei).

:::info Note
The `withdraw(amount)` function can be used to withdraw the funds after deprovisioning.
:::
