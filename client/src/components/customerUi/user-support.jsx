import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactSupportPage = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or data processing here
    // You can access the form value: message
    // You can make API requests or trigger other actions based on the form data
    // Example: console.log(message);
    // Reset the form field
    setMessage('');
  };

  return (
    <div className="contact-support-page container">
      <h2>Contact Support</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder='Enter your message here'
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{marginTop: "20px"}}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactSupportPage;

