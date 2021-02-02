import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWjuNt2oglVgaKnBRbxWdxaUdUu3FSMpg",
  authDomain: "messenger-app-eb38b.firebaseapp.com",
  projectId: "messenger-app-eb38b",
  storageBucket: "messenger-app-eb38b.appspot.com",
  messagingSenderId: "576001180735",
  appId: "1:576001180735:web:a14dd58575328895e2648a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, timestamp };
