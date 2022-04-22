import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjhSGpCEfOYXiAHZEHo59ISMyyIkU6nCY",
    authDomain: "ekvira-academy.firebaseapp.com",
    projectId: "ekvira-academy",
    storageBucket: "ekvira-academy.appspot.com",
    messagingSenderId: "262799564272",
    appId: "1:262799564272:web:4c85a0398e9eea9f6f1135",
    measurementId: "G-V5J1MFNJ6Z"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
