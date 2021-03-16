import firebase from 'firebase/app'
import 'firebase/firestore'

//firebase初期化処理
//スクリプトを実行するときに一度だけ行い、途中で初期化するとエラーになるので行わない。
const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID
};
firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();
