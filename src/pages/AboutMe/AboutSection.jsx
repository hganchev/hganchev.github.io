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
  Fade,
  CardContent
} from '@mui/material';
import { styled } from '@mui/material/styles';
import resumeData from '../../utils/resumeData';
import GitHubStats from '../../components/GitHubStats';

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const sectionRef = useRef(null);

  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows[10]
    }
  }));

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
          pt: 4,
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
            overflow: 'visible'
          }}
        >
          <CardContent sx={{ position: 'relative', textAlign: 'center', pt: 8, pb: 4 }}>
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
                zIndex: 1
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

        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <Card 
              elevation={2}
              sx={{ 
                borderRadius: 3,
                position: 'sticky',
                top: 100
              }}
            >
              <CardContent>
                {/* QR Code Section */}
                {resumeData.UrlQRCode && (
                  <Box 
                    sx={{ 
                      width: '100%',
                      maxWidth: '140px',
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
                
                <Divider sx={{ my: 3 }} />

                {/* Personal Details */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Personal Details
                </Typography>
                <Box sx={{ '& > *:not(:last-child)': { mb: 2 } }}>
                  {resumeData.personalDetails && Object.entries(resumeData.personalDetails).map(([key, value]) => (
                    <Box key={key}>
                      <Typography variant="subtitle2" color="primary" gutterBottom>
                        {key}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={8}>
            {/* About Me */}
            <Grid item xs={12} >
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
            </Grid>

            {/* Skills Section */}
            <Card sx={{ mb: 4, borderRadius: 3 }}>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* GitHub Stats */}
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  GitHub Activity
                </Typography>
                <GitHubStats />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutSection;