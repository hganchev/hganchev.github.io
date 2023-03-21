import React from 'react';
import './Skills.css';
import pylogo from './images/python-icon-logo.png'
import clogo from './images/c-icon-logo.png'
import arduinologo from './images/arduino-icon-logo.png'

function Skills() {
  return (
    <div>
      <h1>My Skills</h1>
      <p>
        <img src = {clogo}/>
        <img src = {pylogo}/>
        <img src = {arduinologo}/>
      </p>      
    </div>
  );
}

export default Skills;
