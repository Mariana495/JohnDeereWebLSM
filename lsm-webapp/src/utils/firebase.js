// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBOJ7ITXvn6YJ1-VdG44EL941U-NRacPFY",
  authDomain: "johndeere-385c8.firebaseapp.com",
  databaseURL: "https://johndeere-385c8-default-rtdb.firebaseio.com",
  projectId: "johndeere-385c8",
  storageBucket: "johndeere-385c8.appspot.com",
  messagingSenderId: "760293443112",
  appId: "1:760293443112:web:f41a6030bdd434c355d71d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);