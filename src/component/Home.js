import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import airnauts1 from "./images/airnauts1.png";
import airnauts2 from "./images/airnauts2.png";
import airnauts3 from "./images/airnauts3.png";
import airnauts4 from "./images/airnauts4.png";
import airnauts5 from "./images/airnauts5.png";
import airnauts6 from "./images/airnauts6.png";
import airnauts7 from "./images/airnauts7.png";
import airnauts8 from "./images/airnauts8.png";
import whatwedo from "./images/whatwedo.png";
import whoweare from "./images/whoweare.png";
import group1 from "./images/group1.png";
import group2 from "./images/group2.png";
import group3 from "./images/group3.png";
import group4 from "./images/group4.png";
import group5 from "./images/group5.png";
import group6 from "./images/group6.png";
import arow3 from "./images/arow3.png";
import iphone from "./images/iphone.png";
import bitmap from "./images/bitmap.png";
import bitmap1 from "./images/bitmap1.png";
import bitmap2 from "./images/bitmap2.png";
import robo from "./images/robo.png";
import robo1 from "./images/robo1.png";
import robo2 from "./images/robo2.png";
import robo3 from "./images/robo3.png";
import twitter from "./images/twitter.png";
import link from "./images/link.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import triangle from "./images/triangle.png";
import oval from "./images/oval.png";
import rectangle from "./images/rectangle.png";
import polygon from "./images/polygon.png";






