---
description: Mangrove communicates with Offer Logics with public data structures described in this section.
sidebar_position: 3
---

# Public data structures

## MgvLib.SingleOrder

| Type                           | Field          | Comments   
|--------------------------------|----------------|------------
| `OLKey`                        | `olkey`        | Struct containing: <br />• `outbound_tkn` (address of the _outbound_ token)<br />• `inbound_tkn` (address of the _inbound_ token)<br />• `tickSpacing` (number of ticks that should be jumped between available price points)
| `uint`                         | `offerId`      | [Id\](/docs/developers/terms/offer-id.md) of the offer that is matched by the order
| `Offer`       | `offer`        | The `offer` given to the maker will be cleaned of `prev`/`next` pointers
| `uint`| `takerWants`| The amount of outbound tokens that are required by the order (in max precision units of `outbound_tkn` ERC20).
| `uint`| `takerGives`| The amount of inbound tokens that are given by the taker (in max precision units of `inbound_tkn` ERC20).
| `OfferDetail` | `offerDetail`|  Packing of the matched offer's detail. It holds the maker’s address and provision/penalty-related information: <br />• `maker`<br />• `gasreq`<br />• `kilo_offer_gasbase`
| `Global`| `global`| Packing of the global parameters of Mangrove that apply to this order
| `Local`| `local`| Packing of the offer list parameters that apply to this order

## MgvLib.OrderResult

| Type | Field| Description |
| ---- | ----------- | ---- |
| `bytes32` | `makerData` | The returned or reverted value of [`makerExecute`](/docs/developers/terms/makerExecute.md), truncated to fit a `bytes32` word. It holds a message that was either returned by the maker or passed as revert message at the end of the trade execution.
| `bytes32` | `mgvData`| <p>It holds a message that was either returned by the maker or passed as revert message at the end of the trade execution. If the offer was a success it is equal to:</p><ul><li><code>"mgv/tradeSuccess"</code>: offer execution succeeded.</li></ul><p>If the offer failed (Offer Bounty will be taken from Maker Contract), it will be equal to one the following messages:</p><ul><li><code>"mgv/makerRevert"</code>: offer execution reverted.</li><li><code>"mgv/makerTransferFail"</code>: Mangrove could not transfer <code>order.outbound_tkn</code> tokens from <a href="maker-contract">Maker Contract</a> to itself (e.g. contract has insufficient balance).</li><li><code>"mgv/makerReceiveFail"</code>: Mangrove could not transfer <code>order.inbound_tkn</code> tokens to <a href="maker-contract">Maker Contract</a> (e.g. contract is blacklisted).</li></ul>
