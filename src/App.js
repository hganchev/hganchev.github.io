import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container, Grid } from '@mui/material';

import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import AboutMe from "./pages/AboutMe/AboutMe"
import Dashboard from './pages/Dashboard/Dashboard';
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={3} md={4} sm={8} xs={12}>
          <AboutMe/>
          <Dashboard/>
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className='main-content container_shadow'>
              <Routes>
                <Route path="/" element={<Experience />}/>
                <Route path="/portfolio" element={<Projects />}/>
              </Routes>  
            </div>
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
