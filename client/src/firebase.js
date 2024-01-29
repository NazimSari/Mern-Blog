// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cee4c.firebaseapp.com",
  projectId: "mern-blog-cee4c",
  storageBucket: "mern-blog-cee4c.appspot.com",
  messagingSenderId: "1056858799266",
  appId: "1:1056858799266:web:5d8bc0a715f4c209612bfb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
