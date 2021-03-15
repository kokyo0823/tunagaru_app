import styles from '../styles/components/Group.module.scss'
import Link from 'next/link'
import Image from 'next/image'


const Layout = () => {
  return (
    <div className={styles.group}>
      <div className={styles.group_img}>
        <Image src={"/images/group.JPG"} width={500} height={278} className={styles.group_image} />
      </div>
      <div className={styles.text}>
        <div className={styles.text_up}>
          <p className={styles.name}>
            JTC
          </p>
          <ul className={styles.tag}>
            <li>テニス</li>
            <li>テニス</li>
            <li>テニス</li>
          </ul>
        </div>
        <div className={styles.text_down}>
          <p>テニスを中心にいろいろなイベントを楽しむサークルです</p>
        </div>
      </div>
    </div>
  )
}

export default Layout
