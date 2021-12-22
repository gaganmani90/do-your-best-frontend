import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databseUrl: process.env.REACT_APP_FIREBASE_DATABSEURL
})

export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
