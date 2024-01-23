---
description: The most simple liquidity providing strategy, no offer logic, just a Wallet.
sidebar_position: 2
---

# Post a simple offer

Posting a simple offer is also referred to as an %%on-the-fly offer|on-the-fly-offer%%.

## Prerequisites

The tutorial assumes knowledge of JavaScript. Follow [preparation](./preparation.md) to create a new `tutorial` folder.

Make sure to use a chain where Mangrove is live. You can find all live addresses for Mangrove [here](../../addresses/contract-addresses.md).

:::info

When running the tutorial be aware that some of the script calls the chain and it can therefore take a few seconds before the transaction is completed.

:::

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

Start up `node` in a new terminal and issue the following code which performs the following steps:

1. The first thing needed is to import `dotenv`, this handles the `.env` file you added in the [preparation](./preparation.md).
2. Then import both `Mangrove` and `ethers` from the Mangrove package. `ethers` will allow you to connect to a node and your wallet. `Mangrove` will allow you to connect to the Mangrove protocol.
3. We connect to a local `anvil` node through `LOCAL_URL`. In order to connect to a real chain can replace `LOCAL_URL` with `RPC_URL`.
4. The `PRIVATE_KEY` is needed in order to connect to your wallet.
5. Once you have connected your wallet, you can connect to the Mangrove protocol using your wallet.

```javascript reference
https://github.com/mangrovedao/mangrove.js/blob/19a856720d39a124ae8e1e47b2685002bd87f9ff/examples/tutorials/on-the-fly-offer.js#L1-L12
```

### Check existing market

Next you need to connect to a market, in order to see the existing offers. This way you can figure out at what price you want to post your offer.

1. Connect to the market using `mgv.market`, with a base and a quote.
2. Console log asks. This outputs table of the 50 best asks.
3. Console log bids. This outputs table of the 50 best bids.

```javascript reference
https://github.com/mangrovedao/mangrove.js/blob/19a856720d39a124ae8e1e47b2685002bd87f9ff/examples/tutorials/on-the-fly-offer.js#L14-L23
```

``` bash
┌─────────┬──────┬──────────────────────────────────────────────┬────────────────────┬────────────────────────┐
│ (index) │  id  │                    maker                     │       volume       │         price          │
├─────────┼──────┼──────────────────────────────────────────────┼────────────────────┼────────────────────────┤
│    0    │ 2774 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 1317.1775894557795 │ 1.00337113885004310077 │
│    1    │ 3299 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 1308.2741138999688 │ 1.00337482875577922516 │
│    2    │ 1829 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 50.674948479792484 │ 1.00337923422410191358 │
│    3    │ 598  │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 561.6921678391515  │ 1.00337932460078748916 │
│    4    │ 5026 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 189.47603337984367 │ 1.00338137023837699789 │
...
```

### Post new offer

After having looked at the market you now know what the prices are and you can now post an offer at a better price, so that the offer will be on top of the book.

1. First create a [`LiquidityProvider`](../technical-references/code/classes/LiquidityProvider). This allows for posting new offers.
2. Then you need to approve your account/wallet. To make sure that the transaction has been made, we do `await tx.wait()`.
3. Then you need to calculate how much %%provision|provision%% is needed.
4. You can then post an offer using, in this case `wants: 100.5` and `gives:100.4`, which gives a price of $$100.5/100.4\approx1.00099$$. And since you saw that the best price was $$\approx1.003$$ you know our offer will be at the top of the list.

```javascript reference
https://github.com/mangrovedao/mangrove.js/blob/19a856720d39a124ae8e1e47b2685002bd87f9ff/examples/tutorials/on-the-fly-offer.js#L25-L42
```

### Check market after new offer

We can then check if our offer has best been posted and is on the top of the list, as excepted.

1. First log the `offerId` in order to makes sure, you know what offer is yours.
2. Then log the asks for the market. You will then see that your offer is on top of the list.

```javascript reference
https://github.com/mangrovedao/mangrove.js/blob/19a856720d39a124ae8e1e47b2685002bd87f9ff/examples/tutorials/on-the-fly-offer.js#L44-L46
```

```js
> console.log(offerId);
5571
undefined
> market.consoleAsks();
┌─────────┬──────┬──────────────────────────────────────────────┬────────────────────┬────────────────────────┐
│ (index) │  id  │                    maker                     │       volume       │         price          │
├─────────┼──────┼──────────────────────────────────────────────┼────────────────────┼────────────────────────┤
│    0    │ 5571 │ '0xA4C7c59EB3D4Ab5CA4E6fB012CeD9c8F9A5Ecdd8' │       100.4        │ 1.00099601593625498008 │
│    1    │ 2774 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 1317.1775894557795 │ 1.00337113885004310077 │
│    2    │ 3299 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 1308.2741138999688 │ 1.00337482875577922516 │
│    3    │ 1829 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 50.674948479792484 │ 1.00337923422410191358 │
```

Another way to check your offer is to go to [testnet](https://testnet.mangrove.exchange/trade) and look at the asks for the pair. Here you will be able to see your offer. This can only be done if you didn't use a local chain, but actually ran on a real chain.

import useBaseUrl from '@docusaurus/useBaseUrl';

The full script can be found on [github](https://github.com/mangrovedao/mangrove.js/blob/19a856720d39a124ae8e1e47b2685002bd87f9ff/examples/tutorials/on-the-fly-offer.js).
