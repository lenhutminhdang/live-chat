import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8n-0L7KRo_V3yP3cc4frC77uTBOStcXQ",
  authDomain: "livechat-ec535.firebaseapp.com",
  projectId: "livechat-ec535",
  storageBucket: "livechat-ec535.appspot.com",
  messagingSenderId: "47117953625",
  appId: "1:47117953625:web:4d966ea071a833aa9e1f48",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
