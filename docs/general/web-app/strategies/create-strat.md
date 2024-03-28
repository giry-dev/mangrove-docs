---
description: Create a strategy
sidebar_position: 2
---

# Create a strategy

import useBaseUrl from '@docusaurus/useBaseUrl';

1. Click on the "Create strategy" button on the "Strategies" tab and accept the Terms and Conditions after reading them.

<!-- TODO: Change this image -->
<img src={useBaseUrl('img/assets/create_strat.png')} width="500px"/>

2. Select a market and click on "Next."

## Strategy parameters

:::info Note
Risk appetite:
* Low: corresponds to a low volatily pair (ex: stable/stable, such as USDC/USDT)
* Medium: corresponds to a medium volatily pair (ex: volatile/stable, such as WBTC/USDT)
* High: corresponds to a high volatily pair (ex: volatile/volatile, such as WBTC/WMATIC)
:::
<br />

3. Determine your desired price range by dragging the limits on the market depth chart, setting the minimum and maximum price values, or using the percentage inputs. The market depth chart displayed on the strategy page allows you to see the real-time buy (<font color="#5cd19b">Bids</font>) and sell (<font color="#eb525a">Asks</font>) offers on the Mangrove DEX for a given market.

<img src={useBaseUrl('img/assets/strat_parameters_1.png')} width="100%"/>
<br /><br />

4. Choose your initial inventory for both tokens.

> 💡
> Use the "Update" button to automatically set the minimum recommended amounts.

<img src={useBaseUrl('img/assets/strat_parameters_3.png')} width="350px"/>
<br /><br />

5. Choose the settings of your new Kandel strategy:
    * Number of price points
    * Step size

> 💡
> More information in the [Kandel documentation](../../kandel/how-does-kandel-work/parameters.md).

<img src={useBaseUrl('img/assets/strat_parameters_2.png')} width="350px"/>
<br /><br />

6. Choose a [bounty](/docs/developers/terms/bounty.md) amount. More information in the [dedicated section](../../kandel/how-does-kandel-work/parameters.md) about Kandel parameters.

<img src={useBaseUrl('img/assets/strat_parameters_5.png')} width="350px"/>
<br /><br />

7. Click on "Summary".

## Deployment

### Step 1 - Summary

Carefully review your strategy parameters:
* If you want to edit them, close the pop-up or click away from it to go back to the strategy creation page
* If you're ready to launch, click on "Proceed"

<br />
<img src={useBaseUrl('img/assets/strategy_step1.png')} width="400px"/>
<br />

### Step 2 - Create strategy instance

Each time you deploy a Kandel strategy, you are required to allow Mangrove to create a kandel instance on your behalf. Click on "Create kandel instance" to proceed.

<br />
<img src={useBaseUrl('img/assets/strategy_step4.png')} width="400px"/>
<br />

### Step 3 - Activate router

In order to leverage restaking of your liquidity, you first need to activate the liquidity sourcing router. Currently only sourcing from your wallet is available, but more liquidity sources will be added in the future.

<br />
<img src={useBaseUrl('img/assets/strategy_step5.png')} width="400px"/>
<br />

### Step 4 - Approve token spending

If you have never used limit orders, amplified orders, or deployed a Kandel strategy on the selected market, you will be required to approve an allowance of the tokens involved in the strategy.

Click "Approve" to trigger the signing of 3 transactions in a row (including the deployment of your Kandel contract, the spending approvals of your pair's tokens).

> 💡
> When signing on your wallet, select "Use default" to set the appropriate amount of Approval.


### Step 5 - Launch strategy

Click "Proceed" to launch your strategy.

<br />
<img src={useBaseUrl('img/assets/strategy_step3.png')} width="400px"/>
<br /><br />

<br />

Congratulations!<br />
Your Kandel strategy is now live and ready to start publishing buy and sell orders on the Mangrove order book.
