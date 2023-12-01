import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function PaymentModalComponent(props) {
    return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Payment Successfull</Modal.Title>
      </Modal.Header>
      <Modal.Body>You have successfully subscribed to {props.subscriptionID}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PaymentModalComponent;
