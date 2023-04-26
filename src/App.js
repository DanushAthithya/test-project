
import "./App.css";
import { signInWithGoogle } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from './Firebase';
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import PhoneVer from './phonever';
import logo from './logo.png'

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
    <div className="App bg-gradient-to-r from-zinc-950 via-indigo-800 to-zinc-950s">
        <div className="bg-gradient-to-r from-zinc-950 via-indigo-800 to-zinc-950 Log_box">
          <div id="logo">
            <img src={logo} />
          </div>
          <div id="head">
            <h1>Sign In</h1>
            <p>Sign In To Continue</p>
          </div>
          <input type="text" name="username" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
          <br/>
          <input type="password" name="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
          <br/>
          <button onClick={SignIn}>Sign In</button>
          <br/>
          <br/>
          <button class="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
          <h1>{localStorage.getItem("name")}</h1>
          <h1>{localStorage.getItem("email")}</h1>
          <img src={localStorage.getItem("profilePic")} />
          <br/>
          <br/>
          <br/>
          <a  class="button_Phn" href="/Phone" >Sign In with Phone</a>
        </div>
    </div>
  );
  }
}

export default App;