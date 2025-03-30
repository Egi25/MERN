import React from "react";
import { Container, Row, Col, Accordion, Image } from "react-bootstrap";
import faq from "./Images/faq.jpg";

const FAQSection = () => {
  return (
    <section className="py-5">
      <h2 className="julius-sans-one-regular">Frequently asked questions</h2>
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image & Title */}
          <Col lg={5} className="text-left">
            <Image src={faq} alt="FAQ Image" fluid className="mb-3" />
          </Col>

          {/* Right Side - FAQ List */}
          <Col lg={7}>
            <Accordion flush>
              <Accordion.Item eventKey="0" flush>
                <Accordion.Header flush>
                  How long does it take to see results?
                </Accordion.Header>
                <Accordion.Body>
                  Morpheus8 begins to stimulate changes in both the outer and
                  underlying skin layers immediately after the first
                  treatment...
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How long will the effects of the treatment last?
                </Accordion.Header>
                <Accordion.Body>
                  The effects can last for years, depending on the natural aging
                  process...
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How many treatments are required?
                </Accordion.Header>
                <Accordion.Body>
                  Most clients need 1-3 treatments for optimal results...
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>What is the downtime?</Accordion.Header>
                <Accordion.Body>
                  Downtime varies based on skin type, but most recover within
                  24-48 hours...
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Which skin concerns are best addressed by this treatment?
                </Accordion.Header>
                <Accordion.Body>
                  Morpheus8 is ideal for skin tightening, reducing fine lines,
                  and improving texture...
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Can this treatment be combined with others?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! It can be combined with other skincare treatments for
                  enhanced results...
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQSection;
