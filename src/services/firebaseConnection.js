import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCJg0W-Mwf_3WzeuohQv4rM-nsAqnwdRBU",
    authDomain: "fir-turtle-53625.firebaseapp.com",
    projectId: "fir-turtle-53625",
    storageBucket: "fir-turtle-53625.appspot.com",
    messagingSenderId: "901500946738",
    appId: "1:901500946738:web:ae91d4fd865ecda3bc2f2b",
    measurementId: "G-3KJRHXEKCR"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();

  export const database = firebase.firestore();
