import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCJg0W-Mwf_3WzeuohQv4rM-nsAqnwdRBU",
    authDomain: "fir-turtle-53625.firebaseapp.com",
    projectId: "fir-turtle-53625",
    storageBucket: "fir-turtle-53625.appspot.com",
    messagingSenderId: "901500946738",
    appId: "1:901500946738:web:ae91d4fd865ecda3bc2f2b",
    measurementId: "G-3KJRHXEKCR"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);