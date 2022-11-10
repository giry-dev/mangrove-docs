---
description: Preparation for tutorials
sidebar_position: 1
---

# Setup local environment

## Local development

If you want to do any local development we recommend installing [Node.js](https://nodejs.org/en/) and [Foundry](https://book.getfoundry.sh/getting-started/installation.html).
We are going to be using Node.js for running our javascript in the tutorials, but it is not required. You can use any development environment that supports javascript.

We are going to be using Foundry to start local forks for existing chains. You don't have to use Foundry to do this, you can use any tool you want to do this, but we recommend Foundry.

For Linux or macOS everything should work out of the box, if you are using Windows, then we recommend installing everything from within WSL2 and expect some quirks.
Remember to reopen your shell after running the fist line.

1. [Node.js](https://nodejs.org/en/) v16.10+, we recommend installation through [nvm](https://github.com/nvm-sh/nvm#installing-and-updating), with [Yarn 2](https://yarnpkg.com/getting-started/install) enabled:

    ```shell
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    # Reopen shell
    nvm install --lts
    # Enable the Yarn 2 package manager
    corepack enable
    ```

2. [Foundry](https://book.getfoundry.sh/getting-started/installation.html) development framework for Ethereum :

    ```shell
    curl -L https://foundry.paradigm.xyz | bash
    # Reopen shell
    foundryup
    ```



## Create tutorial folder

The tutorials can be run in an isolated folder where you install the Mangrove dependencies.

Open a terminal and run the following commands:

```bash
# Create a folder for the tutorial and enter it
mkdir tutorial
cd tutorial
npm init -y
```

## Install dependencies

Now install dependencies for the type of tutorial:

```bash
# To use the mangrove SDK
npm install --save dotenv
npm install --save @mangrovedao/mangrove.js
```

## Environment

Inside the tutorial folder, create a `.env` file. This will hold the secrets such as private key and API keys.

The file should typically look as follows (with `<...>` replaced by proper values) - for instance you need a RPC URL from, e.g., [Infura](https://infura.io/) or [Alchemy](https://www.alchemy.com/), and an %%EOA|eoa%% with a private key. Note, there are other ways to provide secrets, but this is what we do in the tutorials. If you do not have a RPC URL, there exist free RPC URL, some examples can be found here: [chainlist](https://chainlist.org/). 

```bash
# .env
export PRIVATE_KEY=<private key>   # 0xabcd.... <- This is the private key you'll be using in the tutorial - a test key for the Polygon Mumbai network
export ADMIN_ADDRESS=<EOA> # 0xabcd...
export RPC_URL=<https://polygon-mumbai.g.alchemy.com/v2/API key> # alchemy or infura node url for Polygon Mumbai
```

## Local chain

Starting a local chain can easily be done by using `anvil`. This is a way to start a local chain, given by foundry. You can either start up an all new chain or fork an existing one.

```bash title="How to start all new chain"
anvil
```

```bash title="How to fork an existing chain"
source .env
anvil -f $RPC_URL
```

Both these start a new chain on with a local url of http://127.0.0.1:8545. Added this url to the `.env` file will make it easier for us to use it in tutorials.
Foundry has many options for `anvil`, you can read about them [here](https://book.getfoundry.sh/reference/anvil/), if you are interested.

When anvil starts up, it creates 10 test accounts, with some native tokens. If you do not have a real account on the chain, you can always use their accounts. Here is an example of a `.env` file that uses the first anvil account, a demo RPC URL and with a LOCAL URL.

``` bash title=".env file"
PRIVATE_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 # The first anvil private key
ADMIN_ADDRESS=0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 # The matching public key, to the first anvil private key
RPC_URL=https://polygon-mumbai.g.alchemy.com/v2/demo # Demo RPC provided by alchemy
LOCAL_URL=http://127.0.0.1:8545 # Url for the local chan that anvil starts
```