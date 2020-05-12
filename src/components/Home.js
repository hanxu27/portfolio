import React, { Component } from "react";
import { Container, Tab, Jumbotron, Row, Tabs, Image, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaMediumM } from "react-icons/fa";
import ProjectCard from "./projects/ProjectCard";
import projects from "./projects/ProjectList";
import Employment from "./tabs/Employment";
import Education from "./tabs/Education";
import ProjectModal from "./ProjectModal";

class Home extends Component {
  state = {
    showModal: false,
    selectedProject: "",
  };
  iconColor = "#a1a1a1";
  handleClose = () => this.setState({ showModal: false });
  handleShow = async (project) => {
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
            <Row className="justify-content-center">
              <Col s={10} md={8}>
                <h4>
                  Full stack web developer with experience in Ruby / Javascript. Career background
                  in software support and customer applications engineering, skilled at addressing
                  customer needs, and experienced in working within both big and small teams.
                </h4>
              </Col>
            </Row>
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
            <Row className="justify-content-center">
              {projects.map((project, idx) => (
                <Col md={8} lg={4}>
                  <ProjectCard key={idx} project={project} handleShow={this.handleShow} />
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="employment" title="Employment History" className="m-3">
            <Employment />
          </Tab>
          <Tab eventKey="education" title="Skills & Education" className="m-3">
            <Education />
          </Tab>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default Home;
