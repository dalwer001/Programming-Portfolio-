import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_EduAcademy from "../../assets/img/projects/EduAcademy.png";
import L_Grocery from "../../assets/img/projects/MINIGROCERY SHO.png";
import L_uber from "../../assets/img/projects/BdUBER RIDERS.png";
import L_sports from "../../assets/img/projects/sports.png";
import L_srms from "../../assets/img/projects/SRMS.png";
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
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import Firebase from "../../assets/img/skills/firbase.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_Laravel from "../../assets/img/skills/laravel.svg";


import "./projects-timeline.styles.css";
import { Button } from "react-bootstrap";

const TimeLine = () => {
  return (
    <div id="projects" >
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Todo List With MUI */}
          <ImageEvent
            date="05/2021"
            className="text-center"
            text="Sales Representative Management System"
            src={L_srms}
            alt="Sales Representative Management System"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Sales Representative Management System for a Pharmaceutical limited. Using This software, a pharmaceutical company’s sales manager can effectively track products, sales goals, employee activity. Developed by Laravel, Bootstrap, HTML, CSS.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Proper account regulation</li>
                          <li>Commission tracking</li>
                          <li>Report and analysis</li>
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
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Laravel}
                                alt="Laravel"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Laravel 8
                            </span>
                          </li>


                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

                <UrlButton
                  href="https://github.com/dalwer001/SRMS"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="04/2021"
            className="text-center"
            text="e.Edu Academy"
            src={L_EduAcademy}
            alt="e.Edu Academy"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> e.Edu Academy is an e-learning website. Developed by ReactJS, Bootstrap, Mongodb, NodeJS, Express JS, Firebase, Heroku.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Users can see different Courses</li>
                          <li>Users can easily select their desire Courses to add to their Courses List and see the Course preview as well.</li>
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
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
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
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="Heroku"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Heroku
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
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://e-edu-academy.web.app"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/dalwer001/e-edu-academy-client"
                  target="_blank"
                >
                  Client Code
                </UrlButton>
                <UrlButton
                  href="https://github.com/dalwer001/e-edu-academy-server"
                  target="_blank"
                >
                  Server CODE
                </UrlButton>

              </div>
            </div>
          </ImageEvent>


          <ImageEvent
            date="04/2021"
            className="text-center"
            text="Mini Grocery Shop"
            src={L_Grocery}
            alt="Mini Grocery Shop"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Mini Grocery Shop is an E-Commerce website. Developed by ReactJS, Bootstrap, MongoDB, NodeJS, Express JS, Firebase, Heroku.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Users can buy different grocery products.</li>
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
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
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
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="Heroku"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Heroku
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
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://mini-grocery-shop.web.app"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/dalwer001/mini-grocery-shop-client"
                  target="_blank"
                >
                  Client Code
                </UrlButton>
                <UrlButton
                  href="https://github.com/dalwer001/mini-grocery-shop-server"
                  target="_blank"
                >
                  Server CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          

          <ImageEvent
            date="03/2021"
            className="text-center"
            text="Bd Uber Riders"
            src={L_uber}
            alt="Bd Uber Riders"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Bd Uber Riders is online ride share website. Developed by ReactJS, Bootstrap, Firebase.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Take a ride of safety</li>
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
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
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
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://bd-uber-riders.web.app"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/dalwer001/bd-uber-riders"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="03/2021"
            className="text-center"
            text="History of Sports League"
            src={L_sports}
            alt="History of Sports League"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> •This is a website about "History of Sports League". Developed by ReactJS, Bootstrap, Netlify.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>By clicking on each 'Explore' button you can see the details of selected league.</li>
                          <li>Also you can see the social sites of selected league by clicking on social icons below.</li>
                          <li>Real-time complete website</li>
                          <li>Styled with react-bootstrap</li>
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
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
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

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://kind-raman-29f9a6.netlify.app/"
                  target="_blank"
                >
                  See Live
                </UrlButton>
                <UrlButton
                  href="https://github.com/dalwer001/history-of-sports-league"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent> 

        </Events>
      </Timeline>
    </div>

  );
};

export default TimeLine;
