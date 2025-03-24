import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import resumeData from '../utils/resumeData';
import { styled } from '@mui/material/styles';
import { ForkLeft, HomeRounded } from '@mui/icons-material';

const Header = ({ 
  scrollToSection, 
  aboutRef, 
  resumeRef, 
  projectsRef, 
  articlesRef, 
  contactRef 
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigationLinks = [
    { label: 'About', ref: aboutRef },
    { label: 'Resume', ref: resumeRef },
    { label: 'Projects', ref: projectsRef },
    { label: 'Articles', ref: articlesRef },
    { label: 'Contact', ref: contactRef }
  ];

  // Handle scroll event to change AppBar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigationClick = (ref) => {
    scrollToSection(ref);
    handleClose();
  };

  return (
    <AppBar 
      position="fixed" 
      color="default" 
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? 
          'rgba(255, 255, 255, 0.95)' : 
          'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)',
        transition: 'all 0.3s ease'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo/Home */}
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="home"
            onClick={() => scrollToSection(aboutRef)}
            sx={{
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <HomeRounded />
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                ml: 1,
                display: { xs: 'none', sm: 'block' },
                fontWeight: 'bold'
              }}
            >
              Portfolio
            </Typography>
          </IconButton>

          {/* Mobile menu */}
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {navigationLinks.map(({ label, ref }) => (
                  <MenuItem
                    key={label}
                    onClick={() => handleNavigationClick(ref)}
                  >
                    {label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            /* Desktop navigation */
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navigationLinks.map(({ label, ref }) => (
                <Button
                  key={label}
                  color="inherit"
                  onClick={() => scrollToSection(ref)}
                  sx={{
                    position: 'relative',
                    fontWeight: 'medium',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: 0,
                      height: '2px',
                      bottom: 0,
                      left: '50%',
                      backgroundColor: 'primary.main',
                      transition: 'all 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '80%',
                      left: '10%'
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;