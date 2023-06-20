---
title: Cleaner
sidebar_position: 3
---

## Execute Failing Offers - `MgvCleaner`

The `MgvCleaner` contract is provided as part of the periphery contracts. Its purpose is to execute failing offers (see [Reneging on Offers](../../background/taker-compensation.md)) and to collect their [associated bounty](../taking-and-making-offers/reactive-offer/offer-provision.md#provision-and-offer-bounty). 

It has a single function `collect`, with the same signature as as the function for [sniping offers](../taking-and-making-offers/taker-order/README.md#offer-sniping); please refer to that page for a detailed account of the arguments. In brief, for a given pair `(outbound_tkn, inbound_tkn)`, it takes an array of offers `targets` and expects all offers to fail or not to execute. If an offer did not fail, `MgvCleaner` will revert.

This contract may be deployed and used as part of running your own [cleaner keeper bot](/docs/keeper-bots/getting-started/run-a-simple-cleaning-bot.md).

```solidity
function collect(
    address outbound_tkn, 
    address inbound_tkn, 
    uint[4][] calldata targets, 
    bool fillWants
) external returns (uint bal)
```

### Source Code

The [`MgvCleaner` source](https://github.com/mangrovedao/mangrove-core/blob/d6a2aae336a7ea89abe2479ab797b5ffcd5abb02/src/periphery/MgvCleaner.sol) is available.

:::danger Deployment Address

Please refer to [Deployment Addresses](../contract-addresses.md) to verify the address of `MgvCleaner` for a particular chain.

:::