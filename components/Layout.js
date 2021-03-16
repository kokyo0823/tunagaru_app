import Head from 'next/head'
import styles from '../styles/components/Layout.module.scss'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faListAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children, value }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <meta
          name="description"
          content="個人と団体が「つながる」"
        />
        <title>つながる</title>
        <script src="/__/firebase/init.js"></script>
      </Head>
      <header className={styles.header}>
        <div className={styles.header_content}>
          {value &&(
            <>
              <Link href="/">
                <a>
                  <FontAwesomeIcon className={styles.backIcon} icon={faArrowLeft} />
                </a>
              </Link>
            </>
          )}
          <h1 className={styles.title}>つながる</h1>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <FontAwesomeIcon className={styles.listIcon} icon={faListAlt} />
        <FontAwesomeIcon className={styles.profileIcon} icon={faUser} />
      </footer>
    </div>
  )
}

export default Layout
