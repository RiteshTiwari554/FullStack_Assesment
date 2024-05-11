'use client'
import React, { useRef, useState } from 'react';
import { auth } from '../firebase';
import './SignupScreen.css';
import SigninScreen from './Signin';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword} from 'firebase/auth';


function SignupScreen({ email,onfunc }) {
  const [newEmail, setNewEmail] = useState(email);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((authUserCredential) => {
      const authUser = authUserCredential.user;
    })
    .catch((error) => {
      alert(error.message);
      
    });
    onfunc();
};

  return (
    // <div>
    //   {signIn ? (
    //     <SigninScreen />
    //   ) : (
        <>
          <div className='signupScreen'>
            <form>
              <h1>Sign Up</h1>
              <input
                name='email'
                ref={emailRef}
                placeholder='Email'
                type='email'
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <input ref={passwordRef} placeholder='Password' type='password' />
              <button type='submit' onClick={register}>
                Sign Up
              </button>
              <h4>
                {/* <span className='signupScreen__gray'>Already have an account? </span>
                <span className='signupScreen__link' onClick={() => setSignIn(true)}>
                  Sign In.
                </span> */}
              </h4>
            </form>
          </div>
        </>
    //   )}
    // </div>
  );
}

export default SignupScreen;
