import firebase from './config/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0ogasrbUc6aj-2E6n9oTu67cu5F5qt7M",
    authDomain: "loginform-6ccdf.firebaseapp.com",
    databaseURL: "https://loginform-6ccdf.firebaseio.com",
    projectId: "loginform-6ccdf",
    storageBucket: "loginform-6ccdf.appspot.com",
    messagingSenderId: "290514241866",
    appId: "1:290514241866:web:4d32a600ff9283133e19b3",
    measurementId: "G-Y715ZW1MY4"
  };
   firebase.initializeApp(firebaseConfig);



export default firebase;