import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBvElCPLnTgsUWx9vCXT4Uzsp4yGPOINbk",
    authDomain: "healthabit-fcb7b.firebaseapp.com",
    projectId: "healthabit-fcb7b",
    storageBucket: "healthabit-fcb7b.appspot.com",
    messagingSenderId: "207671042231",
    appId: "1:207671042231:web:b0771d837e188c6e87ad32",
    measurementId: "G-5F5EHKXVGB"
});

export const db = firebaseApp.firestore();