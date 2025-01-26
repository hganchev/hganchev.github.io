import BachelorThesis from '../assets/projects/BThesis_EN.pdf';
import MasterThesis from '../assets/projects/MThesis_EN.pdf';

import DefaultImage from '../assets/projects/images/Default.jpg';

export default {
    projects: [
        {
            id: '1',
            title: 'Synthesis of control of mobile robot',
            image: DefaultImage,
            url: BachelorThesis,
            date: "2014",
            label: "Thesis",
            taskDescription: "This project involves the synthesis of control for a mobile robot.",
            lessonsLearned: "Learned about control systems and mobile robotics.",
            technologiesUsed: "MATLAB, Simulink",
            timeSpent: "6 months"
        },
        {
            id: '2',
            title: 'Control of industrial manipulator',
            image: DefaultImage,
            url: MasterThesis,
            date: "2015",
            label: "Thesis",
            taskDescription: "This project involves the control of an industrial manipulator.",
            lessonsLearned: "Learned about industrial automation and control systems.",
            technologiesUsed: "PLC, SCADA",
            timeSpent: "8 months"
        }
    ],
}
