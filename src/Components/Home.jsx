import React from 'react'
import Image from 'react-bootstrap/Image'
import {useRef} from 'react';
import "./Home.css"
import Typewriter from 'typewriter-effect';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import Timeline from './Timeline';
import ContactMe from './ContactMe';
import {AiOutlineArrowDown} from 'react-icons/ai'
import Navbar from "./Navbar"
import BackgroundImage from '../Assets/home-bg.jpg'
import {AiFillHtml5,AiFillGithub} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {SiAdobephotoshop} from 'react-icons/si'
import {DiReact,DiAngularSimple,DiMongodb,DiBootstrap} from 'react-icons/di'

new Typewriter('#typewriter', {
    strings: ['Hello', 'World'],
    autoStart: true,
  });


function Home() {
    const ref = useRef(null);
    const scollToRef = useRef();

    const handleClick = () => {
        scollToRef.current?.scrollIntoView({behavior: 'smooth'});
      };
      
  return (
   <div >
        <Navbar type="Home"/>
        <div
        className="article"
        style={{ backgroundImage: `url(https://raw.githubusercontent.com/Abhip32/portfolio/main/src/Assets/home-bg.jpg)`,height:'100vh',width:'100%' }}
        >

        <div className="header" style={{display:"flex",gap:"40px",alignItems:"center"}}>
            <Image style={{width:"100px",height:"90px",borderRadius:"100px"}} fluid src='https://abhip32.github.io/IP-LAB-1.1/Assets/profile-pic%20(2).png'/>
            <div style={{width:"400px"}}>
                <h2>Hello </h2>
                <h2 style={{padding:"20px",backgroundColor:"white",color:"black",borderRadius:"40px"}}>I am Abhishek Patil</h2>
                <p onClick={handleClick}><h5>Click to Scroll Down</h5><AiOutlineArrowDown size={30}/></p>
                
                <h4>
                <Typewriter
                    
                    options={{
                        strings: ['Internet Programming Lab on React Js','Portfolio Website'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </h4>
              
            </div>
        </div>
        </div>

        <div ref={scollToRef}>
            <AboutMe/>
        </div>

        <div>
            <MySkills icons={["HTML","CSS","JS","Java","React Js"," Angular Js","MongoDB","BootStrap","Photoshop","GitHub"]}/>
        </div>

        <div>
            <Timeline/>
        </div>

        <div>
            <ContactMe/>
        </div>
   </div>
  )
}

export default Home