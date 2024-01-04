---
description: Kandel on Aave
sidebar_position: 3
---

# Kandel-Aave

Kandel-Aave works exactly the same as the standard Kandel strategy, with the exception that the [Strategy reserve](../how-does-kandel-work/strategy-reserve.md) (Unallocated and Published liquidity) is deposited on AAVE, thus earning additional yield.
When an offer is matched, the liquidity is sourced from the funds deposited on AAVE. After the offer is executed, the received amount is republished and stored on AAVE. 

:::info Note
Kandel and Kandel-Aave have minimum inventory and gas requirements.
:::

Here is more information on the inventory requirements:<br />

* Based on the density value set for each market on Mangrove, offers have a minimum volume requirement
* Example: let's assume that the ETH/USDC pair has a requirement of at least 0.1 ETH

    * That means every offer posted on this market on Mangrove should be no less than 0.1 ETH
    * Because of this constraint, there is therefore a minimum deposit requirement for Kandel
    * Let's say we are running Kandel strategy on ETH/USDC, with a price grid that consists of 10 price points (see Price distribution). At each price point an offer will be posted, and each one of them has to be no less than 0.1 ETH
    * _Total minimum requirement = 10 offers * 0.1ETH -> 1ETH_