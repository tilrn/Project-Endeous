import React from 'react';
import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import ButtonSwitch from "../Components/Button";

function Contacts() {
  return (

    <>
    <ButtonSwitch />
    
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
    </>
  );
}

export default Contacts;
