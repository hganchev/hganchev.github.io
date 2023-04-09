import React from 'react';
import "./AboutMe.css";

import HIGImage from "./images/HIG_IMG.jpg"
import linkedinLogo from './images/linkedin-icon-logo.png'
import discordLogo from './images/discord-icon-logo.svg'
import gmailLogo from './images/gmail-icon-logo.png'
import fiverrLogo from './images/fiverr-icon-logo.svg'

function AboutMe() {
  return (
    <div id = 'about-page'>   
      {/* Info Section  */}
      <section>
        <div className='container'>
          <div className='side-left'>
            <img src={HIGImage}/>   
          </div>
          <div className='side-right'>
            <h1>
              My name is Hristo Ganchev
            </h1> 
            <p>
              and I am a passionate individual who has a deep interest in the world of technology, robotics, machines, and machine learning.
            </p>
            {/* Print*/}
            <p>
              <span className='print-span'>
                print
              </span>
              <span className='bracket-span'>(</span>
              <span className='message-span'>
                "Everything can be automated. Everything can be controlled. Everything can be programmed."
              </span>
              <span className='bracket-span'>)</span>
            </p>
            <h2>Contact me on the socials : </h2>
            <a href="https://discordapp.com/users/hganchev#7123">
              <img className='img-logo' src={discordLogo}/>
            </a>
            <a href="mailto:hristo.iliev.ganchev@gmail.com">
              <img className='img-logo' src={gmailLogo}/>
            </a>
            <a href= "https://www.linkedin.com/in/hristo-ganchev-5407806a/">
              <img className='img-logo' src= {linkedinLogo} />
            </a>
            <a href="https://www.fiverr.com/users/hganchev">
              <img className='img-logo' src={fiverrLogo} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
