import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDSh-Dmgd3lp3iw_zqGw9FLRJXR-_pq9kE',
  authDomain: 'reacty-39638.firebaseapp.com',
  projectId: 'reacty-39638',
  storageBucket: 'reacty-39638.appspot.com',
  messagingSenderId: '614713730871',
  appId: '1:614713730871:web:5da25b99b9f04cb3e95cb2'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

