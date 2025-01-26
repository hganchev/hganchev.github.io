import React, { useState } from 'react';
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
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import resumeData from '../utils/resumeData';
import { styled } from '@mui/material/styles';
import { ForkLeft, HomeRounded } from '@mui/icons-material';

// Add styled component
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.5),
  },
  '& img': {
    width: '24px',
    height: '24px',
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigationLinks = [
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/articles', label: 'Articles' }
  ];

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        {/* Home Page */}
        <IconButton component={NavLink} to="/" edge="start" color="inherit" aria-label="home">
            <HomeRounded />
        </IconButton>
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
            >
              {navigationLinks.map(({ path, label }) => (
                <MenuItem
                  key={path}
                  component={NavLink}
                  to={path}
                  onClick={handleClose}
                  selected={location.pathname === path}
                >
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2}}>
            {navigationLinks.map(({ path, label }) => (
              <Button
                key={path}
                component={NavLink}
                to={path}
                color={location.pathname === path ? 'primary' : 'inherit'}
                sx={{
                  '&.active': {
                    fontWeight: 'bold',
                  }
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        )}
        <Box sx={{ display: 'flex', gap: 2, ml: 2 }}>
          {Object.entries(resumeData.socials).map(([key, { link, icon }]) => (
            <StyledIconButton
              key={key}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${key}`}
              size="small"
              color="inherit"
              sx={{
                '& img': {
                  scale: 0.1
                }
              }}
            >
              {icon}
            </StyledIconButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;