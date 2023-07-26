import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import colorSharp from "../assets/images/color-sharp.png";

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
              <h2>Skills</h2>
              <Row className="d-flex">
                <Col className="                align-content-center ">
                  <ListGroup>
                    <ListGroup.Item action>
                      Algorithms and Data Structures
                    </ListGroup.Item>
                    <ListGroup.Item action>
                      Front-End Libraries and Frameworks
                    </ListGroup.Item>
                    <ListGroup.Item action>
                      Back-End Technologies
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col className="                align-content-center">
                  <ListGroup>
                    <ListGroup.Item action>
                      RESTful APIs and Web Services
                    </ListGroup.Item>
                    <ListGroup.Item action>
                      Server Management and Deployment
                    </ListGroup.Item>
                    <ListGroup.Item action>Testing/Debugging</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>

              <Row>
                <Col className="                align-content-center ">
                  <ListGroup>
                    <ListGroup.Item action>
                      Responsive Web Design
                    </ListGroup.Item>
                    <ListGroup.Item action>
                      Object-Oriented Programming
                    </ListGroup.Item>
                    <ListGroup.Item action>Project Management</ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col className="                align-content-center ">
                  <ListGroup>
                    <ListGroup.Item action>
                      Stakeholder Engagement
                    </ListGroup.Item>
                    <ListGroup.Item action>
                      Data Modelling and Analytics
                    </ListGroup.Item>
                    <ListGroup.Item action>
                      Version Control Systems
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="bgimage" />
    </section>
  );
};

export default Skills;
