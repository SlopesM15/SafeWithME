import React, {useEffect,useState} from "react";
import {auth, LogInwithEmailAndPassowrd } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import { Link, Redirect, Route, useHistory } from "react-router-dom";



import "./Login.css";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

useEffect(() => {
  if(loading){
    return;
  }
  if (user){
    history.replace('/home')
 }
},[user, loading]);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img src="/assets/SWM_logo1.jpg" alt="logo" />
        </div>

        <div className="login-text">
          <h2>Sign into your account</h2>
        </div>
        <input
          type="text"
          className="login-textBox"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <input
          type="password"
          className="login-textBox"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="login-text-container">
        <div className="login-pass">
          <a href="/Reset">Forgot your password?</a>
        </div>
        <div className="login-create">
          <p>Don't have an account ?<a href="/register"> Create</a></p>
        </div>
        </div>
        <button className="login-button" onClick={()=> LogInwithEmailAndPassowrd(email, password)}>Login</button>
      </div>
    </div>
  );
}

export default Login;
