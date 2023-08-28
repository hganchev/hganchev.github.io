import React, { useState, Component, useEffect }  from 'react';
import styled from "styled-components";
import './Projects.css';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import projectData from '../../utils/projectsData';

function Projects() {
  const [label, setLabel] = useState('All');
  const [projects, setProjects] = useState(projectData.projects);

  // filter projects based on the label and update the projects state
  useEffect(() => {
    if(label === 'All'){
      setProjects(projectData.projects);
    } else {
      const filteredProjects = projectData.projects.filter(project => project.label === label);
      setProjects(filteredProjects);
    }
  }, [label]);

  return (
    <div className='projects'>
      <div className='section_title al_center'>
        <span></span>
        <h1 className='section_title_text s_40'> Projects </h1>
      </div>
      {/* add dropdown menu and attach action when selection change*/}
      <div className="dropdown">
        <select className='select' onChange={(e) => setLabel(e.target.value)}>
          <option value='All'>All</option>
          <option value='Thesis'>Thesis</option>
          <option value='Work'>Work</option>
        </select>
      </div>
      <div class="grid">
      {projects.map((project) => (
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
