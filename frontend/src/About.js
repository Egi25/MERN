import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import aboutus from "./Images/aboutus.jpg";
import aboutus2 from "./Images/aboutus2.jpg";
const About = () => {
  return (
    <div>
      <h2 className="julius-sans-one-regular" style={{ textAlign: "center" }}>
        About us
      </h2>
      <Container>
        <Row>
          <Col lg={6}>
            <Image src={aboutus} className="img-fluid" />
          </Col>
          <Col lg={6}>
            <p>
              Founded in 2020, Sisal Beauty has been dedicated to enhancing
              natural beauty with cutting-edge aesthetic treatments. Over the
              years, we have established ourselves as a trusted name in laser
              treatments, dermal fillers, lip fillers, and advanced facial
              treatments. With a team of experienced professionals and the
              latest technology, we prioritize safety, precision, and
              personalized care to help our clients achieve their desired look.
            </p>
            <p>
              Whether it’s skin rejuvenation, anti-aging solutions, or
              contouring enhancements, Sisal Beauty continues to set the
              standard for modern aesthetic care. Join us in embracing beauty
              with confidence—because at Sisal Beauty, your glow is our
              priority.
            </p>
            <Button
              href="/readall/"
              style={{ backgroundColor: "#9d8a79", border: "none" }}
            >
              Meet our team
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
