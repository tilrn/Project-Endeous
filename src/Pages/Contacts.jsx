import React, { useState } from 'react';
import { Container, TextField, Button, Box } from '@mui/material';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Contacts.css';

function Contacts() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleToggle = () => {
    setShowContactForm((prev) => !prev);
  };

  return (
    <>
      <NavigationBar />
      <div className="contacts-page-wrapper">
        <div className="contacts-background">
          <img 
            src="/img/PE - Contact - Background.png" 
            alt="Contact Background" 
            className="contacts-bg-image"
          />
        </div>
        <div className="contacts-container">
          <div className="contacts-header">
          <h1>Contact</h1>
          <p>Let's connect and create something beautiful together</p>
        </div>

        <div className="toggle-container">
          <div className="toggle-labels">
            <span className={!showContactForm ? 'active' : ''}>Connect</span>
            <span className={showContactForm ? 'active' : ''}>Message</span>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={showContactForm}
              onChange={handleToggle}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="content-container">
          {/* Connect With Me Section */}
          <div
            className="content-section"
            style={{
              transform: showContactForm ? 'translateX(100%)' : 'translateX(0)',
              opacity: showContactForm ? 0 : 1,
              zIndex: showContactForm ? 1 : 2,
              transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1)',
              position: 'absolute',
              width: '100%',
            }}
          >
            <Container maxWidth="md">
              <div className="social-links-container">
                <a href="https://ko-fi.com/yourname" className="social-link" target="_blank" rel="noopener noreferrer">
                  <img src="/img/Pe - Contact - Kofi.png" alt="Ko-fi" className="social-icon-img" />
                  <span>Buy me a coffee</span>
                </a>
                <a href="https://instagram.com/yourname" className="social-link" target="_blank" rel="noopener noreferrer">
                  <img src="/img/Pe - Contact - Insta.png" alt="Instagram" className="social-icon-img" />
                  <span>Instagram</span>
                </a>
                <a href="https://youtube.com/@yourname" className="social-link" target="_blank" rel="noopener noreferrer">
                  <img src="/img/Pe - Contact - Yt.png" alt="YouTube" className="social-icon-img" />
                  <span>YouTube</span>
                </a>
                <a href="mailto:your.email@example.com" className="social-link">
                  <img src="/img/Pe - Contact - Mail.png" alt="Email" className="social-icon-img" />
                  <span>Email Me</span>
                </a>
                <a href="https://twitter.com/yourname" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="social-icon" />
                  <span>Twitter</span>
                </a>
                <a href="https://linkedin.com/in/yourname" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="social-icon" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </Container>
          </div>

          {/* Contact Us Section */}
          <div
            className="content-section"
            style={{
              transform: showContactForm ? 'translateX(0)' : 'translateX(-100%)',
              opacity: showContactForm ? 1 : 0,
              zIndex: showContactForm ? 2 : 1,
              transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1)',
              position: 'absolute',
              width: '100%',
            }}
          >
            <Container maxWidth="md">
              <div className="contact-form-wrapper">
                <h2 className="form-title">Send a Message</h2>
                <Box
                  component="form"
                  className="contact-form"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                <TextField
                  fullWidth
                  label="Your Name"
                  placeholder="Enter your name"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  type="email"
                  label="Email address"
                  placeholder="Enter your email"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  label="Message"
                  placeholder="Your message"
                  variant="outlined"
                />
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Button variant="contained" type="submit" size="large">
                    Send Message
                  </Button>
                </Box>
                </Box>
              </div>
            </Container>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacts;
