import firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyDrd5CU0SIaBw_qsCfVeWfIBDum2IY-IGU",
    authDomain: "barter-app-6fd1f.firebaseapp.com",
    databaseURL: "https://barter-app-6fd1f.firebaseio.com",
    projectId: "barter-app-6fd1f",
    storageBucket: "barter-app-6fd1f.appspot.com",
    messagingSenderId: "501725212497",
    appId: "1:501725212497:web:4d425c5f8c8f0c15bf2d70"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()