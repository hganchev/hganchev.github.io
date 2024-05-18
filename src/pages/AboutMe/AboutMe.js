import React from 'react';
import "./AboutMe.css";
import resumeData from '../../utils/resumeData';
import PrintView from '../../components/PrintView';
import Dashboard from '../Dashboard/Dashboard';

import { Grid, Typography } from '@mui/material';

function AboutMe() {
  return (
    <Grid container className='about'>   
      {/* Info Section  */}
      <Grid item>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant='h3'>
              {resumeData.name}
            </Typography>
            <Typography variant='h5'>
              {resumeData.title}
            </Typography>
          </Grid>
          <Grid item xs={4} className='section_qr'>
              {/* QR Code */}
              {resumeData.UrlQRCode}
          </Grid>
        </Grid>
        
        {/* About picture */}
        <div className='about-picture'>
          {resumeData.picture}
        </div>
        <Typography variant='h7' className='about-moto'>
          {resumeData.moto}
        </Typography>

        {/* Dashboard*/}
        <Dashboard/>
        
        {/* Print*/}
        <div className='about-print-container'>
          <Typography>
            <PrintView message="'If someone did it I can do it better!'"/>
            <PrintView message="'If is repeatable it can be automated!'"/>
            <PrintView message="'In programming everything is possible!'"/>
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
