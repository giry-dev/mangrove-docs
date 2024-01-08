---
description: Preparation for tutorials
sidebar_position: 1
---

# Set Up Your Local Environment

import Preamble from '../../SDK/getting-started/_preparation-pre.md';

<Preamble components={props.components} />


```bash
# To create Solidity smart contracts
# Install NPM package with Mangrove core and Strat library
npm install --save @mangrovedao/mangrove-strats@next
# Prepare Foundry's forge
forge init --force
# Set up remappings to use the strat library
cd node_modules/@mangrovedao/mangrove-strats

echo "@mgv/src/=node_modules/@mangrovedao/mangrove-core/src/
@mgv/src/=node_modules/@mangrovedao/mangrove-core/src/
@mgv/lib/=node_modules/@mangrovedao/mangrove-core/lib/
@mgv/test/=node_modules/@mangrovedao/mangrove-core/test/
@mgv/script/=node_modules/@mangrovedao/mangrove-core/script/
@mgv/forge-std/=node_modules/@mangrovedao/mangrove-core/lib/forge-std/src/
ds-test/=node_modules/@mangrovedao/mangrove-core/lib/forge-std/lib/ds-test/src

@mgv-strats/src/=node_modules/@mangrovedao/mangrove-strats/src/
@mgv-strats/lib/=node_modules/@mangrovedao/mangrove-strats/lib/
@mgv-strats/test/=node_modules/@mangrovedao/mangrove-strats/test/
@mgv-strats/script/=node_modules/@mangrovedao/mangrove-strats/script/
" > remappings.txt
```

import Post from '../../SDK/getting-started/_preparation-post.md';

<Post components={props.components} />
