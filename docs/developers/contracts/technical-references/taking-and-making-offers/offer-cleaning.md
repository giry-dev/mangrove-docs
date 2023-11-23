---
description: Offer cleaning
sidebar_position: 6
---

# Cleaning offers

It is also possible to target specific offer IDs in the [offer list](./offer-list.md). This is called **Offer Cleaning**.

:::info 
[Is this still true? I'm thinking to remove that banner since the intent with `clean` is different?]

Offer cleaning can be used by off-chain bots and price aggregators to build their own optimized market order, targeting for instance offers with a higher volume or less gas requirements in order to optimize the gas cost of filling the order.

:::

!!! [Revert strings and Soly TBD] !!!

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
import "src/IMangrove.sol";
import {IERC20} from "src/MgvLib.sol";

// context of the call
address MGV;
address outTkn; // address offer's outbound token
address inbTkn; // address of offer's inbound token
uint offer1; // first offer one wishes to snipe
uint offer2; // second offer one wishes to snipe

// if Mangrove is not approved yet for inbound token transfer.
IERC20(inbTkn).approve(MGV, type(uint).max);

// sniping the offers to check whether they fail
(uint successes, uint takerGot, uint takerGave, uint bounty, uint fee) = Mangrove(MGV).snipes(
    outTkn,
    inbTkn,
    [
        [offer1, 1 ether, 1 ether, 100000], // first snipe (price of 1 / 1 )
        [offer2, 1.5 ether, 1 ether, 50000] // second snipe (price of 1.5 / 1)
    ],
    true // fillwants
);
//we have: `successes < 2 <=> bounty > 0`
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

[CAUTION TO BE EDITED?]
:::caution **Protection against malicious offer updates**

Offers can be updated, so if `targets` was just an array of `offerId`s, there would be no way to protect against a malicious offer update mined right before a `clean`. The offer could suddenly have a worse price, or require a lot more gas.

If you only want to take offers without any checks on the offer contents, you can simply:

* Set `takerWants` to `0`,
* Set `takerGives` to `type(uint96).max`,
* Set `gasreq_permitted` to `type(uint).max`, and
* Set `fillWants` to `false`.

:::

### Outputs

* `successes` is the number of successfully cleaned offers.
* `bounty` is the total bounty received.

#### Example

| ID | Wants (USDC) | Gives (DAI) | Gas required |
| -- | ----- | ----- | ------------ |
| 13 | 10    | 10    | 80\_000      |
| 2  | 1     | 2     | 250\_000     |

:::info **Example**

Consider the offers above on the DAI-USDC offer list. Let us construct a `snipes` call. 

We start by specifying that the `fillWants` flag is `true`. This means, that we ask

* to act as a buyer of %%inbound|inbound%% tokens, i.e., DAI, and, 
* to buy *at most* what we specify for `takerWants` in `targets`.

Now let us construct the following `targets` array:

* `targets[0] = [13, 8, 10, 80_000]`
* `targets[1] = [2, 10, 2, 250_000]`

Taking into account that we have set `fillWants = true`, this means that we are:

* targeting offer #13, willing to give 10 USDC for at most 8 DAI, and,
* targeting offer #2, willing to give 2 USDC for at most 10 DAI

accepting a gas cost of up to `80_000` gas units and `250_000`, respectively.

Let `DAI_addr` and `USDC_addr` be the addresses for the relevant tokens. Putting it together, the call to `snipes` looks like this:

    snipes(DAI_addr, USDC_addr, [[13, 8, 10, 80_000],[2, 10, 2, 250_000]], true)

With the DAI-USDC offer list as given above, the result will be that:

For offer #13, we will successfully buy 8 DAI for 8 USDC, as the %%entailed price|offer-entailed-price%% for offer #13 is `10/10 = 1` USDC per DAI. This is below the price we were willing to pay: `10/8 = 1.25` USDC per DAI for this offer, so the offer is executed, resulting in a %%partial fill|maker-partial-fill%%.

For offer #2, we will *not* attempt to execute this offer, as the %%entailed price|offer-entailed-price%% for offer #2 is `1/2 = 0.5` USDC per DAI, above the price that we were are willing to pay: `2/10 = 0.2` USDC per DAI for this offer.

:::


## Bounties for taking failing offers
If an offer fails to deliver, the taker gets a %%bounty|bounty%% in native token to compensate for the gas spent on executing the offer. The bounty is paid by the %%offer owner|offer-owner%% and are taken from the %%provision|provision%% they deposited with Mangrove when posting the offer. 

Refer to [Offer provisions](./reactive-offer/offer-provision.md) for details on how provisions and bounties work and are calculated.
