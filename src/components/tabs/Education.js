import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const schools = [
  {
    name: "Flatiron School",
    location: "Atlanta, GA",
    details: [
      "Full Stack Web Development, Ruby on Rails and JavaScript immersive program (Aug, 2019)"
    ]
  },
  {
    name: "University of Illinois",
    location: "Urbana, IL",
    details: [
      "Master of Science in Environmental Engineering (Aug, 2012)",
      "Bachelor of Science with honors in Civil Engineering (May, 2011)"
    ]
  }
];

const Education = () => {
  return (
    <Row className="justify-content-center">
      <Col sm={10} className="mb-2">
        <Card bg="secondary" text="light" className="shadow">
          <Card.Body>
            <Card.Title>
              <b>Skills:</b>
            </Card.Title>
            <Card.Text>
              Adobe CS (Acrobat, Photoshop, Lightroom), Ardunio, Audacity, AutoCAD Inventor,
              BootStrap, C, Cyberlink PowerDirector, Ebsilon, Git, HTML/CSS, JavaScript, JSON,
              Konva.js, Linux, MatLab, MicroStation, Postges, Primavera, Python, QGIS, Rails, React,
              Redux, Ruby, SQL, TDD, WordPress -- Project Management & Wireframing
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={10}>
        <Card bg="secondary" text="light" className="shadow">
          <Card.Body>
            <Card.Title>
              <b>Education:</b>
            </Card.Title>
            <Row>
              {schools.map(school => (
                <Col sm={6} className="mb-1">
                  <Card
                    style={{ backgroundColor: "#17aaff" }}
                    text="light"
                    className="shadow h-100"
                  >
                    <Card.Body>
                      <Card.Title>
                        <b>{school.name}</b> - {school.location}
                      </Card.Title>
                      <Card.Text>
                        {school.details.map(d => (
                          <li>{d}</li>
                        ))}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Education;
