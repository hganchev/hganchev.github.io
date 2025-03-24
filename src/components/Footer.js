import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Divider,
  useTheme,
  Stack,
  Link
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import resumeData from '../utils/resumeData';

const Footer = () => {
  const theme = useTheme();
  
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
        py: 4,
        mt: 'auto',
        bgcolor: theme.palette.mode === 'dark' 
          ? 'background.paper'
          : 'background.default',
        borderTop: 1,
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between', 
            alignItems: 'center',
            gap: 2
          }}
        >
          {/* Social Links */}
          <Stack 
            direction="row" 
            spacing={2}
            sx={{
              order: { xs: 2, sm: 1 }
            }}
          >
            {Object.entries(resumeData.socials).map(([key, { link, icon }]) => (
              <IconButton
                key={key}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                color="inherit"
                sx={{
                  transition: 'all 0.2s',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    color: 'primary.main'
                  },
                  '& img': {
                    width: '20px',
                    height: '20px',
                    filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none'
                  }
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>

          {/* Copyright Text */}
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              order: { xs: 1, sm: 2 }
            }}
          >
            © {new Date().getFullYear()} Made with 
            <FavoriteIcon sx={{ fontSize: 16, color: 'error.main' }} /> by
            <Link 
              href="https://github.com/hganchev"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: 'primary.main',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Hristo Ganchev
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;