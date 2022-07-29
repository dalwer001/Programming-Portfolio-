import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./my-navbar.styles.css";
import Button from "react-bootstrap/Button";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        {/* <div> */}
          <Navbar.Brand href="#home">
            <Nav.Link href="https://drive.google.com/uc?export=download&id=1wb8h4w5xo-vveKi3rAAWOaULvGn8MSwU" className="text-white btn btn-outline-info btn-md d-md-none">
              Resume
            </Nav.Link>
          </Navbar.Brand>
        {/* </div> */}
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home" className="text-white nav-underline">Home</Nav.Link>
              <Nav.Link href="#about" className="text-white nav-underline">About</Nav.Link>
              <Nav.Link href="#skills" className="text-white nav-underline">Skills</Nav.Link>
              <Nav.Link href="#projects" className="text-white nav-underline">Projects</Nav.Link>
              <Nav.Link href="#blogs" className="text-white nav-underline">Blogs</Nav.Link>
              <Nav.Link href="#contact" className="text-white nav-underline">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
