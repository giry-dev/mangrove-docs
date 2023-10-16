---
description: Choosing Kandel parameters
sidebar_position: 4
---


# Choosing Kandel parameters


This section goal is to help you develop an intuition to choose your Kandel parameters. It should be taken as an explanation on how the various parameters can impact your Kandel, and how the market conditions (ex: volatility) could be taken into account. It is **not** a trading advice.

> 💡
> As a reminder, Kandel is not intended as a "set and forget" strategy, and needs ongoing maintenance and checks.

We will be going through standard steps you might want a take in order to check the market and deploy a new Kandel.
Essentially, that means that by using discrete AMM such as Kandel, you can fix the level of liquidity you are offering adjusted per volatility. So choosing the spread starts with answering the question - what is the volatility? If you can estimate or predict it well enough, the only thing you need to do is pick the spread (i.e. your parameters for Kandel).


## Check-in frequency

First, it is good practice to know how often you aim to update your Kandel. Depending on the trading pair you chose, markets can behave very differently.

Example: I will update my Kandel every 24h.

## Set your price range

Next, you should try to anticipate how much the market/price will vary during that period you just decided on. You are kind of betting on daily volatility.

Example: I will look at the market volatility for the past 24h, and decide on the price range for my new Kandel.

## Ratio

This is the ratio of the progression used to calculate the price grid. You would logically bet on intra-day volatility (few min or hours):
 
* High volatility: better to have spaced out price points
* Low volatility: narrow price points

If the volatility is increasing, you can increase the grid size (space between price points).

## Step size

The general idea to configure your step size, is that a bigger volatility would likely lead to a bigger step size.


## Simple use case
Let's say you want to have a continuous Kandel, and maybe your current paramaters allow you only 2 price points.

* The solution to this is instead of having 2 points with a step size = 1, you can configure 16 points with a step size of 8
* That gives you continuity (more price points for a similar interval)
* When your offers are taken, Kandel will be able to "grab" lower prices


