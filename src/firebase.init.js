// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmHd2EUYyJX6ojdudNwQPb9huPWets0HI",
  authDomain: "genius-car-service-auth-3387e.firebaseapp.com",
  projectId: "genius-car-service-auth-3387e",
  storageBucket: "genius-car-service-auth-3387e.appspot.com",
  messagingSenderId: "801913671626",
  appId: "1:801913671626:web:61356b8793380331944933"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
