import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import './Purpose.css';

function Projects() {
  const [hasStarted, setHasStarted] = useState(false);

  const handleMouseEnter = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  const videoSrc = hasStarted 
    ? "https://www.youtube.com/embed/niWpfRyvs2U?autoplay=1&mute=0"
    : "https://www.youtube.com/embed/niWpfRyvs2U?autoplay=0&mute=0";

  return (
    <>
      <Helmet>
        <title>Purpose | Project Endeous - Our Mission & Vision</title>
        <meta name="description" content="Discover the purpose behind Project Endeous. Learn about our mission to spread beauty, creativity, and meaningful art that touches the soul and inspires positive change." />
        <meta name="keywords" content="purpose, mission, vision, Project Endeous, art mission, creative purpose, inspiration" />
        <link rel="canonical" href="https://projectendeous.com/projects" />
        <meta property="og:title" content="Purpose | Project Endeous - Our Mission & Vision" />
        <meta property="og:description" content="Discover the purpose behind Project Endeous. Learn about our mission to spread beauty, creativity, and meaningful art." />
        <meta property="og:url" content="https://projectendeous.com/projects" />
        <meta property="og:type" content="website" />
      </Helmet>
      <NavigationBar />
      <main 
        className="video-container"
        onMouseEnter={handleMouseEnter}
      >
        <iframe
          src={videoSrc}
          title="Project Endeous Purpose Video - Our Mission and Vision"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
