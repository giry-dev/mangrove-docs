---
description: Step-by-step visual explanation
sidebar_position: 2
---


# Step-by-step visual explanation

## Setting things up

Before launching your customized Kandel strategy, you will be asked to set specific input parameters. For more information, you can refer to the [Parameters description table](./parameters.md).


## Price distribution

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/price_distribution.PNG')} width="500px"/> <br /><br />

Based on the selected **price range**, the price grid is constructed using a geometric progression. The Min and Max prices of the user inputs are the limits of the grid. 

The increments are calculated using a key metric called **ratio** (of the geometric progression). Kandel starts from the Min price, all the way up to the Max price.
By default, the ratio is 1%. 

In this example, the user selected an ETH/USDC trading pair.


## Volume distribution

<img src={useBaseUrl('img/assets/volume_distribution.PNG')} width="500px"/><br /><br />

Based on the selected amount of initial liquidity to be deposited, Kandel draws the **volume distribution** (i.e. the initial volume at each price point).

In the example of a uniform volume distribution, the user's liquidity is spread evenly throughout the price grid.<br />
For this explanation, we are conveniently using a 1 ETH allocation for each increment.


## Populating Bids and Asks

<img src={useBaseUrl('img/assets/populating_bids_asks.PNG')} width="500px"/><br /><br />

Afterwards, the Kandel strategy contract populates the price grid by posting offers:

* **<font color="#5cd19b">Bids</font>** are posted from min price to mid price (current price)
* **<font color="#eb525a">Asks</font>** are on the other side of the book, from mid price to max price


## Bid is taken

<img src={useBaseUrl('img/assets/bid_is_taken.PNG')} width="500px"/><br /><br />

When a **<font color="#5cd19b">bid</font>** is taken, the Kandel strategy contract sends the corresponding amount of **quote tokens** (USDC) and receives a corresponding amount of **base tokens** (ETH). 


## Reposting liquidity as an Ask

<img src={useBaseUrl('img/assets/reposting_liquidity_as_ask.PNG')} width="500px"/><br /><br />

The received amount of **base tokens** (ETH) is used to post a [dual offer](TO BE ADDED TO GLOSSARY) at a **step size k=1 above**.

Since the volume objective at the relevant index is 1 ETH, all the received liquidity is used to populate corresponding **<font color="#eb525a">ask</font>**. Therefore, no liquidity is transferred to the [unallocated liquidity](./strategy-reserve.md#unallocated-liquidity) reserve.


## Ask is taken

<img src={useBaseUrl('img/assets/ask_is_taken.PNG')} width="500px"/><br /><br />

Inversely to the **<font color="#5cd19b">bid</font>** example, when an ask is taken, the Kandel strategy contract sends the corresponding amount of **base tokens** (ETH) and receives a corresponding amount of **quote tokens** (USDC). 


## Reposting liquidity as an Bid

<img src={useBaseUrl('img/assets/reposting_liquidity_as_bid.PNG')} width="500px"/><br /><br />

The received amount of **quote tokens** (USDC) is used to post a [dual offer](LINK HERE) **step size k=1 below**.

In our example:

* The quantity of quote tokens is 1,300 USDC (we just received 1,300 USDC for sending 1 ETH through our **<font color="#eb525a">ask</font>**)
* The [compounding rate](LINK HERE) **is set at 0% for quote** (USDC)

Therefore, here 100% of the spread (or 13 USDC) is set aside into the [unallocated liquidity](./strategy-reserve.md#unallocated-liquidity) reserve. The remaining amount of 1,287 USDC is used to populate a **<font color="#5cd19b">bid</font>** at a **step size k=1 below**.

_Calculation: 1,300 USDC - 1,287 USDC = 13 USDC_


## Another Ask is taken

<img src={useBaseUrl('img/assets/another_ask_is_taken.PNG')} width="500px"/><br /><br />

When another **<font color="#eb525a">ask</font>** is taken, once again Kandel sends the corresponding amount of **base tokens** (ETH) and receives a corresponding amount of **quote tokens** (USDC). 

## Reposting liquidity as a Bid #2

<img src={useBaseUrl('img/assets/reposting_liquidity_as_bid_2.PNG')} width="500px"/><br /><br />

Similarly to our previous **<font color="#5cd19b">bid</font>**, the received amount of **quote tokens** (USDC) is used to post a dual offer **step size k=1 below**.

If an **<font color="#eb525a">ask</font>** was to be taken next, the profit from the spread will be added to the [unallocated liquidity](./strategy-reserve.md#unallocated-liquidity)reserve.
