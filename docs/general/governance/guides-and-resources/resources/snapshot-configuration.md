---
sidebar_position: 1
---

# Snapshot configuration

#### Strategies configuration for multi-stakeholder voting

#### **Strategies:**

We use three separate strategies so users can see in the UI what their voting weight is for each gov. group: Builders, Pods, and Token holders.

1. MGV token with delegation and including vested, claimable tokens
   * At the outer level, we use the [with-delegation](<https://snapshot.org/#/strategy/with-delegation>) strategy to allow delegation.
   * Inside that we use [erc20-balance-of](<https://snapshot.org/#/strategy/erc20-balance-of>) for owned MGV tokens and [dss-vest-unpaid](<https://snapshot.org/#/strategy/dss-vest-unpaid>) for vested but unpaid MGV tokens
   * Symbol: MGV
2. Builders Group Activity Score with delegation, quadratic-voting, and scaled to the circulating supply of MGV tokens
   * At the outer level, we use the [with-delegation](<https://snapshot.org/#/strategy/with-delegation>) strategy to allow delegation.
   * Inside that we use the [mangrove-station-qv-scaled-to-mgv](<https://snapshot.org/#/strategy/mangrove-station-qv-scaled-to-mgv>) which is built exactly for this
   * Symbol: vMGV-B
     * Rationale: reusing the symbol of the membership, adding "v" to signal that it's a voting token attached to the group, but not the same object.
3. Pods Group Activity Score with delegation, quadratic-voting, and scaled to the circulating supply of MGV tokens
   * At the outer level, we use the [with-delegation](<https://snapshot.org/#/strategy/with-delegation>) strategy to allow delegation.
   * Inside that we use the [mangrove-station-qv-scaled-to-mgv](<https://snapshot.org/#/strategy/mangrove-station-qv-scaled-to-mgv>) which is built exactly for this
   * Symbol: vMGV-P
     * Rationale: reusing the symbol of the membership, adding "v" to signal that it's a voting token attached to the group, but not the same object.

#### Proposal configuration

**Validation strategies:**

We use basic validation with a minimum score: Members with a voting power corresponding to more than 0.1% of the circulating supply can make proposals

* Snapshot requires an absolute number, so we calculated what 0.1% corresponds to as of 2024-01-08:
  * Circulating supply: 137,392,418.57352012 MGV
  * 0.1% of circulating supply: 137,392

#### Voting configuration

**Quorum:**

We’d like to set the quorum to 15% of the total voting power. However, Snapshot requires an absolute number, so we’ve calculated what 15% corresponds to as of 2024-01-08:

* Circulating supply: 137,392,418.57352012 MGV
* Total voting power: 3 \* circulating supply = 412,177,255.72056036
* 15% of total voting power: 61,826,588

#### Delegation

The Delegation section is left unconfigured which (unintuitively) means that we use Snapshot’s built-in delegation system.
