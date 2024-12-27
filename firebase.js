// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCer6sP4zo0RZldsGyubyQkbJxYdUR7fqs",
  authDomain: "site-blocker-cc89b.firebaseapp.com",
  projectId: "site-blocker-cc89b",
  storageBucket: "site-blocker-cc89b.firebasestorage.app",
  messagingSenderId: "240988052136",
  appId: "1:240988052136:web:c541f1a0565dbc12d9009d",
  measurementId: "G-739MFN2FM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);