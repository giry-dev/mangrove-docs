---
description: mangrove.js is a TypeScript SDK for the Mangrove exchange, the on-chain orderbook where offers are code.
sidebar_position: 1
---

# The TypeScript SDK ⌨️

The Mangrove SDK is a TypeScript library that can help you write off-chain apps that work the Mangrove ecosystem. It wraps around [ethers.js](https://github.com/ethers-io/ethers.js) and adds a number of Mangrove-specific functionality and API. In a nod towards its `ethers.js`-underpinnings, the SDK package is named `mangrove.js`.

The SDK is appropriate for both **client-** and **server-side** apps: It is web browser-compatible and works with [Node.js](https://nodejs.org/en/). 

## Open source and free to use - on your own responsibility

The SDK is used in production in the Mangrove web app, and in a number of keeper bots, but the SDK should be used responsibly. It is considered in open beta, and is constantly under development. 

The SDK is open source, and is provided freely to the community as a starting point for writing apps to work with the Mangrove ecosystem. However, do note that the SDK may contain bugs or may change significantly between patch versions. As such it should be used responsibly and with care.

If you have questions about how to use the SDK, which are not answered sufficiently in this documentation, do reach out on the Mangrove [Discord](https://discord.gg/rk9Qthz5YE). And pull requests to the SDK are, of course, welcome!

## Where do I start? 

The best starting point for developing your app, is the Getting Started section - start by reading the page on [Setting up your local development environment](./getting-started/preparation.md).

If you just want to dive directly into reading about the technical details of the SDK, jump to the [SDK Overview](./technical-references/api-overview.md) or refer directly to the [mangrove.js API reference](technical-references/code/index.md) generated from the [latest published package on NPM](#where-is-the-mangrovejs-package).

## Where is the `mangrove.js` package?

If you just want to find the latest `mangrove.js` package on NPM - go to [@mangrovedao/mangrove.js](https://www.npmjs.com/package/@mangrovedao/mangrove.js).

## Where is the code?

The code for the `mangrove.js` SDK is available on [GitHub](https://github.com/mangrovedao/mangrove-ts). Pull requests are welcome!

