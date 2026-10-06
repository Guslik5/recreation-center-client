import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMmgITTJY1XUlFyeg9ENxsE92fk9T5kgc",
    authDomain: "baretskiy-479bc.firebaseapp.com",
    projectId: "baretskiy-479bc",
    storageBucket: "baretskiy-479bc.firebasestorage.app",
    messagingSenderId: "669781141620",
    appId: "1:669781141620:web:30713abb8060618e864921",
    measurementId: "G-B7EJM3KY49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const db = getFirestore(app);

export default app;