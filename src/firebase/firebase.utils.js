import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBn5vVrNm9e3GEV2VyFv9D8S8OFFTksFus",
    authDomain: "crwn-db-1b44a.firebaseapp.com",
    projectId: "crwn-db-1b44a",
    storageBucket: "crwn-db-1b44a.appspot.com",
    messagingSenderId: "86172110377",
    appId: "1:86172110377:web:a60ff75f7c247484939638",
    measurementId: "G-RNMR5SQGNH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;