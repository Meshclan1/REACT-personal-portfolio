import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Modal,
  Button,
} from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";
import Icons from "./Icons";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleTechstackClick = () => {
    if (activeLink === "TECHSTACK") {
      setShowModal(!showModal);
    } else {
      setActiveLink("TECHSTACK");
      setShowModal(true);
    }
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"> </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#TECHSTACK"
              className={
                activeLink === "TECHSTACK"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={handleTechstackClick}
            >
              TECHSTACK
            </Nav.Link>
            <Modal
              show={showModal}
              onHide={() => setShowModal(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title className="red">TECHSTACK</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container fluid>
                  <Row>
                    <Col className="d-flex flex-wrap">
                      <div className="rounded-container">
                        <div>
                          <Icons
                            name="JavaScript"
                            width={75}
                            height={75}
                          ></Icons>
                        </div>

                        <div>
                          <p class="center">JavaScript</p>
                        </div>
                      </div>

                      <div className="rounded-container">
                        <div>
                          <Icons
                            name="JavaScript"
                            width={75}
                            height={75}
                          ></Icons>
                        </div>
                        <div>
                          <p class="center">JavaScript</p>
                        </div>
                      </div>

                      <div className="rounded-container">
                        <div>
                          <Icons
                            name="JavaScript"
                            width={75}
                            height={75}
                          ></Icons>
                        </div>
                        <div>
                          <p class="center">JavaScript</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  dignissimos pariatur cupiditate minus. Est eos, veniam
                  reiciendis, tenetur illum aliquam eveniet at fugiat
                  perspiciatis iusto placeat officiis iste, eum voluptas?
                </p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ayomeshe/">
                <img src={navIcon1} alt="LinkedIn Link" />
              </a>
              <a href="https://github.com/Meshclan1">
                <img src={navIcon2} alt="GitHub Link" />
              </a>
              <a href="https://medium.com/@ayo.meshe">
                <img src={navIcon3} alt="Medium Link" />
              </a>
            </div>
            <button className="vvd">
              <span>Get in Touch</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
