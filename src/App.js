import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from "./components/Projects/Projects";
import Mission from "./components/Mission/Mission";
import Experience from "./components/Experience/Experience";
import AboutMe from "./components/AboutMe/AboutMe"
import Sidebar from "./components/Sidebar";
import { Dashboard } from './components/Dashboard/Dashboard';

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
