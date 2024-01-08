---
description: Making liquidity available
sidebar_position: 2
---

# Making liquidity available

An offer on Mangrove usually points to a contract containing the [offer logic](../technical-references/taking-and-making-offers/reactive-offer/maker-contract.md) and specifies what it is ready to deliver and its price. Offer are stored in [offer lists](../technical-references//taking-and-making-offers/offer-list.md).

import useBaseUrl from '@docusaurus/useBaseUrl';

<div class="text--center">
<img src={useBaseUrl('/img/assets/MakerOffer.png')} width="70%"/>
</div>

### Creating & Updating offers

Any Ethereum account can offer liquidity on Mangrove. New offers are created through a `newOfferByTick` or `newOfferByVolume`functions, and updated through `updateOfferByTick` or `updateOfferByVolume`. The [Creating & Updating offers](../technical-references/taking-and-making-offers/reactive-offer/README.md) section details how to use those Mangrove functions. 

The Mangrove [Strat Lib](../../strat-lib/README.md) has a standard implementation of [offer logic](../technical-references//taking-and-making-offers/reactive-offer/maker-contract.md) called `MangroveOffer`, that automatically reposts the residual of your offer, if the offer was not fully taken.

### Executing offers

After an offer has been created or updated, it can be executed by anyone. Upon execution, the offer's logic has an opportunity to source the liquidity it has promised. Refer to [Executing Offers](../technical-references/taking-and-making-offers/reactive-offer/executing-offers.md) for details on how to structure your contract code in order to respond when its offers are executed.

### Offer provisions and bounties

Since offers on Mangrove can fail, an ETH bounty is given to those who trigger failing offers, as compensation for the gas spent. This bounty is paid from a %%provision|provision%% that %%offer owners|offer-owner%% must deposit with Mangrove when posting an offer. Refer to [Offer provisions](../technical-references/taking-and-making-offers/reactive-offer/offer-provision.md) for details on how provisions and bounties work.
