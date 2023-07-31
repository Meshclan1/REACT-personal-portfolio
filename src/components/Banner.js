import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/header-img.svg";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to my Profile</span>
            <h1>
              {`I'm Ayo a `}
              <span className="wrap" id="fse">
                Full-Stack Engineer 👋🇬🇧
              </span>
              <p>
                A skilled self-taught Full-Stack Engineer with a strong focus on
                JavaScript and with a love for creating exceptional web
                applications. My journey has been fueled by curiosity and a
                desire to continously learn new technologies. Always open to fun
                collaborations and new opportunities!
              </p>
              <button onClick={() => console.log("connect")}>
                🙋🏾‍♂️ Let’s Connect <ArrowRightCircle size={25} />
              </button>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
