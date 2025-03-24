import React from 'react';
import { styled } from '@mui/material/styles';
import Dashboard from '../Dashboard/Dashboard';
// import ErrorBoundary from '../../components/ErrorBoundary';
import resumeData from '../../utils/resumeData';
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
  Grid,
  Avatar
} from '@mui/material';


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

// Styled components
const AboutContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center'
}));

const QRSection = styled(Grid)(({ theme }) => ({
  alignSelf: 'right',
  objectFit: 'contain',
  marginTop: theme.spacing(14),
  '& img': {
    maxWidth: '100%',
    height: 'auto'
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2)
  }
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(3, 0),
  width: theme.spacing(30),
  height: theme.spacing(30),
  margin: 'auto'
}));

const AboutMoto = styled(Typography)(({ theme }) => ({
  fontStyle: 'italic',
  margin: theme.spacing(2, 0)
}));

function Header({ title, name }) {
  return (
    <Grid container spacing={2} alignItems="center" className='about'>
      <Grid item xs={8}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <QRSection item xs={4}>
        {resumeData.UrlQRCode}
      </QRSection>
    </Grid>
  );
}

function AboutMe() {
  return (
    // <ErrorBoundary>
      <AboutContainer container>
        <Grid item xs={12}>
          <Header 
            name={resumeData.name} 
            title={resumeData.title} 
          />
          
          <AvatarStyled src={resumeData.picture} 
            alt={resumeData.name}
            sx={{
              width: 200, // Adjust the avatar width
              height: 200, // Adjust the avatar height
              img: {
                objectFit: "fit", // Control how the image fits inside the Avatar
              },
            }}/>
          
          <AboutMoto variant="subtitle1">
            {resumeData.moto}
          </AboutMoto>
          <Box sx={{ display: 'flex', gap: 2, ml: 2, justifyContent: 'center' }}>
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
          <Dashboard />
        </Grid>
      </AboutContainer>
    // </ErrorBoundary>
  );
}

export default AboutMe;
