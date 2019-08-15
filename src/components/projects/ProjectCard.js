import React from "react";
import { Card, Button, Image } from "react-bootstrap";

const ProjectCard = props => {
  return (
    <Card className="m-2">
      <Image src={`./projects/${props.project.image}`} alt={props.project.name} fluid />
      <Card.Body>
        <Card.Title>{props.project.name}</Card.Title>
        <Card.Text>{props.project.intro}</Card.Text>
        <Button variant="primary" onClick={() => props.handleShow(props.project)}>
          View More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
