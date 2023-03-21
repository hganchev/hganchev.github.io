import React from 'react';
import './Projects.css';
import ImageSlider from '../Tools/ImageSlider'
import imageArd from './images/ArduinoPiano.png'
import gitLogo from './images/github-icon-logo.png'

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));

function Projects() {
  const slides = [
    { url: imageArd, title: "rubik" },
    { url: images[0], title: "rubik1" }
  ];
  const containerStyles = {
    width: "800px",
    height: "480px",
    margin: "0 auto",
  }
  return (
    <div id = 'project-page' style={containerStyles}>
      <ImageSlider slides={slides} />
      <h2>Check my github for more</h2>
      <a href= "https://github.com/hganchev">
        <img className='img-logo' src= {gitLogo} />
      </a>
    </div>
  );
}

export default Projects;
