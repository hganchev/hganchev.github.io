import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  Chip,
  Divider,
  Button,
  CircularProgress,
  Card,
  CardMedia,
  Fade,
  useTheme
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaptopIcon from '@mui/icons-material/Laptop';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import projectsData from '../../utils/projectsData';

function PortfolioDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  
  useEffect(() => {
    // Find project by id
    const foundProject = projectsData.projects.find(p => p.id === id);
    setProject(foundProject);
    setLoading(false);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!project) {
    return (
      <Container maxWidth="md">
        <Box py={8} textAlign="center">
          <Typography variant="h4" gutterBottom>
            Project not found
          </Typography>
          <Button 
            component={Link} 
            to="/#projects" 
            variant="contained" 
            color="primary"
            startIcon={<ArrowBackIcon />}
          >
            Back to Projects
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Fade in={true} timeout={800}>
      <Container maxWidth="lg">
        <Box py={4}>
          {/* Back Button */}
          <Button 
            component={Link} 
            to="/#projects" 
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 4 }}
          >
            Back to Projects
          </Button>
          
          <Grid container spacing={4}>
            {/* Project Image */}
            <Grid item xs={12} md={6}>
              <Card 
                elevation={5}
                sx={{ 
                  borderRadius: 2,
                  overflow: 'hidden',
                  height: '100%'
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.name || project.title}
                  sx={{ 
                    height: '100%',
                    minHeight: 300,
                    objectFit: 'cover'
                  }}
                />
              </Card>
            </Grid>
            
            {/* Project Details */}
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={3}
                sx={{ 
                  p: 4,
                  borderRadius: 2,
                  height: '100%'
                }}
              >
                <Box mb={3}>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    {project.name || project.title}
                  </Typography>
                  <Chip 
                    label={project.label} 
                    color="primary" 
                    sx={{ fontWeight: 'medium' }}
                  />
                </Box>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CalendarTodayIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body1">
                        <strong>Date:</strong> {project.date}
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <AccessTimeIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body1">
                        <strong>Time Spent:</strong> {project.timeSpent}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Divider sx={{ my: 3 }} />
                
                {/* Task Description */}
                <Box mb={3}>
                  <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                    <LibraryBooksIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Task Description
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {project.taskDescription}
                  </Typography>
                </Box>
                
                {/* Technologies Used */}
                <Box mb={3}>
                  <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                    <LaptopIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Technologies Used
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {project.technologiesUsed}
                  </Typography>
                </Box>
                
                {/* Lessons Learned */}
                <Box>
                  <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                    Key Takeaways
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {project.lessonsLearned}
                  </Typography>
                </Box>
                
                {project.url && (
                  <Box mt={3} textAlign="center">
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="large"
                      sx={{ 
                        borderRadius: 2,
                        px: 4,
                        py: 1,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
                        boxShadow: `0 4px 20px ${theme.palette.primary.main}40`,
                      }}
                    >
                      View Project
                    </Button>
                  </Box>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fade>
  );
}

export default PortfolioDetail;
