import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const TopFeatureList = [
  {
    title: 'Web App Doc',
    path: 'web-app-doc',
    Svg: 'img/',
    description: (
      <>
        Step-by-step explanations on how to use Mangrove DEX.
      </>
    ),
    elementClass: 'frontpage--button',
  },
  {
    title: 'Kandel Doc',
    path: 'kandel-doc',
    Svg: 'img/',
    description: (
      <>
        Learn how the Kandel strategy works, configuration parameters and key mechanics.
      </>
    ),
    elementClass: 'frontpage--button',
  },
  {
    title: 'Contracts',
    path: 'contracts',
    Svg: 'img/streamlinehq-phone-contact-phone-book-phone.svg',
    description: (
      <>
        Visit the Contracts section to learn more about Mangrove. 
        Delve into core concepts, find technical reference material, or check the deployment addresses.
      </>
    ),
    elementClass: 'frontpage--button',
  },
  {
    title: 'Strat Lib',
    path: 'strat-lib',
    Svg: 'img/streamlinehq-money-graph-arrow-increase-money-shopping.svg',
    description: (
      <>
        Read about how to write safe and efficient maker contracts for liquidity providing with the Mangrove Strat Library.
      </>
    ),
    elementClass: 'frontpage--button',
  },
  {
    title: 'SDK',
    path: 'SDK',
    Svg: 'img/streamlinehq-computer-laptop-computer-devices.svg',
    description: (
      <>
        Off-chain builders that are keen to write bots or UIs interfacing with Mangrove should check out the documentation for the SDK.
      </>
    ),
    elementClass: 'frontpage--button',
  },
  {
    title: 'Keeper Bots',
    path: 'keeper-bots',
    Svg: 'img/streamlinehq-computer-robot-computer-devices.svg',
    description: (
      <>
        Mangrovians who want to contribute to the ecosystem by building and running keeper bots should visit the section on Keeper Bots.
      </>
    ),
    elementClass: 'frontpage--button',
  },
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
      {renderMessages()}
    </>
  );
}
