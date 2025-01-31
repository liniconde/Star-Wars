// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY0rT0JcBiDHfMnZl5XKkvn29zMPfX7qI",
  authDomain: "star-wars-e579f.firebaseapp.com",
  projectId: "star-wars-e579f",
  storageBucket: "star-wars-e579f.firebasestorage.app",
  messagingSenderId: "583098939132",
  appId: "1:583098939132:web:a19ced5458d41d11820979",
  measurementId: "G-3BCJ09LJ13",
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase);
