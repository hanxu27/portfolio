import React from "react";
import { Button, Modal, Image } from "react-bootstrap";
import { FaGithub, FaYoutube, FaExternalLinkSquareAlt, FaGithubSquare } from "react-icons/fa";

const ProjectModal = props => {
  return (
    <Modal show={props.showModal} onHide={props.handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {props.selectedProject.name}
          <h6 style={{ "margin-bottom": "-0.3rem" }}>
            <small className="text-muted">{props.selectedProject.intro}</small>
          </h6>
        </Modal.Title>
      </Modal.Header>
      <a href={props.selectedProject.demo} target="_blank" rel="noopener noreferrer">
        <Image
          src={`./projects/${props.selectedProject.gif}`}
          alt={props.selectedProject.name}
          fluid
        />
      </a>
      <Modal.Body>
        {props.selectedProject.info.map(info => (
          <li>{info}</li>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <span className="mr-auto">
          {props.selectedProject.github ? (
            <a href={props.selectedProject.github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} className="m-1" />
            </a>
          ) : (
            <React.Fragment>
              <a href={props.selectedProject.githubFront} target="_blank" rel="noopener noreferrer">
                <FaGithub size={28} className="m-1" />
              </a>
              <a href={props.selectedProject.githubBack} target="_blank" rel="noopener noreferrer">
                <FaGithubSquare size={28} className="m-1" />
              </a>
            </React.Fragment>
          )}
          <a href={props.selectedProject.demo} target="_blank" rel="noopener noreferrer">
            <FaYoutube size={28} className="m-1" />
          </a>
          <a href={props.selectedProject.site} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkSquareAlt size={28} className="m-1" />
          </a>
        </span>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
