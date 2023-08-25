import HIGImage from "../assets/images/HIG_IMG.jpg"
import UrlQRCode from '../assets/images/UrlQRCode.png';

// icons
import linkedinLogo from '../assets/images/icons/linkedin-icon-logo.png'
import discordLogo from '../assets/images/icons/discord-icon-logo.svg'
import gmailLogo from '../assets/images/icons/gmail-icon-logo.png'
import fiverrLogo from '../assets/images/icons/fiverr-icon-logo.svg'
import gitLogo from '../assets/images/icons/github-icon-logo-black.png'
import pylogo from '../assets/images/icons/python-icon-logo.png'
import clogo from '../assets/images/icons/c-icon-logo.png'
import arduinologo from '../assets/images/icons/arduino-icon-logo.png'
import matlogo from '../assets/images/icons/matlab-icon-logo.png'
import industrialrobotlogo from '../assets/images/icons/industrial-robot-logo-icon.jpg'
import plclogo from '../assets/images/icons/plc-icon-logo.png'

export default {
    name: 'Hristo Ganchev',
    title: 'Software Engineer',
    about: `Hello, my name is Hristo, I have 8+ years of experience in Software Engineer \
    with a passion for learning more about technology. With a strong background in machine \
    software development and an interest in electronics, I thrive on solving complex \
    problems and bringing innovative ideas to life.\

    My journey has led me to continuously strive for excellence in software engineering, \
    improving my skills to deliver robust and efficient solutions. My dedication to continuous \
    learning has driven me to explore electronics and 3D printing, allowing me \
    to approach challenges with a multidisciplinary perspective.

    As I progress in my career, I aspire to not only excel as a Senior Software Developer but also \
    to share my knowledge and insights with the community. The prospect of freelancing excites me, \
    as it presents opportunities to work on diverse projects and contribute to various industries.

    Beyond my technical prowess, I am committed to fostering growth and learning. I have a strong \
    desire to teach and mentor, enabling others to navigate the ever-evolving landscape of software \
    development. Whether through one-on-one interactions or educational content, I aim to empower fellow\
    enthusiasts and aspiring developers.

    Let's connect and collaborate on projects that push boundaries and create meaningful impact. \
    Together, we can embrace innovation, harness the power of technology, and inspire others in their own journeys`,

    email: 'hristo.iliev.ganchev@gmail.com',
    phone: '',
    address: 'Sofia, Bulgaria',
    moto: ` Innovating Code, Crafting Connections: Bridging Software, Electronics, and Minds.`,
    picture: <img src={HIGImage} alt="Hristo Ganchev" className='about-picture'/>,
    UrlQRCode: <img src={UrlQRCode}/>,
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
            degree: 'Master of Science in Automation, Information and \
            Control Theory',
            description: 'At the Technical University of Sofia, \
            I majored in Automation, Information and Control Theory. \
            My studies included a wide range of subjects, \
            including mathematics, physics, computer science, \
            and engineering. I also took courses in programming, \
            robotics, and automation.',
        },
        {
            date: '2009 - 2014',
            title: 'Technical University of Sofia, branch Plovdiv',
            degree: 'Bachelor of Science in Automation, Information and Control Theory',
            description: 'At the Technical University of Sofia, \
            I majored in Automation, Information and Control Theory.\
             My studies included a wide range of subjects, \
             including mathematics, physics, computer science, \
             and engineering. I also took courses in programming, \
             robotics, and automation.',
        },
    ],
    experiences: [     
        {
            date: '2017 - present',
            title: 'Software Design Engineer at SENSATA Technologies',
            subtitle: 'Software Design Engineer',
            description: 'At SENSATA Technologies, I was responsible for designing and implementing control systems for HTS(high temperature sensors) equipment. This involved using programming languages such as Structured Text and Ladder Logic, and developing communication protocols to interface with external systems. I also participated in the testing and validation of control systems.',
            skills: 'industrial PLC , Camera , Robot programming, \
            compliece with project requirements',
        },
        {
            date: '2015 - 2017',
            title: 'Automation Engineer at KOSTAL',
            subtitle: 'Automation Engineer',
            description: 'At KOSTAL, I worked on software development projects for automotive applications. My primary focus was on designing and implementing software for embedded systems, and I gained experience in C#, Visual Basic, TwinCAT ST programming languages. I also worked on integrating new software modules into existing systems and testing software to ensure compliance with project requirements.',
            skills: 'industrial PLC , Camera , Robot programming, \
            compliece with project requirements',
        },
        {
            date: '2015 - 2015',
            title: 'Production Engineer at ABB',
            subtitle: 'Production Engineer',
            description: 'At ABB, I worked on a automated line. \
            My main responsibilities involved control of the flow of \
            materials as well the maintanance of the industrial \
            machines, troubleshooting and resolving technical issues.',
            skills: 'teamwork, problem solving',
        },
    ],
    services: [
        {
            title: 'PLC programming (ST, FBD, LD)',
            description: <span>
            <n><li><b>TwinCAT 2,3</b></li></n>
            <n><li><b>Codesys</b></li></n>
            </span>,
            icon: plclogo
        },
        {
            title: 'Industrial Robot programming',
            description: <span>
            <n><li><b>Universal Robots (URScript, RTDE, Realtime)</b></li></n>
            <n><li><b>Mitsubishi (MELFA Basic)</b></li></n>
            </span>,
            icon: industrialrobotlogo
        },
        {
            title: 'Python programming',
            description: <span>
            <n><li><b>OOP</b></li></n>
            <n><li><b>Machine Learning</b></li></n>
            <n><li><b>MicroPython</b></li></n>
            <n><li><b>Socket communication</b></li></n>
            </span>,
            icon: pylogo
        },
        {
            title: 'Arduino programming',
            description: <span>
            </span>,
            icon: arduinologo
        },
    ],
}