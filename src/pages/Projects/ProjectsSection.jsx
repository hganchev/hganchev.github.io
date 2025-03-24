import React, { useState, useEffect, useRef } from 'react';
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
  Button,
  Paper,
  Tabs,
  Tab,
  Divider,
  useTheme,
  Fade
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import projectsData from '../../utils/projectsData';

// Styled components using MUI
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 100%)',
  }
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontWeight: 500,
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  '&.MuiChip-colorPrimary': {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  }
}));

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState({});
  const projectRefs = useRef({});
  const theme = useTheme();

  // Get unique labels
  const labels = ['All', ...new Set(projectsData.projects.map(project => project.label))];

  // Filter projects based on active filter
  useEffect(() => {
    const filtered = activeFilter === 'All'
      ? projectsData.projects
      : projectsData.projects.filter(project => project.label === activeFilter);
    setFilteredProjects(filtered);
    
    // Reset visibility for animation
    setVisibleProjects({});
  }, [activeFilter]);

  // Handle scroll effect for projects
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      
      filteredProjects.forEach(project => {
        const element = projectRefs.current[project.id]?.current; // Access the DOM element through .current
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= viewportHeight * 0.8;
          
          if (isVisible && !visibleProjects[project.id]) {
            setVisibleProjects(prev => ({ ...prev, [project.id]: true }));
          }
        }
      });
    };

    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredProjects, visibleProjects]);

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Box mb={6} textAlign="center">
          <Typography 
            variant="h3" 
            component="h2" 
            fontWeight="bold"
            gutterBottom
          >
            My <span style={{ color: theme.palette.primary.main }}>Projects</span>
          </Typography>
          <Divider sx={{ width: '80px', mx: 'auto', mb: 2, borderWidth: 3, borderColor: theme.palette.primary.main }} />
          <Typography variant="h6" color="textSecondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
            Explore my portfolio of projects across different domains and technologies
          </Typography>
        </Box>

        {/* Filter tabs */}
        <Paper 
          elevation={3} 
          sx={{ 
            mb: 5, 
            borderRadius: 3,
            overflow: 'hidden'
          }}
        >
          <Tabs 
            value={labels.indexOf(activeFilter)}
            onChange={(_, newValue) => setActiveFilter(labels[newValue])}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
            sx={{
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: 1.5,
              }
            }}
          >
            {labels.map(label => (
              <Tab 
                key={label} 
                label={label} 
                icon={label !== 'All' ? <LocalOfferIcon fontSize="small" /> : null}
                iconPosition="start"
                sx={{ 
                  fontWeight: 'medium',
                  py: 2,
                  minHeight: 60,
                }}
              />
            ))}
          </Tabs>
        </Paper>

        <Grid container spacing={4}>
          {filteredProjects.map((project) => {
            // Assign ref for this project
            if (!projectRefs.current[project.id]) {
              projectRefs.current[project.id] = React.createRef();
            }

            return (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={project.id}
                ref={projectRefs.current[project.id]}
              >
                <Fade in={visibleProjects[project.id]} timeout={800}>
                  <StyledCard>
                    <StyledCardMedia
                      component="img"
                      image={project.image}
                      alt={project.name || project.title}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                        {project.name || project.title}
                      </Typography>
                      
                      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <StyledChip 
                          label={project.label}
                          color="primary"
                          size="small"
                        />
                        <Typography variant="body2" color="text.secondary">
                          {project.date}
                        </Typography>
                      </Box>
                      
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.taskDescription?.substring(0, 120)}
                        {project.taskDescription?.length > 120 ? '...' : ''}
                      </Typography>
                      
                      {project.technologiesUsed && (
                        <Box mt={2}>
                          <Typography variant="subtitle2" color="primary.dark" gutterBottom>
                            Technologies:
                          </Typography>
                          <Typography variant="body2">
                            {project.technologiesUsed}
                          </Typography>
                        </Box>
                      )}
                      
                      <Box sx={{ 
                        mt: 3, 
                        pt: 2,
                        display: 'flex',
                        gap: 2,
                        justifyContent: 'space-between',
                        borderTop: '1px solid',
                        borderColor: 'divider'
                      }}>
                        <Button 
                          variant="contained" 
                          color="primary" 
                          component={Link} 
                          to={`/project/${project.id}`}
                          startIcon={<InfoIcon />}
                          size="small"
                          sx={{ borderRadius: 2 }}
                        >
                          Details
                        </Button>
                        
                        {project.url && (
                          <Button
                            variant="outlined"
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            endIcon={<LaunchIcon />}
                            size="small"
                            sx={{ borderRadius: 2 }}
                          >
                            View
                          </Button>
                        )}
                      </Box>
                    </CardContent>
                  </StyledCard>
                </Fade>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProjectsSection;