import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Header from './components/Header';
import './styles/App.css';
import TechnicalSkills from './components/TechnicalSkills';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skill" element={<TechnicalSkills />} />

      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
