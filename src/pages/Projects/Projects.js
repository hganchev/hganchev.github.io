import React, { useState, Component, useEffect }  from 'react';
import styled from "styled-components";
import './Projects.css';

function Projects() {
  const [pdfFiles, setPdfFiles] = useState(["../thesis/BThesis_EN.pdf"]);

  const searchForPDFFiles = async (folderPath) => {
    try {
      const filesData = [
        { name: 'BThesis_EN.pdf', type: 'application/pdf', url: '../thesis/BThesis_EN.pdf' },
        { name: 'MThesis_EN.pdf', type: 'application/pdf', url: '../thesis/MThesis_EN.pdf' }
        // Add more files as needed
      ];
      const pdfFilesData = filesData.filter(file => file.type === 'application/pdf');
      
      const newPdfFiles = pdfFilesData.map(fileData => ({
        name: fileData.name,
        url: fileData.url
      }));
      
      setPdfFiles(newPdfFiles);
    } catch (error) {
      console.error('Error fetching and processing files:', error);
    }
  };

  useEffect(() => {
    searchForPDFFiles('../thesis/'); // Replace with your backend API endpoint
  }, []);

  return (
    <div className='projects'>
      <div className='section_title al_center'>
        <span></span>
        <h1 className='section_title_text s_40'> Projects </h1>
      </div>
      <div class="grid">
      {pdfFiles.map((file, index) => (
        <div class="item" key={index}>
          <a href={file.url} target="_blank" rel="noopener noreferrer">
            <img src={'../thesis/HIG_IMG.jpg'}/>
          </a>
        </div>
      ))}
      </div>  
    </div>
  );
}

export default Projects;
