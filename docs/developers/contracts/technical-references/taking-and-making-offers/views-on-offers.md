---
description: Mangrove getters for offers and offer lists.
sidebar_position: 2
---

# Views on offers

Mangrove provides a number of getter functions providing views on offers and %%offer lists|offer-list%%.

## Public getters

### `best(OLKey memory olKey)`

[JS TBD]

:::info

Returns the `offerId` of the best offer in the %%offer list|offer-list%%.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="solidity" label="Solidity" default>

```solidity
import "src/IMangrove.sol";

// context of the call
IMangrove mgv;
OLKey public olkey;

uint best = mgv.best(olkey);
```

</TabItem>
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

</TabItem>
</Tabs>

### `offers(OLKey memory olKey, uint offerId)` and `offerDetails(OLKey memory olKey, uint offerId)`

[SOLY & JS TBD]

:::info

The data pertaining to a particular offer is contained in the [`OfferUnpacked`](#mgvlibmgvstructsofferunpacked) and [`OfferDetailUnpacked`](#mgvlibofferdetailunpacked) structs, which are stored as packed custom types called, respectively, `OfferPacked` and `OfferDetailPacked.` For on-chain calls, Mangrove provides unpacking functions to extract a particular field out of a packed structure. For off-chain calls, Mangrove also provide direct getters for the unpacked structures.&#x20;

:::

<Tabs>
<TabItem value="solidity" label="Solidity">

```solidity
import "src/IMangrove.sol";
import {MgvStructs} "src/MgvLib.sol";

// context of the call
address MGV;
address outTkn; 
address inbTkn;
uint tickSpacing;
uint offerId; // the id of the offer one wishes to get the data of

// if one wishes to get the totally unpacked data (gas costly!):
(MgvStructs.OfferUnpacked memory offer, MgvStructs.OfferDetailUnpacked memory offerDetail) = Mangrove(MGV)
.offerInfo(outTkn, inbTkn, tickSpacing, offerId);

// if one wishes to access a few particular fields, say `wants`, `gives` and `gasreq` parameters of the offer: 
// 1. getting packed (outTkn, inbTkn, tickSpacing) Offer List data
MgvStructs.OfferPacked memory offer32 = Mangrove(MGV)
.offers(outTkn, inbTkn, tickSpacing, offerId);
MgvStructs.OfferDetailPacked memory offerDetail32 = Mangrove(MGV)
.offerDetails(outTkn, inbTkn, tickSpacing, offerId);

// for all fields f of OfferUnpacked
// offer.f == offer32.f()
// for all fields f of OfferDetailUnpacked
// offerDetail.f == offerDetail32.f()

```

</TabItem>
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

</TabItem>
</Tabs>

### `isLive(Offer offer)`

[JS TBD]

:::info

An offer is **live** in a given [Offer List](offer-list.md) if it can be matched during a [market order](taker-order/). The view function `isLive` can be used to verify whether an identifies as a **live** offer (i.e. `gives` is not zero) in its offer list.

:::

<Tabs>
<TabItem value="solidity" label="Solidity">

```solidity
import "src/IMangrove.sol";

// context of the call
Offer offer;

// checking whether the offer is live in the order book.
bool isLive = offer.isLive();
```

</TabItem>

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
</Tabs>

## Custom types

:::info 

Offer data is split between  [`OfferUnpacked`](#mgvlibmgvstructsofferunpacked) and [`OfferDetailUnpacked`](#mgvlibofferdetailunpacked) for storage read/write optimisation (as both structs can be efficiently packed on storage).

:::

### `MgvLib.MgvStructs.OfferUnpacked`

| Type     | Field   | Comments                                                                   |
| -------- | ------- | -------------------------------------------------------------------------- |
| `uint` | `prev`  | Predecessor offer id (better price)                                        |
| `uint` | `next`  | Successor offer id (worst price)                                           |
| `Tick`   | `tick` | Tick number associated with the offer  |
| `uint` | `gives` | What the offer gives (in _wei_ units of base token of the offer's market)  |

### `MgvLib.OfferDetailUnpacked`

| Type      | Field           | Comments                                                                                                                                  |
| --------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `address` | `maker`         | Address of the offer's [Maker Contract](reactive-offer/maker-contract.md)                                                                 |
| `uint`  | `gasreq`        | Gas required by the offer (in gas units)                                                                                                  |
| `uint`  | `kilo_offer_gasbase` | Mangrove's [gasbase](../governance-parameters/mangrove-configuration.md#local-parameters) at the time the offer was posted (in gas units) |
| `uint`  | `gasprice`      | The gas price covered by the offer bounty (in _gwei_ per gas units)                                                                       |

