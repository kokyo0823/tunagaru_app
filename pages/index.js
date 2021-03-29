import Head from 'next/head'
import Layout from '../components/Layout'
import Group from "../components/Group";
import React from 'react'

import styles from "../styles/index.module.scss";

class Home extends React.Component{
  render() {
    return(
      <Layout>
        <Head>
          <title>つながる</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.groupList}>
          <div className={styles.serch}>
            <h2 className={styles.serch_title} >Serch</h2>
            <input placeholder="キーワード入力" type="text" className={styles.serch_input} />
          </div>
          <div className={styles.list}>
            <Group />
            <Group />
            <Group />
            <Group />
            <Group />
            <Group />
          </div>
        </div>
      </Layout>
    )
  }
}
export default Home
