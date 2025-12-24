import React from 'react';
import '../styles/WorkExperience.css';

const experiences = [
  {
    role: "Project Coordinator - Communications and Executive Training",
    company: "FSR Global",
    duration: "12/2023 to Present",
    location:"New Delhi",
    description: [
     "Disseminating and managing the communications of India Energy Stack progress by the knowledge partner",
"Developing a comprehensive research output on Women in the Indian Energy Sector",
"Leading the annual Energy Dozen Initiative - spotlighting the contributions of 12 women",
"leaders across various domains within the energy sector, involving in-depth interviews and",
"narrative development to inspire future generations of women in energy",
"Built and developed the learning management system - Energy Transition Academy",
"Leading the training wing of the organisation - proposal writing, course development and coordination, digital management",
"Leading multiple international projects, ensuring consistent branding, streamlined communication, and timely delivery of key outputs",
"Managing the communications strategy for the Annual Conference of the International Association for Energy Economics (IAEE) since 2024",
"Managing FSR Global's social media platforms, driving audience growth and engagement through innovative campaigns and interactive content",
"Conceptualizing and executing online <webinars />in-person conferences, ensuring seamless event delivery and participant interaction"
]},
  {
    company: "United Nations Women",
    role: "Young Professional - Communications, IGP & Gender Equality",
    duration: "o7/2023 to 12/2023",
    location: "New Delhi",
    description: [
     "Handled Intergovernmental Communication - social media and event planning.",
     "Worked closely on Women20 under G20, India.",
     "Worked on the internal newsletter and social media creatives.",
     "Handled ministerial conference coordination in regard to G20.",
     "Worked on Generation Equality Allyships.",
     "Worked on Profiling 75 women leaders' stories for “हम | When Women Lead”."
    ]
  }
  ,
   {
    company: "Ruder Finn Asia",
    role: "Creative Copywriter",
    duration: "o1/2023 to 06/2023",
    location: "New Delhi",
    description: [
    "Creative content creation for B2B brands and their thought leaders.",
    "Coordinating with media for event coverage.",
    "Working on New Business Ideas - preparing the research and presentation pitch."
    ]
  }, {
    company: "Tata Power",
    role: "Corporate Communication Executive",
    duration: "07/2022 - 12/2022",
    location: "Berhampur, Odisha",
    description: [
    "Planned and executed CSR Events  ",
    "Worked on Information Education Communication Projects",
    "Handled Internal communication - monthly organizational newsletter and weekly internal",
    "SANDESH email",
    "SES, PR, and PO creation on SAP",
    "Media relations and press notes"
    ]
  }, {
    company: "Blue Whistle Advertising",
    role: "Executive Copywriter",
    duration: "01/2021 - 10/2021",
    location: "Patna, Bihar",
    description: [
   "Coordinate with designers to create creative and engaging social media designs.",
   "Develop ad-campaign concepts and maintain optimal reach.",
   "Work with corporate clients and manage the deliverables.",
   "Worked mainly with food and hospitality clients.",
   "Came-up with some amazing creative social media copies.",
   "Developed quirky copies for Moment Marketing/Topical Marketing."
    ]
  }
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="work-experience">
      <h2 className="heading">Work <span>Experience</span></h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <div className="experience-content">
              <h3>{experience.role}</h3>
              <h4>{experience.company} | {experience.duration}</h4>
              <ul>
                {experience.description.map((point, idx) => (
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

export default WorkExperience;
