---
description: Preparation for tutorials
sidebar_position: 1
---

# Set Up Your Local Environment

import Preamble from '../../SDK/getting-started/_preparation-pre.md';

<Preamble components={props.components} />


```bash
# To create Solidity smart contracts
# Install NPM package with strat library
npm install --save @mangrovedao/mangrove-core
# Prepare Foundry's forge
forge init --force
# Set up remappings to use the strat library
echo "mgv_src/=node_modules/@mangrovedao/mangrove-core/src/
mgv_lib/=node_modules/@mangrovedao/mangrove-core/lib/
mgv_test/=node_modules/@mangrovedao/mangrove-core/test/
mgv_script/=node_modules/@mangrovedao/mangrove-core/script/

ds-test/=node_modules/@mangrovedao/mangrove-core/lib/forge-std/lib/ds-test/src/
forge-std/=node_modules/@mangrovedao/mangrove-core/lib/forge-std/src/
" > remappings.txt
```

import Post from '../../SDK/getting-started/_preparation-post.md';

<Post components={props.components} />
