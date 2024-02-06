---
sidebar_position: 2
---

# Memberships

Membership of a governance group/Council is represented by ownership of an NFT (ERC-721). There is an NFT collection for each of the governance groups.

Each membership NFT controls a TBA (ERC-6551) and that TBA in turn is given tokens to represent the member’s attributes, such as their Activity Score (ERC-20, only relevant for Builders and Pods).

As we’d like members to be able to keep their membership NFTs after they leave Mangrove (it’s a nice memorabilia to have 🙂) we model active membership by giving the TBA an “Active Badge” token in a multi-token (ERC-1155) contract; When a member leaves a group, the active badge is burned.

The following diagram illustrates the setup:

import useBaseUrl from '@docusaurus/useBaseUrl';

<figure><img src={useBaseUrl('/img/assets/dao-groupos-contracts.png')} alt="" /><figcaption></figcaption></figure>
