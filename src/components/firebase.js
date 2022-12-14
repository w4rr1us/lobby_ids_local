import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFkmYCHM1oxscWncBlXI9eUI81ncL4nBE",
  authDomain: "chat-ids.firebaseapp.com",
  projectId: "chat-ids",
  storageBucket: "chat-ids.appspot.com",
  messagingSenderId: "2105819817",
  appId: "1:2105819817:web:74ccc36539f097324e9fb8",
  measurementId: "G-QGDKL1Y4EF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
