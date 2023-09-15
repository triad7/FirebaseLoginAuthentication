// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCb9ldR5djEB0hlwSJPtJMVlADmNWyJrzQ",
  authDomain: "loginregister-1-86ba2.firebaseapp.com",
  projectId: "loginregister-1-86ba2",
  storageBucket: "loginregister-1-86ba2.appspot.com",
  messagingSenderId: "730694148328",
  appId: "1:730694148328:web:4de4b4fee4d1b4c2e3695d",
  measurementId: "G-DR9S2CTTVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getAuth(app)