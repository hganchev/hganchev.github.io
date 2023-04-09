import React from 'react';
import './Projects.css';

import BachlorThesis from "./thesis/BThesis_EN.pdf"
import MasterThesis from "./thesis/MThesis_EN.pdf"

function Projects() {
  return (
    <div id = 'project-page'>
      <h1> Projects </h1>
      <div class="grid">
        <div class="item"> project 1 </div>
        <div class="item"> project 2 </div>
        <div class="item"> project 3 </div>
        <div class="item"> project 4 </div>
        <div class="item"> project 5 </div>
        <div class="item"> project 6 </div>
      </div>
      {/* <h2>Programming languages</h2>
        <p>
          <img className='img-logo' src = {clogo}/>
          <img className='img-logo' src = {pylogo}/>
          <img className='img-logo' src = {arduinologo}/>
          <img className='img-logo' src = {matlogo}/>
        </p>  */}

      {/* Thesis  */}
      {/* <SlideControl fileUrl={BachlorThesis}
                      title='Bachlor Thesis'/>
      <SlideControl fileUrl={MasterThesis}
                      title='Master Thesis' /> */}
    </div>
  );
}

export default Projects;
