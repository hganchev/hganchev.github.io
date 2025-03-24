import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import resumeData from '../utils/resumeData';

const GitHubStats = () => {
  const username = resumeData.github?.username || 'hganchev';

  return (
    <Box sx={{ textAlign: 'center' }}>
      {/* GitHub Stats Card */}
      <Box sx={{ mb: 2 }}>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&hide_border=true&theme=react`}
          alt="GitHub Stats"
          style={{ width: '100%', maxWidth: 500, height: 'auto' }}
        />
      </Box>

      {/* Top Languages Card */}
      <Box sx={{ mb: 2 }}>
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&theme=react`}
          alt="Top Languages"
          style={{ width: '100%', maxWidth: 500, height: 'auto' }}
        />
      </Box>

      {/* Contribution Graph */}
      <Box sx={{ mb: 2 }}>
        <img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true`}
          alt="Contribution Graph"
          style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
        />
      </Box>

      <Typography variant="caption" color="text.secondary">
        Powered by{' '}
        <Link
          href="https://github.com/anuraghazra/github-readme-stats"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          GitHub Stats
        </Link>
      </Typography>
    </Box>
  );
};

export default GitHubStats;