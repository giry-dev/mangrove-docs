---
description: Preparation for tutorials
sidebar_position: 1
---

# Set Up Your Local Environment

:::warning

Mangrove is in the process of being released. For the time being, therefore you must use the prerelease version of the `mangrove-core` package. The installation instructions below reflect this.

:::

import Preamble from '../../SDK/getting-started/_preparation-pre.md';

<Preamble components={props.components} />


```bash
# To create Solidity smart contracts
# Install NPM package with strat library
npm install --save @mangrovedao/mangrove-core@latest
# Prepare Foundry's forge
forge init --force
# Set up remappings to use the strat library
echo "mgv_src/=src/
mgv_lib/=lib/
mgv_test/=test/
mgv_script/=script/

ds-test/=lib/forge-std/lib/ds-test/src/
forge-std/=lib/forge-std/src/
" > remappings.txt
```

import Post from '../../SDK/getting-started/_preparation-post.md';

<Post components={props.components} />
