import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineContent, TimelineDot, TimelineConnector } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import resumeData from '../../utils/resumeData';
// import ErrorBoundary from '../../components/ErrorBoundary';

const SectionTitle = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& span': {
    width: '40px',
    height: '4px',
    backgroundColor: theme.palette.primary.main,
    display: 'block',
    marginBottom: theme.spacing(1)
  }
}));

const StyledTimeline = styled(Timeline)(({ theme }) => ({
  [`& .MuiTimelineItem-root`]: {
    '&:before': {
      display: 'none' // Removes the default padding
    }
  },
  padding: 0, // Remove default padding
  marginLeft: 0 // Remove default margin
}));

const TimelineSection = ({ title, icon, items }) => (
  <StyledTimeline>
    {items.map((item, index) => (
      <TimelineItem key={index} sx={{ minHeight: 70 }}>
        <TimelineSeparator>
          <TimelineDot color="primary">
            {icon}
          </TimelineDot>
          {index !== items.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {item.date}
          </Typography>
          <Typography>{item.description}</Typography>
        </TimelineContent>
      </TimelineItem>
    ))}
  </StyledTimeline>
);

function Resume() {
  return (
    // <ErrorBoundary>
      <Box sx={{ p: 3 }}>
        {/* About Section */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SectionTitle>
              <span />
              <Typography variant="h5">About Me</Typography>
            </SectionTitle>
            <Typography variant="body1">{resumeData.about}</Typography>
          </Grid>

          {/* Experience Section */}
          <Grid item xs={12} md={6} alignItems={'left !important'}>
            <SectionTitle>
              <span />
              <Typography variant="h5">Work Experience</Typography>
            </SectionTitle>
            <TimelineSection
              items={resumeData.experiences}
              icon={<WorkIcon />}
            />
          </Grid>

          {/* Education Section */}
          <Grid item xs={12} md={6}>
            <SectionTitle>
              <span />
              <Typography variant="h5">Education</Typography>
            </SectionTitle>
            <TimelineSection 
              items={resumeData.education}
              icon={<SchoolIcon />}
            />
          </Grid>

          {/* Skills Section */}
          <Grid item xs={12}>
            <SectionTitle>
              <span />
              <Typography variant="h5">Services</Typography>
            </SectionTitle>
            <Grid container spacing={2}>
              {resumeData.services.map((service, index) => (
                <Grid item key={index} xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <img src={service.icon} alt={service.title} width="50" height="50" />
                    <Typography variant="h6">{service.title}</Typography>
                    <Typography variant="body2">{service.description}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    // </ErrorBoundary>
  );
}

export default Resume;
