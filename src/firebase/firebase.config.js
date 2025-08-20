// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0sQ65wPRJbPrnTaOzDlkBACDPhWGbKn4",
  authDomain: "dragon-news-bf2f3.firebaseapp.com",
  projectId: "dragon-news-bf2f3",
  storageBucket: "dragon-news-bf2f3.firebasestorage.app",
  messagingSenderId: "951407259865",
  appId: "1:951407259865:web:8f2fe7fcd8edbd7cdd8ec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;