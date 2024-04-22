---
title: Technical Insights & Defence Mechanisms
description: Technical Insights & Defence Mechanisms
sidebar_position: 8
---

# Technical Insights & Defence Mechanisms

Mangrove has thought a lot about making sure the points system is fair and can't be easily tricked. The underlying maths discourages cheating, like making many small trades to yourself to earn points.

The whitepaper elaborates on the complex calculation formulas for determining points, aimed at accurately reflecting each participant's contribution to the DEX.

A unified scoring system aggregates points across different roles (maker/taker) and markets, allowing for a comprehensive leaderboard that reflects participants' overall contributions. This aggregation is first per day, but the daily points are only indicative, as the points are further adjusted per epoch to consider the overall contribution.

The whitepaper discusses how this system flexibly adapts to changing market conditions and participant behaviors to ensure ongoing engagement and market health.

Specific mechanisms are designed to counteract potential manipulations such as washtrading and Sybil attacks. Where a user might try to game the system by splitting activity across multiple addresses, the scoring formula advantages unified, consistent liquidity provision over fragmented efforts. To secure points, users need to reach a minimum volume across the period.

The program employs detailed mechanisms to ensure that splitting liquidity does not provide an unfair advantage, thereby maintaining fairness and integrity within the ecosystem.

### Bounties for whistleblowers

If a user provides proof of washtrading which is banned, they will receive 10% of the points of the banned wallets as a bounty in the form of community points.
