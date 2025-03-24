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
  Stack
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
      {/* Avatar Section at Top */}
      <Box 
        ref={profileRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 6,
          pt: 4
        }}
      >
        <Avatar 
          src={resumeData.picture} 
          alt={resumeData.name}
          sx={{
            width: 180,
            height: 180,
            border: '4px solid white',
            boxShadow: 3,
            mb: 2.5
          }}
        />
        <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
          {resumeData.name}
        </Typography>
        <Typography 
          variant="h5" 
          color="primary" 
          align="center" 
          gutterBottom
          sx={{ fontWeight: 500 }}
        >
          {resumeData.title}
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          align="center" 
          sx={{ 
            fontStyle: 'italic',
            maxWidth: '600px',
            mb: 2.5
          }}
        >
          {resumeData.moto}
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="flex-start">
        {/* Profile Section */}
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3}
            sx={{ 
              p: 3, 
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
              position: 'sticky',
              top: 100
            }}
          >
            {/* Social Icons */}
            <Stack 
              direction="row" 
              spacing={1} 
              sx={{ 
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 1,
                mb: 3,
                '& > *': {
                  m: 0.5
                }
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
            </Stack>

            <Divider flexItem sx={{ mb: 3 }} />
            
            {/* QR Code Section */}
            {resumeData.UrlQRCode && (
              <Box 
                sx={{ 
                  width: '100%',
                  maxWidth: '180px',
                  mx: 'auto',
                  p: 2,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  boxShadow: 1,
                  '& img': {
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: 1
                  }
                }}
              >
                {resumeData.UrlQRCode}
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                  align="center"
                  sx={{ 
                    display: 'block',
                    mt: 1,
                    fontSize: '0.75rem'
                  }}
                >
                  Scan to visit portfolio
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
        
        {/* About Me Details */}
        <Grid item xs={12} md={8} ref={detailsRef}>
          <Box>
            <Typography 
              variant="h3" 
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
            
            <Grid container spacing={3} sx={{ mt: 1 }}>
              {resumeData.personalDetails && Object.entries(resumeData.personalDetails).map(([key, value]) => (
                <Grid item xs={12} sm={6} key={key}>
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
                    <Typography variant="body2">
                      {value}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
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
            </Box>
            
            {/* GitHub Stats Component */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                GitHub Activity
              </Typography>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 2.5, 
                  borderRadius: 2,
                  bgcolor: 'background.default' 
                }}
              >
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