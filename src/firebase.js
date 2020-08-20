import firebase from 'firebase/app';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCAbdIauO7TII-hhluUjKw471YazWbIb7M",
    authDomain: "enquire-aefbf.firebaseapp.com",
    databaseURL: "https://enquire-aefbf.firebaseio.com",
    projectId: "enquire-aefbf",
    storageBucket: "enquire-aefbf.appspot.com",
    messagingSenderId: "666228104843",
    appId: "1:666228104843:web:a8ee0e13564fabc8553e8e",
    measurementId: "G-K28NLXXF4S"
  };
  var firebaseConfigObject = firebase.initializeApp(firebaseConfig);

export default firebaseConfigObject;