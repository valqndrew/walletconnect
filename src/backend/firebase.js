// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { addDoc, collection, getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs_r2UhFP1BFmd5rp3mkD3XxGyN2vP2LU",
  authDomain: "wallet-connect-4ba56.firebaseapp.com",
  projectId: "wallet-connect-4ba56",
  storageBucket: "wallet-connect-4ba56.appspot.com",
  messagingSenderId: "153111637281",
  appId: "1:153111637281:web:114ea640fa258b8262a260",
  measurementId: "G-KTGWM1BT25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export const uploadToCloud = (payload) => {
  try {
    const docRef = addDoc(collection(db, "wallets"), payload);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
