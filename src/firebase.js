// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe-HthcAUHUPfSsP7bANDg-cxpaowWY9Y",
  authDomain: "firstproject-9ef50.firebaseapp.com",
  projectId: "firstproject-9ef50",
  storageBucket: "firstproject-9ef50.appspot.com",
  messagingSenderId: "48556938378",
  appId: "1:48556938378:web:0bf6a4547763ff898b8973",
  measurementId: "G-0DT469ZQQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// const analytics = getAnalytics(app);

export {app ,auth}

