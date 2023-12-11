import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBOo1fui2jPD59csIiwtbMDoj74468IyS4",
  authDomain: "biblioteca-8c5c8.firebaseapp.com",
  projectId: "biblioteca-8c5c8",
  storageBucket: "biblioteca-8c5c8.appspot.com",
  messagingSenderId: "579317861623",
  appId: "1:579317861623:web:5568ee6f5cd7f614d0d7f2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
