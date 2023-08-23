import React, { useState, Component, useEffect }  from 'react';
import styled from "styled-components";
import './Projects.css';

import projectData from '../../utils/projectsData';

function Projects() {
  return (
    <div className='projects'>
      <div className='section_title al_center'>
        <span></span>
        <h1 className='section_title_text s_40'> Projects </h1>
      </div>
      <div class="grid">
      {projectData.projects.map((project) => (
        <div class="item">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {/* <img src={'../thesis/HIG_IMG.jpg'}/> */}
            {project.name}
          </a>
        </div>
      ))}
      </div>  
    </div>
  );
}

export default Projects;
