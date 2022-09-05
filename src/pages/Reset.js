import React, {useEffect, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useHistory, Link} from 'react-router-dom';
import {auth, sendPasswordReset} from '../firebase';

import './Reset.css';

function Reset() {

    const [email, setEmail] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(()=>{
        if(loading) return;
        if (user){
            history.replace('/home')
        }},[user, loading]
    );


  return (
    <div className="reset-container">
        <div className="reset-card">
        <div className="logo">
          <img src="/assets/lock.png" alt="logo" />
        </div>
        <div className="reset-text">
            <h3>Forgot password?</h3>
            <p>Enter the email address you used to signup to <br></br>Safe with Me</p>
        </div>
            <input
                type="text"
                className="reset-textBox"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder='Email Address'
                />
        <button className="reset-button"
            onClick={() => sendPasswordReset(email)}
        >
            Send password reset email
        </button>
        <div className='reset-text'>
            Don't have an account ? <Link to='/register'>Register</Link> now
        </div>
        </div>
    </div>
  )
}

export default Reset