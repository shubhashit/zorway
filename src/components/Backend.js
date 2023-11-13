// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMoXWD7vldQ1vJ048V8VLOKkNv7F-d47g",
    authDomain: "zorway-755c6.firebaseapp.com",
    projectId: "zorway-755c6",
    storageBucket: "zorway-755c6.appspot.com",
    messagingSenderId: "789727587889",
    appId: "1:789727587889:web:db916c0d0dc924fa8daf10",
    measurementId: "G-BW9K5B10XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export {app , analytics , auth}