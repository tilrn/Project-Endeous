import { Helmet } from "react-helmet-async";
import Navbar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Project Endeous | Beauty Will Save the World</title>
        <meta
          name="description"
          content="Welcome to Project Endeous - where art meets soul. Explore creative works inspired by the belief that beauty will save the world. Featuring original artworks and artistic expressions."
        />
        <meta
          name="keywords"
          content="Project Endeous, art, beauty, Dostoevsky, creative works, artist portfolio, home"
        />
        <link rel="canonical" href="https://projectendeous.com/" />
        <meta
          property="og:title"
          content="Project Endeous | Beauty Will Save the World"
        />
        <meta
          property="og:description"
          content="Welcome to Project Endeous - where art meets soul. Explore creative works inspired by the belief that beauty will save the world."
        />
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
            <h1 className="main-quote">INTIMATE RELATIONSHIP TO LIFE</h1>
            <p className="quote-author">&nbsp;-Endej</p>

            <blockquote className="poem-text">
              The dancing stars,
              <br />
              quiet journeys,
              <br />
              all that's been walked.
              <br />
              <br />
              Still no solution,
              <br />
              I see too much,
              <br />
              bloody demons,
              <br />
              I thought I overcame,
              <br />
              but I just became closer with them..
              <br />
              <br />
              I wanted to be the heavens,
              <br />
              light and great,
              <br />
              but there's just no heavens,
              <br />
              without hells.
              <br />
              <br />
              We're The gods,
              <br />
              The devils ourselves,
              <br />
              I cannot pretend,
              <br />
              to be blindfolded anymore.
              <br />
              <br />
              I simply see horrors and beauty,
              <br />
              no answers.
              <br />
              <br />
              Heavens and hells,
              <br />
              know of no such things.
              <br />
              <br />
              Just us dancing with them,
              <br />
              forever free,
              <br />
              forever blind to see.
            </blockquote>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
