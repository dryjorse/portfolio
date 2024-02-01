import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.jpg";
import projImg8 from "../assets/img/project-img8.jpg";
import projImg9 from "../assets/img/project-img9.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "The Rolls Band",
      description: "React & React-query & Typescript & Tailwind & i18next ",
      imgUrl: projImg8,
      url: "https://therollsband.com/",
      position: "top",
    },
    {
      title: "Fanat Kg",
      description: "React & React-query & SCSS ",
      imgUrl: projImg7,
      url: "https://fanat.kg/",
    },
    {
      title: "Song-Kol Travel",
      description: "React & Redux-toolkit & Typescript & Tailwind & i18next ",
      imgUrl: projImg6,
      url: "http://song-kol.com/",
    },
    {
      title: "Ani Reatsu",
      description: "React & Redux-toolkit & Node-js & Express & MongoDB ",
      imgUrl: projImg4,
      url: "https://defolinet.github.io/anireatsuFront",
    },
    {
      title: "Toguz Korgool",
      description: "Html & Css & Js",
      imgUrl: projImg9,
      url: "https://defolinet.github.io/anireatsuFront",
    },
    {
      title: "Pokemons",
      description: "React & Redux (without adaptive)",
      imgUrl: projImg2,
      url: "https://dryjorse.github.io/pokemonSite",
      position: "top",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="projectsTitle">Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section"></Tab.Pane>
                      <Tab.Pane eventKey="third"></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
