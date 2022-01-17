import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="javascript notes">
      <div className={styles.main}>
        <div className={styles.box}>
          <img className={styles.img} src="/img/logo.png"></img>

          <h2>JavaScript 学习进阶笔记</h2>

          <Link
            className={`button button--primary ${styles.btn}`}
            to="/docs/intro"
          >
            快速开始
          </Link>
        </div>
      </div>
    </Layout>
  );
}
