import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDTlfwkQuUVWFEywgAJOKM9pM0iESWPbuQ",
    authDomain: "crwn-db-e2b33.firebaseapp.com",
    projectId: "crwn-db-e2b33",
    storageBucket: "crwn-db-e2b33.appspot.com",
    messagingSenderId: "614763190857",
    appId: "1:614763190857:web:24ae105fa7231b4ccafd98",
    measurementId: "G-DHD4ZBVGWF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
