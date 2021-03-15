import Head from 'next/head'
import Layout from '../components/Layout'
import Group from "../components/Group";

import styles from "../styles/index.module.scss";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>つながる</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.groupList}>
          <div>
            <h2 className={styles.serch} >Serch</h2>
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
export default Home
