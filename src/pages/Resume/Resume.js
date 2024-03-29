import React from 'react';
import './Resume.css'

import { Grid, Typography, Paper} from '@mui/material';
import MyTimeLine, { CustomTimelineSeparator } from '../../components/MyTimeLine';
import resumeData from '../../utils/resumeData';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

import { 
  TimelineSeparator
  ,TimelineDot
  ,TimelineConnector
  ,TimelineContent
  ,TimelineItem
 } from '@mui/lab';

function Resume() {
  return (
    <div id='exp-page'>

      {/* About Section  */}
      <Grid conteiner className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>About Me </h6>
        </Grid>
        <Grid item>
          <Typography variant='body2' className='aboutme_text'>
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Resume Section  */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Experience Timeline</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
              {/* Experience */}
              <Grid item xs={12} sm={8} md={5}>
                  <MyTimeLine 
                  title="Work Experience"
                  icon={<WorkIcon/>}>
                    {resumeData.experiences.map((experience) => (
                      <TimelineItem>
                        <CustomTimelineSeparator/>
                        <TimelineContent className='timeline_content'>
                          <Typography className='timeline_title'>
                            {experience.title}
                          </Typography>
                          <Typography variant='caption' className='timeline_date'>
                            {experience.date}
                          </Typography>
                          <Typography variant='body2' className='timeline_description'>
                            {experience.description}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </MyTimeLine>
              </Grid>
              {/* Education */}
              <Grid item xs={12} sm={8} md={5}>
                  <MyTimeLine 
                  title="Education"
                  icon={<SchoolIcon/>}>
                    {resumeData.education.map((education) => (
                      <TimelineItem>
                        <CustomTimelineSeparator/>
                        <TimelineContent className='timeline_content'>
                          <Typography className='timeline_title'>
                            {education.title}
                          </Typography>
                          <Typography variant='caption' className='timeline_date'>
                            {education.date}
                          </Typography>
                          <Typography variant='body2' className='timeline_description'>
                            {education.description}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </MyTimeLine>
              </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Services </h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={5} justify='space-around'>
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className= 'service'>
                  <div className='service_icon'>
                    <img src={service.icon} className='service_img_icon'/>
                  </div>
                  <Typography className='service_title' variant='h6'>
                    {service.title}
                  </Typography>
                  <Typography className='service_description' variant='body2'>
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resume;
