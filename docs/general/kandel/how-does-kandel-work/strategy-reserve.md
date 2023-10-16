---
description: How does Kandel work
sidebar_position: 5
---


# Strategy reserve


All Kandel instances have a local liquidity source, i.e. the funds deposited in the Strategy reserve. It includes Published liquidity and Unallocated liquidity:

## Published liquidity

It is a subset of the Strategy reserve - it is the sum of the active offers' liquidity (i.e. Bids and Asks).

## Unallocated liquidity

It is a subset of the Strategy reserve where funds of offers that failed to repost are collected. The Unallocated liquidity can be withdrawn or re-invested into the strategy.