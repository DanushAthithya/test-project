
import "./App.css";
import { signInWithGoogle } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from './Firebase';
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import PhoneVer from './phonever';
import logo from './logo.png'
import { FaPhoneAlt } from 'react-icons/fa';
import GoogleFonts from 'google-fonts';

function App() {

const auth = getAuth(app);

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


const SignIn=()=>{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("Success");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
}
  const currPath = window.location.pathname;

  if(currPath==='/Phone')
  {
    return <PhoneVer/>
  }
  else
  {
  return (
    <div className="App bg-white">
        <div className="bg-gradient-to-r from-zinc-950 via-indigo-800 to-zinc-950 pb-4 Log_box mx-auto d-block">
          <br/>
          <br/>
          <div id="logo" className="mx-auto d-block">
            <img src={logo} />
          </div>
          <br />
          <p className="hd">Sign In</p>
          <div id="head">
          </div>
          <input className="in1 mb-5 mt-5 text-black rounded-lg p-2" type="text" name="username" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
          <br/>
          <input className="in2 mb-5 text-black rounded-lg p-2" type="password" name="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
          <br/>
          <button className="bg-orange-400 p-2 pl-8 pr-8 text-black rounded-lg m-3 sig" onClick={SignIn}>Sign In</button>
          <br/>
          <br/>
          <button class="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
          <br/>
          <br />
          <a className="button_Phn btn-success bg-white-900 rounded mb-8" href="/Phone">
            <FaPhoneAlt className="text-green-300" />
            Sign In with Phone
          </a>
        </div>
    </div>
  );
  }
}

export default App;