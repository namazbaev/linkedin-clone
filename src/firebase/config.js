import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDdAJRBKL8NfC8Np9C1RT_Foaif66nhYjE",
  authDomain: "linkedin-clone-2e0f1.firebaseapp.com",
  projectId: "linkedin-clone-2e0f1",
  storageBucket: "linkedin-clone-2e0f1.appspot.com",
  messagingSenderId: "807379413519",
  appId: "1:807379413519:web:5756ce60e8688cf02b917a"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();
export { db, auth, provider, storage }