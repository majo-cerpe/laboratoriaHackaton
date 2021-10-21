// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe1z04e6FHPfLPseIuVTuG6e8nqxz1AME",
  authDomain: "hackathon-intranet.firebaseapp.com",
  projectId: "hackathon-intranet",
  storageBucket: "hackathon-intranet.appspot.com",
  messagingSenderId: "984703177659",
  appId: "1:984703177659:web:a20d98fec865d5160e6a9e",
  measurementId: "G-8ZNF72B3DZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export default db; 