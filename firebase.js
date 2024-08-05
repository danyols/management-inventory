// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsD3lcHS-uD4LMpcqmne8KjVVWoh-cQXc",
  authDomain: "inventory-management-3e89b.firebaseapp.com",
  projectId: "inventory-management-3e89b",
  storageBucket: "inventory-management-3e89b.appspot.com",
  messagingSenderId: "525292847546",
  appId: "1:525292847546:web:01d1d5e49cc40ef87c1d83",
  measurementId: "G-CH0J6LNZ90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}