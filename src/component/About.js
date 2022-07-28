import React from "react";
import "./About.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import tech from "./images/tech.png";
import group1 from "./images/group1.png";
import group2 from "./images/group2.png";
import group4 from "./images/group4.png";
import emp1 from "./images/emp1.png";
import emp2 from "./images/emp2.png";
import emp3 from "./images/emp3.png";
import emp4 from "./images/emp4.png";
import emp5 from "./images/emp5.png";
import emp6 from "./images/emp6.png";
import emp7 from "./images/emp7.png";
import emp8 from "./images/emp8.png";
import robo from "./images/robo.png";
import robo1 from "./images/robo1.png";
import robo2 from "./images/robo2.png";
import robo3 from "./images/robo3.png";
import twitter from "./images/twitter.png";
import link from "./images/link.png";
import { Link } from "react-router-dom";
import triangle from "./images/triangle.png";
import oval from "./images/oval.png";
import polygon from "./images/polygon.png";

function About() {
  return (
    <div className="clan">
      <Navbar className="navbar" fixed="top" expand="lg">
        <Container fluid>
          <Navbar.Brand className="brand" href="#home">
            Clanizon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/"} className="nav mx-4" href="#home">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/About"}
                className="nav mx-4"
                href="#About"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/Work"}
                className="nav mx-4"
                href="#Work"
              >
                Work
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/Services"}
                className="nav mx-4"
                href="#Services"
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/Blog"}
                className="nav mx-4"
                href="#Blog"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/Contact"}
                className="nav mx-4"
                href="#Contact"
              >
                Contact
              </Nav.Link>
              <Button className="button px-5" href="#Let's task">
                LET'S TALK
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="real">
        <Row>
          <Col xxl={12} xl={12} lg={12}>
            <div className="">
              <h1 style={{ fontWeight: "600" }}>We are the real</h1>
              <h1 className="inn" style={{ fontWeight: "600" }}>
                Game Changrs
              </h1>
              <h1 style={{ fontWeight: "600" }}>Teach industry</h1>

              <p className="man">
                There are many variations of passages of Lorem Ipsum available,
                but <br /> the majority have suffered alteration in some.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="Built">
        <Row>
          <Col lg={3} md={4} className="year">
            <h1>120+</h1>
            <h2>Products Built</h2>
          </Col>
          <Col lg={3} md={4} className="year">
            <h1>16+</h1>
            <h2>Employees</h2>
          </Col>
          <Col lg={3} md={4} className="year">
            <h1>8</h1>
            <h2>Years</h2>
          </Col>
          <Col lg={3} md={4} className="year">
            <h1>12</h1>
            <h2>Services</h2>
          </Col>
        </Row>
      </Container>

      <Container className="tech">
        <Row>
          <Col lg={7} >
            <img src={oval} className="ova" width={50} />

            <img src={tech} className="ind" width={500} />

            <img src={triangle} className="tri" width={50} />
          </Col>
          <Col lg={5}  className="lorem">
            <img src={polygon} width={50} className="poly" alt={polygon} />
            <div className="we">
            <h1 className="pass">
              We are the Tech <br /> Industry Experts
            </h1>
            <p className="mt-4" style={{ color: "#ccccccbb " }}>
              There are many variations of passages of Lorem Ipsum <br />{" "}
              available, but the majority have suffered alteration in some{" "}
              <br /> form, by injected humour, or randomised words which <br />{" "}
              don't look even slightly believable. If you are going to use a{" "}
              <br /> passage of Lorem Ipsum, you need to be sure there isn't{" "}
              <br /> anything embarrassing hidden in the middle of text.
            </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="super mt-5">
        <h2 className="out mb-5">Our Principles</h2>
        <Row>
          <Col xxl={4} xl={4} lg={4} md={12} className="lative non mt-4 px-5">
            <img src={group1} width={80} />
            <h2 className="my-4">Superlative Process</h2>
            <p style={{ color: "#ccccccbb " }}>
              There are many variations of passages
              <br /> of Lorem Ipsum available, but the
              <br /> majority have suffered alteration in <br /> some form, by
              injected humour, or <br /> randomised words which don't look{" "}
              <br /> even slightly believable. If you are
              <br /> going to use a passage of Lorem.
            </p>
          </Col>
          <Col  xxl={4} xl={4} lg={4} md={12} className="lative non mt-4 px-5">
            <img src={group2} width={80} />
            <h2 className="my-4">Science and Emotions</h2>
            <p style={{ color: "#ccccccbb " }}>
              There are many variations of passages
              <br /> of Lorem Ipsum available, but the
              <br /> majority have suffered alteration in <br /> some form, by
              injected humour, or <br /> randomised words which don't look{" "}
              <br /> even slightly believable. If you are
              <br /> going to use a passage of Lorem.
            </p>
          </Col>
          <Col  xxl={4} xl={4} lg={4} md={12} className=" non mt-4 px-5">
            <img src={group4} width={80} />
            <h2 className="my-4">Excellence is Our Habit</h2>
            <p style={{ color: "#ccccccbb " }}>
              There are many variations of passages
              <br /> of Lorem Ipsum available, but the
              <br /> majority have suffered alteration in <br /> some form, by
              injected humour, or <br /> randomised words which don't look{" "}
              <br /> even slightly believable. If you are
              <br /> going to use a passage of Lorem.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="fellow" style={{ color: "white" }}>
        <Row>
          <h2 className="pro mb-4">Meet Our Team</h2>
          <p className="mb-5" style={{ color: "#ccccccbb " }}>
            We’re strategists, designers, developers, writers, directors &{" "}
            <br /> producers united by our pioneering spirit
          </p>
          <Col>
            <img src={emp1} width={300} />
            <h2 className="">Brain Johnson</h2>
            <p style={{ color: "#ccccccbb " }}>Program Fellow</p>
          </Col>
          <Col>
            <img src={emp2} width={300} />
            <h2>Jaxon Clarke</h2>
            <p style={{ color: "#ccccccbb " }}>Program Officer</p>
          </Col>
          <Col >
            <img src={emp3} width={300} />
            <h2>Fox Mccloud</h2>
            <p style={{ color: "#ccccccbb " }}>Executive Director</p>
          </Col>
          <Col >
            <img src={emp4} width={300} />
            <h2>Alec Whitten</h2>
            <p style={{ color: "#ccccccbb " }}>Advocacy Director</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={emp5} width={300} />
            <h2>Azul Baldwin</h2>
            <p style={{ color: "#ccccccbb " }}>Education Program Officer</p>
          </Col>
          <Col>
            <img src={emp6} width={300} />
            <h2>Eduard Franz</h2>
            <p style={{ color: "#ccccccbb " }}>Community Educator</p>
          </Col>
          <Col>
            <img src={emp7} width={300} />
            <h2>Amilia Luna</h2>
            <p style={{ color: "#ccccccbb " }}>Program Officer</p>
          </Col>
          <Col>
            <img src={emp8} width={300} />
            <h2>Aila Wiseman</h2>
            <p style={{ color: "#ccccccbb " }}>Intern</p>
          </Col>
        </Row>
      </Container>

      <Container className="idea">
        <Row>
          <Col>
            <h2 className="blog my-4">The Blog</h2>
            <p className="mb-5" style={{ color: "#ccccccbb" }}>
              We’re literally obsessed with growth, and our ideal clients are
              too. We ignore the bullshit, the noise and the vanity <br />{" "}
              metrics - and hyper-focus on the KPIs that will help you hit (and
              exceed) your targets.
            </p>
            <img
              src={robo}
              alt={robo}
              width={1300}
              height={400}
              className="robo"
            />
            <h2 className="won px-4">The Future World</h2>
            <p className="won px-4">
              Indian guy with an eye for Visual design and anything digital.
              Worked <br /> for more than 12 years in the industry and won a
              couple of awards.
            </p>
          </Col>
        </Row>

        <Row className="my-4 for">
          <Col xxl={4} xl={4} lg={4}>
            <img src={robo1} alt={robo1} className="visua" width={416} />
            <h2 className="any px-3 ">The Future World</h2>
            <p className="any px-3 ">
              Indian guy with an eye for Visual design <br /> and anything
              digital. Worked for more.
            </p>
          </Col>
          <Col xxl={4}xl={4} lg={4}>
            <img src={robo2} alt={robo2} className="visua" width={416} />
            <h2 className="any px-3 ">The Future World</h2>
            <p className="any px-3 ">
              Indian guy with an eye for Visual design <br /> and anything
              digital. Worked for more.
            </p>
          </Col>
          <Col xxl={4} xl={4} lg={4} >
            <img src={robo3} alt={robo3} className="visua" width={416} />
            <h2 className="any px-3 ">The Future World</h2>
            <p className="any px-3 ">
              Indian guy with an eye for Visual design <br /> and anything
              digital. Worked for more.
            </p>
          </Col>
        </Row>
        <div className="bat">
          <Button className="the px-4">THE BLOG</Button>
        </div>
      </Container>

      <Container className="scal">
        <Row>
          <Col xxl={12} lg={12}>
            <div className="get">
              <h1 className="ready">Ready to Start</h1>
              <h1 className="alt px-5">Scaling Up</h1>
              <p style={{ color: "#ccccccbb" }} className="my-3">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration in some.
              </p>
            </div>
          </Col>
        </Row>
        <div className="">
          <Button className="the">GET A PROPOSAL</Button>
        </div>
      </Container>

      
      <Container fluid>
        <Row className="">
          <Col className="follow p-4">
            <h5 style={{ color: "#ccccccbb" }}>Follow Us on</h5>
            <div className="mx-4">
              <img src={twitter} width={25} />
            </div>
            <div className="mx-2">
              <img src={link}   width={24} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
