import Buttonn from '../Components/Button';
import Navbar from '../Components/NavigationBar';
function HomePage() {
  return (
    <>
    <Navbar />

    <div style={{
      width: "100%", 
      height: "100vh",
      overflowY: "auto",
      overflowX: "hidden"
    }}>
      {/* Container to hold the image and overlay content */}
      <div style={{
        position: "relative",
        width: "100%"
      }}>
        {/* Background Image - Full size and scrollable */}
        <img 
          src="Ozadje.png" 
          alt="Project Endeous" 
          style={{
            width: "100%",
            height: "auto",
            display: "block"
          }}
        />
        
        {/* Content Overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none" // Allow clicking through to image where needed
        }}>
          
          
          {/* Dostoevsky Quote */}
          <div style={{ 
            position: "absolute",
            top: "120px",
            left: "70px",
            maxWidth: "400px",
            textAlign: "center",
            pointerEvents: "auto"
          }}>
            <h1 style={{ 
              fontSize: "28px", 
              fontWeight: "bold",
              margin: "20px 0",
              fontFamily: "serif"
            }}>
              "BEAUTY WILL SAVE THE WORLD"
            </h1>
            <p style={{ 
              marginBottom: "30px",
              fontSize: "16px",
              fontFamily: "serif"
            }}>
              - FYODOR DOSTOEVSKY
            </p>
            
            <div style={{ 
              fontStyle: "italic",
              lineHeight: "1.6",
              fontSize: "16px",
              fontFamily: "sans-serif"
            }}>
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