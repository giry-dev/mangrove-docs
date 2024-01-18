---
description: Mangrove getters for offers and offer lists.
sidebar_position: 2
---

# Views on offers

Mangrove provides a number of getter functions providing views on offers and %%offer lists|offer-list%%.

## Public getters

### `best(OLKey memory olKey)`

:::info

Returns the `offerId` of the best offer in the %%offer list|offer-list%%.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="solidity" label="Solidity" default>

```solidity
import {IMangrove} from "@mgv/src/IMangrove.sol";
// context of the call

// IMangrove mgv = IMangrove(payable(<address of Mangrove>));
IMangrove mgv = IMangrove(payable(mgv));

// OLKey olkey = OLKey(<address of outbound token>, <address of inbound token>, <tick spacing>);
OLKey memory olkey = OLKey(address(base), address(quote), 1);

uint best = mgv.best(olkey);
```

</TabItem>

<!-- ethers.js removed for now
<TabItem value="ethersjs" label="ethers.js">

```javascript
const { ethers } = require("ethers");
// context
let outboundTkn; // address of outbound token ERC20
let inboundTkn; // address of inbound token ERC20
let tickSpacing; // number of ticks that should be jumped between available price points
let MGV_address;
let MGV_abi; // Mangrove contract's abi

const mgv = new ethers.Contract(
    MGV_address, 
    MGV_abi, 
    ethers.provider
    );

// getting best offer of the (outTkn,inbTk) market
const best = await mgv.best(outboundTkn, inboundTkn, tickSpacing); 
```

</TabItem> -->

</Tabs>

### `offers()` , `offerDetails()`, `offerData()`, and `offerInfo()`

* `Mangrove.offers(OLKey memory olKey, uint offerId)`: get an offer in packed format.
* `Mangrove.offerDetails(OLKey memory olKey, uint offerId)`: get an offer detail in packed format.
* `Mangrove.offerData(OLKey memory olKey, uint offerId)`: get both offer and offer detail in packed format.
* `MgvReader.offerInfo(OLKey memory olKey, uint offerId)`: get both offer and offer detail in unpacked format.


:::info

