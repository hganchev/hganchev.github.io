import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { GitHubStats } from '../../components/GitHubStats';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        flexGrow: 1, 
        bgcolor: 'background.paper',
        py: 4,
        px: 2
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              GitHub Statistics
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <GitHubStats loading={loading} error={error} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
