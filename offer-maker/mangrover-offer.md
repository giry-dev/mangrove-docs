# MangroveOffer

Mangrove has a standard implementation of IOfferLogic <!-- FIXME: link to IOfferLogic description-->called MangroveOffer. This implementation is an abstract contract, that reposts the residual of the offer, if the offer was not fully taken. This is done using the hooks exposed by MangroveOffer. These hooks are separated into 3 categories. The first hooks are called doing `makerExecute`. This means that you will be able to hook into the flow of how Mangrove is transferring the funds from the MangroveOffer contract to maker and from maker to the MangroveOffer contract.

When an offer is taken, Mangrove transfers the funds from the taker to Mangrove and from Mangrove to the contract that posted the offer. For a more detailed view of how an offer is executed, look at [Executing offers](executing-offers.md). It is not possible to hook in before or in between these 2 transfers. When these 2 transfers are done, MangroveOffer, has 3 hooks. **lastlook**, **put** and **get**. They are called in this order.

**Lastlook** is meant for have a lastlook before the funds are transferred to the taker. <!--  (FIXME: maybe and example).-->

**Put** is meant as an option for the maker to transfer the given funds from the contract to e.g. the admin of the contract. This could be useful if you don't want to leave the funds on the contract.

**Get** is meant as an option for the maker to transfer the funds, promised to taker the, from e.g. the admins contract to the MangroveOffer contract. This could be useful if you don't want to have the promised funds laying on the contract.

**Put** and **Get** are both hooks, that makes it possible to make transfers Just in time, when offer is taken. All three hooks in `makerExecute` has an empty implementation, which means if they are

The next hooks are called doing `makerPosthook`. This i called after the offer is taken, for a more detailed view of how an offer is executed, look at [Executing offers](executing-offers.md). `makerPosthook` has 2 hooks **posthookSuccess** and **posthookFallback**. When an offer is taken, it either succeeds in transferring the makers funds to the taker or it fails.

**PosthookSuccess**: If it success in transferring the funds from maker to taker, then the transaction was a success. `makerPosthook` then calls this hook. In this hook MangroveOffer has a default implementation, that reposts the taken offer, if the offer was only partially taken. It does this, by using 2 other hooks, called **residualGives** and **residualWants**. These hooks are used to calculate the new gives and wants for the reposted offer. MangroveOffers default implementation is to return the residual gives and wants of the taker offer. The reason for these being hooks, are that if the maker wants to repost the offer, with new gives and wants, even if the offer was fully taken. Then it will be possible to implement versions of **residualGives** and **residualWants** that returns the new gives and wants that the maker wants to use for the reposted offer. If **residualGives** return zero, then the offer will never be reposted.

**PosthookFallback**:  If the offer fails to transfer the takers funds to the maker, then the transaction will revert. But if it fails trying to transfer the funds from the maker to the taker, then the taker will get a bounty.<!--  and the offer goes offline??how??FIXME:--> In this situation the hook, **posthookFallback** will get called. MangroveOffer default implementation is empty. An example of what **posthookFallback** could be use for is, it could make sense to deprovision <!--FIXME: link to some kind of description --> the offer, or even retract other offers on the book, that the maker now knows will fail. <!-- FIXME: maybe link to doc of Ghost?-->

Besides having hooks while the offer is taken and after. MangroveOffer also has 2 other hooks, called **Activate** and **Checklist**. These hooks are not called while the offer is taken or after the after is taken. Before an offer can be taken on Mangrove, Mangrove needs to have the correct approvals to transfer the tokens from the MangroveOffer contract to Mangrove. And if the contract is using a Router <!-- FIXME: link to router description --> it also needs to approve the router to transfer the tokens from the contract.

MangroveOffers implementation of **Checklist** is a function that takes a list of tokens and checks if they have the correct approvals. If Mangrove or the Router does not have the correct approvals, it will revert with a fitting message. **Checklist** always checks Mangrove first, then the router. After it has check both Mangrove and the router, then the actual hook will be called. This hook only takes one token. If there are other approvals need for the contract, then they should be checked here. <!-- FIXME: maybe and example. + would it be possible to make checklist from both the maker and taker side. -->

MangroveOffers implementation of **Activate** is a function that takes a list of tokens and makes the correct approvals. It does this by looping over all the given tokens and calling the actual hook for each token. MangroveOffer has a default implementation of the hook, that starts by approving Mangrove to use that token and if it has a router, then it approves that the router can use the token. the router might have additional approvals that are need therefore a router also as an Activate function, that handles all other necessary approvals for the router. <!--FIXME: Should link to a more comprehensive description of routers. -->

A **Router** is a contract that can handle more comprehensive transfers. E.g. if you want to lend the money, when the offer is taken, then a router would be able to handle this. A more comprehensive description of Routers can be found here LINK. <!--FIXME: Link to router description-->

Mangrove has 2 default implementations of MangroveOffer, they can be found here, [Direct](Direct.md) and [Forwarder](Forwarder.md).

<!--FIXME: A diagram of all transfers and where the hooks are would be really nice. -->