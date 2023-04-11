---
description: How does Kandel work
sidebar_position: 4
---


# Compounding

The compounding rate can be set separately for asks and bids.

<table>
  <tr>
    <th>Compounding rate</th>
    <th>Reinvesting</th>
    <th>Unallocated liquidity</th>
    <th>Comments</th>
  </tr>
  <tr>
    <td>*0%</td>
    <td>No funds reinvested, profits are set aside and remain unallocated.</td>
    <td>All excess profits (spread) are collected in the <a href="./strategy-reserve#unallocated-liquidity">Unallocated Liquidity</a> reserve.</td>
    <td>Unallocated Liquidity can be reinjected into the strategy or withdrawn.</td>
  </tr>
   <tr>
    <td>*0% &lt; r &lt; 100%</td>
    <td><i>(Excess * rate)</i> is reinvested on <i><a href="./parameters">step size</a>=k</i> below or above.</td>
    <td><i>(Excess * (1-rate))</i> collected in the Unallocated Liquidity reserve.</td>
    <td>Unallocated Liquidity can be reinjected into the strategy or withdrawn.</td>
  </tr>
   <tr>
    <td>100%</td>
    <td>All profits from the spread are reinvested on <i>step size=k</i> below or above.</td>
    <td>No funds collected in the Unallocated Liquidity reserve.</td>
    <td>-</td>
  </tr>
</table>

_* Available for SDK users only_