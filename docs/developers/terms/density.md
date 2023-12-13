---
id: density
title: Density
hoverText: The ratio of tokens promised by an offer over the gas it requires to be executed.
---

_Density_ is the ratio of tokens promised by an offer over the gas it requires to be executed. Mangrove requires that offers posted on an %%offer list|offer-list%% provide at least a density of %%outbound|outbound%% tokens superior or equal to the offer list's density parameter.


Density is similar to a ‘dust’ parameter. We prevent spamming of low-volume offers by asking for a minimum ‘density’ in `outbound_tkn` per gas requested. For instance, if `density` is worth `10`, `offer_gasbase == 5000`, an offer with `gasreq == 30000` must promise at least `10 × (30000 + 5000) = 350000 outbound_tkn`. 9 bits wide.

We store the density as a float with 2 bits for the mantissa, 7 for the exponent, and an exponent bias of 32, so that density ranges from 
2
−
32
2 
−32
  to 
1.75
×
2
95
1.75×2 
95
 . For more information, see DensityLib.

## References
* [Local variable: density](../contracts/technical-references/governance-parameters/local-variables.md#density)
* More information on [DensityLib.sol](/MgvDoc/#densitylib.sol)