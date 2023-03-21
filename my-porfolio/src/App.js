import './App.css';
import React from 'react';
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import AboutMe from "./AboutMe/AboutMe"

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="aboutme">
          <h2>AboutMe</h2>
          <AboutMe />
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <Experience />
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <Skills />
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;
