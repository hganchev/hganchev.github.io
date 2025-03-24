import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Theme
import { lightTheme, darkTheme } from './utils/theme';

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Section Components
import AboutSection from './pages/AboutMe/AboutSection';
import ResumeSection from './pages/Resume/ResumeSection';
import ProjectsSection from './pages/Projects/ProjectsSection';
import ArticlesSection from './pages/Articles/ArticlesSection';
import ContactSection from './pages/Contact/ContactSection';

// Individual Page Views
import ArticleView from './pages/Articles/ArticleView';
import PortfolioDetail from './pages/Projects/PortfolioDetail';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const currentTheme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default',
          color: 'text.primary',
          transition: 'background-color 0.3s ease'
        }}
      >
        <Routes>
          {/* Individual page routes */}
          <Route path="/article/:id" element={<ArticleView />} />
          <Route path="/project/:id" element={<PortfolioDetail />} />

          {/* Main single page layout */}
          <Route path="*" element={
            <>
              <Header />
              {/* Theme Toggle Button */}
              <IconButton
                onClick={toggleTheme}
                sx={{
                  position: 'fixed',
                  right: 24,
                  top: 84,
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  zIndex: 1000,
                  '&:hover': {
                    bgcolor: 'background.paper',
                  }
                }}
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>

              {/* Main Content */}
              <Box component="main" sx={{ flexGrow: 1 }}>
                <Box id="about" sx={{ minHeight: '100vh', pt: { xs: 8, sm: 10 } }}>
                  <AboutSection />
                </Box>
                
                <Box id="resume" sx={{ minHeight: '100vh', pt: { xs: 8, sm: 10 } }}>
                  <ResumeSection />
                </Box>
                
                <Box id="projects" sx={{ minHeight: '100vh', pt: { xs: 8, sm: 10 } }}>
                  <ProjectsSection />
                </Box>
                
                <Box id="articles" sx={{ minHeight: '100vh', pt: { xs: 8, sm: 10 } }}>
                  <ArticlesSection />
                </Box>
                
                <Box id="contact" sx={{ minHeight: '100vh', pt: { xs: 8, sm: 10 } }}>
                  <ContactSection />
                </Box>
              </Box>

              <Footer />
              <ScrollToTop />
            </>
          } />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
