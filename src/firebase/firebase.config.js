// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAShxUFOXUffJbTkfBMyMlSnclexWfOH8A",
  authDomain: "fire-news-33898.firebaseapp.com",
  projectId: "fire-news-33898",
  storageBucket: "fire-news-33898.appspot.com",
  messagingSenderId: "883617690048",
  appId: "1:883617690048:web:8f173e8f360313143e1825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app