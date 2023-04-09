import React from 'react';
import './Experience.css'
import { Grid, Typography, Icon, Paper} from '@mui/material';
import MyTimeLine, { CustomTimelineSeparator } from '../../components/MyTimeLine';
import resumeData from '../../utils/resumeData';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

import BachlorThesis from "./thesis/BThesis_EN.pdf"
import MasterThesis from "./thesis/MThesis_EN.pdf"
import { 
  TimelineSeparator
  ,TimelineDot
  ,TimelineConnector
  ,TimelineContent
  ,TimelineItem
 } from '@mui/lab';

function Experience() {
  return (
    <div id='exp-page'>
      {/* Career Section  */}
      {/* <section>
        <h3>Career</h3>
        <p>
          After completing my studies, I started my career in engineering companies such as ABB, KOSTAL, and SENSATA, where I worked on diverse projects in automation, robotics, and programming.
          One of my significant undertakings involved creating a digital twin and working on industrial simulations. 
          The project included developing a virtual model of an industrial system to simulate its behavior and analyze its performance under different scenarios. 
          Through this project, I gained expertise in modeling, simulation, and optimization of industrial systems using tools such as CIROS Studio and TwinCAT PLC Control.
        </p>
        <p>
          Through my work in the tech industry, I have gained valuable experience in various fields, including automation, robotics, and programming. 
          My passion for technology and machines has allowed me to develop innovative solutions to complex problems, and I am always seeking new challenges to help me grow as a professional.
        </p>
        <p>
          Overall, I am an enthusiastic and dedicated individual who is passionate about technology, robotics, and programming. 
          I am always eager to learn and grow, and I am excited to see where my skills and experiences will take me in the future.
        </p>
      </section> */}

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
      <Grid conteiner className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Work Experience</h6>
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
      <Grid conteiner className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Services </h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={5} justify='space-around'>
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className= 'service'>
                  <Icon className='service_icon'>{service.icon}</Icon>
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

      {/* Skills */}
      <Grid conteiner 
      className='section graybg pb_45 p_50'>
        <Grid item xs={12}>
          <Grid container justify='space-between' spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation = {0} className='skill'>
                  <Typography variant='h6' className='skill_title'>
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant={'body2'} className='skill_description'>
                      <TimelineDot variant={'outlined'} className='timeline_dot'/>
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))} 
          </Grid>
        </Grid>
      </Grid>

      {/* Education Section  */}
      {/* <SlideControl fileUrl={BachlorThesis}
                      title='Bachlor Thesis'/>
      <SlideControl fileUrl={MasterThesis}
                      title='Master Thesis' /> */}
    </div>
  );
}

export default Experience;
