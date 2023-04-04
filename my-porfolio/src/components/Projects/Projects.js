import React from 'react';
import './Projects.css';

import gitLogo from './images/github-icon-logo.png'

function Projects() {
  return (
    <div id = 'project-page'>
      <div className='page'>
        <h3> To be add </h3>
        <h2> Check my github for more: </h2>
        <a href= "https://github.com/hganchev">
          <img className='img-logo' src= {gitLogo} />
        </a>
      </div>
    </div>
  );
}

export default Projects;
