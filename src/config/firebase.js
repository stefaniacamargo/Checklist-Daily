// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYyX7P6mKcCrJCjhtC8yqvN6r_MObHXt0",
  authDomain: "checklist-daily-b35a2.firebaseapp.com",
  projectId: "checklist-daily-b35a2",
  storageBucket: "checklist-daily-b35a2.appspot.com",
  messagingSenderId: "758152470903",
  appId: "1:758152470903:web:f15af89ee1b291c3c50172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);