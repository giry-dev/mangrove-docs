---
title: Boosts
description: Boosts
sidebar_position: 3
---
# Boosts

The program features a boost mechanism, where participants' trading and liquidity provision volumes over a 7-day period determine their boost level. Higher activity levels result in greater boosts, amplifying the total points earned. To maintain or attain a higher boost level, a participant needs to consistently engage in higher volume trading or generating volume through its liquidity.

| Level | Boost         | Requirements in a 7 day epoch             |
| ----- | ------------- | ----------------------------------------- |
| 0     | x1 (No Boost) | For volume between $0 and $9,999.         |
| 1     | x1.75         | For volume between $10,000 and $19,999.   |
| 2     | x2.5          | For volume between $20,000 and $49,999.   |
| 3     | x3            | For volume between $50,000 and $99,999    |
| 4     | x3.5          | For volume between $100,000 and $499,000. |
| 5     | x4            | For volume of $500,000 or more.           |
    

This tiered system ensures that the more a participant trades or generates volume, the higher the boost they can achieve, incentivizing consistent and increased trading activity.

Finally, each participant's boost is applied to the LP + trading points earned from both taker and maker activities. The level of boost depends on the participant's level, which in turn is determined by their traded and generated volume.

For instance, a participant earning  100,000 taker and maker points at Level 1 will receive a x1.75 boost, resulting in a total of 175,000 points.
