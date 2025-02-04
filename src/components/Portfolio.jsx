import React from 'react';
import './Portfolio.css';
import VerticalCarousel from './VerticalCarousel';

const Portfolio = () => {
  return (
    <div className="portfolio-container">

      {/* EDITING VIDEO Section */}
      <section className="portfolio-section">
        <h1 className="portfolio-title">Editing Video</h1>
        <div className="portfolio-content">
          {/* Vimeo Video */}
          <div className="portfolio-video">
            <iframe
              src="https://player.vimeo.com/video/1044901492?autoplay=1"
              title="Vimeo Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
          {/* Text Section */}
          <div className="portfolio-description">
            <p>
              Dive into video editing projects that highlight creativity and storytelling. This embedded video showcases the journey of transforming ideas into visuals that captivate and inspire.
            </p>
          </div>
        </div>
      </section>

      <section className="portofolio-section">
      </section>

      {/* DESIGN POSTER Section */}
      <section className="portfolio-section">
        <h1 className="portfolio-title">Design Poster</h1>
        <VerticalCarousel />
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-description">Coming Soon</p>
      </section>
    </div>
  );
};

export default Portfolio;
