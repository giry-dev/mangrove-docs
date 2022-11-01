# Glossary

### Allowance

### Approval

### Asks

### Base

### Bids

### Bounty

### Density

### Dust

### ERC20

### FOK

### Gas price

### Gas requirement

### Gives

### GTC

### Inbound

### Maker

### Market

### Market cleaners

### Market order

### Off-chain

### Offer id

### Offer rank

### On-chain

### Order

### Outbound

### Penalty

### Provision

### Quote

### Semibook

### Taker

### Wants

### Resting limit order

### Smart offer

### Keeper bots

### Externally Owned Account (EOA)

An account controlled by anyone with the private keys, e.g., through a wallet. [Details](https://ethereum.org/en/developers/docs/accounts/).

### On-the-fly Offer (OTF)

An **On-the-fly offer** (OTF) can be listed on Mangrove but is not equipped with any on-chain [logic](mangrove-core/explanations/offer-maker/#executing-offers) that executes when the offer is taken. Whenever it is matched by a [taker order](mangrove-core/explanations/offer-taker.md#taking-offers), the offer sources its liquidity on an [Externally Owned Account (EOA)](#externally-owned-account-eoa).

{% hint style="warning" %}
An OTF is not reactive (it has no code) and therefore cannot repost its residual if any. E.g an OTF offer of 1500 DAIs (outbound) for 1 wETH (inbound) that is matched by a taker order of 750 DAIs for 0.5 wETH will be removed from the book after it has been partially filled.
{% endhint %}
