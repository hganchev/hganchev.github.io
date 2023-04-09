import React from 'react';
import './Experience.css'
import MyTimeLine from '../../components/MyTimeLine';

const listElements = [
  {
    date: '2017 - present',
    title: 'Software Design Engineer at SENSATA Technologies',
    subtitle: 'Software Design Engineer',
    description: 'At SENSATA Technologies, I was responsible for designing and implementing control systems for HTS(high temperature sensors) equipment. This involved using programming languages such as Structured Text and Ladder Logic, and developing communication protocols to interface with external systems. I also participated in the testing and validation of control systems.',
    skills: 'industrial PLC , Camera , Robot programming, compliece with project requirements',
  },
  {
    date: '2018 - 2019',
    title: 'Automation Engineer at KOSTAL',
    subtitle: 'Automation Engineer',
    description: 'At KOSTAL, I worked on software development projects for automotive applications. My primary focus was on designing and implementing software for embedded systems, and I gained experience in C#, Visual Basic, TwinCAT ST programming languages. I also worked on integrating new software modules into existing systems and testing software to ensure compliance with project requirements.',
    skills: 'industrial PLC , Camera , Robot programming, compliece with project requirements',
  },
  {
    date: '2019 - 2020',
    title: 'Production Engineer at ABB',
    subtitle: 'Production Engineer',
    description: 'At ABB, I worked on a automated line. My main responsibilities involved control of the flow of materials as well the maintanance of the industrial machines, troubleshooting and resolving technical issues.',
    skills: 'teamwork, problem solving',
  },
]

function Experience() {
  return (
    <div id='exp-page'>
        {/* Career Section  */}
        <section>
          <h3>Career</h3>
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
        <MyTimeLine listElements = {listElements} />
    </div>
  );
}

export default Experience;
