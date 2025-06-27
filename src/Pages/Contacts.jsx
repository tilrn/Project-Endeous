import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import NavigationBar from '../Components/NavigationBar';
import './Contacts.css';
import { FaInstagram, FaYoutube, FaEnvelope, FaCoffee } from 'react-icons/fa';

function Contacts() {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContent = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <>
      <NavigationBar />
      <Container>
        <button className="toggle-button" onClick={toggleContent}>
          {showContactForm ? 'View Social Media' : 'View Contact Form'}
        </button>

        <div className="content-container">
          <div className={`content-section ${!showContactForm ? 'active' : ''}`}>
            <Container className="my-5" style={{ maxWidth: '700px' }}>
              <h2 className="mb-4 text-center">Connect With Me</h2>
              <div className="social-links-container">
                <a href="https://ko-fi.com/yourname" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaCoffee className="social-icon" />
                  <span>Support me on Ko-fi</span>
                </a>

                <a href="https://instagram.com/yourname" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon" />
                  <span>@yourname</span>
                </a>

                <a href="https://youtube.com/@yourchannel" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="social-icon" />
                  <span>YouTube Channel</span>
                </a>

                <a href="mailto:your.email@gmail.com" className="social-link">
                  <FaEnvelope className="social-icon" />
                  <span>your.email@gmail.com</span>
                </a>
              </div>
            </Container>
          </div>

          <div className={`content-section ${showContactForm ? 'active' : ''}`}>
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