function Home() {
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
             
                activeClassName="active-link"
                className="nav mx-4"
                href="#About"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/Work"}
                activeClassName="active-link"
                className="nav mx-4"
                href="#Work"
              >
                Work
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/Services"}
                activeClassName="active-link"
                className="nav mx-4"
                href="#Services"
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/Blog"}
                activeClassName="active-link"
                className="nav mx-4"
                href="#Blog"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/Contact"}
                activeClassName="active-link"
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

      <Container className="creat">
        <Row>
          <Col xxl={12} xl={12} lg={12} md={8} >
            <div className="first">
              <img src={triangle} className="triangle" width={50} />
              <img src={oval} className="oval" width={50} />
              <h1>creating the next</h1>
              <h1 className="innvo">genaration of innovators</h1>
              <h1>and change makers</h1>
              <img
                src={rectangle}
                alt={rectangle}
                width={50}
                className="rectangle"
              />
              <img src={polygon} width={50} className="polygon" alt={polygon} />
              <p className="many">
                There are many variations of passages of Lorem Ipsum available,
                but <br /> the majority have suffered alteration in some.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="does">
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
            <h1 className="our">
              What does <br /> this make possible
            </h1>
            <h2 className=" dak mt-5">Our Beloverd clients</h2>
          </Col>
        </Row>
      </Container>

      <Container className="google">
        <Row className=" mb-5 px-4 unit">
          <Col lg={3} md={3}>
            <img src={airnauts7} alt="airnauts7" width={120} height={50} />
          </Col>
          <Col lg={3} md={3}>
            <img src={airnauts5} alt="airnauts5" width={120} height={50} />
          </Col>
          <Col lg={3} md={3}>
            <img src={airnauts2} alt="airnauts2" width={120} height={50} />
          </Col>
          <Col lg={3} md={3}>
            <img
              className=""
              src={airnauts4}
              alt="airnauts4"
              width={140}
              height={50}
            />
          </Col>
        </Row>
        <Row className="clt mb-5 px-4 px-4">
          <Col lg={3} md={3} className="wid">
            <img src={airnauts3} alt="airnauts3"  width={120} height={50} />
          </Col>
          <Col lg={3} md={3} className="wid">
            <img
              src={airnauts8}
              alt="airnauts8"
              width={120}
              height={50}
            />
          </Col>
          <Col lg={3} md={3} className="wid">
            <img src={airnauts6} alt="airnauts6"  width={120} height={50} />
          </Col>
          <Col lg={3} md={3} className="wid">
            <img
              src={airnauts1}
              alt="airnauts1"
              width={120}
              height={50}
            />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <img src={whatwedo} alt={whatwedo} className="what" />
        </Row>
      </Container>

      <Container className="are mt-5">
        <Row className="some">
          <h1
            className="my-5"
            style={{
              color: "white",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "600",
            }}
          >
            Our Services
          </h1>
          <Col lg={4} md={4} className="vare">
          <div className="">
            <img src={group1} width={80} className="" />
            <h3 className="in my-4">Product Design</h3>
            <p>
              There are many variations of <br /> passages of Lorem Ipsum <br />{" "}
              available, but the majority have <br /> suffered alteration in
              some <br /> form, by injected humour.
            </p>
            <h5 className="my-5">
              KNOW MORE <img src={arow3} width={21} />
            </h5>
            </div>
          </Col>
          <Col lg={4} md={4} className="vare">
            <div className="">
              <img src={group2} width={80} />
              <h3 className="in my-4">Dev Ops</h3>
              <p>
                There are many variations of <br /> passages of Lorem Ipsum{" "}
                <br /> available, but the majority have <br /> suffered
                alteration in some <br /> form, by injected humour.
              </p>
              <h5 className="my-5">
                KNOW MORE <img src={arow3} width={21} />
              </h5>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="">
              <img src={group3} width={80} />
              <h3 className="in my-4">Game Development</h3>
              <p>
                There are many variations of <br /> passages of Lorem Ipsum{" "}
                <br /> available, but the majority have <br /> suffered
                alteration in some <br /> form, by injected humour.
              </p>
              <h5 className="my-5">
                KNOW MORE <img src={arow3} width={21} />
              </h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} className="vare">
            <div className="mt-5">
              <img src={group4} width={80} />
              <h3 className="in my-4">Web Development</h3>
              <p>
                There are many variations of <br /> passages of Lorem Ipsum{" "}
                <br /> available, but the majority have <br /> suffered
                alteration in some <br /> form, by injected humour.
              </p>
              <h5 className="my-5">
                KNOW MORE <img src={arow3} width={21} />
              </h5>
            </div>
          </Col>
          <Col lg={4} md={4} className="vare">
            <div className="mt-5 ">
              <img src={group5} width={80} />
              <h3 className="in my-4">UI UX Design</h3>
              <p>
                There are many variations of <br /> passages of Lorem Ipsum{" "}
                <br /> available, but the majority have <br /> suffered
                alteration in some <br /> form, by injected humour.
              </p>
              <h5 className="my-5">
                KNOW MORE <img src={arow3} width={21} />
              </h5>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="mt-5 ">
              <img src={group6} width={80} />
              <h3 className="in my-4">Digital Marketing</h3>
              <p>
                There are many variations of <br /> passages of Lorem Ipsum{" "}
                <br /> available, but the majority have <br /> suffered
                alteration in some <br /> form, by injected humour.
              </p>
              <h5 className="my-5">
                KNOW MORE <img src={arow3} width={21} />
              </h5>
            </div>
          </Col>
        </Row>
        <div className="never">
          <Button className="px-5 ser">SERVICES</Button>
        </div>
      </Container>

      <Container className="code">
        <Row >
          
          <h4 className="do">Our Latest Projects</h4>
          
          <Col xxl={6} lg={4} className="crik do mt-5">
            <h3 className="like mb-4">
              Experience cricket <br /> like never before
            </h3>

            <p style={{ color: "#ccccccbb" }}>
              There are many variations of passages of Lorem Ipsum <br />{" "}
              available, but the majority have suffered alteration in some{" "}
              <br /> form, by injected humour, or randomised words which <br />{" "}
              don't look even slightly believable. If you are going to use a{" "}
              <br /> passage of Lorem Ipsum, you need to be sure there isn't{" "}
              <br /> anything embarrassing hidden in the middle of text.
            </p>
            
            <Button className="ser mt-4">CASE STUDY</Button>
          </Col>
          <Col xxl={6} lg={8}>
            <img className="iphone" src={iphone} width={600} height={600} />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <img src={whoweare} alt={whoweare} className="who" />
        </Row>
      </Container>

      <Container className="best">
        <Row>
          <Col xxl={5} className="mt-5">
            <div className="do">
            <h2 className="dak" style={{ fontWeight: "600" }}>
              We’re the best <br /> at what we do.
            </h2>
            <p style={{ color: "#ccccccbb" }}>
              Remotion is a team of digital marketing professionals <br /> who
              have chosen to specialize in LinkedIn Advertising. <br />
              <br />
              We wake up each morning, drink coffee, and spit out <br />{" "}
              game-changing results for our clients. Every. Single. Day.
              <br />
              <br />
              And we have fun doing it.
            </p>
            </div>
            <div className="do mb-4">
            <Button className="ser mt-4">ABOUT US</Button>
            </div>
          </Col>
          <Col xxl={7}>
            <div className=" ve">
            <img src={bitmap} alt={bitmap} className="m-3" />
            <img src={bitmap2} alt={bitmap2} className="bitmap m-3" />
            <img src={bitmap1} alt={bitmap1} className=" m-3" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="idea">
        <Row>
          <Col lg={8}>
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
            <p className="won px-4 ">
              Indian guy with an eye for Visual design and anything digital.
              Worked <br /> for more than 12 years in the industry and won a
              couple of awards.
            </p>
          </Col>
        </Row>

        <Row className="my-4 for">
          <Col lg={4} md={12} sm={12} >
            <img src={robo1} alt={robo1} className="visua" width={416} />
            <h2 className="any px-3 ">The Future World</h2>
            <p className="any px-3">
              Indian guy with an eye for Visual design <br /> and anything
              digital. Worked for more.
            </p>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <img src={robo2} alt={robo2} className="visua" width={416} />
            <h2 className="any px-3 ">The Future World</h2>
            <p className="any px-3 ">
              Indian guy with an eye for Visual design <br /> and anything
              digital. Worked for more.
            </p>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <img src={robo3} alt={robo3} className="visua" width={416} />
            <h2 className="any px-3 ">The Future World</h2>
            <p className="any px-3">
              Indian guy with an eye for Visual design <br /> and anything
              digital. Worked for more.
            </p>
          </Col>
        </Row>
        <div className="bar">
          <Button className="the px-4">THE BLOG</Button>
        </div>
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
              <img src={link}   width={23} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
