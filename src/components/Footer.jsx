import React from 'react';
import './Footer.css'; 

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2024 Dolisy Yurni - All Rights Reserved
        </p>
       
        <div className="footer-info">
          <p className="footer-description">
            Passionate developer focused on building user-centric solutions. Let's connect and collaborate on exciting projects!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
