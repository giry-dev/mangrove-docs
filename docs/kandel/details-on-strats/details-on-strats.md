---
description: Details on strategies
sidebar_position: 3
---


# Details on strategies

:::info
Kandel strategy is coming soon!
:::

## Market making strategies

Mangrove enables liquidity providers to incorporate defensive code, post unprovisioned offers, and redisplay liquidity after their offers are taken.

Kandel, built by Mangrove, is an example of a market making strategy.


## Kandel on AAVE
Kandel on AAVE works exactly the same as the standard Kandel strategy, with the exception that the [Strategy reserve](../how-does-kandel-work/strategy-reserve.md) (Unallocated and Published liquidity) is deposited on AAVE, thus earning additional yield.
When an offer is matched, the liquidity is sourced from the funds deposited on AAVE. After the offer is executed, the received amount is republished and stored on AAVE. 

> 💡
> Kandel and Kandel on AAVE have minimum inventory and gas requirements.

Here is more information on the inventory requirements:<br />

* Based on the density value set for each market on Mangrove, offers have a minimum volume requirement
* Example: let's assume that the ETH/USDC pair has a requirement of at least 0.1 ETH

    * That means every offer posted on this market on Mangrove should be no less than 0.1 ETH
    * Because of this constraint, there is therefore a minimum deposit requirement for Kandel
    * Let's say we are running Kandel strategy on ETH/USDC, with a price grid that consists of 10 price points (see Price distribution). At each price point an offer will be posted, and each one of them has to be no less than 0.1 ETH
    * _Total minimum requirement = 10 offers * 0.1ETH -> 1ETH_


## Build your own strategy

Our [Strategy Library](../../strat-lib/README.md) contains a set of contracts and building blocks that can be used to implement custom market making strategies.