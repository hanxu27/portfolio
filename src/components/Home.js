import React, { Component } from "react";
import { Container, Tab, Jumbotron, Row, CardColumns, Tabs, Image } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaMediumM } from "react-icons/fa";
import ProjectCard from "./projects/ProjectCard";
import projects from "./projects/ProjectList";
import Employment from "./tabs/Employment";
import Education from "./tabs/Education";
import Skills from "./tabs/Skills";
import ProjectModal from "./ProjectModal";

class Home extends Component {
  state = {
    showModal: false,
    selectedProject: ""
  };
  iconColor = "#a1a1a1";
  handleClose = () => this.setState({ showModal: false });
  handleShow = async project => {
    await this.setState({ selectedProject: project });
    this.setState({ showModal: true });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.selectedProject && (
          <ProjectModal
            handleShow={this.handleShow}
            handleClose={this.handleClose}
            showModal={this.state.showModal}
            selectedProject={this.state.selectedProject}
          />
        )}
        <Jumbotron>
          <Container>
            <Row className="justify-content-center mb-2">
              <Image
                src={`./profile.jpg`}
                alt="profile picture"
                roundedCircle
                fluid
                style={{ width: "10%" }}
              />
            </Row>
            Full stack web developer with a passion for building user and developer friendly
            projects. Experience in Ruby and JavaScript frameworks, background in application
            engineering with sharpened analytical skills and understanding of customer needs.
            Interests and hobbies include drones, photography, coaching, and stock trading which
            have created a learner’s attitude and value the thoughts and perspective of team
            members.
          </Container>
          <Row className="justify-content-center mt-1">
            <a
              href="https://github.com/hanxu27?tab=stars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={34} className="m-1" style={{ color: this.iconColor }} />
            </a>
            <a
              href="https://www.linkedin.com/in/hanxu27/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={34} className="m-1" style={{ color: this.iconColor }} />
            </a>
            <a href="https://medium.com/@hanxu27" target="_blank" rel="noopener noreferrer">
              <FaMediumM size={34} className="m-1" style={{ color: this.iconColor }} />
            </a>
          </Row>
        </Jumbotron>
        <Tabs className="m-1" defaultActiveKey="projects">
          <Tab eventKey="projects" title="Technical Projects" className="m-3">
            <CardColumns>
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} handleShow={this.handleShow} />
              ))}
            </CardColumns>
          </Tab>
          <Tab eventKey="employment" title="Employment History" className="m-3">
            <Employment />
          </Tab>
          <Tab eventKey="education" title="Education" className="m-3">
            <Education />
          </Tab>
          <Tab eventKey="skills" title="Technical Skills" className="m-3">
            <Skills />
          </Tab>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default Home;
