import React from 'react';
import './Experience.css'
import TimeLine from '../Tools/TimeLine';

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
    <TimeLine listElements = {listElements} />
  );
}

export default Experience;
