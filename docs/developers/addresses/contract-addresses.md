---
description: Deployment Addresses
sidebar_position: 10
---

# Deployment Addresses

The latest versions of `@mangrovedao/mangrove-core` and `@mangrovedao/mangrove-strats` are deployed at the addresses listed below.

All deployments and ABIs can be found in [`@mangrovedao/mangrove-deployments`](https://github.com/mangrovedao/mangrove-deployments/) which is also available as an NPM package for easy integration.

import Raw from './_contract-addresses-raw.md';

<Raw components={props.components} />

## NPM packages

import coreVersion from './mangrove-core-version.json';
import stratsVersion from './mangrove-strats-version.json';
import jsVersion from './mangrove-js-version.json';
import deploymentsVersion from './mangrove-deployments-version.json';
import contextVersion from './context-addresses-version.json';

The addresses and API documentation corresponds to the following packages NPM packages published in [@mangrovedao](https://www.npmjs.com/org/mangrovedao):

<ul>
<li>@mangrovedao/mangrove-core@{coreVersion.children.Version}</li>
<li>@mangrovedao/mangrove-strats@{stratsVersion.children.Version}</li>
<li>@mangrovedao/mangrove.js@{jsVersion.children.Version}</li>
<li>@mangrovedao/mangrove-deployments@{deploymentsVersion.children.Version}</li>
<li>@mangrovedao/context-addresses@{contextVersion.children.Version}</li>
</ul>
