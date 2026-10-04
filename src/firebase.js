import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDV5WiW37TmndvBOj9Nr-5Jgb2jL0kt6iE",
    authDomain: "baretskiy-7a7ac.firebaseapp.com",
    projectId: "baretskiy-7a7ac",
    storageBucket: "baretskiy-7a7ac.firebasestorage.app",
    messagingSenderId: "706447794487",
    appId: "1:706447794487:web:691fef990773e13034fab2",
    measurementId: "G-3QG1DYXGC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const db = getFirestore(app);

export default app;