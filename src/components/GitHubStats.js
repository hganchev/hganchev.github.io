import React from 'react';
import { Box, Skeleton, Fade } from '@mui/material';

export const GitHubStats = ({ loading = false, error = null }) => {
  if (error) return <Box>Error loading GitHub stats</Box>;
  
  if (loading) return <Skeleton variant="rectangular" height={200} />;

  return (
    <Fade in timeout={1000}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2 
      }}>
        <a href="https://github.com/hganchev">
          <Box
            component="img"
            alt="GitHub Stats"
            width="130%"
            src="https://github-readme-stats.vercel.app/api?username=hganchev&show_icons=true&hide_title=true&count_private=true&theme=vue"
            sx={{
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(2)'
              }
            }}
          />
        </a>
        <a href="https://github.com/hganchev">
          <Box
            component="img"
            alt="Top Languages"
            width="130%"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=hganchev&layout=compact&theme=vue&hide=jupyter%20notebook"
            sx={{
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(2)'
              }
            }}
          />
        </a>
      </Box>
    </Fade>
  );
};