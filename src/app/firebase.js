// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlk3OnVhi0fmQeZToW7T6XaLFagDbtaqg",
  authDomain: "nextjs-5028c.firebaseapp.com",
  projectId: "nextjs-5028c",
  storageBucket: "nextjs-5028c.appspot.com",
  messagingSenderId: "865016835427",
  appId: "1:865016835427:web:fc8212a199ef9931257756",
  measurementId: "G-0BH266FMG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);