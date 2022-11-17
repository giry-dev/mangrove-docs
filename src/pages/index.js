import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to the Mangrove Docs</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Mangrove Docs`}
      description="Developer Documentation For Mangrove">
      <HomepageHeader />
      <main>
        <div style={{margin:'auto', width: 'fit-content', paddingTop: '60px'}}>
          <h3>🚧 👷‍♂️Under Reconstruction 👷‍♀️ 🚧</h3>
        </div>
          <h2 style={{margin:'auto', width: 'fit-content', paddingTop: '10px'}}> 🌴 Developer Documentation for Mangrove 🌴</h2>
        <section style={{width: 'fit-content', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '10px'}}>
          <p>Go to the <a href="./contracts/">Contracts</a> section, if you want to learn more about Mangrove, by delving into the core concepts, finding the API documentation, or because you want to check out the deployment addresses for Mangrove.</p>
          <p>Strategy builders or market makers that want to develop their own market making strategies should make sure to read about <a href="./strat-lib/">the Mangrove Strat Library</a>  with contract building blocks to help you write safe and efficient market making strats for Mangrove.</p>
          <p>Off-chain builders that are keen to write bots or UI interfacing with Mangrove should check out the documentation for the <a href="./SDK/">SDK</a> and the dedicated section on <a href="./keeper-bots/">Keeper bots</a>.</p>
          <p>All GitHub repositories can be found on the <a href="https://github.com/mangrovedao">Mangrove</a> GitHub.</p>
        </section>
      </main>
    </Layout>
  );
}
