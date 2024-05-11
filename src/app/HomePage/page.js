'use client'
import "../globals.css";
import Image from "next/image";
import logo from '../../assets/logo.png';
import back from '../../assets/back.png';
import telescope from '../../assets/telescope1.png';
import forw from '../../assets/forward.png';
import bar from '@/assets/bar.png';
import { data } from "@/utils/data";
import Temp from "../component/Temp";
import rocket from '@/assets/rocket.png';
import aichip from '@/assets/aichip.png';
import { UserAuth } from "../context/AuthContext";


export default function HomePage() {
  const {logOut} = UserAuth();
  const signOut = async()=>{
    try{
      await logOut();
    } catch(error)
    {
      console.log(error);
    }
 }
    return (
      <main className="Homecontainer">
         <div className="frame483">
            <div className="bar">
              <Image className="barImg" src={bar}/>
            </div>
            <div className="Mlogop">
              <Image src ={logo} className="Mlogopng" alt ="logo" />
              <h3 
              className=" font Msignouttxt"
              onClick={signOut}>Sign Out</h3>
              </div>
              <Image src ={logo} className="logopng" alt ="logo" />
              <h3 
              className="signouttxt"
              onClick={signOut}>Sign Out</h3>      
         </div>
         <div className="frame489">
            <div className="frame13">
                <h3 className="font">Popular Topics 🔥</h3>
                <div className="frame485">
                <Image src ={back} className="backpng" alt ="back" />
                <Image src ={forw} className="forpng" alt ="forw" />
                </div>
            </div>
            <div className="frame486">
              {
                data.map((item,index)=>
              {
                return(
                  <Temp key={index} {...item}/> 
              );
              })
              }
            </div>
            <main className="gp61">
              <Image className="gp61Img" src={telescope} alt="gpImg"/>
              <div className="gpread">
                <h3>READ</h3>
              </div>
            </main>
         </div>


           {/* Mobile View */}

               <div className="Mframe15">
                  <h3 className="ppt">Popular Topics 🔥</h3> 
                   <div className="Mframe12">
                      <div className="Mframe3">
                          <div className="IRS">
                              <Image src={rocket} className="IRSimg"/>
                              <h3 className="font IRSttl">Introduction to Rocket Science</h3>
                              <h3 className="font IRSdesc">Covers fundamentals, design, construction, operation and programming of robots.</h3>
                          </div>
                          <div className="IRS IRS1">
                          <Image src={aichip} className="IRSimg"/>
                              <h3 className="font IRSttl">Artificial Intelligence</h3>
                              <h3 className="font IRSdesc">Covers fundamentals, design, construction, operation and programming of robots.</h3>
                          </div>
                      </div>
                  </div> 
              </div> 

       </main>
    );
};  
