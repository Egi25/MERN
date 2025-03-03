import React from "react";
import fillers1 from "./Images/fillers1.jpg";
import lipfiller from "./Images/lipfiller.jpg";
import fillers3 from "./Images/fillers3.jpg";
import laser1 from "./Images/laser1.jpg";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./SiteCSS.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Services = () => {
  return (
    <>
      <div className="section-style">
        <h1 className="main-banner">Our Services</h1>

        <Container style={{ paddingLeft: "0em" }}>
          <Row>
            <Col lg={6} style={{ paddingLeft: "0em" }}>
              <div className="image-wrapper">
                <Image src={fillers1} className="img-fluid image1 " />
                <Image src={fillers3} className="img-fluid image2" />
              </div>
            </Col>
            <Col lg={6}>
              <h2 className="moon-dance-regular">Dermal Fillers</h2>
              <p>
                Our board-certified, highly experienced dermatology team is
                committed to delivering the{" "}
                <strong>highest level of care</strong> with{" "}
                <strong>exceptional results</strong>. Put your best self forward
                with our leading-edge technology and diagnostic expertise.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="moon-dance-regular">Lip Filler</h2>
            <p>
              Our board-certified, highly experienced dermatology team is
              committed to delivering the <strong>highest level of care</strong>{" "}
              with <strong>exceptional results</strong>. Put your best self
              forward with our leading-edge technology and diagnostic expertise.
            </p>
          </Col>
          <Col lg={6}>
            <Image src={lipfiller} className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <div>
        <Container style={{ paddingLeft: "0em" }}>
          <Row className="align-items-center">
            <Col lg={7} style={{ paddingLeft: "0em" }}>
              <div style={{ height: "80%" }}>
                <Image src={laser1} className="img-fluid " />
              </div>
            </Col>
            <Col lg={5} className="section-style2 ">
              <h2 className="moon-dance-regular">Laser Hair Removal</h2>
              <p>
                Our board-certified, highly experienced dermatology team is
                committed to delivering the{" "}
                <strong>highest level of care</strong> with{" "}
                <strong>exceptional results</strong>. Put your best self forward
                with our leading-edge technology and diagnostic expertise.
              </p>
              <p>
                Our board-certified, highly experienced dermatology team is
                committed to delivering the{" "}
                <strong>highest level of care</strong> with{" "}
                <strong>exceptional results</strong>. Put your best self forward
                with our leading-edge technology and diagnostic expertise.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Card className="d-flex flex-row align-items-center ps-3">
        <Image
          src={laser1}
          className="img-fluid ps-3"
          style={{ width: "40%", height: "auto", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      );
    </>
  );
};

export default Services;
