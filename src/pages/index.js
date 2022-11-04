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
          <h3><marquee>🏝 👷‍♂️Under Reconstruction 👷‍♀️🏝 </marquee></h3>
        </div>
          <h2 style={{margin:'auto', width: 'fit-content', paddingTop: '10px'}}> 🌴 Learn more about the technical details of the Mangrove 🌴</h2>
        <section style={{width:'40%', marginLeft:'20%', marginRight:'20%', width: 'fit-content', paddingTop: '10px'}}>
          <p>Strategy builders or market makers should check out the <a href="./docs/contracts/">Contracts</a> section. Go here if you want to delve into the core concepts for Mangrove, the API documentation or want to develop market making strategies.</p>
          <p>Off-chain builders that are keen to write bots or UI interfacing with Mangrove should check out the documentation for the <a href="./docs/SDK/">SDK</a> and the dedicated section on <a href="./docs/keeper-bots/">Keeper bots</a>.</p>
          <p>All GitHub repositories can be found on the <a href="https://github.com/mangrovedao">Mangrove</a> GitHub.</p>
        </section>
      </main>
    </Layout>
  );
}
