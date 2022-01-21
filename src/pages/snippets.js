import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import CodeBlock from '@theme/CodeBlock';

const Code = `function HelloCodeTitle(props) {
  return <h1>你好，{props.name}</h1>;
}`

export default function Home() {
  return (
    <Layout title={`Snippets`}>
      <div className={styles.main}>
        <CodeBlock className="language-jsx">{Code}</CodeBlock>
      </div>
    </Layout>
  );
}
