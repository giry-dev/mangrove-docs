---
description: Create a strategy
sidebar_position: 2
---


# Create a strategy


## Step 1/3 - Create strategy

import useBaseUrl from '@docusaurus/useBaseUrl';

1. Click on the "New Strategy" button on the "Your Strategies" tab and accept the Terms and Conditions after reading them.

<img src={useBaseUrl('img/assets/create_strat.png')} width="70%"/>

2. Choose a strategy type between "Kandel" and "Kandel on AAVE".
    * [Kandel](../../kandel/README.md) is an automated market-making strategy that utilizes a reserve to place buy and sell orders on Mangrove DEX
    * [Kandel on AAVE](../../kandel/details-on-strats/#kandel-on-aave) is essentially the same as the Kandel strategy, but it also earns extra yield by depositing the reserve on the AAVE platform until the liquidity is needed to fulfill a trade.
    
3. Choose a market and click on "Next."

## Step 2/3 - Strategy parameters

:::info
Average return: the average monthly return of kandels for this market
:::
:::info
Risk appetite:
* Low: corresponds to a low volatily pair (ex: stable/stable, such as USDC/USDT)
* Medium: corresponds to a medium volatily pair (ex: volatile/stable, such as WBTC/USDT)
* High: corresponds to a high volatily pair (ex: volatile/volatile, such as WBTC/WMATIC)
:::
<br />

4. Determine your desired price range by dragging the limits on the market depth chart, setting the minimum and maximum price values, or using the percentage inputs. The market depth chart displayed on the strategy page allows you to see the real-time buy (<font color="#5cd19b">Bids</font>) and sell (<font color="#eb525a">Asks</font>) offers on the Mangrove DEX for a given market.

<img src={useBaseUrl('img/assets/strat_parameters_1.png')} width="70%"/>
<br /><br />

5. Choose the settings of your new Kandel strategy:
    * Number of price points
    * Ratio
    * Step size

> 💡
> More information in the [Kandel documentation](../../kandel/how-does-kandel-work/parameters.md).

<img src={useBaseUrl('img/assets/strat_parameters_2.png')} width="70%"/>
<br /><br />

6. Choose your initial inventory for both tokens.

> 💡
> Use the "Update amount" button to automatically set the minimum recommended amounts.

<img src={useBaseUrl('img/assets/strat_parameters_3.png')} width="70%"/>
<br />

7. Choose a bounty amount.

8. Click on "Review Strategy".


## Step 3/3 - Review strategy

9. Check your strategy parameters carefully:
    * If you want to edit them, click on "Back"
    * If you're ready to launch, click on "Launch strategy"

<br />
<img src={useBaseUrl('img/assets/strat_parameters_4.png')} width="70%"/>
<br />

10. "Waiting for confirmation": you will be asked to sign 4 transactions in a row, including the deployment of your Kandel contract, the spending approvals of your pair's tokens, and the native token amount to be deposited for [bounty](../../developers/glossary.md#bounty).
> 💡
> when signing on Metmamask, select "Use default" to set the appropriate amount of Approval.

11. Select on 'View strategy' to manage your strategy, or click 'Done' to go back to the Strategies page.

<br />
Congratulations!<br />
Your Kandel strategy is now live and ready to start publishing buy and sell orders on the Mangrove order book.
