import React from 'react';
import '../styles/WorkExperience.css';

const education = [
  {
    role: "Masters in Journalism and Mass Communication",
    company: "Guru Jambeshwar University",
    duration: "2022-2024",
   
  },
  {
    role: "Software Developer Intern",
    company: "Taquino India Private Ltd.",
    duration: "Jun 2023 - Aug 2023",
    description: [
      "Designed and implemented a Tutor registration section for Coaching Detail using React.js.",
      "Developed a scalable website for SIS Group Enterprises, optimizing data handling with Express.js.",
      "Created 10+ REST APIs, enhancing backend performance and reducing response time by 40%.",
      "Built an admin panel for data management, improving workflow efficiency and system control."
    ]
  }
];

const Education = () => {
  return (
    <section id="work-experience" className="work-experience">
      <h2 className="heading">Work <span>Experience</span></h2>
      <div className="experience-list">
        {education.map((education, index) => (
          <div key={index} className="experience-card">
            <div className="experience-content">
              <h3>{education.role}</h3>
              <h4>{education.company} | {education.duration}</h4>
              <ul>
                {education.description && education.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
