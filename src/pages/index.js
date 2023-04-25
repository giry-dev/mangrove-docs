import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageSections from '@site/src/components/HomepageSections';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={useBaseUrl('/img/assets/mangrove-art.jpg')} className="hero-image" />
        <h1 className="hero__title">Welcome to Mangrove Docs</h1>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to Mangrove Docs`}
      description="Documentation For Mangrove">
      <HomepageHeader />
      <main>
        <HomepageSections />
      </main>
    </Layout>
  );
}
