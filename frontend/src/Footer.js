import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className=" text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={3} className="text-center text-md-start">
            <h5 className="text-center">About Us</h5>
            <p>
              Sisal Beauty offers expert fillers, lip enhancements, laser, and
              facial treatments to enhance your natural beauty. Our goal is to
              help you feel confident and radiant with personalized care.
            </p>
          </Col>
          <Col md={3} className="text-center">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/home" className="text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-light">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="text-center ">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <p className="mt-3">
                  <i class="fa-solid fa-location-dot"></i> Rr. Sulejman Delvina
                </p>
              </li>
              <li>
                <p className="mt-3">
                  <i class="fa-solid fa-envelope"></i> sisal.beauty@gmail.com
                </p>
              </li>
              <li>
                <p className="mt-3">
                  <i class="fa-solid fa-phone"></i> +355 677899015
                </p>
              </li>
            </ul>
          </Col>
          <Col md={3} className="text-center text-md-end">
            <h5>Follow Us</h5>
            <p>
              <a href="#" className="text-light mx-2">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-light mx-2">
                <i class="fa-brands fa-tiktok"></i>
              </a>
              <a href="#" className="text-light mx-2">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Your Company. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
