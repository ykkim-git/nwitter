import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC27xeDpoD52OVd6Llgc50CSOoP6qUqrB4",
  authDomain: "nwitter-42769.firebaseapp.com",
  projectId: "nwitter-42769",
  storageBucket: "nwitter-42769.appspot.com",
  messagingSenderId: "245751875169",
  appId: "1:245751875169:web:068425adf723a03de54c20",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
