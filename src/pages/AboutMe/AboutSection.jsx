import React, { useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Avatar, 
  Paper,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import resumeData from '../../utils/resumeData';
import GitHubStats from '../../components/GitHubStats';

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const profileRef = useRef(null);
  const detailsRef = useRef(null);

  // Add animation effect when component mounts
  useEffect(() => {
    const profile = profileRef.current;
    const details = detailsRef.current;
    
    if (profile && details) {
      profile.style.opacity = '0';
      details.style.opacity = '0';
      profile.style.transform = 'translateY(50px)';
      details.style.transform = 'translateY(50px)';
      
      setTimeout(() => {
        profile.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        profile.style.opacity = '1';
        profile.style.transform = 'translateY(0)';
        
        setTimeout(() => {
          details.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          details.style.opacity = '1';
          details.style.transform = 'translateY(0)';
        }, 300);
      }, 300);
    }
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        {/* Profile Section */}
        <Grid item xs={12} md={5} ref={profileRef}>
          <Paper 
            elevation={6}
            sx={{ 
              p: 4, 
              borderRadius: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'linear-gradient(to bottom right, #ffffff, #f5f5f5)'
            }}
          >
            <Avatar 
              src={resumeData.picture} 
              alt={resumeData.name}
              sx={{
                width: 200,
                height: 200,
                border: '5px solid white',
                boxShadow: 3,
                mb: 3
              }}
            />
            <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
              {resumeData.name}
            </Typography>
            <Typography variant="h6" color="primary" align="center" gutterBottom>
              {resumeData.title}
            </Typography>
            <Typography 
              variant="body1" 
              color="textSecondary" 
              align="center" 
              sx={{ fontStyle: 'italic', my: 2 }}
            >
              {resumeData.moto}
            </Typography>
            
            <Divider flexItem sx={{ my: 2 }} />
            
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
              mt: 2
            }}>
              {Object.entries(resumeData.socials).map(([key, { link, icon }]) => (
                <IconButton
                  key={key}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${key}`}
                  sx={{
                    transition: 'transform 0.2s ease-in-out, color 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      color: 'primary.main'
                    }
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
            
            {resumeData.UrlQRCode && (
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Scan to visit my portfolio
                </Typography>
                {resumeData.UrlQRCode}
              </Box>
            )}
          </Paper>
        </Grid>
        
        {/* About Me Details */}
        <Grid item xs={12} md={7} ref={detailsRef}>
          <Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              About <span style={{ color: theme.palette.primary.main }}>Me</span>
            </Typography>
            <Typography variant="body1" paragraph>
              {resumeData.about || "I'm a software developer passionate about creating meaningful applications. I enjoy solving complex problems and turning ideas into reality through elegant coding solutions."}
            </Typography>
            
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {resumeData.personalDetails && Object.entries(resumeData.personalDetails).map(([key, value]) => (
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant="subtitle1">
                    <strong>{key}:</strong> {value}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                My Skills
              </Typography>
              <Grid container spacing={2}>
                {resumeData.skills && resumeData.skills.map((skill, index) => (
                  <Grid item key={index} xs={6} sm={4} md={4}>
                    <Paper 
                      elevation={2} 
                      sx={{
                        p: 1.5,
                        textAlign: 'center',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: 6
                        }
                      }}
                    >
                      <Typography variant="body1">{skill}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
            
            {/* GitHub Stats Component */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                GitHub Activity
              </Typography>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                <GitHubStats />
              </Paper>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;