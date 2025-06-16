// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export default app; // Экспортируем `app`, чтобы использовать в других файлах