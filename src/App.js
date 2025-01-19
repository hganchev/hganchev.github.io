import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container, Grid } from '@mui/material';

import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import AboutMe from "./pages/AboutMe/AboutMe"
import Header from "./components/Header";
import Articles from './pages/Articles/Articles';
import ArticleView from './pages/Articles/ArticleView';
import PortfolioDetail from './pages/Projects/PortfolioDetail';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={3} md={4} sm={8} xs={12}>
          <AboutMe/>
        </Grid>
        <Grid item xs>
            <Header />
            <div className='main-content container_shadow'>
              <Routes>
                <Route path="/" element={<Resume />}/>
                <Route path="/portfolio" element={<Projects />}/>
                <Route path="/articles" element={<Articles />}/>
                <Route path={`/articleview/:id`} element={<ArticleView />}/>
                <Route path="/portfolio/:id" element={<PortfolioDetail />}/>
              </Routes>  
            </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
