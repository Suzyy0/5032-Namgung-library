// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc9e1ncVXa1kJAMsRvFqhf05ewFxmyvww",
  authDomain: "week7-suji.firebaseapp.com",
  projectId: "week7-suji",
  storageBucket: "week7-suji.appspot.com",
  messagingSenderId: "551574924780",
  appId: "1:551574924780:web:9076d0d5f35c7203b2e4c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
const db = getFirestore(app);
export default db

