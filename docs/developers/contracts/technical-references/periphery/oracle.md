---
title: Oracle
sidebar_position: 2
---

## Monitor Contract - `MgvOracle`

As described in the section [Governance -> Global Variables](../governance-parameters/global-variables.md#gas-price-and-oracle), Mangrove governance can configure Mangrove to use a separate Monitor Contract as a gas price and density oracle.

The `MgvOracle` contract is a simple contract that implements the Monitor interface and can be deployed by Mangrove governance to serve as a Monitor Contract. It serves as a bridge to an off-chain oracle for gas price and density. When deployed, this contract is configured with the address of a specified permissioned sender that is allowed to call the external functions to update the values for gas price and density that the oracle reports to Mangrove.

```solidity
  function setGasPrice(uint gasPrice) external
  function setDensity(uint density) external
```

A method is also provided for governance to change the permissioned sender.

```solidity
  function setMutator(address mutator_) external
```

## Source Code

The [`MgvOracle` source](https://github.com/mangrovedao/mangrove-core/blob/d6a2aae336a7ea89abe2479ab797b5ffcd5abb02/src/periphery/MgvOracle.sol) is available.

:::danger Deployment Address

Please refer to [Deployment Addresses](../contract-addresses.md) to verify the address of `MgvOracle` for a particular chain.

:::