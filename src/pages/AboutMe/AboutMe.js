import React from 'react';
import "./AboutMe.css";
import resumeData from '../../utils/resumeData';
import PrintView from '../../utils/PrintView';

function AboutMe() {
  return (
    <div className='about'>   
      {/* Info Section  */}
      <h1>
        Hristo Ganchev
      </h1> 
      <h2>
        Software Engineer
      </h2>
      <div className='about-picture'>
        {resumeData.picture}
      </div>
      <p>
        I am a passionate individual who has a deep interest in the world of technology, robotics, machines, and machine learning.
      </p>
      {/* Print*/}
      <PrintView message="Everything can be automated!"/>
      <PrintView message="Everything can be controlled!"/>
      <PrintView message="Everything can be programmed!"/>

    </div>
  );
}

export default AboutMe;
