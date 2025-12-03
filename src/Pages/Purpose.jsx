import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import './Purpose.css';

function Projects() {
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
      <main className="purpose-page-wrapper">
        <div className="purpose-background" aria-hidden="true">
          <img 
            src="/img/BACKGROUND - Purposee_spletna-stran.png" 
            alt="" 
            className="purpose-bg-image"
          />
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/niWpfRyvs2U"
            title="Project Endeous Purpose Video - Our Mission and Vision"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-frame"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
