import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './styles.module.css';

const TopFeatureList = [
  {
    title: 'What is Mangrove?',
    path: 'high-level',
    Svg: 'img/streamlinehq-money-graph-arrow-increase-money-shopping.svg',
    description: (
      <>
        Learn about the core concepts of Mangrove and its ecosystem.
      </>
    ),
    elementClass: 'frontpage--button',
  },  
  {
    title: 'Web App',
    path: 'web-app-doc',
    Svg: 'img/streamlinehq-computer-laptop-computer-devices.svg',
    description: (
      <>
        Step-by-step explanations on how to use the Mangrove web app.
      </>
    ),
    elementClass: 'frontpage--button',
  },  
  {
    title: 'Mangrove Protocol',
    path: 'contracts',
    Svg: 'img/streamlinehq-phone-contact-phone-book-phone.svg',
    description: (
      <>
        Delve into technical documentation and reference material for the core contracts.
      </>
    ),
    elementClass: 'frontpage--button',
  },
  // {
  //   title: 'Strat Lib',
  //   path: 'strat-lib',
  //   Svg: 'img/streamlinehq-money-graph-arrow-increase-money-shopping.svg',
  //   description: (
  //     <>
  //       Read about how to write safe and efficient maker contracts for liquidity providing with the Mangrove Strat Library.
  //     </>
  //   ),
  //   elementClass: 'frontpage--button',
  // },
  {
    title: 'SDK',
    path: 'SDK',
    Svg: 'img/streamlinehq-computer-robot-computer-devices.svg',
    description: (
      <>
        Off-chain builders interfacing with Mangrove should check out the documentation for the SDK.
      </>
    ),
    elementClass: 'frontpage--button',
  },
  // {
  //   title: 'Keeper Bots',
  //   path: 'keeper-bots',
  //   Svg: 'img/streamlinehq-computer-robot-computer-devices.svg',
  //   description: (
  //     <>
  //       Mangrovians who want to contribute to the ecosystem by building and running keeper bots should visit the section on Keeper Bots.
  //     </>
  //   ),
  //   elementClass: 'frontpage--button',
  // },
]

const MessageList = [
  {
    title: 'Soft Launch',
    Svg: 'img/streamlinehq-nature-ecology-leaf-nature-ecology.svg',
    description: (
      <>
        The core team has just deployed a Soft Launch of the Mangrove DEX. This deployment is an internal milestone with the objective of testing the Mangrove protocol in real conditions, on the <a href="https://polygon.technology/">Polygon Mainnet</a>.
      </>
    ),
    colStyle: 'frontpage--message',
  },
  {
    title: 'Disclaimer',
    Svg: 'img/streamlinehq-interface-alert-warning-circle-interface-essential.svg',
    description: (
      <>
        This soft launch will only use test tokens, with no monetary value.
        Please refer to the <a href="./contracts/technical-references/contract-addresses">Deployment Addresses</a> for Mangrove.
      </>
    ),
    colStyle: 'frontpage--message',    
  },
  {
    title: 'What\'s Next?',
    Svg: 'img/streamlinehq-interface-award-half-star-interface-essential.svg',
    description: (
      <>
        The core team is currently working on the public launch of Mangrove. Stay tuned on <a href="https://twitter.com/mangroveDAO">Twitter</a> or join the <a href="https://discord.gg/rk9Qthz5YE">Mangrove Discord</a>.
      </>
    ),
    colStyle: 'frontpage--message',    
  },
]


function Section({Svg, title, path = '', description, colStyle = '', elementClass=''}) {
  const renderInner = () =>
  {
    return (
      <div className={clsx('col ' + colStyle) }>
        <div className="text--center">
          <img src={Svg} className='frontpageSvgButton' />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <img src="img/streamlinehq-interface-arrows-corner-up-right-interface-essential-gray.svg" className='frontpage--button-linkArrow' />
      </div>
    );
  }
  if(path) {
    return (
      <a href={path} className={styles.noColorLink + ' frontpage--button-link' + ' ' + elementClass}>
        {renderInner()}
      </a>
    );
  }
  else 
    return renderInner();
}

