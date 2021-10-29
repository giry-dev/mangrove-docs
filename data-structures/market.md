---
description: Introducing Mangrove's Offer Lists and markets
---

# Offer Lists

## General structure

{% hint style="info" %}
The **Offer List** is the basic Mangrove data structure. It contains offers (created by offer makers) that promise an **outbound token**, and request an **inbound token** in return. Offer takers execute these offers by providing the \*\*inbound token. \*\*They receive **outbound tokens** in return.

For example in a DAI-wETH **OL**, wETH is the outbound token (i.e. sent by the offer) and DAI the inbound token (i.e. received by the offer).

\_Relationship to markets: \_a full market will always feature two Offer Lists. For instance, a wETH/DAI **market** has one DAI-wETH **OL** (where wETH is requested and DAI is offered), and a wETH-DAI **OL** (where DAI is requested and wETH is offered).
{% endhint %}

Here's a sample DAI-wETH **OL** with two offers. Only the main characteristics of the offers are shown for clarity (see the [offer data structure](offer-data-structures.md#mgvlib-offer)).

{% hint style="warning" %}
**Decimals**

We display human-readable values here for clarity, but Mangrove stores raw token values and never uses the `decimals` field of a token.
{% endhint %}

| Rank | Offer ID | Wants (wETH) | Gives (DAI) | Gas required | Maker Contract | Offer Gas Price |
| ---- | -------- | ------------ | ----------- | ------------ | -------------- | --------------- |
| #1   | 42       | 0.3          | 871.764     | 300,000      | 0x1234abc      | 200             |
| #2   | 2        | 1            | 2 925.26    | 250,000      | 0x5678def      | 150             |

## Offer List fields

### Rank

Offers are ordered from best to worst. Offers are compared based on _price_, and then on \_gas required \_(see below) if they have the same price.

{% hint style="info" %}
**Example**

The price of offer #42 is 0.0003441298 wETH per DAI while the price of offer #2 is 0.00034185 wETH per DAI. Offer #42 is therefore the best offer of this **OL**, and is ranked first.
{% endhint %}

### ID

The identifier of the offer in the **OL**.

{% hint style="danger" %}
**Important**

Two offers may have the same ID as long as they belong to different **OL**s. For instance, there may be an offer #42 on the wETH-DAI **OL** with different volumes, gas required, maker contract, etc. than offer #42 in the DAI-wETH **OL** shown above.
{% endhint %}

### Wants, gives

Taken together, the **wants** and **gives** values define 1) a max volume, 2) a price. The price is p=**wants**/**gives**, and an offer promises delivery of up to **gives **outbound tokens at a price of p tokens delivered per inbound token received.

{% hint style="info" %}
**Examples**

* Offer #42 _wants_ 0.3 wETH to deliver its promised 871.764 DAI.
* If offer #2 is executed and receives 0.5 wETH, it must send back 1462.63 DAI.
{% endhint %}

### Gas required

The maximum amount of gas the [Maker Contract](../offer-maker/maker-contract.md) managing the offer will be allowed to spend if called by the Mangrove.

{% hint style="info" %}
**Example**

Offer #2 may consume up to 250K gas units.
{% endhint %}

### Maker Contract

The address of the [Maker Contract](../offer-maker/maker-contract.md) managing the offer. The `makerExecute` function of this contract will be called when one of its offers is executed.

### Gas Price

Gas price that was used to compute the [offer provision](../offer-maker/offer-provision.md). If the offer fails to deliver the promised **outbound tokens**, it will be charged in ETH based on this gasprice.

## Offer List configuration

Several [configuration](mangrove-configuration.md) parameters determine how new offers are inserted. Some are [global](mangrove-configuration.md#mgvlib.global) to Mangrove, some are[ Offer List specifics.](mangrove-configuration.md#mgvlib.local) See [Governance](../meta-topics/governance.md) section for details.

## View functions

Retrieving the state of an Offer List can be easily done by a call to the Mangrove's [Reader Contract](../meta-topics/mangroves-ecosystem/reader.md) `MgvReader`(see [deployment addresses](../meta-topics/deployment-addresses.md)) that returns easy-to-parse[ data structures](offer-data-structures.md). For gas cautious interactions, when calling from a smart contract, developers may also want to use the reader's `packedOffers` getter, which return packed data that can be parsed using `MgvPack.sol` library.

{% tabs %}
{% tab title="Views" %}
```solidity
// from MgvReader.sol
// view function to access Offer Lists off chain.
function offerList(
    address outboundToken, // outbound token of the Offer List
    address inboundToken, // inbound token of the Offer List
    uint fromId, // retrieve Offer List starting from offer id `fromId`
    uint maxOffers // stop after retrieving `maxOffers`
    ) public view returns (
      uint currentId, // last offer Id of the returned Offer List
      uint[] memory offerIds, // offer Ids of the list 
      ML.Offer[] memory offerList, // offers
      ML.OfferDetail[] memory offerDetailList // offer details
    );

// view function to access Offer List in a packed format (gas cautious).
function packedOfferList(
    address outboundToken,
    address inboundToken,
    uint fromId,
    uint maxOffers
  ) public view returns (
      uint currentId,
      uint[] memory offerIds,
      bytes32[] memory packedOfferList,
      bytes32[] memory packedOfferDetailList
    );
```
{% endtab %}

{% tab title="Calling from solidity" %}
{% code title="offerList.sol" %}
```solidity
import "./MgvReader.sol";
import "./MgvPack.sol";

// context of the call
address mgvr; // address of Mangrove Reader contract
address outTkn; // address of Offer List's outbound token
address inbTkn; // address of Offer List's inbound token

// getting best offer of the (outTkn, inbTkn) Offer List
(/*nextOfferId*/, 
uint[] memory offerIds, 
bytes32[] memory offerDataList, 
bytes32 [] memory offerDetailDataList) = MgvReader(mgvr).packedOfferList(
    outTkn, 
    inbTkn, 
    0, // starting from best offer
    type(uint).max // retrieve *all* offers of the list
);
for (uint i=0; i++; i<offerIds.length){
    uint offerId = offerIds[i]; // id of the offer that is in position i of the Offer list
    uint wants = MgvPack.offer_unpack_wants(offerDataList[i]); // how much this offer wants (in inbTkn)
    uint gives = MgvPack.offer_unpack_gives(offerDataList[i]); // how much this offer gives (in outTkn)
    uint gasreq = MgvPack.offerDetail_unpack_gasreq(offerDetailDataList[i]); // how much gas this offer requires
}
```
{% endcode %}
{% endtab %}

{% tab title="From ethers.js" %}
{% code title="offerList.js" %}
```javascript
const { ethers } = require("ethers");
// context
let outTkn; // address of outbound token ERC20
let inbTkn; // address of inbound token ERC20
let MgvReader_address; // address of Mangrove reader
let MgvReader_abi; // Mangrove reader contract's abi

const MangroveReader = new ethers.Contract(
    MgvReader_address, 
    MgvReader_abi, 
    ethers.provider
    );

// calling Mangrove Readers to get already unpacked data
let [lastId, offerIds, offerList, offerDetailList] = 
    await MangroveReader.offerList(
        outTkn,
        inbTkn, 
        0, // start retrieving from best offer
        ethers.constants.MaxUint256 // retrieve all offers
        );
for (let i = 0; i < offerIds.length; i++) {
    offerIds[i]; // id of offer i
    offerList[i].wants; // how much offer i wants
    offerList[i].gives; // how much offer i gives
    offerDetailList[i].gasreq; // how much gas offer i requires
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

