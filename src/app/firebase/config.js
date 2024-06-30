// firebaseConfig.js
import firebase from "firebase/app";
import "firebase/auth"; // Only include what you need
import "firebase/firestore"; // Only include what you need

const firebaseConfig = {
  apiKey: "AIzaSyDbOuaQUJpZ85-HCRVIFBOLyLLehuBjJEM",
  authDomain: "pkr-job.firebaseapp.com",
  projectId: "pkr-job",
  storageBucket: "pkr-job.appspot.com",
  messagingSenderId: "639973779202",
  appId: "1:639973779202:web:5bbf4f50c11fe1861e041b",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
