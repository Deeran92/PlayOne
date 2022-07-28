import React from "react";
import "./Blog.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import robo4 from "./images/robo4.png";
import arow5 from "./images/arow5.png";
import author from "./images/author.png";
import robo1 from "./images/robo1.png";
import robo2 from "./images/robo2.png";
import robo3 from "./images/robo3.png";
import room from "./images/room.png";
import twitter from "./images/twitter.png";
import link from "./images/link.png";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Blog() {
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

      <Container className="move">
        <Row>
          <Col xxl={12} xl={12} lg={12}>
            <div className="">
              <h1 style={{ fontWeight: "600" }}>Check out our</h1>
              <h1 className="vice px-5" style={{ fontWeight: "600" }}>
                Latest Blogs
              </h1>
              <p className="man">
                Lean into our thoughts and perspectives on the future of work,
                remote <br /> culture, technology, collaboration and much more.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="part">
        <Row>
          <Col xxl={6}>
            <div className="pre">
             <img src={robo4} width={700} className="be" height={400} />
             </div>
          </Col>

          <Col xxl={6} className="awar  px-5">
            <p style={{ color: "#ccccccbb" }}>June 15, 2021</p>
            <h4>
              5 guiding principles from the <br /> most effective remote-first
              <br />
              businesses: Part I
            </h4>
            <p style={{ color: "#ccccccbb" }} className="mt-4">
              Indian guy with an eye for Visual design and anything digital.
              <br />
              Worked for more than 12 years in the industry and won a couple of
              <br />
              awards.
            </p>

            <img src={author} className="mt-5" />
            <div className="">
              <h5>Fox Mccloud </h5>

              <p style={{ color: "#ccccccbb" }}>Author</p>
            </div>

            <h6 style={{ color: "#7574e8" }} className="red">
              READ MORE
              <img src={arow5} width={17} className=" mx-2" />
            </h6>
          </Col>
        </Row>
      </Container>

      <Container className="Future">
        <Row className="">
          <Col xxl={6}>
            <img src={robo1} width={600} className="key" height={400} />
            <div className="my-4 px-4">
              <h4 className="guy">The Future World</h4>
              <p style={{ color: "#ccccccbb" }}>
                Indian guy with an eye for Visual design
                <br /> and anything digital. Worked for more.
              </p>
              <h6 style={{ color: "#7574e8" }} className="red">
                READ MORE
                <img src={arow5} width={17} className="mx-2" />
              </h6>
            </div>
          </Col>
          <Col xxl={6}>
            <img src={robo2} width={600} className="key" height={400} />
            <div className="my-4 px-4">
              <h4 className="guy">The Future World</h4>
              <p style={{ color: "#ccccccbb" }}>
                Indian guy with an eye for Visual design
                <br /> and anything digital. Worked for more.
              </p>
              <h6 style={{ color: "#7574e8" }} className="red">
                READ MORE
                <img src={arow5} width={17} className="mx-2" />
              </h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xxl={6}>
            <img src={robo3} width={600} className="key" height={400} />
            <div className="my-4 px-4">
              <h4 className="guy">The Future World</h4>
              <p style={{ color: "#ccccccbb" }}>
                Indian guy with an eye for Visual design <br /> and anything
                digital. Worked for more.
              </p>
              <h6 style={{ color: "#7574e8" }} className="red">
                READ MORE
                <img src={arow5} width={17} className="mx-2" />
              </h6>
            </div>
          </Col>
          <Col xxl={6}>
            <img src={room} width={600} className="key" height={400} />
            <div className="my-4 px-4">
              <h4 className="guy">The Future World</h4>
              <p style={{ color: "#ccccccbb" }}>
                Indian guy with an eye for Visual design <br /> and anything
                digital. Worked for more.
              </p>
              <h6 style={{ color: "#7574e8" }} className="red">
                READ MORE
                <img src={arow5} width={17} className="mx-2" />
              </h6>
            </div>
          </Col>
        </Row>
        <div className="load">
          <Button className="the">LOAD MORE</Button>
        </div>
      </Container>

      <Container>
        <Row>
          <div className="rate"></div>
        </Row>
      </Container>

      <Container className="scar">
        <Row>
          <Col xxl={12} lg={12}>
            <div className="get">
              <h1 className="ready">Subscribe to our</h1>
              <h1 className="alt mb-4 mt-2">Newsletter</h1>
              <Form className="form">
                <Form.Group
                  className="mb-3 empt"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="email"
                    className="ben"
                    style={{ background: "#1d1d1daf" }}
                    placeholder="Your Email"
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
        <div className="">
          <Button className="the">SUBSCRIBE</Button>
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

export default Blog;
