import Buttonn from '../Components/Button';
import Navbar from '../Components/NavigationBar';
import './HomePage.css';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        {/* Background Image Container */}
        <div className="background-container">
          <img 
            src="Ozadje.png" 
            alt="Project Endeous" 
            className="background-image"
          />
          
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
      </div>
    </>
  );
}

export default HomePage;