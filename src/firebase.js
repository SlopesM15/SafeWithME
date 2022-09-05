// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from 'firebase/auth';

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0R-OW0EEys2Dlpb5DARU016V0q4_5QkU",
  authDomain: "safe-with-me-01.firebaseapp.com",
  projectId: "safe-with-me-01",
  storageBucket: "safe-with-me-01.appspot.com",
  messagingSenderId: "992028967361",
  appId: "1:992028967361:web:0328f5d05a1d29af50af40"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const LogInwithEmailAndPassowrd  = async (email, password) =>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }catch(err){
        console.error(err);
        alert(err.message);
    }
}

const registerWithEmailAndPassword = async (name, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res);
        const user = res.user;
        await addDoc(collection(db,'users'),{
            uid: user.uid,
            name,
            authProvider:'local',
            email,
        })
    }catch(err){
        console.error(err);

    }
}

const sendPasswordReset = async (email) =>{
    try{
        await sendPasswordResetEmail(auth, email);
        alert('Password reset link has been sent');
        console.log(email);
    }catch (err){
        console.error(err);
        alert(err.message);
    }
}

const logout = () =>{
    signOut(auth);
}

export {
    auth,
    db,
    LogInwithEmailAndPassowrd ,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};