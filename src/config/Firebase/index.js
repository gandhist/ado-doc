import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAS4ArEPDmji7YD1aTZLdEQ2s-71PEvXFo",
    authDomain: "mydocs-22418.firebaseapp.com",
    projectId: "mydocs-22418",
    storageBucket: "mydocs-22418.appspot.com",
    databaseURL: "https://mydocs-22418-default-rtdb.asia-southeast1.firebasedatabase.app",
    messagingSenderId: "4645436566",
    appId: "1:4645436566:web:7d2093321829375a1616b7"
};
// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
} catch (error) {
    firebase.app();
}


const Firebase = firebase;
export default Firebase;