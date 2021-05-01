import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logow.webp";
import "./my-navbar.styles.css";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <h1 className="text-white">MDH</h1>
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home" className="text-white">Home</Nav.Link>
              <Nav.Link href="#about"  className="text-white">About</Nav.Link>
              <Nav.Link href="#skills"  className="text-white">Skills</Nav.Link>
              <Nav.Link href="#projects"  className="text-white">Projects</Nav.Link>
              <Nav.Link href="#blogs"  className="text-white">Blogs</Nav.Link>
              <Nav.Link href="#contact"  className="text-white">Contact</Nav.Link>
              <Nav.Link href="https://drive.google.com/uc?export=download&id=1wb8h4w5xo-vveKi3rAAWOaULvGn8MSwU" className="text-white">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
