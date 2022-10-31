---
description: The most simple liquidity providing strategy, no offer logic, just a Wallet.
---

# On-the-fly offer

{% hint style="info" %}
An [**On-the-fly offer** (OTF)](../../glossary.md#on-the-fly-offer-otf) can be listed on Mangrove but is not equipped with any on-chain [logic](../explanations/offer-maker/#executing-offers) that executes when the offer is taken. Whenever it is matched by a [taker order](../explanations/offer-taker.md#taking-offers), the offer sources its liquidity on an [Externally Owned Account (EOA)](../../glossary.md#externally-owned-account-eoa).
{% endhint %}

## How to post one?

To post an OTF you need to

1. tell Mangrove you wish to post a new offer,
2. sign the resulting transaction with the wallet (EOA) that contains the promised liquidity.

Here is an example using [Mangrove's JS API](https://github.com/mangrovedao/mangrove/tree/master/packages/mangrove.js). Follow [preparation](./preparation.md) (once) and start a fresh `node` in a shell and run the following statements.

{% code title="directOffer.js" %}

```javascript
// Load the NODE_URL and PRIVATE_KEY from .env file into process.env
// This script assumes NODE_URL points to your access point and PRIVATE_KEY contains private key from which one wishes to post offers
var parsed = require("dotenv").config();
// Import the Mangrove API
const { Mangrove, ethers } = require("@mangrovedao/mangrove.js");

// Create a wallet with a provider to interact with the chain.
const provider = new ethers.providers.WebSocketProvider(
  process.env.NODE_URL
);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Connect the API to Mangrove
const mgv = await Mangrove.connect({ signer: wallet });

// Connect mgv to a DAI, USDC market
const market = await mgv.market({ base: "DAI", quote: "USDC" });

// Check it's live, should display the best bids and asks of the DAI, USDC market
market.consoleAsks();
market.consoleBids();

// Create a simple liquidity provider on `market`, using `wallet` as a source of liquidity
const directLP = await mgv.liquidityProvider(market);

// Liquidity provider needs to approve Mangrove for transfer of base token (DAI) which
// will be transferred from the wallet to Mangrove and then to the taker when the offer is taken.
const tx = await directLP.approveAsks();
await tx.wait();

// Query mangrove to know the bounty for posting a new Ask on `market`
const provision = await directLP.computeAskProvision();

// Post a new ask (offering 105 DAI for 104 USDC) at a price of 150/104~=1.0096
// Consider looking at the consoleAsks above and increase gives such that the offer becomes visible in this list
const { id: offerId } = await directLP.newAsk({ wants: 105, gives: 104, fund: provision });

// Check the order was posted (or look at https://testnet.mangrove.exchange.
market.consoleAsks();

```

{% endcode %}
