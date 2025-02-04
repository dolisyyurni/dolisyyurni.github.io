import React, { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        containerRef.current.style.backgroundPosition = `${clientX / 20}px ${clientY / 20}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loading-screen" ref={containerRef}>
          <div className="spinner"></div>
          <div className="pompons"></div>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
