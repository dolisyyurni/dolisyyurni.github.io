import React, { useState } from 'react';
import './VerticalCarousel.css'; 

import poster1 from './img/poster2.png';
import poster2 from './img/poster3.png';
import poster3 from './img/poster4.jpg';
import poster4 from './img/poster5.png';
import poster5 from './img/poster6.png';
import poster6 from './img/poster7.png';

const posters = [
  { id: 1, src: poster1, alt: "Poster 1" },
  { id: 2, src: poster2, alt: "Poster 2" },
  { id: 3, src: poster3, alt: "Poster 3" },
  { id: 4, src: poster4, alt: "Poster 4" },
  { id: 5, src: poster5, alt: "Poster 5" },
  { id: 6, src: poster6, alt: "Poster 6" }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2); 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posters.length) % posters.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-nav prev" onClick={handlePrev}>
        &lt;
      </button>

      <div className="carousel">
        {posters.map((poster, index) => {
          const offset = index - currentIndex;

          let transform = "scale(0.8) translateX(-100px)";
          let zIndex = 1;
          let opacity = 0.5;

          if (offset === 0) {
            transform = "scale(1) translateX(0)";
            zIndex = 3;
            opacity = 1;
          } else if (offset === 1 || offset === -4) {
            transform = "scale(0.9) translateX(50px)";
            zIndex = 2;
          }

          return (
            <div
              key={poster.id}
              className="carousel-item"
              style={{
                transform,
                zIndex,
                opacity,
              }}
            >
              <img
                src={poster.src}
                alt={poster.alt}
                className="carousel-image"
              />
            </div>
          );
        })}
      </div>

      <button className="carousel-nav next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
