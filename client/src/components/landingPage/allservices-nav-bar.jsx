import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';

function ServicesNavBar(props) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <Navbar bg="white" variant="light" className='fixed-top shadow-sm'>
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={toggleSidebar}>Menu</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={showSidebar} onHide={toggleSidebar} placement="start" style={{width: "270px"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#" onClick={() => {toggleSidebar();props.handleServiceButtonClick("heating")}}>Heating & Air Conditioning</Nav.Link>
            <Nav.Link href="#" onClick={() => {toggleSidebar();props.handleServiceButtonClick("electronics")}}>Electrical Systems</Nav.Link>
            <Nav.Link href="#" onClick={() => {toggleSidebar();props.handleServiceButtonClick("plumbing")}}>Plumbing Systems</Nav.Link>
            <Nav.Link href="#" onClick={() => {toggleSidebar();props.handleServiceButtonClick("kitchen")}}>Kitchen Appliances</Nav.Link>
            <Nav.Link href="#" onClick={() => {toggleSidebar();props.handleServiceButtonClick("laundry")}}>Laundry Appliances</Nav.Link>
            <Nav.Link href="#" onClick={() => {toggleSidebar();props.handleServiceButtonClick("roof")}}>Roof</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ServicesNavBar;
