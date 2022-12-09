import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Contracts',
    path: 'contracts',
    Svg: 'img/streamlinehq-phone-contact-phone-book-phone.svg',
    description: (
      <>
        Go to the <a href="./contracts/">Contracts</a> section, if you want to learn more about Mangrove, by delving into the core concepts, finding the API documentation, or because you want to check out the deployment addresses for Mangrove.
      </>
    ),
  },
  {
    title: 'Strat Lib',
    path: 'strat-lib',
    Svg: 'img/streamlinehq-money-graph-arrow-increase-money-shopping.svg',
    description: (
      <>
        Builders that want to develop their own market making strategies should read about <a href="./strat-lib/">Mangrove Strat Library</a> with contract building blocks to help you write safe and efficient market making strats for Mangrove.
      </>
    ),
  },
  {
    title: 'SDK',
    path: 'SDK',
    Svg: 'img/streamlinehq-computer-laptop-computer-devices.svg',
    description: (
      <>
        Off-chain builders that are keen to write bots or UIs interfacing with Mangrove should check out the documentation for the <a href="./SDK/">SDK</a>.
      </>
    ),
  },
  {
    title: 'Keeper Bots',
    path: 'keeper-bots',
    Svg: 'img/streamlinehq-computer-robot-computer-devices.svg',
    description: (
      <>
        Mangrovians who want contribute to Mangrove ecosystem by building and running keeper bots should visit the dedicated section on <a href="./keeper-bots/">Keeper bots</a>.
      </>
    ),
  },
];

function Section({Svg, title, path, description}) {
  return (
    <div className={clsx('col col--3')}>
      <a href={path} className={styles.noColorLink}>
      <div className="text--center">
        <img src={Svg} className='frontpageSvgButton' />
      </div>
      </a>
      <div className="text--center padding-horiz--md">
        <a href={path} className={styles.noColorLink}>
          <h3>{title}</h3>
        </a>                
        <p>{description}</p>
      </div>

    </div>
  );
}

export default function HomepageSections() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Section key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
