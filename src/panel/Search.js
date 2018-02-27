import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
import { Input } from 'antd';
const { TextArea } = Input;

function IndexPage() {
  return (
    <div style={{width:'100%'}}>
        <TextArea placeholder="Search..." autosize />
    </div>
  )
}

IndexPage.propTypes = {}

export default connect()(IndexPage)

/*
<h1 className={styles.title}>Yay! Welcome to dva!</h1>
<div className={styles.welcome} />
<ul className={styles.list}>
  <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
  <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
</ul>
*/