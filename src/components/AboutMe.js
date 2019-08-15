import React from "react";
import { Accordion, Card, Container, Button, Col, Row, Image } from "react-bootstrap";
import hobbies from "./AboutMe/hobbies";
import Background from "./AboutMe/splash";

const AboutMe = () => {
  return (
    <Background>
      <Container className="m-4" fluid>
        <Row className="justify-content-center">
          <Col md={5}>
            <Container
              fluid
              className="rounded pb-3 pt-2"
              style={{ background: "white", opacity: ".9" }}
            >
              <p>
                As a kid, I loved building and disassembling things. From building lego castles to
                opening up broken television, as I got older, the toys got more complex. I was first
                introduced to coding in college, at first the concepts seems abstract and difficult
                to understand, but I was always drawn toward building tools and apps. My curiosity
                peaked one day working late with my principal engineer, using code we were able to
                fix charts that would have taken 2 hours in 30 minutes. Now with the training I got
                from Flatiron School, I'm translating my passion and curiosity into building apps.
              </p>
              <Accordion>
                <Row className="justify-content-center">
                  <Col md={10}>
                    {hobbies.map((h, index) => (
                      <Card>
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
                                className="m-2 rounded shadow"
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
      </Container>
    </Background>
  );
};

export default AboutMe;
