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
import articlesData from '../../utils/articlesData';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

// Add StyledChip component
const StyledChip = styled(Chip)(({ theme }) => ({
  margin: '4px',
  cursor: 'pointer',
}));

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articleTime, setArticleTime] = useState({});
  // Add new state
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [label, setLabel] = useState('All');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        // Fetch and process each article
        const processedArticles = await Promise.all(
          articlesData.articles.map(async (article) => {
            try {
              // Fetch article content
              const response = await fetch(article.url);
              if (!response.ok) throw new Error(`Failed to fetch ${article.title}`);
              const content = await response.text();
              
              // Calculate read time
              const wordsPerMinute = 220;
              const wordCount = content.trim().split(/\s+/).length;
              const readTime = Math.ceil(wordCount / wordsPerMinute);
              
              return {
                ...article,
                formattedDate: new Date(article.date).toLocaleDateString(),
                readTime: readTime
              };
            } catch (err) {
              console.error(`Error processing article ${article.title}:`, err);
              return {
                ...article,
                formattedDate: new Date(article.date).toLocaleDateString(),
                readTime: 0
              };
            }
          })
        );

        setArticles(processedArticles);
        
        // Create time mapping
        const timeMapping = {};
        processedArticles.forEach(article => {
          timeMapping[article.id] = {
            date: article.formattedDate,
            readTime: article.readTime
          };
        });
        setArticleTime(timeMapping);
        setArticles(articlesData.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Get unique labels
  const labels = ['All', ...new Set(articles.map(article => article.label))];
  
  // Add filter effect
  useEffect(() => {
    const filtered = activeFilter === 'All'
      ? articles
      : articles.filter(article => article.label === activeFilter);
    setFilteredArticles(filtered);
  }, [activeFilter, articles]);

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
          Articles
        </Typography>
        
        {/* Add filter chips */}
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
          {/* Update to use filteredArticles instead of articles */}
          {filteredArticles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={article.image}
                  alt={article.title}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography 
                      component={Link}
                      to={`/articleview/${article.id}`}
                      sx={{ 
                        textDecoration: 'none', 
                        color: 'primary.main',
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {article.date}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {articleTime[article.id]?.readTime} min read
                  </Typography>
                  <StyledChip label= {article.label}
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

export default Articles;
