import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import NavigationBar from '../Components/NavigationBar';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaCoffee, FaEnvelope } from 'react-icons/fa';
import './Contacts.css';

function Contacts() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleToggle = () => {
    setShowContactForm((prev) => !prev);
  };

  return (
    <>
      <NavigationBar />
      <Container className="contacts-container" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
        <div className="toggle-container">
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={showContactForm}
              onChange={handleToggle}
            />
            <span className="toggle-slider"></span>
          </label>
          <div className="toggle-labels">
            {/* Optionally add labels here */}
          </div>
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
            <Container className="my-5" style={{ maxWidth: '700px' }}>
              <h2 className="mb-4 text-center">Connect With Me</h2>
              <div className="social-links-container">
                <a href="https://ko-fi.com/yourname" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaCoffee className="social-icon" />
                  <span>Buy me a coffee</span>
                </a>
                <a href="https://facebook.com/yourname" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="social-icon" />
                  <span>Facebook</span>
                </a>
                <a href="https://instagram.com/yourname" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon" />
                  <span>Instagram</span>
                </a>
                <a href="https://twitter.com/yourname" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="social-icon" />
                  <span>Twitter</span>
                </a>
                <a href="https://linkedin.com/in/yourname" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="social-icon" />
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:your.email@example.com" className="social-link">
                  <FaEnvelope className="social-icon" />
                  <span>Email Me</span>
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
            <Container className="my-5" style={{ maxWidth: '700px' }}>
              <h2 className="mb-4 text-center">Contact Us</h2>
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Your message" />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contacts;
