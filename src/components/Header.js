import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HomeRounded } from '@mui/icons-material';
import { Navbar, Nav } from 'react-bootstrap'
import withRouter from '../utils/withRouter'

import resumeData from '../utils/resumeData';
import './Header.css'
import { Collapse, collapseClasses } from '@mui/material';

const Header = (props) =>{
    const pathName = props?.router?.location?.pathname;
  return (
    <Navbar 
    expand="lg" 
    sticky="top" 
    className='header'>
        {/* Home */}
        <Nav.Link as={NavLink} 
            to="/" 
            className='header_navlink'>
            <Navbar.Brand className='header_home'>
                <HomeRounded />
            </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle defaultValue={Collapse}/>

        <Navbar.Collapse>
            <Nav className='header_left'>
                {/* Resume */}
                <Nav.Link as={NavLink} 
                to='/' 
                className={pathName == '/'? 'header_link_active': 'header_link'}>
                    Resume
                </Nav.Link>

                {/* Portfolio */}
                <Nav.Link as={NavLink} 
                to='/portfolio' 
                className={pathName == '/portfolio'? 'header_link_active': 'header_link'}>
                    Portfolio
                </Nav.Link>

                {/* Articles */}
                <Nav.Link as={NavLink} 
                to='/articles' 
                className={pathName == '/articles'? 'header_link_active': 'header_link'}>
                    Articles
                </Nav.Link>
            </Nav>

            <div className='header_right'>
                {Object.keys(resumeData.socials).map((item, i) => (
                    <a href={resumeData.socials[item].link} target='_blank'>
                        {resumeData.socials[item].icon}
                    </a>
                ))}
            </div>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header)