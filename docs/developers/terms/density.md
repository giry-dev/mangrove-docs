---
id: density
title: Density
hoverText: The ratio of tokens promised by an offer over the gas it requires to be executed.
---

_Density_ is the ratio of tokens promised by an offer over the gas it requires to be executed. Mangrove requires that offers posted on an %%offer list|offer-list%% provide at least a density of %%outbound|outbound%% tokens superior or equal to the offer list's density parameter.

#### Details

* Density is similar to a ‘dust’ parameter.
* We prevent spamming of low-volume offers by asking for a minimum ‘density’ in `outbound_tkn` per gas requested.
* For instance, if:
    * `density` is worth `10`,
    * `offer_gasbase == 5000`,
    * then an offer with `gasreq == 30000` must promise at least `10 × (30000 + 5000) = 350000 outbound_tkn`
* The density of a semibook is stored as a 9 bits float. For convenience, governance functions read density as a 96.32 fixed point number.
    * As a guideline, fixed-point densities should be uints and should use hungarian notation (for instance `uint density96X32`)
    * We store the density as a float with 2 bits for the mantissa, 7 for the exponent, and an exponent bias of 32.

## References
* [Local variable: density](../protocol/technical-references/governance-parameters/local-variables.md#density)
* More information on [DensityLib.sol](pathname:///MgvDoc/#densitylib.sol) in the annotated codebase