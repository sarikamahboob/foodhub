// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC42uCNNN_YCi3pfQ6skfBOtdBrWrzz-dU",
  authDomain: "foodhub-871c7.firebaseapp.com",
  projectId: "foodhub-871c7",
  storageBucket: "foodhub-871c7.appspot.com",
  messagingSenderId: "486211190201",
  appId: "1:486211190201:web:7a8545a56c1888b9a8ca68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
