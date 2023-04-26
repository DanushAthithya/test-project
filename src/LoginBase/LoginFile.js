import User from'./users/User';
import Admin from'./users/Admin';
import React from 'react';
import './LoginFile.css';
import jwt_decode from 'jwt-decode';
import { useEffect, useState} from 'react';
import axios from "axios";





function LoginFile() {
  const [col1,setColor1]=useState('rgb(181, 120, 6)');
  const [col2,setColor2]=useState('rgb(255,255,255)');
  const [user, setUser] = useState('');
  const[log,setLog]=useState(0);
  const [button1,setButton]=useState(1);


  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    const foundUser = localStorage.getItem('button');
    if (loggedInUser&&loggedInUser!=='\"\"'&&foundUser) {
      setUser(loggedInUser);
      setButton(foundUser);
    }
    else if(localStorage.button==null)
    {
      localStorage.button=1;
    }
  }, []);

  useEffect(()=>{
    console.log(button1);
    // console.log(user);
    // if(user!=''&&button1)
    // {
    //   localStorage.button=button1;
    // }
    // console.log(button1);
  },[button1]);

  useEffect(()=>{
    console.log(user);
  },[user]);

  const handleCallBackResponse=(resonse)=>{
    var userObject=jwt_decode(resonse.credential);
    var email=userObject.email;
    setUser(email);
    localStorage.user=email;
  };


  const user_id=()=>{
    localStorage.button=1;
    setButton(1);
    setColor1('rgb(181, 120, 6)');
    setColor2('rgb(255,255,255)');
  };

  const admin=()=>{
    localStorage.button=2;
    setButton(2);
    setColor1('rgb(255,255,255)');
    setColor2('rgb(181, 120, 6)');
  };

  const logout=()=>{
    localStorage.clear();
    setUser('');
    user_id();
    setColor1('rgb(181, 120, 6)');
    setColor2('rgb(255,255,255)');
    if(log===1)
    {
      setLog(0);
    }
    else{
      setLog(1);
    }
  };

  const google=window.google;
  useEffect(()=>{
    google.accounts.id.initialize({
      client_id:"717058720575-94tqudvia8ooa5741k9j8gmgu0psg94n.apps.googleusercontent.com",
      callback:handleCallBackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("SignInButton"),
      {theme:"outline",size:"x-larger"}

    );},[log]);
    
    
    
    if(user=='')
    {
      return (
          <div className="LoginFile bg-gradient-to-r from-zinc-950 via-indigo-800 to-zinc-950s">
              <div id="Log_box" className='bg-gradient-to-r from-zinc-950 via-indigo-800 to-zinc-950'>
                <div id="logo">
                  <img src={logo} />
                </div>
                <div id="head">
                  <h1>Sign In</h1>
                  <p>Sign In To Continue</p>
                </div>
                <div id="UserInf">
                    <button style={{background:col1}} id="User" className='commonButton' onClick={user_id}>User</button>
                    <button style={{background:col2}} id="Admin" className='commonButton' onClick={admin}>Admin</button>
                </div><br/><br/>
                <div id="SignInButton"></div>
              </div>
          </div>
      );
    }
    else if(button1==1)
    {
      return(
        <div>
      <User />
      <p>Email:{user}</p><br/>
      <button onClick={logout}>Logout</button>
      <p>Button:{button1}</p>
      </div>
      );
    }
    else if(button1==2)
    {
      return(
        <div>
        <Admin />
        <p>Email:{user}</p>
        <button onClick={logout}>Logout</button>
        <p>Button:{button1}</p>
        </div>
      );
      }
    
}

export default LoginFile;





