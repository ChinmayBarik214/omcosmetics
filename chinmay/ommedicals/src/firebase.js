// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd2rWjKInRI8erPG89HgGCj7O4I46JT04",
  authDomain: "ommedicals.firebaseapp.com",
  projectId: "ommedicals",
  storageBucket: "ommedicals.appspot.com",
  messagingSenderId: "56613750979",
  appId: "1:56613750979:web:2e25494b80ab2d01213a76",
  measurementId: "G-JEMMEJ6PM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);