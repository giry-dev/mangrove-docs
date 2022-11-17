import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageSections from '@site/src/components/HomepageSections';

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
        <HomepageSections />
        <h3 style={{margin:'auto', width: 'fit-content', paddingTop: '5px', textAlign: 'center'}}>
          Mangrove is built by the Mangrove DAO.
        </h3>
        <section style={{margin:'auto', width: 'fit-content', paddingTop: '5px', paddingBottom: '10px', textAlign: 'center'}}>
          Read more at <a href="https://mangrove.exchange">mangrove.exchange</a>.
        </section>
      </main>
    </Layout>
  );
}
