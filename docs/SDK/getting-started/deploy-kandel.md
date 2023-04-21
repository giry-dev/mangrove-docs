---
description: Deploy Kandel - an Automated Market Making strategy
sidebar_position: 2
---

# Deploy Kandel strategy

This tutorial covers how to deploy a Kandel strategy. For more information about Kandel, see [user documentation](../../kandel-doc/README.md).

## Prerequisites

The tutorial assumes knowledge of JavaScript. Follow [preparation](./preparation.md) to create a new `tutorial` folder.

Make sure to use a chain where Mangrove is live. You can find all live addresses for Mangrove [here](../../contracts/technical-references/contract-addresses.md)

For a more simple tutorial to get acquainted with Mangrove, we recommend [Deploy a simple offer](./basic-offer.md).

### Start local node

Before proceeding, import the environment variables made as part of the preparation

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
https://github.com/mangrovedao/mangrove-ts/blob/f1c2c2b159215e068034e1bc0707b9871d185326/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L1-L19
```

### Generate a minimum distribution

Next, create an instance to manage Kandel strategies (`kandelStrategies`), and load the recommended configuration for the market.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/f1c2c2b159215e068034e1bc0707b9871d185326/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L21-L25
```

With this you can generate a distribution with the minimum recommended amount of liquidity to avoid %%density|density%% issues by creating a generator, calculating minimums per offer, and then calculating the distribution for the given price parameters of `minPrice: 900`, `maxPrice: 1100`, and default ratio. See the API documentation for [calculateMinimumDistribution](../technical-references/code/classes/KandelDistributionGenerator.md#calculateminimumdistribution) for additional details on for instance other `priceParams`. The `midPrice: 1100` is used to decide which offers become bids and which become asks.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/f1c2c2b159215e068034e1bc0707b9871d185326/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L26-L58
```

The last three lines should output something similar to the following (actual volumes may differ due to different configuration for the market):

``` bash
Number of price points: 21
Minimum base volume: 1.91296
Minimum quote volume: 1893.8304
```

Note that the minimums depend on the price, so if the price range is changed, then the minimums should be re-checked.

### Generate desired distribution

Based on the minimum volumes we can select a desired distribution with volumes above these minimums. Here we use `3` for base and `3000` for quote.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/f1c2c2b159215e068034e1bc0707b9871d185326/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L60-L70
```

### Deploy Kandel instance

Now, use the `seeder` to [sow](../technical-references/code/classes/KandelSeeder.md#sow) a Kandel instance for a given seed, and retrieve a `kandelInstance` to manage the deployed instance.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/f1c2c2b159215e068034e1bc0707b9871d185326/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L72-L82
```

### Approve transfers

The `kandelInstance` has functions for approving transfers for the base and quote tokens. This is required for the Kandel strategy to be able to transfer tokens from the wallet when depositing funds.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/f1c2c2b159215e068034e1bc0707b9871d185326/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L84-L89
```

### Populate offers for the distribution

Given the deployed Kandel instance, we can populate the offers for the distribution. This will create offers for the base and quote tokens, and deposit the required amounts of tokens into the Kandel instance. The offers need %%provision|provision%% and here the default is used and inspected. Note that the population can span multiple transactions due to gas limits. After this step the Kandel offers are deployed and can be taken.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/f1c2c2b159215e068034e1bc0707b9871d185326/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L91-L117
```

### Manage existing Kandel instance

At some later time you can also manage an existing Kandel instance, for instance to inspect the status of offers. For this the [farm](../technical-references/code/classes/KandelFarm.md) can be used to retrieve owned Kandel instances based on events from the seeder.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/f1c2c2b159215e068034e1bc0707b9871d185326/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L119-L133
```

### Close Kandel strategy and withdraw funds

At some point the Kandel instance will be closed (for instance due to price movements) and this can be easily done with the [retractAndWithdraw](../technical-references/code/classes/KandelInstance.md#retractandwithdraw) function. This will withdraw all funds (both tokens and provision) from the Kandel instance and retract all offers.

```javascript reference

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/f1c2c2b159215e068034e1bc0707b9871d185326/packages/mangrove.js/examples/tutorials/deploy-kandel.js#L135-L180
```
