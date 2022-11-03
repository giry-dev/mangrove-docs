---
sidebar_position: 1
---

# Run a simple cleaning bot
In this tutorial you'll download, configure, and run a simple %%cleaning bot|cleaning-bot%% on your own machine.

The tutorial assumes that you have [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/), and [Yarn 2](https://yarnpkg.com/getting-started/install) installed and feel comfortable on the command line.


# Step 1: Clone and setup the repo containing the example cleaning bot
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


