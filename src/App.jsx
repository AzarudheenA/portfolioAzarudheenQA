
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Certifications from './pages/Certifications.jsx';
import Contact from './pages/Contact.jsx';
import Download from './pages/Download.jsx';
import AboutMe from "./pages/AboutMe.jsx";




export default function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen font-sans">
        <nav className="bg-black p-4 flex justify-around shadow-md">
          {['About', 'AboutMe', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact', 'Download'].map((page) => (
            <Link key={page} to={`/${page.toLowerCase()}`} className="hover:text-yellow-300">
              {page}
            </Link>
          ))}
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download" element={<Download />} />
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
