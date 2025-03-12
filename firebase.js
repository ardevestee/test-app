// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzAZMpjXgPnOuX90sx4CVsRhFjOiIHmNs",
  authDomain: "esteem-s.firebaseapp.com",
  projectId: "esteem-s",
  storageBucket: "esteem-s.firebasestorage.app",
  messagingSenderId: "221175298075",
  appId: "1:221175298075:web:6cd794c25c37d244f7e0be",
  measurementId: "G-G0J948GEGN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
