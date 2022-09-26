// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_eO-mLmEh09G59wk62e_eMVpYFSRbdmo",
    authDomain: "poopify-reactjs.firebaseapp.com",
    projectId: "poopify-reactjs",
    storageBucket: "poopify-reactjs.appspot.com",
    messagingSenderId: "535322265730",
    appId: "1:535322265730:web:263eb1d8fea1a78ca18c9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//base de datos
export const db = getFirestore(app);

