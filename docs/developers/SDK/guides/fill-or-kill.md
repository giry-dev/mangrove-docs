---
description: Create Fill or Kill order using mangrove.js
sidebar_position: 3
---

# Use Fill or Kill

## Intro

This section will go through how to create a Fill or Kill ([FOK](https://www.investopedia.com/terms/f/fok.asp)) order using mangrove.js.

We assume you know how to connect to Mangrove. We are going to be buying 2000 USDC at a maximum avg. price of 1.3. It is a requirement for this script to have enough USDT. If you do not have enough USDT, you can use a testnet and mint some USDT. This can either be done by going to our [dApp](https://testnet.mangrove.exchange/faucet) or by minting directly in the [script](https://github.com/mangrovedao/mangrove.js/blob/fe81bcf5a59021131ccffc191737748bfdbfc619/examples/how-tos/fill-or-kill.js) (see the commented lines in the script about minting).

### Approvals

After having connected to Mangrove, we then have to make sure that we have the correct approvals for transferring our USDT tokens. When approving for transfers we have to determine what contract is going to make the actual transfers. If we were to use the normal [`buy`](../technical-references/code/classes/Market#-buy) function for a market, we would be using the Mangrove protocol, to make a standard [market order](../../protocol/technical-references/market-order/README.md). This would mean that we would have to approve Mangrove to make transfers of USDT on our behalf.

In this case we are not going to be using the Mangrove protocol directly. Instead, we are going to be using a different contract, provided by the [Mangrove strat lib](../../strat-lib/README.md) - the [MangroveOrder](../../strat-lib/technical-references/code/strats/src/strategies/MangroveOrder) contract. This contract makes it possible to make a real FoK order and not just a normal market order. This means that we need to approve the MangroveOrder contract to handle all our USDT transfers. For this guide, we will just call approve directly on the USDT token, with the `MangroveOrder` contract as spender. 

```js reference
https://github.com/mangrovedao/mangrove.js/blob/fe81bcf5a59021131ccffc191737748bfdbfc619/examples/how-tos/fill-or-kill.js#L32-L34
```

### Buying with MangroveOrder

We are now ready to buy some USDC using a FoK order. It is very simple to do. Using the same method as for a market order (`buy`), we just give it an extra parameter `fillOrKill` which we set to true. This way we use the [MangroveOrder](../../strat-lib/technical-references/code/strats/src/strategies/MangroveOrder) contract to buy.

```js reference
https://github.com/mangrovedao/mangrove.js/blob/fe81bcf5a59021131ccffc191737748bfdbfc619/examples/how-tos/fill-or-kill.js#L36-L44
```

Here we show logs asks for the market before buying and after buying, you will see that the first 3 offers were taken. Offers 1669, 3344 and 1157 were all taken. But when we look at the result of the Fill or Kill order, we see that we got a %%bounty|bounty%%. This means that one of the offers failed and we got a bounty for making the offer fail.

<!-- TODO: add info when we have a decent result, e.g. when the arrays for success and failure aren't empty and the user can actually see what offers failed and what offers succeeded, see this issue https://github.com/mangrovedao/mangrove.js/issues/862 -->

<!-- TODO: We should have a section where the FoK order fails, do to not being able to complete the order fully. "noPartialFill". After this issue, https://github.com/mangrovedao/mangrove.js/issues/862, has been fixed, this section can reasonably be added (as we then have better return value). -->

```js title="Asks before Fill or Kill order"
> market.consoleAsks();
┌─────────┬──────┬──────────────────────────────────────────────┬────────────────────┬────────────────────────┐
│ (index) │  id  │                    maker                     │       volume       │         price          │
├─────────┼──────┼──────────────────────────────────────────────┼────────────────────┼────────────────────────┤
│    0    │ 1669 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 1376.6273438550415 │ 1.00346478817687987934 │
│    1    │ 3344 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 1622.836373407379  │ 1.00346894837019272508 │
│    2    │ 1157 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 1163.3709308116254 │ 1.0034723140155791771  │
│    3    │ 4214 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 1227.0562038171438 │  1.003482667028260286  │
│    4    │ 930  │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 1486.735792592364  │ 1.00348572922872847571 │
│    5    │ 3837 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 1458.6523528414643 │ 1.00348711133850858816 │
│    6    │ 2721 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 629.9748527543823  │ 1.00348954285398244855 │
│    7    │ 2668 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 1504.307740487991  │ 1.00349288205504048327 │
```

```bash title="Result of Fill or Kill order"
  summary: {
    got: 2000,
    gave: 2006.934268,
    partialFill: false,
    bounty: 0.000426,
    feePaid: 0
  },
  successes: [],
```

```js title="Asks after fill or kill order"
> market.consoleAsks()
┌─────────┬──────┬──────────────────────────────────────────────┬────────────────────┬────────────────────────┐
│ (index) │  id  │                    maker                     │       volume       │         price          │
├─────────┼──────┼──────────────────────────────────────────────┼────────────────────┼────────────────────────┤
│    0    │ 4214 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 1227.0562038171438 │  1.003482667028260286  │
│    1    │ 930  │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 1486.735792592364  │ 1.00348572922872847571 │
│    2    │ 3837 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 1458.6523528414643 │ 1.00348711133850858816 │
│    3    │ 2721 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 629.9748527543823  │ 1.00348954285398244855 │
```
