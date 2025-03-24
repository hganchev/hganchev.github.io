import React from 'react';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box 
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        bgcolor: (theme) => theme.palette.grey[100]
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ mb: 3 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </Typography>
          
          <IconButton 
            onClick={scrollToTop}
            color="primary"
            aria-label="back to top"
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': {
                bgcolor: 'background.paper',
                transform: 'translateY(-5px)',
                transition: 'transform 0.3s ease'
              }
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;