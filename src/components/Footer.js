import { Container, Row, Col } from "react-bootstrap";
import logoC from "../assets/images/LogoC.png";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col className="logos" sm={6}>
            <img src={logoC} alt="Logo"></img>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="navicon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="navicon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="navicon" />
              </a>
            </div>
            <p>All Rights Reserved ® Copyright © 2023 Ayo Meshe.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
