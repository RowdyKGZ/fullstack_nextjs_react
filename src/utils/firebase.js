// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-eldiyar.firebaseapp.com",
  projectId: "blog-eldiyar",
  storageBucket: "blog-eldiyar.appspot.com",
  messagingSenderId: "939461347988",
  appId: "1:939461347988:web:c7eab7e7e282797f3e8281",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
