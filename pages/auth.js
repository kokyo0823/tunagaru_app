import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Head from 'next/head'

import { auth } from '../utils/firebase'

const Auth = () => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : router.push('/login')
    })
  }, [])

  const logOut = async () => {
    try {
      await auth.signOut()
      router.push('/login')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Layout value="group">
      <Head>
        <title>つながる</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <pre>{currentUser && JSON.stringify(currentUser, null, 4)}</pre>
        <button onClick={logOut}>Logout</button>
        <p>kokyo</p>
      </div>
    </Layout>
  )
}
export default Auth
