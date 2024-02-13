---
description: Create a strategy
sidebar_position: 2
---

# Create a strategy

## Create a strategy

import useBaseUrl from '@docusaurus/useBaseUrl';

1. Click on the "Create strategy" button on the "Strategies" tab and accept the Terms and Conditions after reading them.

<img src={useBaseUrl('img/assets/create_strat.png')} width="500px"/>

2. Select a market and click on "Next."

3. Choose a strategy type between "Kandel" and "Kandel on AAVE".
    * [Kandel](../../kandel/README.md) is an automated market-making strategy that utilizes a reserve to place buy and sell orders on Mangrove DEX
    * [Kandel on AAVE](../../kandel/kandel-aave/kandel-aave.md) is essentially the same as the Kandel strategy, but it also earns extra yield by depositing the reserve on the AAVE platform until the liquidity is needed to fulfill a trade.

## Strategy parameters

:::info note
Average return: the average monthly return of kandels for this market.
:::

:::info Note
Risk appetite:
* Low: corresponds to a low volatily pair (ex: stable/stable, such as USDC/USDT)
* Medium: corresponds to a medium volatily pair (ex: volatile/stable, such as WBTC/USDT)
* High: corresponds to a high volatily pair (ex: volatile/volatile, such as WBTC/WMATIC)
:::
<br />

4. Determine your desired price range by dragging the limits on the market depth chart, setting the minimum and maximum price values, or using the percentage inputs. The market depth chart displayed on the strategy page allows you to see the real-time buy (<font color="#5cd19b">Bids</font>) and sell (<font color="#eb525a">Asks</font>) offers on the Mangrove DEX for a given market.

<img src={useBaseUrl('img/assets/strat_parameters_1.png')} width="100%"/>
<br /><br />

5. Choose your initial inventory for both tokens.

> 💡
> Use the "Update" button to automatically set the minimum recommended amounts.

<img src={useBaseUrl('img/assets/strat_parameters_3.png')} width="350px"/>
<br /><br />

6. Choose the settings of your new Kandel strategy:
    * Number of price points
    * Ratio
    * Step size

> 💡
> More information in the [Kandel documentation](../../kandel/how-does-kandel-work/parameters.md).

<img src={useBaseUrl('img/assets/strat_parameters_2.png')} width="350px"/>
<br /><br />

7. Choose a [bounty](/docs/developers/terms/bounty.md) amount. More information in the [dedicated section](../../kandel/how-does-kandel-work/parameters.md) about Kandel parameters.

8. Click on "Summary".

## Deployment

### Step 1 - Summary

9. Carefully review your strategy parameters:
    * If you want to edit them, close the pop-up or click away from it to go back to the strategy creation page
    * If you're ready to launch, click on "Proceed"

<br />
<img src={useBaseUrl('img/assets/strategy_step1.png')} width="400px"/>
<br />

### Step 2 - Approve token spending

10. Click "Approve" to trigger the signing of 3 transactions in a row (including the deployment of your Kandel contract, the spending approvals of your pair's tokens).

> 💡
> When signing on Metmamask, select "Use default" to set the appropriate amount of Approval.

<br />
<img src={useBaseUrl('img/assets/strategy_step2.png')} width="400px"/>
<br />

### Step 3 - Deposit

11. Click "Proceed" to deposit the native token amount ([bounty](../../../developers/glossary.md#bounty)) into the strategy. You will be signing one last transaction with your wallet.

<br />
<img src={useBaseUrl('img/assets/strategy_step3.png')} width="400px"/>
<br /><br />

12. Select on 'View strategy' to manage your strategy, or click 'Close' to go back to the Strategies page.

<br />
Congratulations!<br />
Your Kandel strategy is now live and ready to start publishing buy and sell orders on the Mangrove order book.
