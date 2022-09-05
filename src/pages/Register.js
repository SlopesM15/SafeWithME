import React, {useEffect, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Link, useHistory} from 'react-router-dom';
import{
    auth,
    registerWithEmailAndPassword} from '../firebase';
import './Register.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    const register = () => {
        registerWithEmailAndPassword(name, email, password);
    };

    useEffect(()=>{
        if(loading) return;
        if(user) history.replace('/home');
    },[user, loading]);

  return (
    <div className='register'>
        <div className='register-card'>
        <div className="logo">
          <img src="/assets/SWM_logo1.jpg" alt="logo" />
        </div>

        <div className="register-text">
          <h2>Sign into your account</h2>
        </div>
            <input
            type='text'
            className='register-textbox'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder='Fullname'
            />
            <input
            type='text'
            className='register-textbox'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder='Email'
            />
            <input
            type='password'
            className='register-textbox'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='Password'
            />
            <button
            className='register-button'
            onClick={register}>Get Started</button>
            <div>
                Already have an account? <Link to='/Login'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Register