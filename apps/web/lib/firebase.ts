import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB3SjC0pWLmWcUCx6ptlLT-wd8WZwKR8fs',
  authDomain: 'tool-traker.firebaseapp.com',
  databaseURL: 'https://tool-traker-default-rtdb.firebaseio.com',
  projectId: 'tool-traker',
  storageBucket: 'tool-traker.firebasestorage.app',
  messagingSenderId: '772466342999',
  appId: '1:772466342999:web:f17626094f327d3ebab712',
  measurementId: 'G-DLNBFW2NFS'
};

export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);

export async function initAnalytics() {
  if (typeof window !== 'undefined' && (await isSupported())) {
    return getAnalytics(app);
  }
  return null;
}
