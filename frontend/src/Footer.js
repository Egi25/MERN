import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className=" text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start">
            <h5>About Us</h5>
            <p>We provide top-notch services to elevate your business.</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-light">Home</a></li>
              <li><a href="/services" className="text-light">Services</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>Follow Us</h5>
            <p>
              <a href="#" className="text-light mx-2">Facebook</a>
              <a href="#" className="text-light mx-2">Twitter</a>
              <a href="#" className="text-light mx-2">Instagram</a>
            </p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
