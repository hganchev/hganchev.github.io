import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Dashboard from '../Dashboard/Dashboard';
// import ErrorBoundary from '../../components/ErrorBoundary';
import resumeData from '../../utils/resumeData';



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
                objectFit: "contain", // Control how the image fits inside the Avatar
              },
            }}/>
          
          <AboutMoto variant="subtitle1">
            {resumeData.moto}
          </AboutMoto>

          <Dashboard />
        </Grid>
      </AboutContainer>
    // </ErrorBoundary>
  );
}

export default AboutMe;
