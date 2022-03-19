import { initializeApp } from "firebase/app"
import { getFirestore, collection } from 'firebase/firestore/lite'

import firebaseConfig from '../../firebase.config.json'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const collections = {
  db: db,
  items: collection(db, 'Items')
}