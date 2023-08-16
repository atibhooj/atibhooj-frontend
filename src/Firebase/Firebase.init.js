// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8TMrVRtNAp7IhG3sx5E9drb365ubd0cw",
    authDomain: "atibhooj-online-media.firebaseapp.com",
    projectId: "atibhooj-online-media",
    storageBucket: "atibhooj-online-media.appspot.com",
    messagingSenderId: "782181742612",
    appId: "1:782181742612:web:895d319c60473c5bdc4f01",
    measurementId: "G-YF6P8BQPT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
