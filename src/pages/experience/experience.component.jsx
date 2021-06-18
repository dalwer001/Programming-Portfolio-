import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import blog1 from "../../assets/img/experience/blog-1.png";
import blog2 from "../../assets/img/experience/blog-2.jpg";
import blog3 from "../../assets/img/experience/blog-3.jpg";
import blog4 from "../../assets/img/experience/blog-4.png";
import Tilt from "react-tilt";
import "./experience.styles.css";


const Experience = () => {
  return (
    <div id="blogs" >
      <h1 className="pt-3 text-center font-details-b pb-3">Blogs</h1>
      <Container>
        <Jumbotron className="jumbo-style">

          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <Tilt options={{ max: 5 }}>
                <Card className=" bg-shadow" style={{ width: '30rem', height: '35rem' }}>
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize  img-fluid img-thumbnail" src={blog1} alt="" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center text-dark fw-bolder">Some topics we need to know which make javascript easier</Card.Title>
                    </div>
                    <div>
                      <Card.Text className=" ">
                        <p>
                          The slice() removes segments of a string and returns them as a new string. To define which part of the string we want to remove, use the start and end parameters. Position 0 belongs to the first character, position 1 to the second, and so on. But, the original array can not be changed.</p>

                        <a href="https://dalwer-official.medium.com/some-topics-we-need-to-which-is-made-it-easier-to-find-a-solution-in-javascript-6bac40fb3c0b" target="_blank" alt='javascript'>
                          <Button className="m-2" variant="outline-info">
                            Read More
                      </Button>
                        </a>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </div>

            <div className="col-md-6 col-sm-12 py-3">
              <Tilt options={{ max: 5 }}>
                <Card className=" bg-shadow" style={{ width: '30rem', height: '35rem' }}>
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize  img-fluid img-thumbnail" src={blog2} alt="" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center fw-bolder">Javascript core concepts that we need to know…</Card.Title>
                    </div>
                    <div>
                      <Card.Text className="">
                        <p>
                          Primitive Values include, among other things, numbers and strings. Using console.log(), open your browser’s console and print the following primitive values:
                        <br />
                        console.log(Hi);
                        <br />
                        </p>

                        <a href="https://dalwer-official.medium.com/javascript-core-concepts-that-we-need-to-know-9d1b68e52430" target="_blank" alt='javascript'>
                          <Button className="m-2" variant="outline-info">
                            Read More
                      </Button>
                        </a>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </div>

            <div className="col-md-6 col-sm-12 py-3">
              <Tilt options={{ max: 5 }}>
                <Card className=" bg-shadow" style={{ width: '30rem', height: '35rem' }}>
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize img-fluid img-thumbnail" src={blog3} alt="" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center fw-bolder">10 important things that describe React</Card.Title>
                    </div>
                    <div>
                      <Card.Text className=" ">
                        <p>
                          React is a library written in JavaScript. It’s not quite a framework. It is not a complete solution, and you will frequently need to combine it with other libraries to form any solution. As we know Frameworks are extremely useful, especially for young teams and startups. Many ....
                          </p>

                        <a href="https://dalwer-official.medium.com/10-important-things-about-react-which-give-an-overview-of-react-5815e99248a6" target="_blank" alt='javascript'>
                          <Button className="m-2" variant="outline-info">
                            Read More
                      </Button>
                        </a>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </div>


            <div className="col-md-6 col-sm-12 py-3">
              <Tilt options={{ max: 5 }}>
                <Card className=" bg-shadow" style={{ width: '30rem', height: '35rem' }}>
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize img-fluid img-thumbnail" src={blog4} alt="" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center fw-bolder">10 JavaScript concepts need to know for the interview</Card.Title>
                    </div>
                    <div>
                      <Card.Text className=" ">
                        <p>
                          Truthy expressions in JavaScript evaluate to boolean true values, while falsy expressions evaluate to boolean false values. It can take many different forms. Let’s look at what makes expressions true or false in JavaScript. Such as false...</p>

                        <a href="https://dalwer-official.medium.com/10-javascript-concepts-need-to-know-for-the-interview-cc71c157e02f" target="_blank" alt='javascript'>
                          <Button className="m-2" variant="outline-info">
                            Read More
                      </Button>
                        </a>


                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </div>
          </div>

        </Jumbotron>
      </Container>
    </div>
  );
};

export default Experience;
