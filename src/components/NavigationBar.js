import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaMediumM } from "react-icons/fa";
import styled from "styled-components";

const Styles = styled.div`
  a {
    color: white;
  }
`;

const NavigationBar = () => {
  return (
    <Styles>
      <Navbar variant="dark" expand="sm" style={{ backgroundColor: "#17aaff" }}>
        <Navbar.Brand href="/">Han Xu</Navbar.Brand>
        <Nav className="ml-auto">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand href="/interests">Interests</Navbar.Brand>
            <a
              href="https://github.com/hanxu27?tab=stars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} className="m-1" />
            </a>
            <a
              href="https://www.linkedin.com/in/hanxu27/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} className="m-1" />
            </a>
            <a href="https://medium.com/@hanxu27" target="_blank" rel="noopener noreferrer">
              <FaMediumM size={28} className="m-1" />
            </a>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
