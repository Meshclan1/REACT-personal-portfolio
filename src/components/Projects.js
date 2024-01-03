import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import YelpCamp from "../assets/images/YelpCamp.png";
import GeotechBlogApp from "../assets/images/GeotechBlogApp.png";
import MovieRatingApp from "../assets/images/MovieRatingApp.png";
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
      imgUrl: GeotechBlogApp,
    },
    {
      title: "Movie/TV Show Rating App",
      description: "Rate your show!",
      imgUrl: MovieRatingApp,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Check out more of my pinned projects on {""}
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
                  <p> Successfully implemented and deployed an interactive campground application that enables users to register, share, and explore their individual campground experiences</p>
                      <br/>
                      <p>Tech Stack: EJS, Node.js, Express.js, MongoDB, Mongoose, Passport.js, Cloudinary, Mapbox SDK, Model-View-Controller (MVC) Framework, Render Web Hosting </p>
                  <Row className="nav-pills mb-5 justify-content-center align-items-center">
                    {projects
                      .filter((project) => project.title === "YelpCamp")
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>An interactive web application that fosters collaboration and knowledge-sharing within the geo-tech engineering community. It features user-friendly content creation and added search functionality that is tailored to the needs of industry professionals and wider enthusiasts.</p>
                    <br/>
                    <p> Tech Stack: Next.js, React, TypeScript, Tailwind CSS, NextAuth.js, Prisma, PostgreSQL database hosted on Railway, Vercel Cloud Deployment</p> 
                  <Row className="nav-pills mb-5 justify-content-center align-items-center">
                    {projects
                      .filter((project) => project.title === "Geo-Tech Blog App")
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>A rating app that features authentication, real-time fetching of popular movies and TV shows from the TMDB API, and a personalized rating functionality to enhance user experience</p>
                    <br/>
                    <p> Tech Stack: Vite, React, TypeScript, Tanstack, Semantic UI, React-Router-Dom, TMBD API, Vercel </p>
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
        alt="background-images"
      ></img>
    </section>
  );
};

export default Projects;
