import React, { useState } from 'react';
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
      <NavigationBar />
      <div 
        className="video-container"
        onMouseEnter={handleMouseEnter}
      >
        <iframe
          src={videoSrc}
          title="Purpose Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Projects;