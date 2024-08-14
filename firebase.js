// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe8JR7tkCT04mAgTdGsaaY6nB3k3AUNes",
  authDomain: "flashcards-a4632.firebaseapp.com",
  projectId: "flashcards-a4632",
  storageBucket: "flashcards-a4632.appspot.com",
  messagingSenderId: "216945785181",
  appId: "1:216945785181:web:ae521d21376b2a9f9850b4",
  measurementId: "G-LGK0XFP6Y2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);