---
sidebar_position: 1
---

# Run a simple cleaning bot
In this tutorial you'll download, configure, and run a simple %%cleaning bot|cleaning-bot%% on your own machine which cleans Mangrove on the Polygon Mumbai testnet.
When you're done, you'll have the foundation for developing and operating your own cleaning bot.

The tutorial assumes that you have [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/), and [Yarn 2](https://yarnpkg.com/getting-started/install) installed and feel comfortable on the command line.


# Step 1: Clone the repo containing the example cleaning bot
First, clone the `mangrove-bots` monorepo which contains the example cleaning bot we'll be using:

```shell
git clone https://github.com/mangrovedao/mangrove-bots.git
```

Then go into the clone and run `install` to have the necessary npm packages installed:

```shell
cd mangrove-bots
yarn install
```

Finally, go into the folder containing the cleaning bot and we're ready to configure it:

```shell
cd packages/bot-cleaning
```


# Step 2: Configure the bot

Before we start the bot, it must be told which account to use for signing transactions, which node provider to use, and the markets to clean.
This is done via two files:

- `.env.local` which contains secrets
- `config/default.json` which contains configuration

Create a `.env.local` file containing a JSON-RPC URL for the Polygon Mumbai testnet and a private key:

```shell
# mangrove-bots/packages/bot-cleaning/.env.local

# The URL for a Polygon Mumbai JSON-RPC endpoint
RPC_NODE_URL=https://polygon-mumbai.g.alchemy.com/v2/abcdefg_secret_api_key

# The private key for transaction signing
PRIVATE_KEY=0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6
```

You can use any Mumbai RPC URL, including the public ones that can be found on Polygon's website: https://wiki.polygon.technology/docs/develop/network-details/network/.

Make sure the account has testnet MATIC. You can get this from the Polygon faucet: https://faucet.polygon.technology/.

:::danger

Use a fresh private key and do not share it with anyone.

The repo's `.gitignore` file contains `.env.local` in order to prevent accidentally committing the secrets you put in the `.env.local` file. However, as always you should be vigilant about private keys.

:::


Then open `config/default.json` and replace its contents with the following JSON:

```json
{
  "logLevel": "debug",
  "markets": [
    ["WETH", "DAI"]
  ],
  "runEveryXMinutes": 0.5
}
```

This tells the bot to log debug information, clean just the WETH/DAI market, and to clean twice per minute.

# Step 3: Build and Run the bot

Building and running the bot is as simple as:

```shell
yarn build
yarn start
```

If everything is working as it should, you'll see the bot logging something like the following to the console:

```shell
2022-11-15T14:34:29.027Z [info] [init] Starting cleaner bot...
2022-11-15T14:34:29.529Z [info] [init] Connected to Mangrove | data: {"network":{"id":80001,"name":"maticmum"},"addresses":[["DAI_AAVE","0x9A753f0F7886C9fbF63cF59D0D4423C5eFaCE95B"],["USDC_AAVE","0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2"],["USDT_AAVE","0x21C561e551638401b937b03fE5a0a0652B99B7DD"],["WETH_AAVE","0xd575d4047f8c667E064a4ad433D04E25187F40BB"],["aWETH","0x685bF4eab23993E94b4CFb9383599c926B66cF57"],["aDAI","0xDD4f3Ee61466C4158D394d57f3D4C397E91fBc51"],["aUSDC","0xCdc2854e97798AfDC74BC420BD5060e022D14607"],["DAI","0xC87385b5E62099f92d490750Fcd6C901a524BBcA"],["USDC","0xF61Cffd6071a8DB7cD5E8DF1D3A5450D9903cF1c"],["WETH","0x63E537A69b3f5B03F4f46c5765c82861BD874b6e"],["Mangrove","0xF3e339d8a0B989114412fa157Cc846ebaf4BCbd8"],["MgvReader","0xfAB31d37f8DF5bff07Bb3c16B33416eCd4Aab76F"],["MgvCleaner","0xEb05Ace3574B0a6f4696c5CcD09e730d6d5ED3b0"],["MgvOracle","0xd38c02425da847584eeDA72387DAAA2E8f3b90c8"],["MangroveOrderEnriched","0x9A643978A0A50459d6159bc87f97B309E539083b"]]}
2022-11-15T14:34:31.457Z [info] [(WETH,DAI)] [init] Initalized market cleaner
2022-11-15T14:34:31.458Z [info] Running bot every 0.5 minutes. | data: {"runEveryXMinutes":0.5}
2022-11-15T14:34:32.382Z [info] [(WETH,DAI)] [block#=29166718] Cleaning market
2022-11-15T14:34:32.702Z [info] [(WETH,DAI)] [block#=29166718] Order book retrieved | data: {"asksCount":59,"bidsCount":16}
2022-11-15T14:34:33.063Z [debug] [(WETH,DAI) asks #526] [block#=29166718] Static collect of offer failed | offer: {"next":527,"offer_gasbase":208000,"id":526,"prev":525,"gasprice":2,"maker":"0x7D63939ce0Fa80cC69C129D337a978D0E1F354A1","gasreq":300000,"gives":"3.103826046713452086","wants":"4438.47124680023648298","volume":"3.103826046713452086","price":"1430"} | data: {"reason":"mgvCleaner/anOfferDidNotFail","code":"CALL_EXCEPTION","method":"collect(address,address,uint256[4][],bool)","errorArgs":["mgvCleaner/anOfferDidNotFail"],"errorName":"Error","errorSignature":"Error(string)","address":"0xEb05Ace3574B0a6f4696c5CcD09e730d6d5ED3b0","args":["0x63E537A69b3f5B03F4f46c5765c82861BD874b6e","0xC87385b5E62099f92d490750Fcd6C901a524BBcA",[[526,{"type":"BigNumber","hex":"0x00"},{"type":"BigNumber","hex":"0x00"},9007199254740990]],false],"transaction":{"data":"0xd6607cfb00000000000000000000000063e537a69b3f5b03f4f46c5765c82861bd874b6e000000000000000000000000c87385b5e62099f92d490750fcd6c901a524bbca000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000020e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001ffffffffffffe","to":"0xEb05Ace3574B0a6f4696c5CcD09e730d6d5ED3b0","from":"0x5a6272e5d8690ad47Df72BBf7Fb08cE1851b8f54"}}
```

The bot is quite chatty in `debug` mode, so you'll probably quickly want to turn it down to `info` 🤫

Congratulations, you're now a Mangrove Keeper Bot Operator 🤠🧹


# Next steps

The example cleaning bot we used in this tutorial is fully functional, but rather naive. For example, it tries to snipe offers without paying anything and only the simplest of offers will fail in this scenario. So you'll probably want to implement more advanced sniping techniques, e.g., by looking into more advanced ways offers may fail.

You can read more about why offers can fail and the role of cleaning bots in Mangrove's ecosystem here: [The role of cleaning bots in Mangrove](../background/the-role-of-cleaning-bots-in-mangrove.md).

Feel free to use the example cleaning bot as a starting point for building your own bot. And if you want to build you own bot from scratch, that's cool as well 😎 In either case, you'll probably want to check out the following reasources:

- SDK: [`mangrove.js`](../../SDK/README.md)
  - The `mangrove.js` SDK makes it easy to monitor order books and to send snipe transactions. The example cleaning bot relies on the SDK for all of the heavy lifting.
- Contract: [`MgvCleaner`](https://github.com/mangrovedao/mangrove-core/blob/a1acdb6038382e78616fbb00503ccbdb11e23d62/src/periphery/MgvCleaner.sol)
  - The `MgvCleaner` smart contract is deployed together with Mangrove and provides a `collect` function that snipes offers and reverts if any of the offers don't fail.
