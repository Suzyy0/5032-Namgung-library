// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApWWw7xiDlS1JFIgGK9crR40dmlFE0CNA",
  authDomain: "fit5032-suji.firebaseapp.com",
  projectId: "fit5032-suji",
  storageBucket: "fit5032-suji.appspot.com",
  messagingSenderId: "435526315360",
  appId: "1:435526315360:web:1cfe229e661b92334dc205"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
const db = getFirestore(app);
export default db

