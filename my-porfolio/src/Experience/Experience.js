import React from 'react';
import './Experience.css'
import linkedinLogo from './images/linkedin-icon-logo.png'
import discordLogo from './images/discord-icon-logo.svg'
import gmailLogo from './images/gmail-icon-logo.png'
import fiverrLogo from './images/fiverr-icon-logo.svg'
import pylogo from './images/python-icon-logo.png'
import clogo from './images/c-icon-logo.png'
import arduinologo from './images/arduino-icon-logo.png'
import matlogo from './images/matlab-icon-logo.png'


function Experience() {
  return (
    <div id="exp-page">
      <h1>Production Engineer at ABB : </h1>
      <p>
        At ABB, I worked on a automated line. My main responsibilities involved control of the flow of materials as well the maintanance of the 
        industrial machines, troubleshooting and resolving technical issues.
      </p>
      <h3>
        Gained skills: teamwork, problem solving.
      </h3>
      <h1>Automation Engineer at KOSTAL : </h1>
      <p>
          At KOSTAL, I worked on software development projects for automotive applications. My primary focus was on designing and implementing software for embedded systems, 
          and I gained experience in C#, Visual Basic, TwinCAT ST programming languages. I also worked on integrating new software modules into existing systems and testing software 
          to ensure compliance with project requirements.
      </p>
      <h3>
        Gained skills: industrial PLC , Camera , Robot programming, compliece with project requirements.
      </h3>
      <h1>Software Design Engineer at SENSATA Technologies : </h1>
      <p>
        At SENSATA Technologies, I was responsible for designing and implementing control systems for HTS(high temperature sensors) equipment. 
        This involved using programming languages such as Structured Text and Ladder Logic, and developing communication protocols to interface with external systems. 
        I also participated in the testing and validation of control systems to ensure their proper functioning.
      </p>
      <h3>
        Gained skills: client oriented development, sofware architecture, industrial simulation (CIROS Studio).
      </h3>
      <h2>Programming languages</h2>
      <p>
        <img className='img-logo' src = {clogo}/>
        <img className='img-logo' src = {pylogo}/>
        <img className='img-logo' src = {arduinologo}/>
        <img className='img-logo' src = {matlogo}/>
      </p>  
      <h2>Check my socials for more : </h2>
      <a href= "https://www.linkedin.com/in/hristo-ganchev-5407806a/">
        <img className='img-logo' src= {linkedinLogo} />
      </a>
      <a href="mailto:hristo.iliev.ganchev@gmail.com">
        <img className='img-logo' src={gmailLogo}/>
      </a>
      <a href="https://discordapp.com/users/hganchev#7123">
        <img className='img-logo' src={discordLogo}/>
      </a>
      <a href="https://www.fiverr.com/users/hganchev">
        <img className='img-logo' src={fiverrLogo} />
      </a>
    </div>
  );
}

export default Experience;
