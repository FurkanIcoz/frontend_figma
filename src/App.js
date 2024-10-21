import React from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container fluid className="bg-linear">
      <Navbar bg="transparent" expand="lg" className="header-nav">
        <Navbar.Brand href="#">Collers</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu-items">
            <Nav.Link href="#" className="nav-link">Products</Nav.Link>
            <Nav.Link href="#" className="nav-link">Solutions</Nav.Link>
            <Nav.Link href="#" className="nav-link">Pricing</Nav.Link>
            <Nav.Link href="#" className="nav-link">Resources</Nav.Link>
            <Nav.Link href="#" className="nav-link">Log In</Nav.Link>
            <Nav.Link href="#" className="sign-up-btn">Sign up now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="heroBody">
        <Col className="herocol1 secText">
          <Row className="ColSneakers">
            <p className="ColSneakersText">Collectible Sneakers</p>
            
          </Row>
          <Row className="ColSneakers">
            <p className="ColSneakersParag">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
            
          </Row>
          <Row className="heroButtonsGroup">
          </Row>
        </Col>
        <Col>

        </Col>
      </Container>
    </Container>
  );
}

export default App;
