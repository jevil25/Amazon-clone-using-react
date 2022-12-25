import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

console.log("this is firebase.js");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3bWGU4R9iWEnP6zytFsnKNDP6WdxS4Tw",
  authDomain: "clone-d484f.firebaseapp.com",
  projectId: "clone-d484f",
  storageBucket: "clone-d484f.appspot.com",
  messagingSenderId: "992526128738",
  appId: "1:992526128738:web:576f1d1374f6dcef39e33b",
  measurementId: "G-KE26KMFZL5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };