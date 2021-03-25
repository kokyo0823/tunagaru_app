import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'

import styles from "../styles/groupDetail.module.scss";

const Home = () => {
  return (
    <Layout value="group">
      <Head>
        <title>つながる</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.group}>
          <div className={styles.group_img}>
            <Image src={"/images/group.JPG"} width={500} height={278} className={styles.group_image} />
          </div>
        <h2 className={styles.group_name}>JTC</h2>
          <ul className={styles.tags}>
            <li>テニス</li>
            <li>テニス</li>
            <li>テニス</li>
          </ul>
          <ul className={styles.humans}>
            <li className={styles.human}>
              <Image src={"/images/profile.jpeg"} width={60} height={60} className={styles.human_image} />
              <p className={styles.human_position}>代表</p>
            </li>
            <li className={styles.human}>
              <Image src={"/images/profile.jpeg"} width={60} height={60} className={styles.human_image} />
              <p className={styles.human_position}>代表</p>
            </li>
            <li className={styles.human}>
              <Image src={"/images/profile.jpeg"} width={60} height={60} className={styles.human_image} />
              <p className={styles.human_position}>代表</p>
            </li>
          </ul>
          <div className={styles.profile}>
            <h3 className={styles.profile_title}>サークル紹介</h3>
            <p className={styles.profile_exp}>JTCはJoyful Tennis Clubの略でテニスを中心にいろいろなイベントを楽しむサークルです。</p>
          </div>
          <div className={styles.charm}>
            <h3 className={styles.charm_title}>サークルの魅力</h3>
            <p className={styles.charm_exp}>JTCはJoyful Tennis Clubの略でテニスを中心にいろいろなイベントを楽しむサークルです。</p>
          </div>
          <div className={styles.info}>
            <h3 className={styles.info_title}>基本情報</h3>
            <ul className={styles.info_detail}>
              <li　className={styles.info_detail_item}>
                <p className={styles.inq}>■人数</p>
                <p className={styles.res}>52人</p>
              </li>
              <li　className={styles.info_detail_item}>
                <p className={styles.inq}>■基本サークル日</p>
                <p className={styles.res}>月・水・金</p>
              </li>
              <li　className={styles.info_detail_item}>
                <p className={styles.inq}>■基本サークル日</p>
                <p className={styles.res}>月・水・金</p>
              </li>
              <li　className={styles.info_detail_item}>
                <p className={styles.inq}>■基本サークル日</p>
                <p className={styles.res}>月・水・金</p>
              </li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h3 className={styles.contact_title}>連絡先</h3>
            <ul className={styles.contact_detail}>
              <li className={styles.contact_detail_item}>
                <p className={styles.inq}>■メール</p>
                <p className={styles.res}>kokyo0823@icloud.com</p>
              </li>
              <li className={styles.contact_detail_item}>
                <p className={styles.inq}>■LINE</p>
                <p className={styles.res}>@kokyo</p>
              </li>
              <li className={styles.contact_detail_item}>
                <p className={styles.inq}>■Instagram</p>
                <p className={styles.res}>@kokyo</p>
              </li>
            </ul>
          </div>
        </div>
    </Layout>
  )
}
export default Home
