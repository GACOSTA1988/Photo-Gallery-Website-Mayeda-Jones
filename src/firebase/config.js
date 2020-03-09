import firebase from "firebase/app";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyB9n3L4Jr039LIkq6cNDCmUOusm6r7-Uz4",
  authDomain: "josh-mayeda-jones-gallery.firebaseapp.com",
  databaseURL: "https://josh-mayeda-jones-gallery.firebaseio.com",
  projectId: "josh-mayeda-jones-gallery",
  storageBucket: "josh-mayeda-jones-gallery.appspot.com",
  messagingSenderId: "98940417724",
  appId: "1:98940417724:web:795f8f2eaea6d2667c02b9",
  measurementId: "G-BNQ4F7F5QW"
};

firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