function BoxLink({title, path, description}) {
  return (
    <div className={'frontpage--button ' + styles.slimbutton}>    
      <a href={path} className={styles.noColorLink + ' frontpage--button-link'}>
        <div className="text--left padding-horiz--md">
          <b>{title}</b>
          <p>{description}</p>
        </div>
        <img src="img/streamlinehq-interface-arrows-corner-up-right-interface-essential-gray.svg" className='frontpage--button-linkArrow' />
        </a>
    </div>
  );
}

export default function HomepageSections() {
  const renderMessages = () => {
    if(MessageList.length > 0){
      return (
        <section className={styles.features}>
          <div className="frontpage--message-container container">
            <div className="row">
              {MessageList.map((props, idx) => (
                <Section key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>      
      )}
      else 
        return;
    };

  return (
    <>
      <section className={styles.features}>
        <div className="frontpage--feature-container container">
          <div className="frontpage--feature-row">
            {TopFeatureList.map((props, idx) => (
              <Section key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className={styles.linkrows + " container"}>
          <div>
            <h3>Web app</h3>
            <p>Follow these tutorials and explanations to learn about the functionality available in Mangrove's web app.</p>
            <BoxLink title={"Connect your wallet"} path="/web-app-doc/how-to-connect-wallet" description={"Follow this tutorial on how to connect your wallet."}/>
            <BoxLink title={"Place a market order"} path="/web-app-doc/trade/how-to-market-order" description={"Step-by-step instructions on how to place a market order."}/>
            <BoxLink title={"Place a limit order"} path="/web-app-doc/trade/how-to-limit-order" description={"Step-by-step instructions on how to place a limit order."}/>
            <BoxLink title={"Provide liquidity via a strategy"} path="/web-app-doc/strategies/create-strat" description={"Step-by-step instructions on how to create a market making strategy."}/>
            <br/>
            <h3>Kandel</h3>
            <p>Kandel is the Automated Market Making strategy backing the functionality provided in the web app.</p>
            <BoxLink title={"The Kandel strategy"} path="/kandel-doc" description={"Visit the dedicated section explaining how Kandel works."}/>
          </div>
          <div>
            <h3>Integrating dApps</h3>
            <p>Dive into the following sections to learn how to integrate your dApp with Mangrove.</p>
            <BoxLink title={"SDK"} path="/sdk" description={"Start here for an overview of the Mangrove TypeScript SDK."}/>
            <BoxLink title={"Set up your environment"} path="/sdk/getting-started/preparation" description={"Set up your local dev environment to work with the SDK."}/>
            <BoxLink title={"Post a simple offer"} path="/sdk/getting-started/basic-offer" description={"Start building - follow the tutorial on posting an on-the-fly offer."}/>
            <BoxLink title={"API Reference"} path="/sdk/technical-references/code/" description={"Find the SDK API Reference here."}/>
            <br/>
            <h3>Keeper bots</h3>
            <p>Keeper bots are an essential part of Mangrove's ecosystem that ensure a smooth experience for all.</p>
            <BoxLink title={"Keeper Bots"} path="/keeper-bots" description={"Explore the dedicated section on keeper bots."}/>
          </div>
          <div>
            <h3>Protocol and smart contracts</h3>
            <p>Dive deeper into the technical documentation for the Mangrove Protocol.</p>
            <BoxLink title={"Technical introduction"} path="/contracts/technical-references/overview" description={"Overview of the Mangrove protocol."}/>
            <BoxLink title={"Annotated codebase"} path="/contracts/technical-references/codebase" description={"A comprehensive overview of the Mangrove core codebase."}/>
            <BoxLink title={"Deployment Addresses"} path="/contracts/technical-references/contract-addresses" description={"Find the deployment addresses for protocol contracts"}/>
            <br/>
            <h3>Strat Lib</h3>
            <p>The Mangrove Strat Library is a repository of Solidity code provided to help you write safe and efficient maker contracts for liquidity providing.</p>
            <BoxLink title={"Strat Lib"} path="/strat-lib" description={"Find the dedicated section on the Strat Lib here."}/>
            <BoxLink title={"Set up your environment"} path="/strat-lib/getting-started/preparation" description={"Set up your local dev environment to work with the Strat Lib."}/>
            <BoxLink title={"Post an offer"} path="/sdk/getting-started/basic-offer" description={"Start building - follow the tutorial on having a contract post a simple offer."}/>
          </div>
        </div>
      </section>
    </>
  );
}
