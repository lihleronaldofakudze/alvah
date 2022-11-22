// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQhFoJ7-zQXo7fHQIYRfxVRyaLdHBhzTk",
  authDomain: "alvah-clothing.firebaseapp.com",
  projectId: "alvah-clothing",
  storageBucket: "alvah-clothing.appspot.com",
  messagingSenderId: "837812214499",
  appId: "1:837812214499:web:601a53a7d13293717d83d6",
  measurementId: "G-QHDJQT5Z1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
