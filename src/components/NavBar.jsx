import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


const NavBar = () => {
const [activeLink, setActiveLink] = useState('Home');
const [scrolled, setScrolled] = useState(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={""} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"> </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={} alt="" /></a>
                <a href="#"><img src={} alt="" /></a>
                <a href="#"><img src={} alt="" /></a>
            </div>
          </span>
          <button className="vvd" onClick={() => console.log('Connect')}><span>Let's Connect</span></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
