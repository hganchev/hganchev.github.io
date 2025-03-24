import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Divider,
  IconButton,
  Snackbar,
  Alert,
  useTheme,
  Fade
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import resumeData from '../../utils/resumeData';

const ContactSection = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just show a success message
      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    }
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      title: 'Location',
      content: resumeData.location || 'Your Location'
    },
    {
      icon: <EmailIcon />,
      title: 'Email',
      content: resumeData.email || 'your.email@example.com'
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      content: resumeData.phone || '+1 234 567 890'
    }
  ];

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
            Get in <span style={{ color: theme.palette.primary.main }}>Touch</span>
          </Typography>
          <Divider sx={{ width: '80px', mx: 'auto', mb: 2, borderWidth: 3, borderColor: theme.palette.primary.main }} />
          <Typography variant="h6" color="textSecondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
            Feel free to contact me for any questions or opportunities
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} key={index}>
                  <Fade in={true} timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        height: '100%',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: theme.shadows[10]
                        }
                      }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2
                        }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            boxShadow: `0 4px 20px ${theme.palette.primary.main}40`
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography variant="h6" fontWeight="bold" gutterBottom>
                            {info.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.content}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Fade>
                </Grid>
              ))}
            </Grid>

            {/* Social Links */}
            <Box mt={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Follow Me
              </Typography>
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2,
                  flexWrap: 'wrap'
                }}
              >
                {Object.entries(resumeData.socials).map(([key, { link, icon }], index) => (
                  <Fade 
                    key={key} 
                    in={true} 
                    timeout={800} 
                    style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                  >
                    <IconButton
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: 'background.paper',
                        boxShadow: theme.shadows[2],
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          boxShadow: theme.shadows[4]
                        }
                      }}
                    >
                      {icon}
                    </IconButton>
                  </Fade>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Fade in={true} timeout={800} style={{ transitionDelay: '400ms' }}>
              <Paper
                elevation={3}
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  bgcolor: 'background.paper'
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        borderRadius: 2,
                        py: 1.5,
                        px: 4,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
                        boxShadow: `0 4px 20px ${theme.palette.primary.main}40`,
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: `0 6px 25px ${theme.palette.primary.main}60`
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Fade>
          </Grid>
        </Grid>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default ContactSection;