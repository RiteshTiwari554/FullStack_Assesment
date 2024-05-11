'use client'
import React, { useRef, useState } from 'react';
import { auth } from '../firebase';
import './SigninScreen.css';
import { signInWithEmailAndPassword} from 'firebase/auth';
import SignupScreen from './Signup';

function SigninScreen({onlogfunc}) {
  const [signUp, setSignUp] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
    .then((authUserCredential) => {
      const authUser = authUserCredential.user;
    })
      .catch((error) => {
        alert(error.message);
      });

      onlogfunc();
  };

  return (
    // <div>
    //   {signUp ? (
    //     <SignupScreen />
    //   ) : (
        <>
          <div className='signinScreen'>
            <form>
              <h1>Log In</h1>
              <input ref={emailRef} placeholder='Email' type='email' name='email' />
              <input ref={passwordRef} placeholder='Password' type='password' />
              <button type='submit' onClick={signIn}>
                Log In
              </button>
              <h4>
              </h4>
            </form>
          </div>
        </>
    //   )}
    // </div>
  );
}

export default SigninScreen;
