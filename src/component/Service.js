import React from "react";
import "./Service.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import arow4 from "./images/arow4.png";
import mobile from "./images/mobile.png";
import group1 from "./images/group1.png";
import group2 from "./images/group2.png";
import group4 from "./images/group4.png";
import discus from "./images/discus.png";
import twitter from "./images/twitter.png";
import link from "./images/link.png";

function Service() {
  return (
    <div className="clan">
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Navbar.Brand className="brand" href="#home">
            Clanizon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="nav mx-5" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav mx-5" href="#About">
                About
              </Nav.Link>
              <Nav.Link className="nav mx-5" href="#Work">
                Work
              </Nav.Link>
              <Nav.Link className="nav mx-5" href="#Services">
                Services
              </Nav.Link>
              <Nav.Link className="nav mx-5" href="#Blog">
                Blog
              </Nav.Link>
              <Nav.Link className="nav mx-5" href="#Contact">
                Contact
              </Nav.Link>
              <Button className="button px-5" href="#Let's task">
                LET'S TALK
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          <Col xxl={1} style={{ width: " 2.333333%" }}>
            <img src={arow4} height={30} />
          </Col>
          <Col xxl={11}>
            <h5 style={{ color: "#7574e8", textAlign: "left" }}>
              BACK TO PROJECTS{" "}
            </h5>
          </Col>
        </Row>
      </Container>

      <Container className="mobile mt-5">
        <Row>
          <Col className="mt-5">
            <h1>
              Experience cricket <br /> like never before
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </Col>
          <Col>
            <img src={mobile} width={600} />
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 cover" style={{ color: "white" }}>
        <h1>Our Process</h1>
        <Row className="mt-5">
          <Col className="p-5 lative">
            <img src={group1} width={70} />
            <h1>Discover</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem.
            </p>
          </Col>
          <Col className="p-5 lative">
            <img src={group2} width={70} />
            <h1>Define</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem.
            </p>
          </Col>
          <Col className="p-5 lative">
            <img src={group4} width={70} />
            <h1>Develop</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="core" style={{ color: "white" }}>
        <Row>
          <Col className="shop">
            <h1>
              Product Thinking <br /> Workshop
            </h1>
            <p className="mt-5" style={{ textAlign: "left" }}>
              The 2 day intensive workshop that involved collaborating <br />{" "}
              with the founder, product head and core tech team,
              <br /> helped us understand & identify the business goals, <br />{" "}
              potential users and functions of the product. The goals <br /> of
              the products were straight forward:
            </p>
          </Col>
          <Col>
            <img src={discus} width={500} />
          </Col>
        </Row>
      </Container>

      <Container className="smart">
        <Row>
          <Col>
            <h1>
              Extensive <br /> Journey builder
            </h1>
            <p>
              The Journey builder is the core of the product that helps <br />
              marketers to create custom user journeys and configure <br />{" "}
              marketing activites accordingly. Multiple new features <br /> were
              layered onto the journey builder to keep it smarter,
              <br /> intuitive and easier.
            </p>
          </Col>
          <Col>
            <h4>New Features</h4>
            <Row className="m-3">
              <Col>
                <h5
                  className="p-3"
                  style={{
                    background: "#104e37",
                    textAlign: "center",
                    color: "#00ffa3",
                  }}
                >
                  Activity Blocks
                </h5>
              </Col>
              <Col>
                <h5
                  className="p-3"
                  style={{
                    background: "#7c4929",
                    textAlign: "center",
                    color: "#e77c39",
                  }}
                >
                  Open Canvas with Zoom
                </h5>
              </Col>
            </Row>
            <Row className="m-3">
              <Col>
                <h5
                  className="p-3"
                  style={{
                    background: "#601f33",
                    textAlign: "center",
                    color: "#fc4e83",
                  }}
                >
                  Version History
                </h5>
              </Col>
              <Col>
                <h5
                  className="p-3"
                  style={{
                    background: "#343359",
                    textAlign: "center",
                    color: "#7574e8",
                  }}
                >
                  Keyboard Shortcuts
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="check">
        <Row>
          <h1>
            Check out the <br />
            Live Product
          </h1>
          <p>
            The 2 day intensive workshop that involved collaborating with the
            founder, product head <br /> and core tech team, helped us
            understand & identify the business goals, potential users and <br />
            functions of the product. The goals of the products were straight
            forward:
          </p>
          <Button className="goal">Product Link</Button>
        </Row>
      </Container>

      <Container className="scal">
        <Row>
          <Col>
            <div className="first">
              <h1>Ready to Start</h1>
              <h1 className="innvo">Scaling Up</h1>
              <p className="many">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some.
              </p>
            </div>

            <Button>Get a Proposal</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="">
          <Col className="follow p-4">
            <h4 style={{ color: "white" }}>Follow Us on</h4>
            <div className="mx-4">
              <img src={twitter} width={30} />
            </div>
            <div className="mx-4">
              <img src={link} width={30} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Service;
