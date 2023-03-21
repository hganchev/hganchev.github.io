import React from 'react';
import "./AboutMe.css";

function AboutMe() {
  return (
    <div id = 'about-page'>
      <section>
        <p>
           print("Hello World"),
        </p>
        <p>
          my name is Hristo and I am a passionate individual who has a deep interest in the world of technology, robotics, machines, and machine learning.
        </p>
      </section>
      <section>
        <p>
          I am a graduate of the Technical University of Sofia, branch Plovdiv, where I majored in Automation and Control Theory.
        </p>
        <p>
          During my studies, I completed a bachelor's degree project that focused on the Control of Mobile Robot with dynamic generated behaviors. 
          This project involved modeling the dynamics of the robot, as well as the system that generates the control with three behaviors: go-to-goal, avoid obstacle, and track wall/contours. 
          This project was an excellent opportunity for me to hone my skills in modeling and control theory.
        </p>
        <p>
          As part of my Master's degree, I completed a project that focused on controlling an industrial manipulator (robot) using Matlab. 
          The project involved developing communication protocols with the robot and programming it to search for objects using a camera. 
          This project provided me with a hands-on opportunity to gain practical experience in working with industrial robots and understanding their behavior.
        </p>
        <p>
          After completing my studies, I started my career in tech companies such as ABB, KOSTAL, and SENSATA, where I worked on diverse projects in automation, robotics, and programming.
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
