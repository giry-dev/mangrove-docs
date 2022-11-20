---
id: gasprice
title: gasprice
hoverText: An estimate of the price of a gas unit, in native token amount.
---

An estimate of the price of a gas unit, in native token amount. Mangrove has its own [gasprice](../contracts/technical-references/governance-parameters/global-variables.md#gas-price-and-oracle) value, which is set by governance update. Offers on mangrove are posted with their own [offer gasprice](../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-data-structures.md#mgvlibsingleorder), which must be at the time they are posted, higher or equal to Mangrove's. 