---
sidebar_position: 1
---

# Run a simple cleaning bot
In this tutorial you'll download, configure, and run a simple %%cleaning bot|cleaning-bot%% on your own machine.
When you're done, you'll have the foundation for developing and operating your own cleaning bot.

The tutorial assumes that you have [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/), and [Yarn 2](https://yarnpkg.com/getting-started/install) installed and feel comfortable on the command line.


# Step 1: Clone the repo containing the example cleaning bot
First, clone the `mangrove-ts` monorepo which contains the example cleaning bot we'll be using:

```shell
git clone https://github.com/mangrovedao/mangrove-ts.git
```

Then go into the clone and run `install` to get have the necessary npm packages installed:

```shell
cd mangrove-ts
yarn install
```

Finally, go into the folder containing the cleaning bot and we're ready to configure it

```shell
cd packages/bot-cleaning
```


# Step 2: Configure the bot

Before we start the bot, it must be told which account to use for signing transactions, which node provider to use, and the markets to clean.

Create a `.env.local` file containing a JSON-RPC URL for the Polygon Mumbai testnet and a private key:

:::danger

Use a fresh private key and do not share it with anyone.

The repo's `.gitignore` file contains `.env.local` in order to prevent accidentally committing the secrets you put in the `.env.local` file. However, as always you should be vigilant about private keys.

:::

```
# .env.local

# The URL for a Polygon Mumbai JSON-RPC endpoint
MUMBAI_NODE_URL=https://polygon-mumbai.g.alchemy.com/v2/abcdefg_secret_api_key

# The private key for transaction signing
PRIVATE_KEY=0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6
```


Next, 

TODO: Configure the market to clean



# Next steps

The example cleaning bot we used in this tutorial is fully functional, but rather naive. For example, it tries to snipe offers without paying anything and inly the simplest of offers will fail in this scenario. So you'll probably want to implement more advanced sniping techniques.

TODO: refer the reader to the next place to read / get in touch
