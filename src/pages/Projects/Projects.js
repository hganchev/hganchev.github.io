import React, { useState, Component, useEffect }  from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={`/portfolio/${project.id}`}>
            <h5>{project.name}</h5>
          </Link>
          <p> {project.date}</p>
          <div className='div-label'>
              <LocalOfferIcon className='label-icon'/>
              <label>{project.label}</label>   
          </div>
          <Link to={`/portfolio/${project.id}`}>
            <img src={project.img}/>
          </Link>
        </div>
      ))}
      </div>  
    </div>
  );
}

export default Projects;
