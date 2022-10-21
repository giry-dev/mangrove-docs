# Offer and order data

## MgvLib.MgvStructs.OfferUnpacked

| Type     | Field      | Comments                                                                 |
| -------- | ---------- | ------------------------------------------------------------------------ |
| `uint`   | `prev`     | Predecessor offer id (better price)                                      |
| `uint`   | `next`     | Successor offer id (worst price)                                         |
| `uint96` | `gives`    | What the offer gives (in WEI units of base token of the offer's market)  |
| `uint96` | `wants`    | What the offer wants (in WEI units of quote token of the offer's market) |
| `uint16` | `gasprice` | The gas price covered by the offer bounty                                |

## MgvLib.OfferDetailUnpacked

| Type      | Field              | Comments                                                                                                        |
| --------- | ------------------ | --------------------------------------------------------------------------------------------------------------- |
| `address` | `maker`            | address of the offer's [Maker Contract](../offer-maker/maker-contract.md)                                       |
| `uint`    | `gasreq`           | Gas required by the offer                                                                                       |
| `uint`    | `overhead_gasbase` | Snapshot of the [overhead gasbase](mangrove-configuration.md#local-parameters) at the time the offer was posted |
| `uint`    | `offer_gasbase`    | Snapshot of the offer [gasbase](mangrove-configuration.md#local-parameters) at the time the offer was posted    |

## MgvLib.SingleOrder

| Type                           | Field          | Comments                                                                                                   |
| ------------------------------ | -------------- | ---------------------------------------------------------------------------------------------------------- |
| `address`                      | `outbound_tkn` | outbound token address of the market order                                                                 |
| `address`                      | `inbound_tkn`  | inbound token address of the market order                                                                  |
| `uint`                         | `offerId`      | Id of the offer that is matched by the order                                                               |
| `MgvStructs.OfferPacked`       | `offer`        | Offer data of the current state of the offer on the offer list                                             |
| `uint`                         | `wants`        | amount of outbound tokens that are required by the order (in max precision units of `outbound_tkn` ERC20). |
| `uint`                         | `gives`        | amount of inbound tokens that are given by the taker (in max precision units of `inbound_tkn` ERC20).      |
| `MgvStructs.OfferDetailPacked` | `offerDetail`  | packing of the matched offer details                                                                       |
| `MgvStructs.GlobalPacked`      | `global`       | packing of the global parameters of the Mangrove that apply to this order                                  |
| `MgvStructs.LocalPacked`       | `local`        | packing of the market parameters that apply to this order                                                  |

## MgvLib.OrderResult

| Type      | Field       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bytes32` | `makerData` | The returned or reverted value of `makerExecute`, truncated to fit a `bytes32` word.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `bytes32` | `mgvData`   | <p>Information gathered by Mangrove concerning the offer execution. If the offer was a success it is equal to:</p><ul><li><code>"mgv/tradeSuccess"</code>: offer execution succeeded.</li></ul><p>If the offer failed (Offer Bounty will be taken from Maker Contract), it will be equal to one the following messages:</p><ul><li><code>"mgv/makerRevert"</code>: offer execution reverted.</li><li><code>"mgv/makerTransferFail"</code>: Mangrove could not transfer <code>order.outbound_tkn</code> tokens from <a href="../offer-maker/maker-contract.md">Offer Logic</a> to itself (e.g. contract has insufficient balance).</li><li><code>"mgv/makerReceiveFail"</code>: Mangrove could not transfer <code>order.inbound_tkn</code> tokens to <a href="../offer-maker/maker-contract.md">Offer Logic</a> (e.g. contract is blacklisted).</li></ul> |
