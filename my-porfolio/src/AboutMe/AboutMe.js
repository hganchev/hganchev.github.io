import React from 'react';
import "./AboutMe.css";
import PDFPages from '../Tools/PDFPages';

import BachlorThesis from "./thesis/BThesis_EN.pdf"
import MasterThesis from "./thesis/MThesis_EN.pdf"
import HIGImage from "./images/HIG_IMG.jpg"

function AboutMe() {
  return (
    <div id = 'about-page'>
      {/* Print*/}
      <p>
          <span className='print-span'>
            print
          </span>
          <span className='bracket-span'>(</span>
          <span className='message-span'>
            "Everything can be automated."
          </span>
          <span className='bracket-span'>)</span>
      </p>

      {/* Info Section  */}
      <section className='about-me-info'>
        <div className='container'>
          <div className='side-left'>
            <img src={HIGImage}/>   
          </div>
          <div className='side-right'>
            <p>
              My name is Hristo and I am a passionate individual who has a deep interest in the world of technology, robotics, machines, and machine learning.
            </p>  
          </div>
        </div>
      </section>

      {/* Studies Section  */}
      <section className='about-me-studies'>
        <p>
          I am a graduate of the Technical University of Sofia, branch Plovdiv, where I majored in Automation, Information and Control Theory.
        </p>
        <p>
          During my studies, I completed a bachelor's degree project that focused on the Control of Mobile Robot with dynamic generated behaviors. 
          This project involved modeling the dynamics of the robot, as well as the system that generates the control with three behaviors: go-to-goal, avoid obstacle, and track wall/contours. 
          This project was an excellent opportunity for me to hone my skills in modeling and control theory.
        </p>
        <PDFPages fileUrl={BachlorThesis} />
        <p>
          As part of my Master's degree, I completed a project that focused on controlling an industrial manipulator (robot) using Matlab. 
          The project involved developing communication protocols with the robot and programming it to search for objects using a camera. 
          This project provided me with a hands-on opportunity to gain practical experience in working with industrial robots and understanding their behavior.
        </p>
        <PDFPages fileUrl={MasterThesis} />
      </section>

      {/* Work Section  */}
      <section className='about-me-work'>
        <p>
          After completing my studies, I started my career in engineering companies such as ABB, KOSTAL, and SENSATA, where I worked on diverse projects in automation, robotics, and programming.
          One of my significant undertakings involved creating a digital twin and working on industrial simulations. 
          The project included developing a virtual model of an industrial system to simulate its behavior and analyze its performance under different scenarios. 
          Through this project, I gained expertise in modeling, simulation, and optimization of industrial systems using tools such as CIROS Studio and TwinCAT PLC Control.
        </p>
        <p>
          Through my work in the tech industry, I have gained valuable experience in various fields, including automation, robotics, and programming. 
          My passion for technology and machines has allowed me to develop innovative solutions to complex problems, and I am always seeking new challenges to help me grow as a professional.
        </p>
        <p>
          Overall, I am an enthusiastic and dedicated individual who is passionate about technology, robotics, and programming. 
          I am always eager to learn and grow, and I am excited to see where my skills and experiences will take me in the future.
        </p>
      </section>

    </div>
  );
}

export default AboutMe;
