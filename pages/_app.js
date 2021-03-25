import '../styles/globals.scss'
import '../styles/reset.css'
import "firebase/analytics";
import "firebase/auth";
import React, { useEffect } from 'react'

import { AuthProvider } from '../auth/AuthProvider'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
