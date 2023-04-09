import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container, Grid, Switch } from '@mui/material';

import Projects from "./pages/Projects/Projects";
import Mission from "./pages/Mission/Mission";
import Experience from "./pages/Experience/Experience";
import AboutMe from "./pages/AboutMe/AboutMe"
import Dashboard from './pages/Dashboard/Dashboard';

import Header from "./components/Header";

function App() {
  return (
    // <BrowserRouter>
    //   <Sidebar>
    //     <Routes>
    //       <Route path="/" element={<Dashboard />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //       <Route path="/about" element={<AboutMe />} />
    //       <Route path="/experience" element={<Experience />} />
    //       <Route path="/projects" element={<Projects />} />
    //       <Route path="/mission" element={<Mission />} />
    //     </Routes>
    //   </Sidebar>
    // </BrowserRouter>
    <Container>
      <Grid container>
        <Grid item lg={3} md={4} sm={12} xs={12} style={{backgroundColor: 'blue'}}>
          <AboutMe/>
        </Grid>
        <Grid item xs style={{backgroundColor: 'red'}}>
          <Router>
            <Header />
            <Switch>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/mission" element={<Mission />} />
            </Switch>
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
