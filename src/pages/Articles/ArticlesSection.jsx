import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
  Divider,
  Chip,
  TextField,
  InputAdornment,
  Fade,
  useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import articlesData from '../../utils/articlesData';

const ArticlesSection = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleArticles, setVisibleArticles] = useState({});
  const articleRefs = useRef({});
  const theme = useTheme();

  useEffect(() => {
    setArticles(articlesData.articles || []);
  }, []);

  // Handle search filter
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      
      filteredArticles.forEach(article => {
        const element = articleRefs.current[article.id]?.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= viewportHeight * 0.85;
          
          if (isVisible && !visibleArticles[article.id]) {
            setVisibleArticles(prev => ({ ...prev, [article.id]: true }));
          }
        }
      });
    };

    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredArticles, visibleArticles]);

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
            My <span style={{ color: theme.palette.primary.main }}>Articles</span>
          </Typography>
          <Divider sx={{ width: '80px', mx: 'auto', mb: 2, borderWidth: 3, borderColor: theme.palette.primary.main }} />
          <Typography variant="h6" color="textSecondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
            Explore my latest thoughts, tutorials, and insights
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box 
          sx={{ 
            maxWidth: 500, 
            mx: 'auto', 
            mb: 5,
            position: 'relative'
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
              sx: { 
                borderRadius: 3,
                backgroundColor: 'background.paper',
                '&.Mui-focused': {
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }
              }
            }}
          />
        </Box>
        
        {/* Articles Grid */}
        <Grid container spacing={4}>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => {
              // Create ref for the article
              if (!articleRefs.current[article.id]) {
                articleRefs.current[article.id] = React.createRef();
              }
              
              // Calculate the delay for the animation
              const delay = index % 3 * 200;
              
              return (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  md={4} 
                  key={article.id}
                  ref={articleRefs.current[article.id]}
                >
                  <Fade 
                    in={visibleArticles[article.id]} 
                    timeout={800}
                    style={{ transitionDelay: visibleArticles[article.id] ? `${delay}ms` : '0ms' }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                        }
                      }}
                    >
                      <CardActionArea 
                        component={Link} 
                        to={`/article/${article.id}`}
                        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                      >
                        {article.image && (
                          <CardMedia
                            component="img"
                            height="200"
                            image={article.image}
                            alt={article.title}
                            sx={{
                              objectFit: 'cover',
                            }}
                          />
                        )}
                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                            <Chip 
                              icon={<BookmarkIcon fontSize="small" />}
                              label={article.category || 'General'} 
                              size="small"
                              color="primary"
                              sx={{ fontWeight: 500 }}
                            />
                            <Typography variant="caption" color="text.secondary">
                              {article.date}
                            </Typography>
                          </Box>
                          
                          <Typography 
                            variant="h5" 
                            component="h3" 
                            gutterBottom 
                            fontWeight="bold"
                            sx={{ 
                              mt: 1,
                              display: '-webkit-box',
                              overflow: 'hidden',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 2,
                              lineHeight: 1.3,
                              height: '2.6em'
                            }}
                          >
                            {article.title}
                          </Typography>
                          
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ 
                              mb: 2,
                              display: '-webkit-box',
                              overflow: 'hidden',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 3,
                              height: '4.5em'
                            }}
                          >
                            {article.description || 'No description available.'}
                          </Typography>
                          
                          <Box display="flex" justifyContent="flex-end" mt={2}>
                            <Button 
                              size="small" 
                              color="primary"
                              endIcon={<ArrowForwardIcon />}
                              sx={{ fontWeight: 'medium' }}
                            >
                              Read More
                            </Button>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Fade>
                </Grid>
              );
            })
          ) : (
            <Box textAlign="center" width="100%" py={8}>
              <Typography variant="h6" color="textSecondary">
                No articles found matching "{searchTerm}"
              </Typography>
              <Button 
                variant="outlined" 
                color="primary" 
                sx={{ mt: 2 }}
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </Button>
            </Box>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default ArticlesSection;