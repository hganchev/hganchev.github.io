import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  CircularProgress,
  Alert
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import projectData from '../../utils/projectsData';

// Styled components using MUI
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: '4px',
  cursor: 'pointer',
}));

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [label, setLabel] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Get unique labels
  const labels = ['All', ...new Set(projectData.projects.map(project => project.label))];

  // Filter function
  useEffect(() => {
    const filtered = activeFilter === 'All'
      ? projectData.projects
      : projectData.projects.filter(project => project.label === activeFilter);
    setFilteredProjects(filtered);
  }, [activeFilter]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setProjects(projectData.projects);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box m={2}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Box mb={3} display="flex" flexWrap="wrap" gap={1}>
          {labels.map((label) => (
            <StyledChip
              key={label}
              label={label}
              icon={<LocalOfferIcon />}
              onClick={() => setActiveFilter(label)}
              color={activeFilter === label ? 'primary' : 'default'}
              sx={{
                '&:hover': {
                  backgroundColor: activeFilter === label ? 'primary.light' : 'action.hover',
                },
              }}
            />
          ))}
        </Box>
        <Grid container spacing={3}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography 
                      component="a" 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      sx={{ 
                        textDecoration: 'none', 
                        color: 'primary.main',
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.date}
                    </Typography>
                  </Box>
                  <StyledChip label= {project.label}
                              icon={<LocalOfferIcon />}
                              color={label === 'All' ? 'primary' : 'default'}>
                  </StyledChip>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Projects;
