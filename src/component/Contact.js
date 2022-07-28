import React from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import twitter from "./images/twitter.png";
import link from "./images/link.png";
import { Link } from "react-router-dom";

function Contact() {
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

      <Container className="ter">
        <Row className="">
          <Col xxl={6} className="about p-3">
            <div className="new">
              <h1 className="pro p-2 mb-2">Start Your</h1>
              <h1 className="pro look px-3 py-1">new project</h1>
              <h5 className="p-2 mt-4 pro">
                Looking to discuss a project <br /> with us?
              </h5>
            </div>
          </Col>

          <Col xxl={6} className="empty">
            <div className="pack">
              <h5 className="mb-4" style={{ fontWeight: "600" }}>
                Little about
              </h5>
            </div>
            <Form className="form">
              <Form.Group
                className="mb-3 empty"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  className="ben"
                  style={{ background: "#1d1d1daf" }}
                  placeholder="Tim Benson"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 empty"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  className="ben"
                  style={{ background: "#222222" }}
                  placeholder="Company"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 empty"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  className="ben"
                  style={{ background: "#222222" }}
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 empty"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className="ben"
                  type="email"
                  placeholder="Company"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 empty"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label style={{ textAlign: "left" }}>
                  <p
                    className="mb-4 mt-3"
                    style={{ fontWeight: "600", color: "white" }}
                  >
                    What do you want us to Build?
                  </p>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  className="ben"
                  rows={5}
                  style={{ resize: "none" }}
                  placeholder="Write description about your project."
                />
              </Form.Group>
              <div className="send">
                <Button className="prop">SEND</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      
      <Container fluid className="cn">
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

export default Contact;
