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
  useTheme,
  Card,
  CardContent
} from '@mui/material';
import resumeData from '../../utils/resumeData';
import GitHubStats from '../../components/GitHubStats';

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const sectionRef = useRef(null);

  // Add animation effect when component mounts
  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      
      setTimeout(() => {
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  return (
    <Container maxWidth="lg">
      <Box 
        ref={sectionRef}
        sx={{
          pt: { xs: 12, sm: 14 }, // Increased top padding to account for navbar
          pb: 6
        }}
      >
        {/* Hero Section */}
        <Card 
          elevation={3}
          sx={{
            mb: 4,
            borderRadius: 3,
            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
            overflow: 'visible',
            mt: 10 // Added margin top to make space for avatar
          }}
        >
          <CardContent sx={{ 
            position: 'relative', 
            textAlign: 'center', 
            pt: 10, // Increased top padding
            pb: 4,
            px: { xs: 2, sm: 4 } // Added responsive horizontal padding
          }}>
            {/* Avatar */}
            <Avatar 
              src={resumeData.picture} 
              alt={resumeData.name}
              sx={{
                width: 160,
                height: 160,
                border: '4px solid white',
                boxShadow: 3,
                position: 'absolute',
                top: -80,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1,
                bgcolor: 'background.paper' // Added background color for better appearance
              }}
            />
            
            <Box sx={{ mt: 6 }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                {resumeData.name}
              </Typography>
              <Typography 
                variant="h5" 
                color="primary" 
                gutterBottom
                sx={{ fontWeight: 500 }}
              >
                {resumeData.title}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  fontStyle: 'italic',
                  maxWidth: '600px',
                  mx: 'auto',
                  mb: 3
                }}
              >
                {resumeData.moto}
              </Typography>

              {/* Social Icons */}
              <Box 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  flexWrap: 'wrap'
                }}
              >
                {Object.entries(resumeData.socials).map(([key, { link, icon }]) => (
                  <IconButton
                    key={key}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    aria-label={`Visit ${key}`}
                    sx={{
                      width: 36,
                      height: 36,
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        color: 'primary.main',
                        bgcolor: 'rgba(25, 118, 210, 0.04)'
                      },
                      '& img': {
                        width: '20px',
                        height: '20px',
                        objectFit: 'contain',
                        transition: 'transform 0.2s ease-in-out',
                      },
                      '&:hover img': {
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    {icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Main Content Section */}
        <Card sx={{ borderRadius: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Grid container spacing={4}>
              {/* About Me Section */}
              <Grid item xs={12}>
                <Typography 
                  variant="h4" 
                  fontWeight="bold" 
                  gutterBottom
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.text.primary} 30%, ${theme.palette.primary.main} 90%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  About Me
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    lineHeight: 1.8,
                    color: 'text.secondary'
                  }}
                >
                  {resumeData.about}
                </Typography>

                {/* Personal Details */}
                <Grid container spacing={3} sx={{ mt: 2 }}>
                  {resumeData.personalDetails && Object.entries(resumeData.personalDetails).map(([key, value]) => (
                    <Grid item xs={12} sm={6} md={4} key={key}>
                      <Paper
                        elevation={1}
                        sx={{
                          p: 2,
                          height: '100%',
                          transition: 'transform 0.2s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        <Typography variant="subtitle2" color="primary" gutterBottom>
                          {key}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {value}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                {/* QR Code Section */}
                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      maxWidth: 'fit-content',
                      borderRadius: 2,
                      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Scan to Visit Portfolio
                    </Typography>
                    {resumeData.UrlQRCode && (
                      <Box 
                        sx={{ 
                          width: '180px',
                          mx: 'auto',
                          '& img': {
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            borderRadius: 1
                          }
                        }}
                      >
                        {resumeData.UrlQRCode}
                      </Box>
                    )}
                  </Paper>
                </Box>
              </Grid>

              {/* Skills Section */}
              <Grid item xs={12}>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                  Skills & Expertise
                </Typography>
                <Grid container spacing={1.5}>
                  {resumeData.skills && resumeData.skills.map((skill, index) => (
                    <Grid item key={index} xs={6} sm={4} md={3}>
                      <Paper 
                        elevation={1}
                        sx={{
                          p: 1.5,
                          textAlign: 'center',
                          transition: 'all 0.3s ease',
                          cursor: 'default',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            boxShadow: 3,
                            bgcolor: 'primary.light',
                            color: 'white'
                          }
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {skill}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default AboutSection;