import React from 'react'
import {AiFillHtml5,AiFillGithub} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {SiAdobephotoshop} from 'react-icons/si'
import {DiReact,DiAngularSimple,DiMongodb,DiBootstrap} from 'react-icons/di'
import {FaBullseye} from 'react-icons/fa'

function MySkills(props) {
  return (
    <div style={{backgroundColor:"whitesmoke",padding:"10vw"}}>
			<center><h3>My Skills</h3></center>
            <br/>
       <center>
       <h5 style={{backgroundColor:"black",color:"white",padding:"20px",borderRadius:"100px"}}>{<FaBullseye size={20} style={{marginLeft:"15px"}}/>} {props.icons[0]}&nbsp; {<FaBullseye size={20} style={{marginLeft:"15px"}}/>} {props.icons[1]}&nbsp; {<FaBullseye size={20} style={{marginLeft:"15px"}}/>} {props.icons[2]}&nbsp; {<FaBullseye size={20} style={{marginLeft:"15px"}}/>} {props.icons[3]}&nbsp; {<FaBullseye size={20} style={{marginLeft:"15px"}}/>} {props.icons[4]}&nbsp; {<FaBullseye size={20} style={{marginLeft:"15px"}}/>} {props.icons[5]}&nbsp; {<FaBullseye size={20} style={{marginLeft:"15px"}}/>} {props.icons[6]}&nbsp;{<FaBullseye size={20} style={{marginLeft:"15px"}}/>} {props.icons[7]}&nbsp; {<FaBullseye size={20} style={{marginLeft:"15px"}}/>} {props.icons[8]}&nbsp; {<FaBullseye size={20} style={{marginLeft:"15px"}}/>} {props.icons[9]}</h5>
       <br/>
        </center> 
			<marquee Scrollamount="10">
        <AiFillHtml5 size={100} style={{marginRight:"20px"}}/>
				<DiCss3 size={100} style={{marginRight:"20px"}}/>
        <SiJavascript size={75} style={{marginRight:"20px"}}/>
				<FaJava size={75} style={{marginRight:"20px"}}/>
        <DiReact size={75} style={{marginRight:"20px"}}/>
        <DiAngularSimple size={75} style={{marginRight:"20px"}}/>
        <DiMongodb size={75} style={{marginRight:"20px"}}/>
        <DiBootstrap size={75} style={{marginRight:"20px"}}/>
        <SiAdobephotoshop size={75} style={{marginRight:"20px"}}/>
        <AiFillGithub size={75} style={{marginRight:"20px"}}/>
			</marquee>
    </div>
  )
}

export default MySkills