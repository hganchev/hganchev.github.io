import './App.css';
import React, { useState, useRef, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Theme
import { lightTheme, darkTheme } from './utils/theme';
import { smoothScrollToRef, getOffsetByBreakpoint } from './utils/smoothScroll';

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
  const theme = useTheme();

  // Section refs
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const articlesRef = useRef(null);
  const contactRef = useRef(null);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Scroll handler
  const scrollToSection = useCallback((ref) => {
    if (ref && ref.current) {
      const offset = getOffsetByBreakpoint(currentTheme);
      smoothScrollToRef(ref, offset);
    }
  }, [currentTheme]);

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
              <Header 
                scrollToSection={scrollToSection}
                aboutRef={aboutRef}
                resumeRef={resumeRef}
                projectsRef={projectsRef}
                articlesRef={articlesRef}
                contactRef={contactRef}
              />
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
                <Box id="about" ref={aboutRef} sx={{ minHeight: '100vh', pt: { xs: 8, sm: 10 } }}>
                  <AboutSection />
                </Box>
                
                <Box id="resume" ref={resumeRef} sx={{ minHeight: '100vh', pt: { xs: 8, sm: 10 } }}>
                  <ResumeSection />
                </Box>
                
                <Box id="projects" ref={projectsRef} sx={{ minHeight: '100vh', pt: { xs: 8, sm: 10 } }}>
                  <ProjectsSection />
                </Box>
                
                <Box id="articles" ref={articlesRef} sx={{ minHeight: '100vh', pt: { xs: 8, sm: 10 } }}>
                  <ArticlesSection />
                </Box>
                
                <Box id="contact" ref={contactRef} sx={{ minHeight: '100vh', pt: { xs: 8, sm: 10 } }}>
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
