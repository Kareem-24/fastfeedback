import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_FIREBASE_PROJECT_ID,
};

const firebase = getApps.length > 0 ? getApp : initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);
export default { firebase, firestore };
