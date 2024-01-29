---
sidebar_position: 0
---

# SDK Introduction

:::info **Overrides**

All API functions that produce a signed transaction can be equipped with the usual `ethers.js` overrides as optional parameters.

:::

## Mangrove

The root class of the API. Use `Mangrove.connect` to get an instance of it. Here are a few possibilities:

```typescript
mgv = await Mangrove.connect(window.ethereum); // web browser
mgv = await Mangrove.connect('http://127.0.0.1:8545'); // HTTP provider
mgv = await Mangrove.connect(); // Uses Ethers.js fallback mainnet (for testing only)
mgv = await Mangrove.connect('rinkeby'); // Uses Ethers.js fallback (for testing only)
// Init with private key (server side)
mgv = await Mangrove.connect(
'https://mainnet.infura.io/v3/_your_project_id_', // provider
{
  privateKey: '0x_your_private_key_', // preferably with environment variable
});
// Init with HD mnemonic (server side)
mgv = await Mangrove.connect( {
  signer: myEthersWallet
});
```

You can test you are indeed connected to the [deployed Mangrove](../../addresses/contract-addresses.md) by asking for the current global configuration of Mangrove:

`config = await mgv.config()`

The `mgv` object gives you access to a variety of useful properties, such as `Token`, `Market` and `OfferLogic` (allowing one to connect to an on-chain offer logic).

:::info

`mgv.contract` gives access to the underlying `ethers.js` contract object, and allows you to interact with the deployed `Mangrove` using low-level `ethers.js` calls. Hence, 

```typescript
await mgv.contract.f(...)
```

will execute the `ethers.js` call to the function `f` on the Mangrove contract (signed when needed by the `signer` provided to the `connect` function).

:::

## Token

This class provides easy means to interact with a deployed contract on the standard [EIP-20](https://eips.ethereum.org/EIPS/eip-20). To obtain an instance use:

```typescript
tkn = await mgv.token("<symbolOrId>"); // e.g "DAI", "WETH", "amDAI", etc.
```

using the symbol or id's defined for ERC-20's in the Mangrove `context-addresses` repo. The relevant specifications are in [`ERC-20.json`](https://github.com/mangrovedao/context-addresses/blob/master/src/assets/ERC-20.json)). This is also the source of the token addresses given here: [Token addresses](../../addresses/contract-addresses#token-addresses).

A token object can also be obtained directly via an address:

```typescript
tkn = await mgv.tokenFromAddress("<tokenAddress>");
```

With this `tkn` object you have access to standard calls using human readable input/outputs. For instance:

```typescript
await tkn.approve("<spender>"); // gives infinite approval to spender
await tkn.approve("<spender>",0.5); // gives allowance to spend 0.5 token units to spender
await tkn.contract.approve("<spender>", tkn.toUnits(0.5)); // ethers.js call
```

Note that Mangrove's API deals with token decimals automatically (using the definitions given in the `context-addresses` repo).

:::info

`Token.contract` gives access to the `ethers.js` contract allowing one to interact with the deployed contract using low level calls (for instance if the token has functions that are do not belong to the ERC20 standard).

:::

## Market

The `Market` class is an abstraction layer to interact with Mangrove markets. 

Working as a liquidity taker, it provides access standard market [buy and sell orders](../guides/sell-and-buy-orders.md). The `Market` methods also provides access, through the `buy` and `sell` methods, to post and interact with markets providing liquidity through resting orders. Please refer to the documentation for the [TradeParams](./code/namespaces/Market-1#tradeparams) parameter of the [buy](./code/classes/Market#-buy) and [sell](./code/classes/Market#-sell) methods, for more details.

To obtain an instance of `Market` use:

```typescript
//connect to a (base,quote) market with default options
mgvMarket = await mgv.market({base:"<symbolOrId> | Token", quote:"<symbolOrId> | Token", tickSpacing: number});

// connect to the market, caching at least the specified number of ticks
mgvMarket = await mgv.market({base:"<symbolOrId> | Token", quote:"<symbolOrId> | Token", tickSpacing: number, targetNumberOfTicks: 50});
```

where %%tickSpacing|tickSpacing%% is defined as explained on the page about [Ticks, ratios, and prices](../../protocol/technical-references/tick-ratio#tickspacing-markets-with-bigger-price-increments) for the core Mangrove protocol.

:::info

Upon connection to a market, the API subscribes to events emanating from Mangrove in order to maintain a local cache of the order book. One may increase the size of the cache by using `mgv.market({..., targetNumberOfTicks:<number of ticks to cache>})`. It is guaranteed that if at least one offer with a tick is in the cache, then all offers with that tick are in the cache. For more on ticks, please refer to the page on [Ticks, ratios, and prices](../../protocol/technical-references/tick-ratio).

:::

For debugging purpose, the class provides a console of the current state of bids and asks posted on Mangrove. For instance to display the bid offers on Mangrove on this market:

```typescript
// Pretty prints to console the bid offers, showing offer `id`, offer `gives` and offer `price`
await mgvMarket.consoleAsks(["id", "gives", "price"]);
```

`Market` instances allow one to subscribe to markets events using:

```javascript
const f (event) => ...; // what you want to do when receiving the event 
mgvMarket.subscribe(f);
```

To unsubscribe `f` from market events simply use `mgvMarket.unsubscribe(f)`.

Market events are records that contain a wealth of information about what happens on the subscribed Mangrove market. Important examples are:

* `OfferWrite` with key fields: `{olKeyHash: string, maker: string, tick: BigNumber, gives: BigNumber, gasprice: BigNumber,   gasreq: BigNumber, id: BigNumber}` - this is sent when a bid or ask offer is added to the book (or updated)
* `OfferFail` with key fields: `ba:'asks'|'bids', olKeyHash:string, taker:string, id: BigNumber, takerWants:BigNumber, takerGives:BigNumber, penalty:BigNumber, mgvData:string}` - this is sent when an offer with id: `id` failed to deliver. Note that `mgvData` is a bytes32 string encoding of the failure reason recorded by Mangrove.
* `OfferSuccess` with key fields: `olKeyHash: string, taker: string, id: BigNumber, takerWants:Big, takerGives:Big}` - this is sent when the offer with id: `id` was successfully executed (possibly on a partial fill whenever `offer.gives`>`takerWants`).

There are more events - see [BookSubscriptionEvent](./code/namespaces/Market-1#-booksubscriptionevent) for the reference for events emitted by a Mangrove market.


