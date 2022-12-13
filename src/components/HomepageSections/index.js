import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const TopFeatureList = [
  {
    title: 'Contracts',
    path: 'contracts',
    Svg: 'img/streamlinehq-phone-contact-phone-book-phone.svg',
    description: (
      <>
        Go to the Contracts section to learn more about Mangrove. 
        Delve into the core concepts, find the API documentation, or check out the deployment addresses for Mangrove.
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
        Read about how to develop market making strategies with the Mangrove Strat Library that provides contract building blocks to help write safe and efficient market making strats for Mangrove.
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
        Mangrovians who want to contribute to the Mangrove ecosystem by building and running keeper bots should visit the dedicated section on Keeper Bots.
      </>
    ),
    elementClass: 'frontpage--button',
  },
]


function Section({Svg, title, path, description, colStyle = '', elementClass=''}) {
  return (
    <a href={path} className={styles.noColorLink + ' frontpage--button-link' + ' ' + elementClass}>
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
    </a>
  );
}

export default function HomepageSections() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="frontpage--feature-row">
            {TopFeatureList.map((props, idx) => (
              <Section key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
