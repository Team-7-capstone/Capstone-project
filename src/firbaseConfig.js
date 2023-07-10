import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkUURuzEfhx6KbIZIeTqe51mclfUlfjsg",
  authDomain: "myoosik-339ac.firebaseapp.com",
  projectId: "myoosik-339ac",
  storageBucket: "myoosik-339ac.appspot.com",
  messagingSenderId: "656534455147",
  appId: "1:656534455147:web:64770afa04edc163a6c22e",
  measurementId: "G-GZ7JGDBYP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
