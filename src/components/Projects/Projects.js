import React from 'react';
import './Projects.css';

import gitLogo from './images/github-icon-logo.png'

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
      <h2> Check my github for more: </h2>
      <a href= "https://github.com/hganchev">
        <img className='img-logo' src= {gitLogo} />
      </a>
    </div>
  );
}

export default Projects;
