import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import YelpCamp from "../assets/images/YelpCamp.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import colorSharp2 from "../assets/images/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "YelpCamp",
      description: "An Interactive Campground",
      imgUrl: YelpCamp,
    },
    {
      title: "Bon Voyage",
      description: "Your Personal Travel Journal",
      imgUrl: projImg2,
      // screenshot images on project landing page and use project img url
    },
    {
      title: "dump",
      description: "Design & Development",
      imgUrl: projImg3,
      // screenshot images on project landing page and use project img url
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Check out the code for my completed projects on my{" "}
              <a href="https://github.com/Meshclan1">GitHub</a> - see you there!
              👨🏾‍💻
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Project 1</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">Project 2</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third">Project 3</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p>
                    A scalable full-stack web application hosted on Render
                    leveraging MongoDB as the default database storage system.
                    In this project I use Embedded JavaScript (EJS) and
                    BootStrap for designing the User-Interface (UI), and Node.js
                    and Express.js for managing the backend server components.
                  </p>
                  <Row className="nav-pills mb-5 justify-content-center align-items-center">
                    {projects
                      .filter((project) => project.title === "YelpCamp")
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <p>Lorem Ipsum</p>
                  <Row className="nav-pills mb-5 justify-content-center align-items-center">
                    {projects
                      .filter((project) => project.title === "Bon Voyage")
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Lorem Ipsum</p>
                  <Row className="nav-pills mb-5 justify-content-center align-items-center">
                    {projects
                      .filter((project) => project.title === "dump")
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background-imagess"
      ></img>
    </section>
  );
};

export default Projects;
