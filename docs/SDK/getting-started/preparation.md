---
description: Preparation for tutorials
sidebar_position: 1
---

# Preparation

## Prerequisites

For Linux or macOS everything should work out of the box, if you are using Windows, then we recommend installing everything from within WSL2 and expect some quirks.

1. [Node.js](https://nodejs.org/en/) v16.10+, we recommend installation through [nvm](https://github.com/nvm-sh/nvm#installing-and-updating), with [Yarn 2](https://yarnpkg.com/getting-started/install) enabled:

    ```shell
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    # Reopen shell
    nvm install --lts
    # Enable the Yarn 2 package manager
    corepack enable
    ```

2. For Solidity contract development, the [Foundry](https://book.getfoundry.sh/getting-started/installation.html) development framework for Ethereum :

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

Keep the terminal open, you’ll need it for your first tutorial.
