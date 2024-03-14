// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZuNGtNvcqiMKOsjRc6-q-D2EgOqimkFY",
  authDomain: "netflixgpt-b07a9.firebaseapp.com",
  projectId: "netflixgpt-b07a9",
  storageBucket: "netflixgpt-b07a9.appspot.com",
  messagingSenderId: "220481482781",
  appId: "1:220481482781:web:eb533e7a68a10fd72616f4",
  measurementId: "G-JB08WHJCXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();