The data pertaining to a particular offer is contained in the [`OfferUnpacked`](#mgvlibmgvstructsofferunpacked) and [`OfferDetailUnpacked`](#mgvlibofferdetailunpacked) structs, which are stored as packed custom types called, respectively, `OfferPacked` and `OfferDetailPacked`. For on-chain calls, Mangrove provides unpacking functions to extract a particular field out of a packed structure. For off-chain calls, Mangrove also provide direct getters for the unpacked structures.

:::

<Tabs>
<TabItem value="solidity" label="Solidity">

```solidity
import {IMangrove} from "@mgv/src/IMangrove.sol";
import {MgvReader} from "@mgv/src/periphery/MgvReader.sol";
import "@mgv/src/core/MgvLib.sol";

// context of the call

// IMangrove mgv = IMangrove(payable(<address of Mangrove>));
IMangrove mgv = IMangrove(payable(mgv));

// MgvReader reader = MgvReader(<address of MgvReader>);
MgvReader reader = MgvReader(readerAddress);

// OLKey olKey = OLKey(<address of outbound token>, <address of inbound token>, <tick spacing>);
OLKey memory olKey = OLKey(address(base), address(quote), 1);

// Tick tick = TickLib.tickFromVolumes(<inbound amount>, <outbound amount>);
// ratio = <inbound amount> / <outbound amount>
Tick tick = TickLib.tickFromVolumes(5, 4);  // ratio = 5/4 = 1.25

// creates an offer at `tick` and store its ID in ofrId
// newOfferByTick(<offer list key>, <tick>, <gives>, <gasreq>, <gasprice>)
uint ofrId = mgv.newOfferByTick(olKey, tick, 1 ether, 10_000, 20);

// getting packed offer data
Offer offer = mgv.offers(olKey, ofrId);
OfferDetail detail = mgv.offerDetails(olKey, ofrId);
(offer, detail) = mgv.offerData(olKey, ofrId);

// for all fields f of OfferUnpacked
// offer.f == offer32.f()
// for all fields f of OfferDetailUnpacked
// offerDetail.f == offerDetail32.f()

// getting unpacked offer data
// MgvReader.offerInfo(<offer list key>, <offer ID>);
(MgvStructs.OfferUnpacked memory offer, MgvStructs.OfferDetailUnpacked memory offerDetail) =
  MgvReader.offerInfo(olKey, offerId);
```

</TabItem>

<!-- ethers.js removed for now

<TabItem value="ethersjs" label="ethers.js">

```javascript
const { ethers } = require("ethers");
// context
let outTkn; // address of outbound token ERC20
let inbTkn; // address of inbound token ERC20
let tickSpacing; // number of ticks that should be jumped between available price points
let MGV_address; // address of Mangrove
let MGV_abi; // Mangrove contract's abi

const Mangrove = new ethers.Contract(
    MGV_address, 
    MGV_abi, 
    ethers.provider
    );

// getting offer data in an abi compatible format
const [offer, offerDetail] = await Mangrove.offerInfo(outTkn, inbTkn, tickSpacing, offerId);

// now one can access any field, say wants, gives and gasprice of the offer:
const wants = offer.wants;
const gives = offer.gives;
const gasreq = offerDetail.gasreq;
```

</TabItem> -->

</Tabs>

### `isLive(Offer offer)`


:::info

An offer is **live** in a given [Offer List](offer-list.md) if it can be matched during a [market order](taker-order/). The view function `isLive` can be used to verify whether an ID identifies a **live** offer (i.e. `gives` is not zero) in its offer list.

:::

<Tabs>
<TabItem value="solidity" label="Solidity">

```solidity
import {IMangrove} from "@mgv/src/IMangrove.sol";

// context of the call

// IMangrove mgv = IMangrove(payable(<address of Mangrove>));
IMangrove mgv = IMangrove(payable(mgv));

// OLKey olkey = OLKey(<address of outbound token>, <address of inbound token>, <tick spacing>);
OLKey memory olKey = OLKey(address(base), address(quote), 1);

// Tick tick = TickLib.tickFromVolumes(<inbound amount>, <outbound amount>);
// ratio = <inbound amount> / <outbound amount>
Tick tick = TickLib.tickFromVolumes(5, 4);  // ratio = 5/4 = 1.25

// creates an offer at `tick` and store its ID in ofrId
// newOfferByTick(<offer list key>, <tick>, <gives>, <gasreq>, <gasprice>)
uint ofrId = mgv.newOfferByTick(olKey, tick, 1 ether, 10_000, 20);

// checking whether the offer is live in the offer list
bool isLive = mgv.offers(olKey, ofrId).isLive();
```

</TabItem>

<!-- ethers.js removed for now

<TabItem value="ethersjs" label="ethers.js">

```javascript
const { ethers } = require("ethers");
// context
let outTkn; // address of outbound token ERC20
let inbTkn; // address of inbound token ERC20
let tickSpacing; // number of ticks that should be jumped between available price points
let offerId; // offer id
let MGV_address; // address of Mangrove
let MGV_abi; // Mangrove contract's abi

const Mangrove = new ethers.Contract(
    MGV_address, 
    MGV_abi, 
    ethers.provider
    );

// checking whether offerId is live on (outTkn, inbTkn) Offer List.
const isLive = await Mangrove.isLive(outTkn, outTkn, tickSpacing, offerId);
```

</TabItem>
-->

</Tabs>

## Custom types

:::info

Offer data is split between  [`OfferUnpacked`](#mgvlibmgvstructsofferunpacked) and [`OfferDetailUnpacked`](#mgvlibofferdetailunpacked) for storage read/write optimisation (as both structs can be efficiently packed in storage).

:::

### `MgvLib.MgvStructs.OfferUnpacked`

| Field   | Type     | Comments                                                                   |
| ------- | -------- | -------------------------------------------------------------------------- |
| `prev`  | `uint`   | ID of the preceeding offer with the same tick (if the offer is live)       |
| `next`  | `uint`   | ID of the next offer with the same tick (if the offer is live)             |
| `tick`  | `Tick`   | The offer's "price" %%tick|tick%%                                          |
| `gives` | `uint`   | The amount of outbound token the offer gives                               |

### `MgvLib.OfferDetailUnpacked`

| Field                | Type      | Comments                                                                                                                                                  |
| -------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maker`              | `address` | Address of the offer maker, either an EOA or a [Maker contract](reactive-offer/maker-contract.md)                                                         |
| `gasreq`             | `uint`    | Gas required by the offer (in gas units)                                                                                                                  |
| `kilo_offer_gasbase` | `uint`    | Mangrove's [`kilo_offer_gasbase`](../governance-parameters/mangrove-configuration.md#local-parameters) at the time the offer was posted (in 1k gas units) |
| `gasprice`           | `uint`    | The gas price covered by the offer bounty (in _Mwei_ per gas unit)                                                                                        |
