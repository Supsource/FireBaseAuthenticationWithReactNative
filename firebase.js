import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCcR4tMdyVBNEY9-naz35GmHycPrVFt0Rw",
  authDomain: "auth-v2-d8653.firebaseapp.com",
  projectId: "auth-v2-d8653",
  storageBucket: "auth-v2-d8653.appspot.com",
  messagingSenderId: "298559473535",
  appId: "1:298559473535:web:06a1d4e2246bf26303fc4a"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };