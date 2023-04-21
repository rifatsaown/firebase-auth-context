import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2hY_d2muO5LihL2qdKDOURgYp9O5ppgE",
  authDomain: "auth-master-57ca5.firebaseapp.com",
  projectId: "auth-master-57ca5",
  storageBucket: "auth-master-57ca5.appspot.com",
  messagingSenderId: "340213416386",
  appId: "1:340213416386:web:8e2ef46da4caaa73d9565b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;