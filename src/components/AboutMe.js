import React from "react";
import { Accordion, Card, Container, Button, Col, Row, Image } from "react-bootstrap";
import hobbies from "./AboutMe/hobbies";
import Background from "./AboutMe/splash";

const AboutMe = () => {
  return (
    <Background>
      <Row className="justify-content-center">
        <Col lg={6} md={8} sm={10} xs={10}>
          <Container
            fluid
            className="rounded p-3 mt-3 mb-3"
            style={{ background: "rgba(255, 255, 255, 0.8)" }}
          >
            <p>
              As a kid, I loved building and disassembling things. From building lego castles to
              opening up broken television, as I got older, the toys got more complex. I was first
              introduced to coding in college, at first the concepts seems abstract and difficult to
              understand, but I was always drawn toward building tools and apps. My curiosity peaked
              one day working late with my principal engineer, using code we were able to fix charts
              that would have taken 2 hours in 30 minutes. Now with the training I got from Flatiron
              School, I'm translating my passion and curiosity into building apps.
            </p>
            <Accordion>
              <Row className="justify-content-center">
                <Col md={10}>
                  {hobbies.map((h, index) => (
                    <Card key={index} style={{ background: "rgba(255, 255, 255, 0.9)" }}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                          <h6 className="text-primary">{h.title}</h6>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={index}>
                        <Card.Body>
                          {h.description}
                          {h.image && (
                            <Image
                              className="mt-2 mr-2 rounded shadow"
                              src={`./hobbies/${h.image}`}
                              alt={h.title}
                              fluid
                            />
                          )}
                          {h.link && (
                            <Row className="justify-content-center">
                              <a href={h.link[1]} target="_blank" rel="noopener noreferrer">
                                <Button className="shadow m-1">Checkout my {h.link[0]}</Button>
                              </a>
                            </Row>
                          )}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  ))}
                </Col>
              </Row>
            </Accordion>
          </Container>
        </Col>
      </Row>
    </Background>
  );
};

export default AboutMe;
