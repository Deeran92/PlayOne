import React from "react";
import "./Work.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import phone1 from "./images/phone1.png";
import phone2 from "./images/phone2.png";
import phone3 from "./images/phone3.png";
import phone4 from "./images/phone4.png";
import phone5 from "./images/phone5.png";
import phone6 from "./images/phone6.png";
import twitter from "./images/twitter.png";
import link from "./images/link.png";
import { Link } from "react-router-dom";

function Work() {
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

      <Container className="live">
        <Row>
          <Col xxl={12} xl={12} lg={12}>
            <div className="">
              <h1 style={{ fontWeight: "600" }}>Check out our</h1>
              <h1 className="vice px-5" style={{ fontWeight: "600" }}>
                Live Projects
              </h1>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="van">
        <Row>
          <Col className="my-4">
            <img src={phone1} className="key" width={600} />
          </Col>
          <Col className="my-4">
            <img src={phone2} className="key" width={600} />
          </Col>
        </Row>
        <Row>
          <Col className="my-4">
            <img src={phone3} className="key" width={600} />
          </Col>
          <Col className="my-4">
            <img src={phone4} className="key" width={600} />
          </Col>
        </Row>
        <Row>
          <Col className="my-4">
            <img src={phone5} className="key" width={600} />
          </Col>
          <Col className="my-4">
            <img src={phone6} className="key" width={600} />
          </Col>
        </Row>
        <div className="never">
          <Button className="ser px-4">LOAD MORE</Button>
        </div>
      </Container>

      <Container>
        <Row>
          <div className="rate"></div>
        </Row>
      </Container>

      <Container className="scal">
        <Row>
          <Col xxl={12} lg={12}>
            <div className="get">
              <h1 className="ready mb-3">Ready to Start</h1>
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

export default Work;
