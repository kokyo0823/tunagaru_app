import '../styles/globals.scss'
import '../styles/reset.css'
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
