import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container, Grid } from '@mui/material';

import Projects from "./pages/Projects/Projects";
import Mission from "./pages/Mission/Mission";
import Experience from "./pages/Experience/Experience";
import AboutMe from "./pages/AboutMe/AboutMe"
import Dashboard from './pages/Dashboard/Dashboard';

import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          {/* <AboutMe/> */}
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className='main-content container_shadow'>
              <Routes>
                <Route path="/" element={<AboutMe />}/>
                <Route path="/portfolio" element={<Experience />}/>
              </Routes>  
            </div>
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
