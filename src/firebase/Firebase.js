import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwvLNvqu6gcZ373lzE6ARxoP77fF_9Mz0",
  authDomain: "drive-1c55e.firebaseapp.com",
  projectId: "drive-1c55e",
  storageBucket: "drive-1c55e.appspot.com",
  messagingSenderId: "485959828898",
  appId: "1:485959828898:web:5939b50b4607578d881efb"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
