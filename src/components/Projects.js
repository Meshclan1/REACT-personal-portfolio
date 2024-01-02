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
      title: "Geo-Tech Blog App",
      description: "Latest industry news",
      imgUrl: projImg2,
      // screenshot images on project landing page and use project img url
    },
    {
      title: "Movie/TV Show Rating App",
      description: "Rate your show!",
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
              Please check out more of my built projects on{" "}
              <a href="https://github.com/Meshclan1">GitHub</a> - see you there!
              👨🏾‍💻
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-3 justify-content-center align-items-center"
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
                  <Row className="mb-2 justify-content-center align-items-center">
                    <p>
                      A scalable full-stack web application hosted on Render
                      leveraging MongoDB as the default database storage system.
                      In this project I use Embedded JavaScript (EJS) and
                      BootStrap for designing the User-Interface (UI), and
                      Node.js and Express.js for managing the backend server
                      components.
                    </p>
                  </Row>
                  <Row className="nav-pills mb-5 justify-content-center align-items-center">
                    {projects
                      .filter((project) => project.title === "YelpCamp")
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <p>An interactive web application that fosters collaboration and knowledge-sharing within the geo-tech engineering community. It features user-friendly content creation and added search functionality that is tailored to the needs of industry professionals and wider enthusiasts. <br/> Tech Stack: Next.js, React, TypeScript, Tailwind CSS, NextAuth.js, Prisma, PostgreSQL database hosted on Railway, Vercel Cloud Deployment</p>
                  <Row className="nav-pills mb-5 justify-content-center align-items-center">
                    {projects
                      .filter((project) => project.title === "Geo-Tech Blog App")
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>A a rating app that features authentication, real-time fetching of popular movies and TV shows from the TMDB API, and a personalized rating functionality to enhance user experience</p>
                  <Row className="nav-pills mb-5 justify-content-center align-items-center">
                    {projects
                      .filter((project) => project.title === "Movie/TV Show Rating App")
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
