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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("Error Creating User", error.message);
        }
    }

    return userRef;
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
