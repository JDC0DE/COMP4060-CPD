// Import the functions you need from the SDKs you need
import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, updateProfile } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSqWq6zHc_48D1gJ4Wa_FCr4VCoHFyINE",
  authDomain: "greenhouse-datahandler.firebaseapp.com",
  projectId: "greenhouse-datahandler",
  storageBucket: "greenhouse-datahandler.appspot.com",
  messagingSenderId: "1002396336307",
  appId: "1:1002396336307:web:3ab8cb7109ef4ade10f0c6"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
export { updateProfile };
