import React from 'react';
import './Projects.css';
import ImageSlider from '../Tools/ImageSlider'

function Projects() {
  const slides = [
    { url: "", title: "rubik" },
    { url: "", title: "rubik" }
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div style={containerStyles}>
      <ImageSlider slides={slides} />
    </div>
  );
}

export default Projects;
