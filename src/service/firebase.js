import firebase from "firebase/app";
import "firebase/auth";

const authApp = firebase.initializeApp({
    apiKey: "",
    messagingSenderId: "",
    appId: ""
});

export default authApp;