import React from 'react';
import './Projects.css';
import ImageSlider from '../Tools/ImageSlider'
import imageArd from './images/ArduinoPiano.png'

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
    width: "500px",
    height: "280px",
    margin: "0 auto",
  }
  return (
    <div id = 'project-page' style={containerStyles}>
      <ImageSlider slides={slides} />
    </div>
  );
}

export default Projects;
