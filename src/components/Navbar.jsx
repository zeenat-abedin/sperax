import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
      <Nav className="me-auto">
        <Navbar.Brand href="https://sperax.io/" target="_blank">
        <img
          src="../SperaxLogo.svg"
          height="30"
          className="d-inline-block align-top"
          alt="Sperax logo"
        />
        </Navbar.Brand>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Demeter</Nav.Link>
        <Nav.Link href="#pricing">Gauge</Nav.Link>
        <Nav.Link href="#pricing">Stake</Nav.Link>
        <Nav.Link href="#pricing">Buyback</Nav.Link>
        <Nav.Link href="#pricing">Swap</Nav.Link>
        <NavDropdown title="More" id="basic-nav-dropdown">
          <NavDropdown.Item href="#">Dropdown Item 1</NavDropdown.Item>
          <NavDropdown.Item href="#">Dropdown Item 2</NavDropdown.Item>
        </NavDropdown>
              </Nav>
              <Nav>
           <Button variant="info">Buy SPA & USDs</Button>
           <Button variant="outline-primary">Connect Wallet</Button>
           <Nav.Link href="#"><i className="bi bi-moon"></i></Nav.Link>
           <Nav.Link href="#"><i className="bi bi-three-dots"></i></Nav.Link>
         </Nav>
     </Container>
    </Navbar>
  );
}

export default NavBar;
