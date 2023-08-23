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
        
        {/* Print*/}
        <Typography className='about-print'>
          <PrintView message="Everything can be automated!"/>
          <PrintView message="Everything can be controlled!"/>
          <PrintView message="Everything can be programmed!"/>
        </Typography>

        {/* Dashboard*/}
        <Dashboard/>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
