import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Projects from "./pages/Projects/Projects";
import Mission from "./pages/Mission/Mission";
import Experience from "./pages/Experience/Experience";
import AboutMe from "./pages/AboutMe/AboutMe"
import Dashboard from './pages/Dashboard/Dashboard';

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mission" element={<Mission />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
