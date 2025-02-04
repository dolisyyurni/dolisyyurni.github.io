import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import bgImage from "./assets/bgq.jpg";

import "./App.css";

function App() {
  useEffect(() => {
    const circle = document.createElement("div");
    circle.className = "cursor-circle";
    document.body.appendChild(circle);

  

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.03;

    const updateCirclePosition = () => {
      const distX = targetX - currentX;
      const distY = targetY - currentY;

      currentX += distX * speed;
      currentY += distY * speed;

      circle.style.left = `${currentX}px`;
      circle.style.top = `${currentY}px`;

      requestAnimationFrame(updateCirclePosition);
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    updateCirclePosition();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(circle);
    };
  }, []);

  const appStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };

  const ShowHero = () => {
    const location = useLocation();
    return location.pathname === "/" ? <Hero /> : null;
  };

  return (
    <Router>
      <div style={appStyle}>
        <div className="main-container">
          <Header />
          <ShowHero />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
