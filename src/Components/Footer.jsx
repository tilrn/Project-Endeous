import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Project Endeous</h3>
          <p>"Beauty will save the world"</p>
          <p className="footer-quote">- Fyodor Dostoevsky</p>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Purpose</Link></li>
            <li><Link to="/gallery">Creations</Link></li>
            <li><Link to="/mystory">My Story</Link></li>
            <li><Link to="/store">Store</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <ul className="footer-links">
            <li><Link to="/contacts">Contact</Link></li>
            <li>
              <a href="https://ko-fi.com/yourname" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <img src="/img/Pe - Contact - Kofi.png" alt="Ko-fi" className="footer-social-icon-img" />
                Support on Ko-fi
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow</h4>
          <div className="footer-social-icons">
            <a href="https://instagram.com/yourname" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/img/Pe - Contact - Insta.png" alt="Instagram" className="footer-social-icon-img" />
            </a>
            <a href="https://youtube.com/@yourname" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="/img/Pe - Contact - Yt.png" alt="YouTube" className="footer-social-icon-img" />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <img src="/img/Pe - Contact - Mail.png" alt="Email" className="footer-social-icon-img" />
            </a>
            <a href="https://twitter.com/yourname" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Project Endeous. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

