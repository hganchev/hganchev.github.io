import React from 'react';
import styled from "styled-components";
import SlideControl from "../../components/SlideControl";
import './Projects.css';

import BachlorThesis from "./thesis/BThesis_EN.pdf"
import MasterThesis from "./thesis/MThesis_EN.pdf"

function Projects() {
  return (
    <div className='projects'>
      <div className='section_title al_center'>
        <span></span>
        <h1 className='section_title_text s_40'> Projects </h1>
      </div>
      <div class="grid">
        <div class="item"> 
          <SlideControl fileUrl={BachlorThesis}
                        title='Bachlor Thesis'/>
        </div>
        <div class="item">           
          <SlideControl fileUrl={MasterThesis}
                        title='Master Thesis' />
        </div>
        <div class="item"> project 3 </div>
        <div class="item"> project 4 </div>
        <div class="item"> project 5 </div>
        <div class="item"> project 6 </div>
      </div>  
    </div>
  );
}

export default Projects;
