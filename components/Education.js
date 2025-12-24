import React from 'react';
import '../styles/WorkExperience.css';

const education = [
  {
    role: "Masters in Journalism and Mass Communication",
    company: "Guru Jambeshwar University",
    duration: "2022-2024",
   
  },
   {
    role: "Post Graduate Diploma in English Journalism",
    company: "Indian Institute of Mass Communication",
    duration: "2021-2022",
   
  },  {
    role: "Bachelors in Journalism & Mass Communication",
    company: "Amity University",
    duration: "2018-2021",
   
  }
  ];

const Education = () => {
  return (
    <section id="work-experience" className="work-experience">
      <h2 className="heading">Education </h2>
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
