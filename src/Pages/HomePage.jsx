import { Helmet } from 'react-helmet-async';
import Navbar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import './HomePage.css';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Project Endeous | Beauty Will Save the World</title>
        <meta name="description" content="Welcome to Project Endeous - where art meets soul. Explore creative works inspired by the belief that beauty will save the world. Featuring original artworks and artistic expressions." />
        <meta name="keywords" content="Project Endeous, art, beauty, Dostoevsky, creative works, artist portfolio, home" />
        <link rel="canonical" href="https://projectendeous.com/" />
        <meta property="og:title" content="Project Endeous | Beauty Will Save the World" />
        <meta property="og:description" content="Welcome to Project Endeous - where art meets soul. Explore creative works inspired by the belief that beauty will save the world." />
        <meta property="og:url" content="https://projectendeous.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <div className="home-page-wrapper">
        {/* Background Image - determines page height */}
        <div className="background-container">
          <img 
            src="Ozadje.png" 
            alt="Project Endeous - Artistic background featuring creative inspiration" 
            className="background-image"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="content-overlay">
          {/* Dostoevsky Quote */}
          <article className="quote-container">
            <h1 className="main-quote">
              "BEAUTY WILL SAVE THE WORLD"
            </h1>
            <p className="quote-author">
              - FYODOR DOSTOEVSKY
            </p>
            
            <blockquote className="poem-text">
              For only when I let go<br />
              and just follow, the ever<br />
              changing flow,<br />
              I thrive, I'm free<br />
              in the pain and the sorrow,<br />
              in the laughter and cry,<br />
              forever dancing.
            </blockquote>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
