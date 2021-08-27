// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDtZWDLBZs6fmmBMZ8BV2pZnsjLmt3MAZY",
    authDomain: "clone-ae238.firebaseapp.com",
    projectId: "clone-ae238",
    storageBucket: "clone-ae238.appspot.com",
    messagingSenderId: "591686223523",
    appId: "1:591686223523:web:f182869757aeeb49f82116",
    measurementId: "G-N78F4H0ZZ8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };