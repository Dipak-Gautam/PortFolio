import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NewNavbar = ({ handleMode }) => {
  const handleNavbarState = (mode) => {
    handleMode(mode);
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img
            src="images/profilecopy.jpg"
            alt=""
            width="35px"
            height="35px"
            style={{ marginRight: "5px", borderRadius: "17px" }}
          />
          Dipak Gautam
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto active">
            <Nav.Link href="#home" onClick={() => handleNavbarState("home")}>
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => handleNavbarState("project")}
            >
              Projects
            </Nav.Link>
            <Nav.Link href="#about" onClick={() => handleNavbarState("about")}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewNavbar;
