import BachelorThesis from '../assets/projects/BThesis_EN.pdf';
import MasterThesis from '../assets/projects/MThesis_EN.pdf';

import MobileRobot from '../assets/projects/images/MobileRobot.jpg';
import ImageRef from '../assets/projects/images/ImageRef.png';

export default {
    projects: [
        {
            name: 'Synthesis of control of mobile robot',
            img: MobileRobot,
            url: BachelorThesis,
            description: 'This is my bachelor thesis',
        },
        {
            name: 'Control of industrial manipulator',
            img: ImageRef,
            url: MasterThesis,
            description: 'This is my master thesis',
        }
    ],
}