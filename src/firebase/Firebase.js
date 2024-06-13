import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvkJy1wJmsqsc6tG5VlXf-jLdwjwfnKUA",
  authDomain: "driveproject-b3219.firebaseapp.com",
  projectId: "driveproject-b3219",
  storageBucket: "driveproject-b3219.appspot.com",
  messagingSenderId: "130551430391",
  appId: "1:130551430391:web:dbc77839b5a654216867f2"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
