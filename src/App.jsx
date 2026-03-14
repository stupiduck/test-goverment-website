import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import About from './pages/About';
import StateSchemes from './pages/StateSchemes';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import './App.css';

function App() {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const adjustFontSize = (delta) => {
    setFontSize(prev => Math.min(Math.max(prev + delta, 80), 120));
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  return (
    <Router>
      <div className={`gov-layout ${highContrast ? 'high-contrast' : ''}`} style={{ fontSize: `${fontSize}%` }}>
        {/* Authentic Legacy Header */}
        <header className="gov-header">
          <div className="header-top">
            <div className="skip-links">
              <a href="#main-content">Skip to Main Content</a> | 
              <span className="text-resize">
                <button onClick={() => adjustFontSize(-10)} title="Decrease Font">A-</button>
                <button onClick={() => setFontSize(100)} title="Normal Font">A</button>
                <button onClick={() => adjustFontSize(10)} title="Increase Font">A+</button>
              </span>
              | 
              <button 
                className="contrast-toggle" 
                onClick={toggleHighContrast}
              >
                {highContrast ? 'Standard View' : 'High Contrast View'}
              </button>
            </div>
            <div className="lang">
              <select aria-label="Select Language"><option>English</option><option>हिन्दी</option></select>
            </div>
          </div>
          <div className="logo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Satyameva Jayate" className="emblem" />
            <div className="header-text">
              <h1>राष्ट्रीय छात्रवृत्ति पोर्टल</h1>
              <h2>National Scholarship Portal</h2>
              <p>Government of India</p>
            </div>
          </div>
          <nav className="main-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/state-schemes">State Schemes</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </nav>
        </header>

        {/* The Marquee */}
        <div className="news-ticker">
          <span className="ticker-label">LATEST UPDATES:</span>
          <marquee behavior="scroll" direction="left" scrollamount="4">
            New Pre-Matric Scholarship guidelines released. Applications are now OPEN for the 2026-2027 academic year. Ensure Aadhar is linked to bank account before applying.
          </marquee>
        </div>

        <div id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/state-schemes" element={<StateSchemes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>

        <footer className="gov-footer">
          <div className="footer-links">
            <Link to="/about">About Us</Link> | 
            <Link to="/contact">Contact Us</Link> | 
            <Link to="/faq">FAQ</Link>
          </div>
          <p>Designed and Developed by National Informatics Centre (NIC) | Ministry of Electronics & IT</p>
          <p>Copyright © 2026. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
