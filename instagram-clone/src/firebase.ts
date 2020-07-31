import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCTHVeyWpcYSMtAdXLsOk9ON9DczePWnNE",
    authDomain: "instagram-clone-react-74386.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-74386.firebaseio.com",
    projectId: "instagram-clone-react-74386",
    storageBucket: "instagram-clone-react-74386.appspot.com",
    messagingSenderId: "886645345819",
    appId: "1:886645345819:web:9b3895c028a87e512d32be",
    measurementId: "G-EPKN632PVY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };