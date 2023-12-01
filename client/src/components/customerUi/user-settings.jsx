import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';

const SettingsForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    residentialAddress: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleShow();
    // Perform form submission or data processing here
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleSaveChanges = () => {
    // Perform any necessary actions or validations
    handleClose();
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      const userId = window.location.href.split('=')[1];
      try {
        const response = await fetch(`https://backend-phki.onrender.com/users/${userId}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchUserData().then(
      function (data) {
        setDetails({
          firstname: data.user.firstname,
          lastname: data.user.lastname,
          email: data.user.email,
          phone: '',
          password: '',
          residentialAddress: '',
        });
      }
    ); // Call the fetchUserData function to get user data
    //console.log(userDetails);
  }, []);

  return (
    <div className="settings-form-container" style={{width: "60%"}}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} sm={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                value={userDetails.firstname}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                value={userDetails.lastname}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={userDetails.email}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                value={userDetails.phone}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="changePassword">
              <Form.Label>Change Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={userDetails.password}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="residentialAddress">
              <Form.Label>Residential Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your residential address"
                style={{ resize: 'none' }}
                value={userDetails.residentialAddress}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details Change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Confirm Account Details</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SettingsForm;
