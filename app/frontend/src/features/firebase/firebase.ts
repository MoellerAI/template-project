import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsMxtB8ND9DGwM_9yAmcTnv1rpvufWqKE",
  authDomain: "template-app-87c8e.firebaseapp.com",
  databaseURL: "https://template-app-87c8e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "template-app-87c8e",
  storageBucket: "template-app-87c8e.appspot.com",
  messagingSenderId: "252045268839",
  appId: "1:252045268839:web:e2ff90be1586b4724681c2",
  measurementId: "G-Z8738DERTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();