---
description: Deploy Kandel - an Automated Market Making strategy
sidebar_position: 2
---

# Deploy Kandel strategy

This tutorial covers how to deploy a Kandel strategy from a developer standpoint. For more information about Kandel, see the [Kandel documentation](../../kandel/README.md).

## Prerequisites

* The tutorial assumes knowledge of JavaScript
* Follow [preparation](./preparation.md) to create a new `tutorial` folder.
* Make sure to use a chain where Mangrove is live - you can find all live addresses for Mangrove [here](../../contracts/technical-references/contract-addresses.md)
* For a more simple tutorial to get acquainted with Mangrove, we recommend [Deploy a simple offer](./basic-offer.md)

### Start local node

Before proceeding, let's import the environment variables made as part of the preparation.

```bash
source .env
```

Start Foundry's local node `anvil` to test things locally, with `$RPC_URL` coming from `.env` and pointing, for instance, to the Polygon Mumbai testnet.

```bash
anvil --fork-url $RPC_URL
```

### Import and connect

Start up `node` in a new terminal and issue the following code which performs the initial setup of loading the `.env` you added in [preparation](./preparation.md), importing the Mangrove SDK, and connecting the SDK to the local node for a specific market.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/de9f479b3bc741b48757b534345a71b67b0417aa/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L1-L19
```

### Generate a minimum distribution

Next, create an instance to manage Kandel strategies (`kandelStrategies`), and load the recommended configuration for the market.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/de9f479b3bc741b48757b534345a71b67b0417aa/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L21-L25
```

With this, you can generate a [distribution](../../kandel/how-does-kandel-work/step-by-step-visual-explanation.md#price-distribution) with the minimum recommended amount of liquidity to avoid %%density|density%% issues by:
* Creating a generator
* Calculating minimums per offer
* Calculating the distribution for the given price parameters of `minPrice: 900`, `maxPrice: 1100`, and default ratio

See the API documentation for [calculateMinimumDistribution](../technical-references/code/classes/KandelDistributionGenerator.md#calculateminimumdistribution) for more details on other `priceParams`. In our example here, `midPrice: 1100` is used to set the [current price](../../kandel/how-does-kandel-work/parameters.md), and decide which offers become bids and which become asks.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/de9f479b3bc741b48757b534345a71b67b0417aa/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L27-L58
```

The last three lines should output something similar to the following (actual volumes may differ due to different configuration for the market):

``` bash
Number of price points: 21
Minimum base volume: 1.91296
Minimum quote volume: 1893.8304
```

> 💡
> The minimums depend on the price; if the price range is changed, then the minimums should be re-checked.


### Generate desired distribution

Based on the minimum volumes we calculated, we can select a desired distribution with volumes above these values. Here we use `3` for base (WETH) and `3000` for quote (USDC).

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/de9f479b3bc741b48757b534345a71b67b0417aa/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L60-L70
```


### Deploy Kandel instance

Now, you can use the `seeder` to [sow](../technical-references/code/classes/KandelSeeder.md#sow) a Kandel instance for a given seed, and retrieve a `kandelInstance` to manage the deployed instance.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/de9f479b3bc741b48757b534345a71b67b0417aa/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L72-L82
```

A brief explanation on the above `seed` parameters:
* `onAave` indicates whether or not the liquidity to be used by Kandel is sitting on AAVE - here, it is not the case (it will be fetched from a wallet)
* `market`: this is the WETH/USDC pair that we previously chose
* `liquiditySharing` indicates whether you are using shared liquidity or not (SDK only, not available via the UI). This refers to the concept [amplified liquidity](../../terms/amplified-liquidity.md).
* `gaspriceFactor`:
    * By using the `recommendedConfig.gaspriceFactor`, we make sure to select the right amount of gas for our Kandel strategy
    * This is also connected to the amount of [bounty](../../terms/bounty.md) to be paid in case of a failure to deliver


### Approve transfers

The `kandelInstance` has functions for approving transfers for the base and quote tokens. This is required for the Kandel strategy to be able to transfer tokens from the wallet when depositing funds.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/de9f479b3bc741b48757b534345a71b67b0417aa/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L84-L89
```

### Populate offers for the distribution

Now that our Kandel instance is deployed, we can [populate the offers](../../kandel/how-does-kandel-work/step-by-step-visual-explanation.md#populating-bids-and-asks) for the distribution.
This will create offers for the base and quote tokens, and deposit the required amounts of tokens into the Kandel instance.

The offers also need a %%provision|provision%%, hence here the default that we are using can be inspected.

> 💡
> The population can span multiple transactions due to gas limits. After this step, the Kandel offers are deployed and are ready to be taken!

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/de9f479b3bc741b48757b534345a71b67b0417aa/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L91-L115
```

### Manage existing Kandel instance

Later on, you can also manage an existing Kandel instance. For example, you might want to inspect the status of your offers. For this, the [farm](../technical-references/code/classes/KandelFarm.md) can be used to retrieve Kandel instances you own based on events from the seeder.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/de9f479b3bc741b48757b534345a71b67b0417aa/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L117-L131
```

### Close Kandel strategy and withdraw funds

At some point, you might want to close your Kandel strategy (for instance due to price movements). This can be easily done with the [retractAndWithdraw](../technical-references/code/classes/KandelInstance.md#retractandwithdraw) function. It will withdraw all funds (both tokens and provision) from the Kandel instance and retract all offers.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/de9f479b3bc741b48757b534345a71b67b0417aa/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L132-L178
```
