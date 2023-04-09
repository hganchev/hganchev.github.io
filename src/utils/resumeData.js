import HIGImage from "./images/HIG_IMG.jpg"
import linkedinLogo from './images/linkedin-icon-logo.png'
import discordLogo from './images/discord-icon-logo.svg'
import gmailLogo from './images/gmail-icon-logo.png'
import fiverrLogo from './images/fiverr-icon-logo.svg'

import gitLogo from './images/github-icon-logo.png'
import pylogo from './images/python-icon-logo.png'
import clogo from './images/c-icon-logo.png'
import arduinologo from './images/arduino-icon-logo.png'
import matlogo from './images/matlab-icon-logo.png'

import GitHubIcon from '@mui/icons-material/GitHub';


export default {
    name: 'John Doe',
    title: 'Software Engineer',

    birthday: '1 Jan 1995',
    email: '',
    phone: '123-456-7890',
    address: '123, Main Street, New York, USA',

    socials: {
        facebook: {
            link: 'facebook.com',
            text: 'Facebook',
            icon: <GitHubIcon />
        },
        linkedin: {
            link: 'linkedin.com',
            text: 'LinkedIn',
            icon: <GitHubIcon />
        },
        github: {
            link: 'github.com',
            text: 'Github',
            icon: <GitHubIcon />
        },

    }
}