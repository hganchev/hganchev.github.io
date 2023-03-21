import React from 'react';
import './Skills.css';
import pylogo from './images/python-icon-logo.png'
import clogo from './images/c-icon-logo.png'
import arduinologo from './images/arduino-icon-logo.png'
import matlogo from './images/matlab-icon-logo.png'

function Skills() {
  return (
    <div id='skills-page'>
      <p>
        <img src = {clogo}/>
        <img src = {pylogo}/>
        <img src = {arduinologo}/>
        <img src = {matlogo}/>
      </p>      
    </div>
  );
}

export default Skills;
