import '../styles/globals.scss'
import '../styles/reset.css'
import "firebase/analytics";
import "firebase/auth";
import { Provider } from 'react-redux';
import React, { useEffect } from 'react'
import createStore from '../reducks/store/store';
import { AuthProvider } from '../auth/AuthProvider';

export const store = createStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
