// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLzeTdYrWVd6THSE5ExJsE9AJYfNWJLdU",
    authDomain: "teamcollab-mvp.firebaseapp.com",
    projectId: "teamcollab-mvp",
    storageBucket: "teamcollab-mvp.firebasestorage.app",
    messagingSenderId: "311149544618",
    appId: "1:311149544618:web:f117da7713618f45e47cd3",
    measurementId: "G-TY5EQ8BKH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);