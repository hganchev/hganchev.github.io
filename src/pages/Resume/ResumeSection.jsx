import React, { useEffect, useRef, useState } from 'react';
import { 
  Grid, 
  Typography, 
  Paper, 
  Box, 
  Container,
  Divider,
  Fade,
  useTheme,
  LinearProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineContent, 
  TimelineDot, 
  TimelineConnector 
} from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import resumeData from '../../utils/resumeData';

// Styled components
const StyledTimeline = styled(Timeline)(({ theme }) => ({
  [`& .MuiTimelineItem-root`]: {
    '&:before': {
      display: 'none'
    }
  },
  padding: 0,
  marginLeft: 0
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10]
  }
}));

const SkillProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.palette.grey[200],
  '& .MuiLinearProgress-bar': {
    borderRadius: 4
  }
}));

const TimelineSection = ({ title, icon, items, visible }) => {
  const theme = useTheme();
  
  return (
    <StyledTimeline>
      {items.map((item, index) => (
        <Fade 
          key={index}
          in={visible} 
          timeout={800} 
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot 
                sx={{ 
                  bgcolor: 'primary.main',
                  boxShadow: theme.shadows[3]
                }}
              >
                {icon}
              </TimelineDot>
              {index !== items.length - 1 && (
                <TimelineConnector sx={{ bgcolor: 'primary.light' }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(10px)',
                  }
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography 
                  variant="subtitle2" 
                  color="primary"
                  sx={{ mb: 1 }}
                >
                  {item.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Fade>
      ))}
    </StyledTimeline>
  );
};

const ResumeSection = () => {
  const theme = useTheme();
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    skills: useRef(null)
  };

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top <= viewportHeight * 0.75;
          
          if (isVisible && !visibleSections[key]) {
            setVisibleSections(prev => ({ ...prev, [key]: true }));
          }
        }
      });
    };

    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        {/* Section Title */}
        <Box mb={6} textAlign="center">
          <Typography 
            variant="h3" 
            component="h2" 
            fontWeight="bold"
            gutterBottom
          >
            Resume & <span style={{ color: theme.palette.primary.main }}>Experience</span>
          </Typography>
          <Divider sx={{ width: '80px', mx: 'auto', mb: 2, borderWidth: 3, borderColor: theme.palette.primary.main }} />
          <Typography variant="h6" color="textSecondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
            My academic and professional journey
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} ref={sectionRefs.about}>
            <Fade in={visibleSections.about} timeout={800}>
              <StyledPaper elevation={3}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  About Me
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "normal",
                    whiteSpace: "pre-line",
                    lineHeight: 1.8
                  }}
                >
                  {resumeData.about}
                </Typography>
              </StyledPaper>
            </Fade>
          </Grid>

          {/* Experience Section */}
          <Grid item xs={12} md={6} ref={sectionRefs.experience}>
            <StyledPaper elevation={3}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Work Experience
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <TimelineSection
                items={resumeData.experiences}
                icon={<WorkIcon />}
                visible={visibleSections.experience}
              />
            </StyledPaper>
          </Grid>

          {/* Education Section */}
          <Grid item xs={12} md={6} ref={sectionRefs.education}>
            <StyledPaper elevation={3}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Education
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <TimelineSection
                items={resumeData.education}
                icon={<SchoolIcon />}
                visible={visibleSections.education}
              />
            </StyledPaper>
          </Grid>

          {/* Skills/Services Section */}
          <Grid item xs={12} ref={sectionRefs.skills}>
            <StyledPaper elevation={3}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Services & Skills
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Grid container spacing={3}>
                {resumeData.services.map((service, index) => (
                  <Grid item key={index} xs={12} sm={6} md={3}>
                    <Fade 
                      in={visibleSections.skills} 
                      timeout={800}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <Paper 
                        elevation={2}
                        sx={{ 
                          p: 3,
                          textAlign: 'center',
                          height: '100%',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-10px)',
                            boxShadow: theme.shadows[10]
                          }
                        }}
                      >
                        <Box 
                          sx={{ 
                            mb: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            backgroundColor: 'primary.light',
                            margin: '0 auto',
                            marginBottom: 2
                          }}
                        >
                          <img 
                            src={service.icon} 
                            alt={service.title} 
                            style={{ 
                              width: 35,
                              height: 35,
                              objectFit: 'contain'
                            }} 
                          />
                        </Box>
                        <Typography 
                          variant="h6" 
                          gutterBottom
                          sx={{ fontWeight: 'bold' }}
                        >
                          {service.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {service.description}
                        </Typography>
                      </Paper>
                    </Fade>
                  </Grid>
                ))}
              </Grid>

              {/* Skills Progress Bars */}
              {resumeData.skills && (
                <Box mt={4}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Technical Skills
                  </Typography>
                  <Grid container spacing={3}>
                    {resumeData.skills.map((skill, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Fade 
                          in={visibleSections.skills} 
                          timeout={800}
                          style={{ transitionDelay: `${(index + resumeData.services.length) * 200}ms` }}
                        >
                          <Box>
                            <Box 
                              sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between',
                                mb: 1
                              }}
                            >
                              <Typography variant="body2">
                                <StarIcon 
                                  fontSize="small" 
                                  sx={{ 
                                    verticalAlign: 'middle',
                                    color: 'primary.main',
                                    mr: 1
                                  }} 
                                />
                                {skill}
                              </Typography>
                            </Box>
                            <SkillProgress 
                              variant="determinate" 
                              value={90} 
                              sx={{
                                mb: 2,
                                '& .MuiLinearProgress-bar': {
                                  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`
                                }
                              }}
                            />
                          </Box>
                        </Fade>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </StyledPaper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ResumeSection;