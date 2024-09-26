import type { FirebaseOptions } from 'firebase/app'

const ENV = process.env.NEXT_PUBLIC_ENV ?? 'dev'
const BASE_JSON_URL = process.env.NEXT_PUBLIC_BASE_JSON_URL ?? ''
const COLLECTION_NAME = process.env.NEXT_PUBLIC_COLLECTION_NAME ?? 'students'

let FIREBASE_CONFIG: FirebaseOptions = {}

switch (ENV) {
  case 'prod':
    break
  case 'dev':
  default:
    FIREBASE_CONFIG = {
      apiKey: 'AIzaSyC6wzSi5zHllhMYBQq3HYHx1MUTcYOkOk4',
      authDomain: 'mm-online-course-dev.firebaseapp.com',
      databaseURL: 'https://mm-online-course-dev-default-rtdb.firebaseio.com',
      projectId: 'mm-online-course-dev',
      storageBucket: 'mm-online-course-dev.appspot.com',
      messagingSenderId: '954752678363',
      appId: '1:954752678363:web:62bb8419e4b12912d3cffe',
    }
    break
}

const ORIGIN_STORAGE_KEY = 'origin-pathname'

export {
  ENV,
  BASE_JSON_URL,
  COLLECTION_NAME,
  FIREBASE_CONFIG,
  ORIGIN_STORAGE_KEY,
}
