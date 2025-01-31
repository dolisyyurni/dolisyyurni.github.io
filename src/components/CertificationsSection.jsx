import React from "react";
import "./CertificationsSection.css";
import cert1 from "./img/cert1.jpeg";
import cert2 from "./img/cert2.jpeg";
import cert3 from "./img/cert3.jpeg";
import cert4 from "./img/cert4.jpeg";

const CertificationsSection = () => {
  return (
    <div className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <p className="section-description">
        Highlights of my professional certification.
      </p>
      <div className="certifications-list">
        <a href="https://www.linkedin.com/learning/certificates/eb7e3d8867a2205555af7671df545d5eb6f671ef8e7a7d3cc01765d064ba9d1d?trk=share_certificate" target="_blank" rel="noopener noreferrer" className="certification-item" style={{ backgroundImage: `url(${cert1})` }}>
          <h3>Career Essentials in Cybersecurity</h3>
          <p>Issued by: Microsoft & LinkedIn</p>
          <p>Year: 2025</p>
        </a>
      </div>
    </div>
  );
};

export default CertificationsSection;
