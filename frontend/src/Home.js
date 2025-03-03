import React from "react";
import Hero from "./Hero";
import About from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import BookNow from "./BookNow";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Container>
        <h1 style={{textAlign:"center"}}>Why to choose us </h1>
        <Row>
          <Col lg={3}>
            <i class="fa-solid fa-users"></i>
            <h3>this is the first icon</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </Col>
          <Col lg={3} xs={5}>
            <i class="fa-solid fa-users"></i>
            <h3>this is the first icon</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </Col>
          <Col lg={3}>
            <i class="fa-solid fa-users"></i>
            <h3>this is the first icon</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </Col>
          <Col>
            <i class="fa-solid fa-users"></i>
            <h3>this is the first icon</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </Col>
        </Row>
      </Container>
      <BookNow/>
    </div>
  );
};

export default Home;
