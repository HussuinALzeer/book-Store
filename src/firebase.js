import { doc, setDoc } from "firebase/firestore"; 
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8xj2CDB0QeauPC5tP7SaqODcHjQ-S1C0",
  authDomain: "book-store-c3b9d.firebaseapp.com",
  projectId: "book-store-c3b9d",
  storageBucket: "book-store-c3b9d.appspot.com",
  messagingSenderId: "174244319066",
  appId: "1:174244319066:web:fa5c40600d962cd40e6d63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const db = getFirestore(app);
