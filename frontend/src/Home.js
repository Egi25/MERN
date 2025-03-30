import React from "react";
import Hero from "./Hero";
import About from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import BookNow from "./BookNow";
import FAQSection from "./Temp";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <section>
        <h2 className="julius-sans-one-regular">Why choose us?</h2>
        <Container>
          <Row>
            <Col lg={3} xs={6} className="icon-container">
              <i class="fa-solid fa-users"></i>
              <h4>Best experts</h4>
              <p className="prompt-thin">
                Years of experience in aesthetic and skincare treatments
              </p>
            </Col>
            <Col lg={3} xs={6} className="icon-container">
              <i class="fa-solid fa-clipboard-user"></i>
              <h4>Personalised plans</h4>
              <p>Customized treatment plans based on a detailed consultation</p>
            </Col>
            <Col lg={3} xs={6} className="icon-container">
              <i class="fa-regular fa-lightbulb"></i>

              <h4>Advanced technology</h4>
              <p>We use the latest innovations to ensure precision</p>
            </Col>
            <Col lg={3} xs={6} className="icon-container">
              <i class="fa-solid fa-square-poll-vertical"></i>
              <h4>Proven results</h4>
              <p>We prioritize effectiveness and client satisfaction</p>
            </Col>
          </Row>
        </Container>
      </section>

      <FAQSection />
      <BookNow />
    </div>
  );
};

export default Home;
