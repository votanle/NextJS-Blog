import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDzTgFYYXj_Ob6GyZu1c-12N4SQBY0jQLI",
    authDomain: "blog-c3244.firebaseapp.com",
    projectId: "blog-c3244",
    storageBucket: "blog-c3244.appspot.com",
    messagingSenderId: "880498887215",
    appId: "1:880498887215:web:6fd7e5e2324189022754da",
    measurementId: "G-7QRY5R8E3H"
}

if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp()

export { auth, db, storage, serverTimestamp }
