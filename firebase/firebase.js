import 'firebase/auth'
import 'firebase/firestore'

import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}
// initializeを複数回走らせない。最初の一度だけ実行
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
const auth = firebase.auth()
export { auth }
export default firebase
