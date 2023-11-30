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

echo "@mgv/src/=../mangrove-core/src/
@mgv/lib/=../mangrove-core/lib/
@mgv/test/=../mangrove-core/test/
@mgv/script/=../mangrove-core/script/
@mgv/forge-std/=../mangrove-core/lib/forge-std/src/

ds-test/=../mangrove-core/lib/forge-std/lib/ds-test/src

@mgv-strats/src/=src/
@mgv-strats/lib/=lib/
@mgv-strats/test/=test/
@mgv-strats/script/=script/
" > remappings.txt
```

import Post from '../../SDK/getting-started/_preparation-post.md';

<Post components={props.components} />
