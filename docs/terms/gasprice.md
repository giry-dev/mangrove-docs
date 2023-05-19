---
id: gasprice
title: gasprice
hoverText: An estimate of the price of a gas unit in native token amount.
---

The _gasprice_ is an estimate of the price of a gas unit, in native token amount. Mangrove maintains its own gasprice parameter, which is set by Governance updates. Offers on Mangrove are posted with their own gasprice, which must be at the time they are posted, higher or equal to Mangrove's. 

## References
* [Global variable: gasprice](../contracts/technical-references/governance-parameters/global-variables.md#gas-price-and-oracle)
* [Offer gasprice](../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-data-structures.md#mgvlibsingleorder)