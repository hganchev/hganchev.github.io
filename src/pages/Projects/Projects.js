import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import './Projects.css';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import projectData from '../../utils/projectsData';
// import ErrorBoundary from '../../components/ErrorBoundary';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [label, setLabel] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setProjects(projectData.projects);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return label === 'All'
      ? projects
      : projects.filter(project => project.label === label);
  }, [projects, label]);

  const ProjectCard = React.memo(({ project }) => (
    <div className="item">
      <div>
        <h5>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
        </h5>
      </div>
      <p> {project.date}</p>
      <div className="div-label">
        <LocalOfferIcon className="label-icon"/>
        <label>{project.label}</label>
      </div>
      <img src={project.img}/>
    </div>
  ));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    // <ErrorBoundary>
      <div className='projects'>
        <div className='section_title al_center'>
          <span></span>
          <h1 className='section_title_text s_40'>Projects</h1>
        </div>
        <div className="dropdown">
          <select className='select' onChange={(e) => setLabel(e.target.value)}>
            <option value='All'>All</option>
            <option value='Thesis'>Thesis</option>
            <option value='Work'>Work</option>
          </select>
        </div>
        <div className="grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    // </ErrorBoundary>
  );
}

export default Projects;
