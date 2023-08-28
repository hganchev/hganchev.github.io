import React, { useState, Component, useEffect }  from 'react';
import styled from "styled-components";
import './Projects.css';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

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
            <h5>{project.name}</h5>
          </a>
          <p> {project.date}</p>
          <div className='div-label'>
              <LocalOfferIcon className='label-icon'/>
              <label>{project.label}</label>   
          </div>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img src={project.img}/>
          </a>
        </div>
      ))}
      </div>  
    </div>
  );
}

export default Projects;
