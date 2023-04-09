import React from 'react';
import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



import pylogo from './images/python-icon-logo.png'
import clogo from './images/c-icon-logo.png'
import arduinologo from './images/arduino-icon-logo.png'
import matlogo from './images/matlab-icon-logo.png'


function Experience() {
  return (
    <div id="exp-page" className='container'>
      {/* <div className='page'>
        <h1>Production Engineer at ABB : </h1>
        <p>
          At ABB, I worked on a automated line. My main responsibilities involved control of the flow of materials as well the maintanance of the 
          industrial machines, troubleshooting and resolving technical issues.
        </p>
        <h3>
          Gained skills: teamwork, problem solving.
        </h3>
        <h1>Automation Engineer at KOSTAL : </h1>
        <p>
            At KOSTAL, I worked on software development projects for automotive applications. My primary focus was on designing and implementing software for embedded systems, 
            and I gained experience in C#, Visual Basic, TwinCAT ST programming languages. I also worked on integrating new software modules into existing systems and testing software 
            to ensure compliance with project requirements.
        </p>
        <h3>
          Gained skills: industrial PLC , Camera , Robot programming, compliece with project requirements.
        </h3>
        <h1>Software Design Engineer at SENSATA Technologies : </h1>
        <p>
          At SENSATA Technologies, I was responsible for designing and implementing control systems for HTS(high temperature sensors) equipment. 
          This involved using programming languages such as Structured Text and Ladder Logic, and developing communication protocols to interface with external systems. 
          I also participated in the testing and validation of control systems to ensure their proper functioning.
        </p>
        <h3>
          Gained skills: client oriented development, sofware architecture, industrial simulation (CIROS Studio).
        </h3>
        <h2>Programming languages</h2>
        <p>
          <img className='img-logo' src = {clogo}/>
          <img className='img-logo' src = {pylogo}/>
          <img className='img-logo' src = {arduinologo}/>
          <img className='img-logo' src = {matlogo}/>
        </p>  
      </div> */}
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Strategy, Social Media
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            Creative Direction, User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
            Creative Direction, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
