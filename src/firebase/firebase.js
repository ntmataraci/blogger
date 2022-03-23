// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSfteYHqdtrxjfzUt-W7Ued8jo4A4tfUs",
  authDomain: "users-11a8f.firebaseapp.com",
  projectId: "users-11a8f",
  storageBucket: "users-11a8f.appspot.com",
  messagingSenderId: "744028285891",
  appId: "1:744028285891:web:f554a987712ae79be3ab76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

