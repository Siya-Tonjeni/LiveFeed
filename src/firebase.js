import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkYqM_2eT8QDAtFQuGniN2laoHxXSMsZg",
  authDomain: "live-feed-f705b.firebaseapp.com",
  databaseURL: "https://live-feed-f705b-default-rtdb.firebaseio.com",
  projectId: "live-feed-f705b",
  storageBucket: "live-feed-f705b.firebasestorage.app",
  messagingSenderId: "991313659728",
  appId: "1:991313659728:web:71afa278083b2f51eb4e55",
  measurementId: "G-9F7FDBQ454"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
