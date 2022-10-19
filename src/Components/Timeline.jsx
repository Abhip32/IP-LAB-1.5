import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react'
import {SiNvidia,SiIntel,SiAdobeacrobatreader} from 'react-icons/si'


function Timeline() {
  return (
    <div style={{margin:"5vw"}}>
        <center> <div style={{display:"flex",gap:"20px",alignItems:"center",padding:"20px",backgroundColor:"#8500be",color:"white",borderRadius:"20px"}}>
      <img style={{width:"100px",height:"100px",borderRadius:"100px"}} src="https://cdn-icons-png.flaticon.com/512/189/189468.png"/>
      <h3 style={{fontWeight:"700"}}>Work Experience</h3>
    </div></center>
        <VerticalTimeline style={{margin:"5vw"}}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'greenyellow', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  black' }}
    date="2022 - present"
    iconStyle={{ background: 'greenyellow', color: 'black' }}
    icon={<SiNvidia/>}
  >
    <h3 className="vertical-timeline-element-title">Graphics Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Nvidia</h4>
    <p>
    A graphic designer is a professional within the graphic design and graphic arts industry who assembles together images, typography, or motion graphics to create a piece of design. A graphic designer creates the graphics primarily for published, printed, or electronic media, such as brochures and advertising.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018 - 2020"
    contentStyle={{ background: '#0071c5', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  black' }}
    iconStyle={{ background: '#0071c5', color: '#fff' }}
    icon={<SiIntel/>}
  >
    <h3 style={{color:"white"}} className="vertical-timeline-element-title">Web Developer</h3>
    <h4 style={{color:"white"}} className="vertical-timeline-element-subtitle">Intel</h4>
    <p style={{color:"white"}}>
    A web developer’s job is to create websites. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website’s performance and capacity.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2016 - 2018"
    contentStyle={{ background: '#F40F02', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  black' }}
    iconStyle={{ background: '#F40F02', color: '#fff' }}
    icon={<SiAdobeacrobatreader/>}
  >
    <h3 style={{color:"white"}} className="vertical-timeline-element-title">Software Engineer</h3>
    <h4 style={{color:"white"}} className="vertical-timeline-element-subtitle">Adobe</h4>
    <p style={{color:"white"}}>
    A web developer’s job is to create websites. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website’s performance and capacity.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  )
}

export default Timeline