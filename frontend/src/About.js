import React from "react";
import { Container, Image, Row, Col,Button } from "react-bootstrap";
import aboutus from "./Images/aboutus.jpg";
import aboutus2 from "./Images/aboutus2.jpg";
const About = () => {
  return (
    <div>
      <h1 className="main-banner" style={{ textAlign: "center" }}>About us</h1>
      <Container>
        <Row>
          <Col lg={6}>
            <Image src={aboutus} className="img-fluid" />
          </Col>
          <Col lg={6} xs={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo <br></br>consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <Button variant="primary">Go somewhere</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
