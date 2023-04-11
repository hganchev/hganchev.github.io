import React from 'react';
import "./AboutMe.css";
import resumeData from '../../utils/resumeData';
import PrintView from '../../utils/PrintView';
import Dashboard from '../Dashboard/Dashboard';

import { Grid, Typography } from '@mui/material';

function AboutMe() {
  return (
    <Grid container className='about'>   
      {/* Info Section  */}
      <Grid item xs={12}>
        <Typography variant='h3'>
          {resumeData.name}
        </Typography>
        <Typography variant='h5'>
          {resumeData.title}
        </Typography>
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
