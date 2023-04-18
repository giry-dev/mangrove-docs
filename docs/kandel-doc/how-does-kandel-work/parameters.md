---
description: Parameters
sidebar_position: 3
---


# Parameters

This section describes Kandel's parameters. For more contextual information, head over to the [visual explanation](./step-by-step-visual-explanation.md).

<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Pair</td>
    <td>The pair represents the chosen market on which a Kandel strategy is running.<br /><br />
    <i>Example: ETH/USDC is a trading pair</i></td>
  </tr>
  <tr>
    <td>Price range</td>
    <td>The price range is needed to run any market-making strategy. It consists of the lowest and highest prices in the price grid at which Kandel instance posts its bids and asks.<br /><br />
    <i>Example of a price range:<br />
        <li>Lowest price = 1000 USDC per ETH</li>
        <li>Highest price = 1500 USDC per ETH</li></i></td>
  </tr>
  <tr>
    <td>Initial inventory</td>
    <td>The initial inventory is the amount of base tokens and quote tokens that must be deposited into the strategy. The minimum to be deposited into the strategy depends on the selected price range and %%density|density%% of the selected market.<br /><br />
    <i>Example on the ETH/USDC pair:<br />
        <li>Base token is ETH</li>
        <li>Quote token is USDC</li></i></td>
  </tr>
  <tr>
    <td>Current price</td>
    <td>The current price of the base token is used for constructing the price distribution.<br /><br />
     <i>Example: the price of USDC is used for the ETH/USDC pair</i></td>
  </tr>
  <tr>
    <td>Price distribution</td>
    <td>It is a distribution of price levels/grid points within a selected price range. Kandel starts from the <i>Min price</i>, all the way up to the <i>Max price</i>.
        It is calculated using geometric progression and a key metric called "ratio": <br /><br />
     <i>Price at index i = min_price * ratio ^i</i></td>
  </tr>
  <tr>
    <td>Volume distribution</td>
    <td>It defines how liquidity is spread throughout the price grid (previously defined as the price distribution in the <a href="./step-by-step-visual-explanation">visual step-by-step</a>).</td>
  </tr>
  <tr>
    <td>Step size</td>
    <td>It is the distance between an executed bid/ask and its dual offer.
    In the case of an offer is taken at price p :<br />
        <li>Lowest price = 1000 USDC per ETH</li>
        <li>Highest price = 1500 USDC per ETH</li><br />
    <i>Example: if step size=1, it means that if a bid is taken at an index i, the ask ([dual offer](LINK TO GLOSSARY)) is posted at an index i+1</i></td>
  </tr>
  <tr>
    <td><a href="../../terms/bounty">Bounty</a></td>
    <td>It is the required amount of native tokens to be deposited into the strategy. The <a href="../../terms/bounty">bounty</a> is required to post an offer on Mangrove; native tokens are used to cover failing offers.<br /><br />
    It covers the whole price grid, hence:<br />
    <li>Kandel bounty = bounty per offer * number of offers</li><br />
    <i>Example: if the selected pair is on the Polygon network, the native token provision would be an amount of MATIC tokens.</i></td>
  </tr>
  <tr>
    <td>Compounding rate</td>
    <td>Compounding rate is the percentage of the spread to be reinvested into the strategy.<br />
    More information on compounding <a href="./compounding">in the next section</a>.</td>
  </tr>
</table>