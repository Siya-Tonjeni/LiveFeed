import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkYqM_2eT8QDAtFQuGniN2laoHxXSMsZg",
  authDomain: "live-feed-f705b.firebaseapp.com",
  databaseURL: "https://live-feed-f705b-default-rtdb.firebaseio.com",
  projectId: "live-feed-f705b",
  storageBucket: "live-feed-f705b.firebasestorage.app",
  messagingSenderId: "991313659728",
  appId: "1:991313659728:web:81003c1698d6a0efeb4e55",
  measurementId: "G-TGZXR91BB8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
