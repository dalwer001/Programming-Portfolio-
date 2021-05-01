import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_EduAcademy from "../../assets/img/projects/EduAcademy.png";
import L_Grocery from "../../assets/img/projects/MINIGROCERY SHO.png";
import L_uber from "../../assets/img/projects/BdUBER RIDERS.png";
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import Firebase from"../../assets/img/skills/firbase.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";


import "./projects-timeline.styles.css";
import { Button } from "react-bootstrap";

const TimeLine = () => {
  return (
    <div id="projects" >

      <h1 className="pt-3 text-center font-details-b pb-3 ">PROJECTS</h1>


      <div className="row">
        <div className="col-md-4" >
          <div className=" d-flex justify-content-between flex-column mt-1 bg-light shadow p-3 m-1" >
            <Accordion>
              <Card>
                <img src={L_EduAcademy} alt="" style={{ height: '25rem', width: "22rem" }} />
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className="p-2 text-center accordian-main"
                >
                  PROJECT DETAILS
                    </Accordion.Toggle>

                <Accordion.Collapse eventKey="0" className="text-left" >
                  <Card.Body>
                    <strong>Description:</strong> This is an e-learning website.
                        <hr />
                    <strong>Features:</strong>
                    <ul className="list-styles pt-1">
                      <li>Users can easily select their desire Courses to add to their Courses List and see the Course preview as well. </li>
                      <li>Users have to have an account to enroll in any courses. users can provide their opinion as a review.</li>
                      <li>Here also have users and admin login.</li>
                    </ul>
                    <hr />
                    <strong>Tech used:</strong>
                    <ul>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_HTML5}
                            alt="HTML 5"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                              HTML5
                            </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_CSS3}
                            alt="CSS 3"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                              CSS3
                            </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_REACT}
                            alt="React"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                              React
                            </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_BOOTSTRAP4}
                            alt="BOOTSTRAP"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                              Bootstrap
                            </span>
                      </li>

                      <li>
                        <span className="p-2">
                          <Image
                            src={L_EXPRESS}
                            alt="EXPRESS JS"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                              EXPRESS JS
                            </span>
                      </li>

                      <li>
                        <span className="p-2">
                          <Image
                            src={L_NODE_JS}
                            alt="NODE JS"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                              Node JS
                            </span>
                      </li>

                      <li>
                        <span className="p-2">
                          <Image
                            src={L_MONGODB}
                            alt="MONGODB"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                              MongoDB
                            </span>
                      </li>

                      <li>
                          <span className="p-2">
                            <Image
                              src={Firebase}
                              alt="Firebase"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                              Firebase
                            </span>
                        </li>


                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <div className="d-flex justify-content-between flex-nowrap text-center mt-2">
              <Button className="btn btn-primary btn-sm"
                href="https://e-edu-academy.web.app"
                target="_blank"
              >
                LIVE VIEW
                </Button>
              <Button className="btn btn-warning btn-sm"
                href="https://github.com/dalwer001/e-edu-academy-client"
                target="_blank"
              >
                CLIENT CODE
                </Button>
              <Button className="btn btn-success btn-sm"
                href="https://github.com/dalwer001/e-edu-academy-server"
                target="_blank"
              >
                SERVER CODE
                </Button>
            </div>
          </div>
        </div>




        <div className="col-md-4">


          <div className=" d-flex justify-content-between flex-column shadow mt-1 bg-light p-3 m-1">

            <Accordion>
              <Card>
                <img src={L_Grocery} alt="" style={{ height: '25rem', width: "22rem" }} />
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="2"
                  className="p-2 text-center accordian-main"
                >
                  PROJECT DETAILS
                  </Accordion.Toggle>

                <Accordion.Collapse eventKey="2" className="text-left" >
                  <Card.Body>
                    <strong>Description:</strong> This is an E-Commerce website
                      <hr />
                    <strong>Features:</strong>
                    <ul className="list-styles pt-1">
                      <li>users can buy different grocery products</li>
                      <li>Users can easily select their desire products to add to their cart and see the order preview.</li>
                      <li>Users have to have an account to buy any products. Here also have users and admin login.</li>
                    </ul>
                    <hr />
                    <strong>Tech used:</strong>
                    <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML5}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                              HTML5
                            </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                              CSS3
                            </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REACT}
                              alt="React"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                              React
                            </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP4}
                              alt="BOOTSTRAP"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                              Bootstrap
                            </span>
                        </li>

                        <li>
                          <span className="p-2">
                            <Image
                              src={L_EXPRESS}
                              alt="EXPRESS JS"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                              EXPRESS JS
                            </span>
                        </li>

                        <li>
                          <span className="p-2">
                            <Image
                              src={L_NODE_JS}
                              alt="NODE JS"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                              Node JS
                            </span>
                        </li>

                        <li>
                          <span className="p-2">
                            <Image
                              src={L_MONGODB}
                              alt="MONGODB"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                              MongoDB
                            </span>
                        </li>

                        <li>
                          <span className="p-2">
                            <Image
                              src={Firebase}
                              alt="Firebase"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                              Firebase
                            </span>
                        </li>

                      </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

              <div className="d-flex justify-content-between flex-nowrap text-center mt-2">
                <Button className="btn btn-primary btn-sm"
                  href="https://mini-grocery-shop.web.app"
                  target="_blank"
                >
                  LIVE VIEW
              </Button>
                <Button className="btn btn-warning btn-sm"
                  href="https://github.com/dalwer001/mini-grocery-shop-client"
                  target="_blank"
                >
                  CLIENT CODE
              </Button>
                <Button className="btn btn-success btn-sm"
                  href="https://github.com/dalwer001/mini-grocery-shop-server"
                  target="_blank"
                >
                  SERVER CODE
              </Button>
              </div>
          </div>
          </div>


          <div className="col-md-4">
            <div className=" d-flex justify-content-between flex-column shadow mt-1 bg-light p-3 m-1">

              <Accordion>
                <Card>
                  <img src={L_uber} alt="" style={{ height: '25rem', width: "22rem" }} />
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="2"
                    className="p-2 text-center accordian-main"
                  >
                    PROJECT DETAILS
            </Accordion.Toggle>

                  <Accordion.Collapse eventKey="2" className="text-left" >
                    <Card.Body>
                      <strong>Description:</strong> This is a website about "Find Ride for User travels".
                <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Show ride options on the website.</li>
                        <li>Users can select the destination by the login. For new users need to create an account.</li>
                        <li>Existing users can log in directly and choose the ride for travel.</li>
                        <li>Users need to register only once and with a unique email. Users can see the location on Google map.</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML5}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                      HTML5
                    </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                      CSS3
                    </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REACT}
                              alt="React"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                      React
                    </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP4}
                              alt="Bootstrap"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                      Bootstrap
                    </span>
                        </li>

                        <li>
                          <span className="p-2">
                            <Image
                              src={Firebase}
                              alt="firebase"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                      Firebase
                    </span>
                        </li>

                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>

              <div className="d-flex justify-content-between flex-nowrap text-center mt-2">
                <Button className="btn btn-primary btn-sm"
                  href="https://bd-uber-riders.web.app"
                  target="_blank"
                >
                  LIVE ViEW
        </Button>
                <Button className="btn btn-warning btn-sm"
                  href="https://github.com/dalwer001/bd-uber-riders"
                  target="_blank"
                >
                  SOURCE CODE
        </Button>

              </div>
            </div>

          </div>







        </div>
      </div>


  );
};

export default TimeLine;
