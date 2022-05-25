import {useEffect, useState} from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore, setDoc}  from "firebase/firestore";
import axios from 'axios';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcR5HLyFEJhgH-8HoL0Q5gtRP1fLKZKsI",
    authDomain: "blendz-1e3a0.firebaseapp.com",
    projectId: "blendz-1e3a0",
    storageBucket: "blendz-1e3a0.appspot.com",
    messagingSenderId: "973878155733",
    appId: "1:973878155733:web:ba66c60bc533496c25c55c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//Sign up 
export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

//login
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

//logout
export function logout() {
    return signOut(auth);
}

//reset password
export function reSetPassword(email) {
    return sendPasswordResetEmail(auth, email);
}

//Custom Hook
export function UseAuth() {
    const [currentUser, setCurrentUser ] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}

