import React from "react";
import "../styles/About.css"; 
// import blackImage from "../assets/black.jpg"; 

const About = () => {
  return (
    
    <section id="about">
      <h2>
        About <span>Me</span>
      </h2>
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-img">
          <img src="../assets/Amrita_Pic.jpg" alt="Profile" />
          <span className="circle-spin"></span>
        </div>

        {/* Right Side - Description */}
        <div className="about-text">
    
        <p>Communications and Strategic Engagement Professional with proven experience across
international organizations, energy policy networks, and corporate communications. Skilled in
brand storytelling, stakeholder engagement, and public information management with a focus on
gender equality, sustainability, and development communication. Demonstrated success in
managing multi-stakeholder projects, leading digital strategies, and producing content that aligns
with global policy priorities. Passionate about fostering inclusive narratives and building meaningful
partnerships to advance the SDGs.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
