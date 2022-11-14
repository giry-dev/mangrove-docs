---
sidebar_position: 2
---

# 😎 Oracle

The Mangrove Oracle contract is a special periphery contract in that it acts as a gas price and density oracle for the Mangrove core. It serves to bridge to an external oracle for gas price and density. 

As this contract is queryed by the Mangrove core, this contract is configured with the address of a permissioned sender, which is allowed to update the gas price and density that the oracle reports to Mangrove.

### Source Code

The [MgvOracle source](https://github.com/mangrovedao/mangrove-core/blob/master/src/periphery/MgvOracle.sol) is available.