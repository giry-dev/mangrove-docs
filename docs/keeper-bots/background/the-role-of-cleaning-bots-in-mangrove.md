---
sidebar_position: 1
---
# The role of cleaning bots in Mangrove
Cleaning bots rids Mangrove order books of failing offers. This page discusses why offers can fail and how community members can earn bounties cleaning these failing offers.

# Why does Mangrove allow offers to fail?
Offers on Mangrove may fail for a number of reasons:

* The offer doesn't have (or cannot procure) the promised tokens
* The offer chooses to renege on its promise
* The code of a smart offer might have a bug
* A bad actor has posted bad offers to sabotage Mangrove community

From the user's perspective, failing offers are a nuisance: They consume gas when running limit orders and they pollute the price and depth information of the market. It's important to note, that failing offers are only a nuisance, not a risk: Users are compensated for gas spent on making the offer fail and the limit avg. price will never be exceeded.

From the maker's perspective, however, the possibility of offer failure is an important feature. It allows makers to implement strategies such as Last Look: When matched, a smart offer can check whether the trade still makes sense for the offer maker; If not, the smart offer reneges. Also, makers may post smart offers that are good when they are posted, but were changes in market conditions cause the offer to fail at a later point.

On the surface, this might seem skewed in favor of makers. However, by having access to powerful market making features, makers reduce their risk and can therefore offer better prices. So in the end, both makers and takers win.
In other words, the possibility of offers failing is a necessity for the power of smart offers.


# Why should community members run cleaning bots?
While we have to accept that offers may fail, we don't have to accept that they accumulate and degrade the order book. Mangrove therefore has a built-in incentive for removing failing offers: %%Bounties|bounty%%.

When an offer fails, the taker receives a bounty in native token. The bounty is bigger than the gas used to make the offer fail and thus the taker is compensated for the wasted gas. But more importantly, it can be profitable to identify and snipe offers that will fail.

This means that it can be profitable to run so-called %%cleaning bots|cleaning-bot%% that monitor Mangrove order books and snipe any offer that will fail. Community members are encouraged to run such cleaning bots and thereby contribute to keeping Mangrove working optimally.


# Getting started with cleaning bots
Mangrove provides learning materials, smart contracts, SDK functions, and an example cleaning bot, that make it easy to write and run cleaning bots:

- Tutorial: [Run a simple cleaning bot](../getting-started/run-a-simple-cleaning-bot)
  - A tutorial that walks you through all the steps needed to run an example cleaning bot.
- SDK: [`mangrove.js`](../../SDK/README.md)
  - The `mangrove.js` SDK makes it easy to monitor order books and to send snipe transactions.
- Contract: [`MgvCleaner`](https://github.com/mangrovedao/mangrove-core/blob/182eaddc982140667a9d95f3ba957e7d016ed0d1/src/periphery/MgvCleaner.sol)
  - The `MgvCleaner` smart contract is deployed together with Mangrove and provides a `collect` function that snipes  offers and reverts if any of the offers don't fail.
