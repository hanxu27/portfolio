import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const jobList = [
  {
    company: "Renew Financial",
    location: "Alpharetta, GA",
    title: "Software Support Engineer",
    duration: "Jan 2020 - Present",
    responsibilities: [
      "Resolved JIRA tickets related to internal Ruby on Rails applications, Auth0 authorization, SQL data entires ensuring customer loans are processed timely and properly avoiding loss of business through delays",
      "Developed user stories for new self-serve features enabling sales team members to resolve issues within internal tools",
      "Documented all process changes in Confluence"
    ]
  },
  {
    company: "A5 Volleyball",
    location: "Alpharetta, GA",
    title: "Coach",
    duration: "Nov 2018 - Present",
    responsibilities: [
      "Created score tracking web application to allow coaches to track rotations, line-ups, and subsitutions",
      "Head coach with two 1st place finishes at 15 Club and 14 Power",
      "Planned and led 2-3 hour long practices twice weekly targeting teamwork and individual skills building"
    ]
  },
  {
    company: "GE Power",
    location: "Schenectady, NY",
    title: "Application Engineer",
    duration: "Jun 2015 - Aug 2018",
    responsibilities: [
      "Overhauled the product comparison catalog process to reduce publishing time by 75%",
      "Formulated key findings into clear visuals to present to GE Power executives and various internal customers",
      "Developed new engineering tools for power plant emissions calculation reducing processing time for deliverables by 80%",
      "Planned and hosted business-wide council and synergy meetings to share key business and competitor intelligence"
    ]
  },
  {
    company: "GE Power",
    location: "Schenectady, NY",
    title: "Coach",
    duration: "Dec 2012 - Jun 2015",
    responsibilities: [
      "Led technical studies for emissions control in simple cycle plants results in first proposal win valued at $30M",
      "Served as technical expert for plant emissions compliance, helped customers anticipate and mitigate regulatory hurdles",
      "Took initiatives to lean out engineering tools and proposal processes decreasing turnaround time by 35%"
    ]
  }
];

const Employment = () => {
  return (
    <Row className="justify-content-center">
      {jobList.map(job => (
        <Col className="mb-2" lg={3} md={5}>
          <Card bg="secondary" text="light" className="shadow h-100">
            <Card.Body>
              <Card.Title>
                <b>{job.company}</b>
                {job.location !== "" && `, ${job.location}`}
              </Card.Title>
              <Card.Text>
                <h6>
                  <b>{job.title}</b>, <i>{job.duration}</i>
                </h6>
                {job.responsibilities.map(res => (
                  <li>{res}</li>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Employment;
