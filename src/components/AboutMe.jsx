import React, { useState } from 'react';
import './AboutMe.css';
import catImage from './img/doli bulet.png'; 
import Timeline from './Timeline';
import CertificationsSection from './CertificationsSection';


import { FaGraduationCap, FaBuilding, FaUniversity, FaChalkboardTeacher, FaFlagCheckered } from 'react-icons/fa'; // Íconos de educación

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState('tech-stack'); 

  return (
    <div className="about-me-container">
      {/* central img*/}
      <div className="profile-picture">
        <img src={catImage} alt="Profile" className="rounded-picture" />
      </div>

      {/* name and id below the pic */}
      <div className="bio-details">
        <h2 className="bio-name">DOLISY FEBRIANI YURNI</h2>
        <p className="bio-id">M0403241081</p>
      </div>

      {/* about me content */}
      <div className="about-me-content">
        <div className="bio-text">
          <p>
            Hi, I’m Dolisy, but you can call me Dofy. I am currently an undergraduate Computer Science student at IPB University in Bogor, Indonesia.
            Originally, I come from Lampung, a vibrant province located at the southern tip of Sumatra Island. Lampung is renowned for its rich cultural heritage, breathtaking beaches, and the iconic Way Kambas National Park—a destination truly worth exploring.
            Living in both Lampung and Bogor has exposed me to two very distinct environments. Lampung offers a sunny, coastal atmosphere, while Bogor, famously known as the “Rain City,” greets you with frequent downpours and lush greenery—a stark yet refreshing contrast.
          </p>
          <p>
            Why Computer Science? Technology has always fascinated me. It’s a dynamic field that never stops evolving, offering endless opportunities for innovation.
            For me, it’s not just about the entertainment value—like scrolling through social media or sharing memes—but about leveraging technology to solve real-world problems, develop impactful applications, and drive meaningful change.
            Technology is no longer just the future; it’s the present. Through my studies, I aspire to contribute to this ever-evolving domain by creating solutions that improve lives, reduce inefficiencies, and, perhaps, make the world a little less “buggy.”
          </p>
          <p>
            Why IPB? IPB University stood out to me for its distinctive and lush environment. The campus is surrounded by greenery, offering a serene and natural atmosphere that fosters both academic focus and personal well-being.
            From the moment I first visited, I knew it was the ideal place to embark on my educational journey, even amidst the inevitable challenges of academic life. The campus feels like a blend of academia and nature, creating a tranquil yet inspiring setting that encourages productivity.
            Studying here is akin to living in a picturesque documentary setting—peaceful, refreshing, and invigorating. The fresh air and scenic surroundings provide a unique sense of balance, even during demanding times like exams or project deadlines.
            It’s more than just a campus; it’s an environment that supports growth, creativity, and resilience.
          </p>
          <p>
            "Stay hungry, stay foolish." – Steve Jobs
          </p>
        </div>
      </div>

      <div className="education-section">
        <Timeline />
      </div>
      <div>
        <CertificationsSection />
      </div>
    </div>
  );
};

export default AboutMe;
