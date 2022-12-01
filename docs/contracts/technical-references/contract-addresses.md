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

<p>The addresses, annotated code, and NatSpec are made based on the mangrove-core NPM package version {coreVersion.children.Version}. The TypeDoc for the SDK is based on the mangrove.js NPM package version {jsVersion.children.Version}.</p>

## Addresses of previous versions

For previous versions we recommend inspecting the addresses in previous versions of the [mangrove-core](https://www.npmjs.com/package/@mangrovedao/mangrove-core) NPM package. They are in the `@mangrovedao/mangrove-core/addresses/*.json` files.
