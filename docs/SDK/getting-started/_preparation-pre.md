## Local development

If you want to do any local development we recommend installing [Node.js](https://nodejs.org/en/) and [Foundry](https://book.getfoundry.sh/getting-started/installation.html).
We are going to be using Node.js for package management and running javascript in the tutorials, but it is not required. You can use any development environment that supports javascript and npm packages.

We are going to be using Foundry to start local forks for existing chains. You don't have to use Foundry to do this, you can use any tool you want to do this, but we recommend Foundry.

For Linux or macOS everything should work out of the box, if you are using Windows, then we recommend installing everything from within WSL2 and expect some quirks.
Remember to reopen your shell after running the first line.

1. [Node.js](https://nodejs.org/en/) v18+, we recommend installation through [nvm](https://github.com/nvm-sh/nvm#installing-and-updating), with [Yarn 2](https://yarnpkg.com/getting-started/install) enabled:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# Reopen shell
nvm install --lts
# Enable the Yarn 2 package manager
corepack enable
```

2. [Foundry](https://book.getfoundry.sh/getting-started/installation.html) development framework for Ethereum:

```shell
curl -L https://foundry.paradigm.xyz | bash
# Reopen shell
foundryup
```

## Create tutorial folder

The tutorials can be run in an isolated folder where you install Mangrove dependencies.

Open a terminal and run the following commands:

```bash
# Create a folder for the tutorial and enter it
mkdir tutorial
cd tutorial
npm init -y
```

## Install dependencies

Now install the following dependencies:
