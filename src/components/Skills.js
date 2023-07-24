import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import colorSharp from "../assets/images/color-sharp.png";

import arrow1 from "../assets/images/arrow1.svg";
import arrow2 from "../assets/images/arrow2.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              {/* Work on how skills are displayed. Not as a slider but something that it always there.  */}
              {/* Also try to have techstack as a clicable popup or just displayed permanently  */}
              <h2>Skills</h2>

              {/* <ListGroup className="skill-slider" as="ul">
                <ListGroup.Item className="item" as="li">
                  <div className="item">
                    <img src={meter1} />
                    Cras justo odio
                  </div>
                </ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
              </ListGroup> */}

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="slider1" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="slider2" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="slider3" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="slider1" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="bgimage" />
    </section>
  );
};

export default Skills;
