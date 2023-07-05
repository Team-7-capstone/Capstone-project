import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3kF2eyRIg402_mJNg01CLALMPWs9GLhY",
  authDomain: "linkedin-clone-42172.firebaseapp.com",
  projectId: "linkedin-clone-42172",
  storageBucket: "linkedin-clone-42172.appspot.com",
  messagingSenderId: "1042970237711",
  appId: "1:1042970237711:web:657f6540ab6c5d00ef3c7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
