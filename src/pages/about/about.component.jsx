import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faComment, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Jumbotron } from "react-bootstrap";




const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3 text-info border-bottom">ABOUT ME</h1>
        <Container>
        {/* <Jumbotron className=""> */}
          <Row className="pt-3 pb-5 align-items-center ">
            <Col xs={12} md={6}>
              <Row className=" d-flex justify-content-center mb-2 mt-5">
                <Image className="profile img-thumbnail justify-content-end img-fluid image-shadow" style={{borderRadius: '5%', width:'100%'}} alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-5 my-details rounded mt-5" >
               <span className="mb-2"> Hi there! I am <strong className="text-info">&nbsp;Md. Dalwer Hossain</strong> </span>
                <br/> 
                <span className="text-justify">I am a web developer with full of energy and determination. My comfortable and familiar skills in Bootstrap, Cascading Style Sheets (CSS), JavaScript, React, MySQL, Material UI, HTML5, MongoDB, Node Js, Express Js, Laravel 8, and Rest API.</span>
                <br />
                <ul style={{ listStyle: 'none' }}>
                  <li> <FontAwesomeIcon icon={faArrowRight}/> I love to do coding, designing, and implementation.</li>
                  <li> <FontAwesomeIcon icon={faArrowRight}/> I am always curious about new technology and invention.</li>
                  <li> <FontAwesomeIcon icon={faArrowRight}/> I am a hardworking and passionate programmer.</li>
                </ul>
                <br /> <br />

                  <div>
                    <a href="https://drive.google.com/uc?export=download&id=1wb8h4w5xo-vveKi3rAAWOaULvGn8MSwU" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>

                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <FontAwesomeIcon icon={faComment} className="text-warning icon-hover" style={{ fontSize: "40px" }} />
                    </a>
                  </div>

                  <div className="d-flex align-items-center px-3">
                    <a href="https://github.com/dalwer001" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} className="text-dark icon-hover" style={{ fontSize: "40px" }} />
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <a href="https://linkedin.com/in/md-dalwer-hossain" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} className="text-primary icon-hover" style={{ fontSize: "40px" }} />
                    </a>
                  </div>
                
                </Col>
              </Row>
            </Col>
          </Row>
          {/* </Jumbotron> */}
        </Container>
      </div>
    </div>
  );
};

export default About;
