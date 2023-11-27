---
description: How taker compensation for failing offers works.
sidebar_position: 2
---

# Offer provisions

## Summary

When an offer fails, the caller has wasted some gas. To compensate the caller, Mangrove gives them a %%bounty|bounty%% in native tokens. Offers must %%provision|provision%% enough native token to maximize the chances that Mangrove can compensate the caller. In more details:

* Every maker contract that posted an offer has a balance in native token held by Mangrove. Funds can be freely added to or withdrawn from the balance.
* Whenever the contract creates or updates an offer, its balance is adjusted so that enough native tokens are locked as the offer's provision.
  * If the offer is retracted that provision is credited back to the logic's account balance.
  * If the offer logic is executed and fails, part or all of the provision is sent as compensation, to the caller. We call that the bounty. The rest of the provision is credited back to the maker contract's account balance.

## Funding an offer

There are three ways a maker contract can credit its balance on Mangrove. (1) The contract may either call the `fund` function, or (2) make a call to the fallback function with some value, or (3) pay on the fly when a [new offer is posted](./#posting-a-new-offer).&#x20;

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="signature" label="Signature" default>

```solidity
function fund(address maker) public payable;
```

</TabItem>

<TabItem value="events" label="Events">

```solidity
// Offer Maker at address `maker` has been credited of `amount` wei
event Credit(address maker, uint amount);
```

</TabItem>
<TabItem value="revertStrings" label="Revert strings">

```solidity
"mgv/dead" // Mangrove contract is no longer live
```

</TabItem>
<TabItem value="solidity" label="Solidity">

```solidity
import "src/IMangrove.sol";
//context 
IMangrove mgv; // Mangrove contract address
address maker_contract; // address of the maker contract one is willing to provision
// funding maker_contract
mgv.fund{value: 0.1 ether}(maker_contract);

// if funding oneself one can use the overload:
mgv.fund{value: 0.1 ether}();
// which is equivalent to `msg.fund{value:0.1 ether}(address(this))

// to avoid erreoneous transfer of native tokens to Mangrove, the fallback function will also credit `msg.sender`:
(bool noRevert,) = address(mgv).call{value: amount}("");
require(noRevert, "transfer failed");
```

</TabItem>

<!-- ethers.js removed for now
<TabItem value="ethersjs" label="ethers.js">

```javascript
const { ethers } = require("ethers");
//context
let MGV; // address of Mangrove
let MGV_abi; // Mangrove contract's abi
let maker_contract_address; // address of the Maker Contract

const Mangrove = new ethers.Contract(
    MGV, 
    MGV_abi, 
    ethers.provider
    );

let overrides = { value: ethers.parseUnits("0.1", 18) };
// provisioning Mangrove on behalf of MakerContract
await Mangrove["fund(address)"](maker_contract_address, overrides);
```

</TabItem> -->
</Tabs>

### Inputs

* `maker` the maker contract's balance on Mangrove to credit

:::danger 
**Do not use `send` or `transfer` to credit Mangrove**&#x20;

Upon receiving funds, Mangrove will credit the amount sent to `maker` (or `msg.sender` if the `receive` function was called). This involves writing to storage, which consumes more gas than the amount given by `send` and `transfer`.

:::

## Checking an account balance

```solidity
function balanceOf(address maker) external view returns (uint balance);
```

### Inputs

* `maker` is the account of which you want to read the balance.

### Outputs

* `balance` is the available balance of `maker`.

## Withdrawing

At any time, your available balance can be withdrawn. It may be less than what you deposited: your balance adjusts every time you create/update an offer.

<Tabs>
<TabItem value="signature" label="Signature" default>

```solidity
function withdraw(uint amount) external returns (bool noRevert);
```

</TabItem>
<TabItem value="events" label="Events">

```solidity
event Debit(address maker, uint amount);
```

</TabItem>
<TabItem value="revertStrings" label="Revert strings">

```solidity
// Trying to withdraw unavailable funds
"mgv/insufficientProvision"
```

</TabItem>
<TabItem value="solidity" label="Solidity">

```solidity
import "src/IMangrove.sol";
//context 
IMangrove mgv; // Mangrove contract

uint wei_balance = mgv.balanceOf(address(this));
require(mgv.withdraw(wei_balance), "Mangrove failed to transfer funds");
```

</TabItem>
</Tabs>

### Inputs

* `amount` the amount of native token (in wei) one wishes to withdraw from Mangrove's provisions.

### Outputs

* `noRevert` whether the transfer was successful.

:::danger **Important points**

* The account credited will be `msg.sender`.
* `amount` must be $$\leq$$ your available balance (available with `balanceOf`)

:::

## Provision calculation

The provision is calculated with the following formula (in wei):

$$\textrm{provision} = \max(\textrm{gasprice}_{\textrm{mgv}},\textrm{gasprice}_{\textrm{ofr}}) \times (\textrm{gasreq} + \textrm{gasbase}_{\textrm{mgv}}) \times 10^9$$​

* $$\textrm{gasprice}_{\textrm{mgv}}$$ is the `gasprice` [global governance parameter](../../governance-parameters/global-variables.md#gas-price-and-oracle) (in gwei per gas units)
* $$\textrm{gasprice}_{\textrm{ofr}}$$ is the `gasprice` argument of the function being called ([`newOffer`](./#posting-a-new-offer) or [`updateOffer`](./#updating-an-existing-offer)) also in gwei per gas units.
* $$\textrm{gasreq}$$ is the `gasreq` amount of gas units required to execute the offer.
* $$\textrm{gasbase}_{\rm mgv}$$ is the `offer_gasbase` [local governance parameter](../../governance-parameters/local-variables.md#offer-gas-base).

## Balance adjustment when creating/updating offers

Whenever an offer is created or updated, Mangrove uses the [Provision formula](./offer-provision.md#provision-calculation) to get the offer's required provision in wei.

Mangrove will adjust the balance of the caller to ensure that _provision wei_ are available as bounty if the offer fails. If the offer was _already_ provisioned, the adjustment may be small, and the balance may actually increase -- for instance, if the `gasprice` dropped recently.

:::info **Incentivized book cleaning**

Provisions are calculated so that, within reasonable gas estimates, taking a failing offer should be profitable for the taker.

:::

:::tip **Gas optimization**

If you frequently update your offers, we recommend using a consistent, high `gasprice` argument, above the actual expected gas prices. Not changing `gasprice` when you call `updateOffer` will make the call cheaper (you save one `SSTORE`).

:::

## Bounty calculation

The bounty is paid to the taker **as compensation for spent gas**. It depends on how much gas the offer uses before failing.
It is calculated with the following formula, based on the provision [previously calculated](./offer-provision.md#provision-calculation):

$$\textrm{bounty} = \min(\textrm{offer.provision},(\textrm{gasused} + \textrm{gasbase}_{\textrm{mgv}}) \times \textrm{gasprice}_{\textrm{mgv}} \times 10^9)$$

* $$\textrm{offer.provision}$$ is the [provision amount](./offer-provision.md#balance-adjustment-when-creatingupdating-offers) calculated when the offer was posted.
* $$\textrm{gasused}$$ is the `gasused` amount of gas units actually used when executing the offer.
* $$\textrm{gasbase}_{\textrm{mgv}}$$ is the `offer_gasbase` [local governance parameter](../../governance-parameters/local-variables.md#offer-gas-base). 
* $$\textrm{gasprice}_{\textrm{mgv}}$$ is Mangrove's global gasprice at the time of offer execution.

Thus the bounty is capped at the offer's original provision.
