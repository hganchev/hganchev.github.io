import HIGImage from "./images/HIG_IMG.jpg"
import linkedinLogo from './images/linkedin-icon-logo.png'
import discordLogo from './images/discord-icon-logo.svg'
import gmailLogo from './images/gmail-icon-logo.png'
import fiverrLogo from './images/fiverr-icon-logo.svg'
import gitLogo from './images/github-icon-logo-black.png'

import pylogo from './images/python-icon-logo.png'
import clogo from './images/c-icon-logo.png'
import arduinologo from './images/arduino-icon-logo.png'
import matlogo from './images/matlab-icon-logo.png'

import PrecisionManufacturing from '@mui/icons-material/PrecisionManufacturing';
import Schema from '@mui/icons-material/Schema';
import DataObject from '@mui/icons-material/DataObject';

export default {
    name: 'Hristo Ganchev',
    title: 'Software Engineer',
    about: `I am a software engineer!
            I enjoy creating software that improves the lives of those around me.
            \n\n I am a fast learner and I am always willing to learn new skills to better
            myself and the people around me.`,
    email: 'hristo.iliev.ganchev@gmail.com',
    phone: '',
    address: 'Sofia, Bulgaria',
    picture: <img src={HIGImage} alt="Hristo Ganchev" className='about-picture'/>,
    moto: `I am a passionate individual who has a deep 
            interest in the world of technology, robotics, 
            machines, and machine learning.`,
    socials: {
        discord: {
            link: 'https://discordapp.com/users/hganchev#7123',
            text: 'Discord',
            icon: <img src={discordLogo}/>
        },
        linkedin: {
            link: 'https://www.linkedin.com/in/hristo-ganchev-5407806a/',
            text: 'LinkedIn',
            icon: <img src={linkedinLogo}/>
        },
        github: {
            link: 'https://www.github.com/hganchev',
            text: 'Github',
            icon: <img src={gitLogo}/>
        },
    },
    education: [
        {
            date: '2014 - 2015',
            title: 'Technical University of Sofia, branch Plovdiv',
            degree: 'Master of Science in Automation, Information and Control Theory',
            description: 'At the Technical University of Sofia, I majored in Automation, Information and Control Theory. My studies included a wide range of subjects, including mathematics, physics, computer science, and engineering. I also took courses in programming, robotics, and automation.',
        },
        {
            date: '2009 - 2014',
            title: 'Technical University of Sofia, branch Plovdiv',
            degree: 'Bachelor of Science in Automation, Information and Control Theory',
            description: 'At the Technical University of Sofia, I majored in Automation, Information and Control Theory. My studies included a wide range of subjects, including mathematics, physics, computer science, and engineering. I also took courses in programming, robotics, and automation.',
        },
    ],
    experiences: [     
        {
            date: '2017 - present',
            title: 'Software Design Engineer at SENSATA Technologies',
            subtitle: 'Software Design Engineer',
            description: 'At SENSATA Technologies, I was responsible for designing and implementing control systems for HTS(high temperature sensors) equipment. This involved using programming languages such as Structured Text and Ladder Logic, and developing communication protocols to interface with external systems. I also participated in the testing and validation of control systems.',
            skills: 'industrial PLC , Camera , Robot programming, compliece with project requirements',
        },
        {
            date: '2015 - 2017',
            title: 'Automation Engineer at KOSTAL',
            subtitle: 'Automation Engineer',
            description: 'At KOSTAL, I worked on software development projects for automotive applications. My primary focus was on designing and implementing software for embedded systems, and I gained experience in C#, Visual Basic, TwinCAT ST programming languages. I also worked on integrating new software modules into existing systems and testing software to ensure compliance with project requirements.',
            skills: 'industrial PLC , Camera , Robot programming, compliece with project requirements',
        },
        {
            date: '2015 - 2015',
            title: 'Production Engineer at ABB',
            subtitle: 'Production Engineer',
            description: 'At ABB, I worked on a automated line. My main responsibilities involved control of the flow of materials as well the maintanance of the industrial machines, troubleshooting and resolving technical issues.',
            skills: 'teamwork, problem solving',
        },
    ],
    services: [
        {
            title: 'PLC programming',
            description: <span>I can program PLCs using 
            <b> ST</b> and <b>Ladder</b> languages</span>,
            icon: <Schema/>
        },
        {
            title: 'Robot programming',
            description: <span>I can program robots using
            <b> URScript</b> and <b>RT Toolbox</b></span>,
            icon: <PrecisionManufacturing/>
        },
        {
            title: 'Python programming',
            description: <span>I can program in Python</span>,
            icon: <DataObject/>
        },
    ],
    skills: [
        {
            title: 'Frontend',
            description: [
                'WPF',
                'HTML',
            ],
        },
        {
            title: 'Backend',
            description: [
                'STL(Strucured Text)',
                'FBD(Functional Block Diagram)',
                'Python',
                'SQL',
            ],
        },
    ],
}