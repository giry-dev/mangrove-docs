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
        Builders that want to develop their own market making strategies should read about the Mangrove Strat Library with contract building blocks to help you write safe and efficient market making strats for Mangrove.
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

const MessagesList = [
  {
    title: 'Contracts',
    path: 'contracts',
    Svg: 'img/streamlinehq-phone-contact-phone-book-phone.svg',
    description: (
      <>
        Go to the Contracts section, if you want to learn more about Mangrove, by delving into the core concepts, finding the API documentation, or because you want to check out the deployment addresses for Mangrove.
      </>
    ),
    colStyle: 'col--5',
  },
];

function Section({Svg, title, path, description, colStyle = 'col--5 col--offset-05', elementClass=''}) {
  return (
    <div className={clsx('col ' + colStyle) + ' ' + elementClass}>
        <a href={path} className={styles.noColorLink + ' frontpage--button-link'}>
        <div className="text--center">
          <img src={Svg} className='frontpageSvgButton' />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        </a>
      </div>
  );
}

export default function HomepageSections() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {TopFeatureList.map((props, idx) => (
              <Section key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {MessagesList.map((props, idx) => (
              <Section key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
