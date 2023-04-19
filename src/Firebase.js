import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBrxHoj-MWmcjRfIEkjIDMYl8mttjczENM",
    authDomain: "samplelogin-2812.firebaseapp.com",
    projectId: "samplelogin-2812",
    storageBucket: "samplelogin-2812.appspot.com",
    messagingSenderId: "152772356612",
    appId: "1:152772356612:web:556f086d938aea8b6b6351",
    measurementId: "G-KRV0X4ZM82"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};