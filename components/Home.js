import React from 'react';
import Header from './Header';
import '../styles/Home.css'; // Ensure you have a CSS file for styling
import About from './About';
import TechnicalSkills from './TechnicalSkills';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <Header />
      <section className="home" id="home">
        <div className="home-content">
          <h1>Hi, I am <span className="highlight">Amrita Sinha</span></h1>
          <div className="text-animate">
            <h2>COMMUNICATION PROFESSIONAL</h2>
          </div>
          
          <div className="btn-box">
          <a href="/assets/RiyaCV.pdf" className="btn" download>Download Resume</a>

            <a href="#contact" className="btn">Let's Connect</a>
          </div>
        </div>

    
      </section>
      <About/>
      <TechnicalSkills/>
      <WorkExperience/>
     <Education/>
      <Contact />
    </div>
  );
};

export default Home;
