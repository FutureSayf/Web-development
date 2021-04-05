import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB0A_dIdshJyhncLg_IfYTzVDLRFKG0RkU",
    authDomain: "reactfirebase-43499.firebaseapp.com",
    projectId: "reactfirebase-43499",
    storageBucket: "reactfirebase-43499.appspot.com",
    messagingSenderId: "802779030020",
    appId: "1:802779030020:web:f102887f474b655934cb51",
    // apiKey: process.env.REACT_APP_FIREBASE_KEY,
    // authDomain: process.env.REACT_APP_AUTHDOMAIN,
    // projectId: process.env.REACT_APP_PROJECTID,
    // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    // appId: process.env.REACT_APP_APPID,
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;