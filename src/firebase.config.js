import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlK7Jr8_tcmKaT4BbnXuGImezNdZWjB-o",
  authDomain: "house-marketplace-app-9a25b.firebaseapp.com",
  projectId: "house-marketplace-app-9a25b",
  storageBucket: "house-marketplace-app-9a25b.appspot.com",
  messagingSenderId: "353636173970",
  appId: "1:353636173970:web:e4e4ab2ebc670e8da0be4b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()