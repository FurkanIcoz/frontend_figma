import React from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
function App() {
  return (
    <Container fluid className="bg-linear">
      <Navbar bg="transparent" expand="lg" className="header-nav">
        <Container>
          <Navbar.Brand href="#">Collers</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto menu-items">
              <Nav.Link href="#">Products</Nav.Link>
              <Nav.Link href="#">Solutions</Nav.Link>
              <Nav.Link href="#">Pricing</Nav.Link>
              <Nav.Link href="#">Resources</Nav.Link>
              <Nav.Link href="#">Log In</Nav.Link>
              <Nav.Link className="sign-up-btn">Sign up now</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default App;
