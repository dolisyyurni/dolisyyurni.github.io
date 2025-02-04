import React from "react";

import "./Hero.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import dolisyImage from "./img/dolisyy.png";



const Hero = () => {
  return (

    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="purple-text bold-text">Hello</span>, I'm
            <br />
            <span className="hero-name">DOLISY YURNI</span>
          </h1>
          <p className="hero-subtitle">
            Yap, a <span className="purple-text bold-text">Computer Science</span> Student
          </p>

          <p className="hero-description">
            I am an undergraduate student at IPB University, Indonesia, pursuing a degree in Computer Science.
            Passionate in several key areas of technology, including web development, cybersecurity, and machine learning or artificial intelligence.
          </p>
          <p className="hero-description">
            Explored new opportunities and pushing my boundaries,
            which led me to pursue higher education in one of the most innovative fields today—technology.
          </p>

          <div className="hero-buttons">
            <a href="/aboutme" className="hero-button">
              Learn More
            </a>
            <a href="/portfolio" className="hero-button">
              My Projects
            </a>



          </div>

        </div>
        <div className="hero-image-container">
          <img src={dolisyImage} alt="Dolisy Yurni" className="profile-photo" />

          <div className="hero-spotify-buttons">
            <div className="hero-spotify-buttons">
              <a href="https://open.spotify.com/playlist/4mNaDuji6cZuqeHXpSn0bg?si=Ab_EF5BlSPSr7wzOgQHKoQ&pi=-aNNtxvkSYGcP " target="_blank" rel="noopener noreferrer">Vibing</a>
            </div>
          </div>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/dolisyyurni"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://ipb.link/linkedin-dolisy"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/dolisyuu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
