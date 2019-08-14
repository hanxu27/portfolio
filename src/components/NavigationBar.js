import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About Me</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
