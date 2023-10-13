---
description: Deployment Addresses
sidebar_position: 5
---

# Deployment Addresses

import Raw from './_contract-addresses-raw.md';

<Raw components={props.components} />

## NPM packages

import coreVersion from './mangrove-core-version.json';
import jsVersion from './mangrove-js-version.json';

The addresses and API documentation corresponds to the following packages NPM packages published in [@mangrovedao](https://www.npmjs.com/org/mangrovedao):

<ul>
<li>@mangrovedao/mangrove-core@{coreVersion.children.Version}</li>
<li>@mangrovedao/mangrove.js@{jsVersion.children.Version}</li>
</ul>

## Addresses of previous versions

For previous versions we recommend inspecting the addresses in previous versions of the [mangrove-core](https://www.npmjs.com/package/@mangrovedao/mangrove-core) NPM package. They are in the `@mangrovedao/mangrove-core/addresses/*.json` files.
