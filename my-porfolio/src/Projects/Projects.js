import React from 'react';
import './Projects.css';
import PDFPages from '../Tools/PDFPages';

import gitLogo from './images/github-icon-logo.png'
import BachlorThesis from "./projects/BThesis_EN.pdf"
import MasterThesis from "./projects/MThesis_EN.pdf"

function Projects() {
  const containerStyles = {
    width: "800px",
    height: "480px",
    margin: "0 auto",
  }
  return (
    <div id = 'project-page' style={containerStyles}>
      <div>
        <h2>Bachelor Thesis</h2>
        <PDFPages fileUrl={BachlorThesis} />
      </div>
      <div>
        <h2>Magister Thesis</h2>
        <PDFPages fileUrl={MasterThesis} />
      </div>    
      <h2>Check my github for more</h2>
      <a href= "https://github.com/hganchev">
        <img className='img-logo' src= {gitLogo} />
      </a>
    </div>
  );
}

export default Projects;
