import React from 'react';
import '../styles/TechnicalSkills.css';

const TechnicalSkills = () => {
  const skills = [
    { category: "Languages", skills: "JavaScript, Python, C, Java, SQL" },
    { category: "Web Technologies", skills: "HTML, CSS, SASS, React.js, Node.js, Express.js" },
    { category: "Databases", skills: "MongoDB, Oracle, SQL Server" },
    { category: "Cloud Platforms", skills: "Microsoft Azure" },
    { category: "Tools", skills: "Git, VS Code, Postman, Excel, PowerPoint" }
  ];

  return (
   <section className="technical-skills">

  <div className="tools-box">
    <h2>TOOLS</h2>
    <p>
      Canva, Adobe Premiere Pro, Adobe InDesign, Adobe Photoshop, Google Analytics,
      Google Trends, WordPress/GoDaddy, Learning Management System, Moodle,
      HubSpot/MailChimp
    </p>
  </div>

  <div className="skills-box">
    <h2>SKILLS</h2>
    <p>
      Strategic Communication, Social Media Management & Analytics, Report Writing,
      Website Designing, Video/Audio Editing, Photography, Interview & Podcast,
      Media and Event Management, Media Relation, Stakeholder Management,
      Crisis Management
    </p>
  </div>

</section>

  );
};

export default TechnicalSkills;
