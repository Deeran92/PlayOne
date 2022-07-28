import React from "react";
import "./Services.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import services from "./images/services.png";
import dot from "./images/dot.png";
import group1 from "./images/group1.png";
import group2 from "./images/group2.png";
import group3 from "./images/group3.png";
import arow3 from "./images/arow3.png";
import twitter from "./images/twitter.png";
import link from "./images/link.png";
import social from "./images/social.png";
import social1 from "./images/social1.png";
import social2 from "./images/social2.png";
import social3 from "./images/social3.png";
import social4 from "./images/social4.png";
import social5 from "./images/social5.png";
import social6 from "./images/social6.png";
import social7 from "./images/social7.png";
import social8 from "./images/social8.png";
import social9 from "./images/social9.png";
import social10 from "./images/social10.png";
import social11 from "./images/social11.png";
import { Link } from "react-router-dom";
import ourprocess from "./images/ourprocess.png";

function Services() {
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

   

      <Container  className="deve">
        <Row className="mask">
          <Col >
            <h6 className="de">Game Development</h6>
          </Col>
          <Col  >
            <h6 className="de">Product Design</h6>
          </Col>
          <Col >
            <h6 className="de">Dev Ops</h6>
          </Col>
          <Col  >
            <h6 className="de">Web Development</h6>
          </Col>
          <Col  >
            <h6 className="de">UI UX Design</h6>
          </Col>
          <Col>
            <h6 className="de">Digital Marketing</h6>
          </Col>
        </Row>
      </Container>

      <Container className="game">
        <Row>
          <Col>
            <img src={group3} width={80} className="mb-4" />
            <h1 className="pro mb-3">Game Development</h1>
            
            <p className="clg mb-5" style={{ color: "#ccccccbb" }}>
              There are many variations of passages of Lorem Ipsum available,
              but the <br /> majority have suffered alteration in some form, by
              injected humour, or <br /> randomised words which don't look even
              slightly.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="hello">
        <Row>
          <img src={services} width={500} height={400} />
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <img src={ourprocess} alt={ourprocess} className="what mb-5" />
        </Row>
      </Container>

      <Container className="dot ">
        <Row className="m-5">
          <Col xxl={2}>
            <img src={dot} className="app" />
          </Col>
          <Col xxl={4}>
            <h3 className="pro">
              Identify <br /> the Problem
            </h3>
          </Col>
          <Col xx={6}>
            <p style={{ color: "#ccccccbb" }}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly.
            </p>
          </Col>
        </Row>
        <Row className="m-5">
          <Col xxl={2}>
            <img src={dot} className="app"  />
          </Col>
          <Col xxl={4}>
            <h3 className="pro">
              Identify <br /> the Problem
            </h3>
          </Col>
          <Col xx={6}>
            <p style={{ color: "#ccccccbb" }}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly.
            </p>
          </Col>
        </Row>
        <Row className="m-5">
          <Col xxl={2}>
            <img src={dot} className="app"  />
          </Col>
          <Col xxl={4}>
            <h3 className="pro">
              Identify <br /> the Problem
            </h3>
          </Col>
          <Col xx={6}>
            <p style={{ color: "#ccccccbb" }}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly.
            </p>
          </Col>
        </Row>
        <Row className="m-5">
          <Col xxl={2}>
            <img src={dot} className="app"  />
          </Col>
          <Col xxl={4}>
            <h3 className="pro">
              Identify <br /> the Problem
            </h3>
          </Col>
          <Col xx={6}>
            <p style={{ color: "#ccccccbb" }}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly.
            </p>
          </Col>
        </Row>
        <Row className="m-5">
          <Col xxl={2}>
            <img src={dot} className="app"  />
          </Col>
          <Col xxl={4}>
            <h3 className="pro">
              Test the <br /> Final MVP
            </h3>
          </Col>
          <Col xx={6}>
            <p style={{ color: "#ccccccbb" }}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="have">
        <Row>
          <Col xxl={4}  className="warn mt-5">
            <h1 className="pro we mod  my-3 ">20+</h1>
            <h1 className="pro we mod py-4">
              Games we <br /> have developed{" "}
            </h1>
          </Col>
          <Col xxl={8}  className="px-5">
            <Row className="social my-5 px-5">
              <Col >
                <img src={social} className="soc" />
              </Col>
              <Col  >
                <img src={social1} className="soc" />
              </Col>
              <Col >
                <img src={social2} className="soc" />
              </Col>
              <Col  >
                <img src={social3} className="soc"/>
              </Col>
            </Row>

            <Row className="my-5 ">
              <Col>
                <img src={social4} className="soc"/>
              </Col>
              <Col>
                <img src={social5} className="soc" />
              </Col>
              <Col>
                <img src={social6} className="soc" />
              </Col>
              <Col>
                <img src={social7} className="soc" />
              </Col>
              <Col>
                <img src={social} className="soc" />
              </Col>
            </Row>
            <Row className="my-5 px-5">
              <Col>
                <img src={social8} className="soc" />
              </Col>
              <Col>
                <img src={social9} className="soc"/>
              </Col>
              <Col>
                <img src={social10} className="soc"/>
              </Col>
              <Col>
                <img src={social11} className="soc" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="design">
        <Row>
          <h2 className="pro my-5">Our Services</h2>
          <Col xxl={4} xl={4} lg={4}   className="">
            <img src={group1} width={80} className="my-3" />
            <h4 className="pro my-3">Product Design</h4>
            <p style={{ color: "#ccccccbb" }}> 
              There are many variations of <br /> passages of Lorem Ipsum <br />{" "}
              available, but the majority have <br /> suffered alteration in
              some <br /> form, by injected humour.
            </p>
            <h5>
              KNOW MORE <img src={arow3} width={21} />
            </h5>
            <div className="mat"></div>
          </Col>
          <Col xxl={4} xl={4}  lg={4}  className=" ">
            <img src={group2} width={80} className="my-3" />
            <h4 className="pro my-3">Dev Ops</h4>
            <p style={{ color: "#ccccccbb" }}>
              There are many variations of <br /> passages of Lorem Ipsum <br />{" "}
              available, but the majority have <br /> suffered alteration in
              some <br /> form, by injected humour.
            </p>
            <h5>
              KNOW MORE <img src={arow3} width={21} />
            </h5>
            <div className="mat"></div>
          </Col>
          <Col xxl={4} xl={4}  lg={4} className="  ">
            <img src={group3} width={80} className="my-3" />
            <h4 className="pro my-3">Game Development</h4>
            <p style={{ color: "#ccccccbb" }}>
              There are many variations of <br /> passages of Lorem Ipsum <br />{" "}
              available, but the majority have <br /> suffered alteration in
              some <br /> form, by injected humour.
            </p>
            <h5>
              KNOW MORE <img src={arow3} width={21} />
            </h5>
          </Col>
        </Row>
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

export default Services;
