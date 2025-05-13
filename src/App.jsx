import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Object of refs for navigation
  const sectionRefs = {
    hero: heroRef,
    about: aboutRef,
    projects: projectsRef,
    experience: experienceRef,
    skills: skillsRef,
    contact: contactRef,
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar sectionRefs={sectionRefs} />
      <div className="flex-grow">
        <div ref={heroRef} id="hero">
          <Hero />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>
        <div ref={experienceRef} id="experience">
          <Experience />
        </div>
        <div ref={skillsRef} id="skills">
          <Skills />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
