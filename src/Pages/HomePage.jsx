import Navbar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import './HomePage.css';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="home-page-wrapper">
        {/* Background Image - determines page height */}
        <div className="background-container">
          <img 
            src="Ozadje.png" 
            alt="Project Endeous" 
            className="background-image"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="content-overlay">
          {/* Dostoevsky Quote */}
          <div className="quote-container">
            <h1 className="main-quote">
              "BEAUTY WILL SAVE THE WORLD"
            </h1>
            <p className="quote-author">
              - FYODOR DOSTOEVSKY
            </p>
            
            <div className="poem-text">
              For only when I let go<br />
              and just follow, the ever<br />
              changing flow,<br />
              I thrive, I'm free<br />
              in the pain and the sorrow,<br />
              in the laughter and cry,<br />
              forever dancing.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;