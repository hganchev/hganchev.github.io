import React from 'react';
import './Experience.css'
import linkedinLogo from './images/linkedin-icon-logo.png'

function Experience() {
  return (
    <div id="exp-page">
      <h1>My Experience</h1>
      <p>Automation Engineer at ABB
          At ABB, I worked on a range of automation projects, including programming PLCs, HMI, SCADA, and robotics. My main responsibilities involved designing and 
          implementing control systems for industrial machines, troubleshooting and resolving technical issues, and testing and validating software.
        </p>
        <p>Software Engineer at KOSTAL
            At KOSTAL, I worked on software development projects for automotive applications. My primary focus was on designing and implementing software for embedded systems, 
            and I gained experience in C, C++, and Python programming languages. I also worked on integrating new software modules into existing systems and testing software 
            to ensure compliance with project requirements.
        </p>
        <p>Controls Engineer at SENSATA Technologies
          At SENSATA Technologies, I was responsible for designing and implementing control systems for HVAC (heating, ventilation, and air conditioning) equipment. 
          This involved using programming languages such as Structured Text and Ladder Logic, and developing communication protocols to interface with external systems. 
          I also participated in the testing and validation of control systems to ensure their proper functioning.
        </p>
        <a href= "https://www.linkedin.com/in/hristo-ganchev-5407806a/"><img src= {linkedinLogo} /></a>
    </div>
  );
}

export default Experience;
