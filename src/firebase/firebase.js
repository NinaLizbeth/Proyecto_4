// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import  "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFlAXR4alMJ2XZFTo5VGBbArddI5d6KLo",
  authDomain: "proyecto-4-8e3c5.firebaseapp.com",
  projectId: "proyecto-4-8e3c5",
  storageBucket: "proyecto-4-8e3c5.appspot.com",
  messagingSenderId: "300800497353",
  appId: "1:300800497353:web:e89382afcd06f6035e9f18"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const  db = app.firestore()