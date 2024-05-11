'use client'
import Image from "next/image";
import styles from "./page.module.css";
import bgImg from '../assets/bg.png';
import MbgImg from '../assets/Mbg.png';
import google from '../assets/google.png';
import msg from '../assets/Message.png';
import bar from '../assets/bar.png';
import logo from '../assets/logo.png';
import { UserAuth } from "./context/AuthContext";
import HomePage from "./HomePage/page";
import SignupScreen from "./component/Signup";
import { useState } from "react";
import SigninScreen from "./component/Signin";
export default function Home() {
   const[email, setEmail] = useState(false);
   const[login, setLogin] = useState(false);
   const {user, googleSignIn, emailSignIn, logOut} = UserAuth();

   const handleSigin = async()=>{
      try{
        await googleSignIn();
      } catch(error)
      {
        console.log(error);
      }
   }
   const handlelogin = ()=>
   {
       setLogin(!login);

   }
   const handleemailSigin = async()=>{
        setEmail(!email);
 }
  return (!user?(
    <main className="signup">
        <div className="bar">
        <Image className="barImg" src={bar}/>
        </div>
        <div className="frame581">
          <Image src={bgImg} className ="bgImg" alt="bgImg"/>
          <div className="boxxf"/>
          <div className="frame562">
            <h3 className="font frame562txt">Journey to a trillion miles starts from here!!</h3>
          </div>
        </div>

        <div className="frame574">
            <div 
            className="Signbox">
                <h3 className=" font signheader">Sign up</h3>
                <h3 className=" font signttl">Choose a sign up method</h3>
            </div>
            <div className="frame567">
              <div className="frame18">
                  <div 
                  className="frame564"
                  onClick={handleSigin}
                  >
                      <Image src={google} className="googlepng" alt="google"/>
                      <h3 className=" font gglsigntxt">Sign up with Google</h3>
                  </div>
              <div 
              className=" frame18 bbx"
              onClick={handleemailSigin}
              >
                  <div className="frame564">
                      <Image src={msg} className="googlepng" alt="google"/>
                      <h3 className=" font gglsigntxt">Sign up with Email</h3>
                  </div>
              </div>
              
              </div>
            </div>
            <div className="reflectContainer">
              <h3 className=" font captions">Already a user? <a onClick={handlelogin}>Log in</a></h3>
            </div>

        </div>

        {/* Mobile */}
        <div className="Mframe581">
       <Image src={MbgImg} className ="MbgImg" alt="bgImg"/>
        </div>
        <div className="Mframe562">
              <Image src ={logo} className="mobilelogo" alt ="logo" />
              <h3 className="font Mesignouttxt">Journey to a trillion miles starts from here!!</h3>
         </div>
         {(email)===true  && <SignupScreen onfunc = {()=>setEmail(false)}/>}
         {(login)===true  && <SigninScreen onlogfunc = {()=>setLogin(false)}/>}
    </main>):(<HomePage/>)
  );
}
