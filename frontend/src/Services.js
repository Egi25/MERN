import React from "react";
import fillers1 from "./Images/fillers1.jpg";
import lipfiller from "./Images/lipfiller.jpg";
import fillers3 from "./Images/fillers3.jpg";
import laser from "./Images/laser.jpg";
import facetreatment from "./Images/faceTreatment.jpg";
import facetreatment2 from "./Images/faceTreatment2.jpg";
import facetreatment3 from "./Images/faceTreatment3.jpg";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./SiteCSS.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BookNow from "./BookNow";
const Services = () => {
  return (
    <>
      <h1 className="main-banner">Our Services</h1>
      <section>
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
                Aging, stress, and environmental factors can cause our skin to
                lose volume and elasticity over time. Our dermal filler
                treatments are designed to restore that lost volume, smooth out
                fine lines and wrinkles, and enhance your natural facial
                contours. Using high-quality, FDA-approved fillers, we carefully
                inject targeted areas to rejuvenate your appearance while
                maintaining a natural and youthful look.
              </p>
              <p>
                {" "}
                Whether you're looking to restore plumpness to your cheeks,
                define your jawline, or soften deep-set wrinkles, our expert
                team tailors each treatment to your unique facial structure and
                beauty goals.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="moon-dance-regular">Lip Filler</h2>
              <p>
                Your lips are one of the most defining features of your face,
                and lip filler treatments allow you to enhance their shape,
                volume, and symmetry while maintaining a soft, natural feel.
                Whether you desire a subtle enhancement, increased hydration, or
                a fuller pout, our experienced professionals carefully craft
                your ideal lip look with precision and artistry. Using advanced
                techniques and high-quality dermal fillers, we can correct
                unevenness, define the cupid’s bow, and restore lost volume for
                a beautifully balanced result. Our goal is to enhance your
                natural beauty, giving you confidence in every smile.
              </p>
            </Col>
            <Col lg={6}>
              <Image src={lipfiller} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mt-5">
              <div>
                <Image
                  src={laser}
                  className="img-fluid"
                  style={{ objectFit: "cover", width: "100%", height: "500px" }}
                />
              </div>
            </Col>

            <Col lg={6} xs={12}>
              <h2 className="moon-dance-regular">Laser Hair Removal</h2>
              <div className="kolona1">
                <p>
                  Our state-of-the-art laser treatments provide safe and
                  effective solutions for a variety of skin concerns, from
                  unwanted hair to pigmentation and skin rejuvenation. Using the
                  latest in laser technology, we offer customized treatments
                  that target specific concerns while promoting healthier,
                  smoother skin.
                </p>
                <p>
                  Whether you’re looking for long-term hair removal, a reduction
                  in fine lines and wrinkles, or treatment for acne scars and
                  sun damage, our laser procedures are designed to deliver
                  noticeable and lasting results
                </p>
              </div>
              <div className="kolona">
                <p>
                  Our board-certified, highly experienced dermatology team is
                  committed to delivering the{" "}
                  <strong>highest level of care</strong> with{" "}
                  <strong>exceptional results</strong>. Put your best self
                  forward with our leading-edge technology and diagnostic
                  expertise.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <h2 className="moon-dance-regular">Facial Treatments</h2>
        <Container>
          <Row>
            <Col lg={4} xs={12} className="d-flex justify-content-center">
              <Card style={{ width: "20rem" }} className="kard">
                <Card.Img variant="top" src={facetreatment} />
                <Card.Body>
                  <Card.Title>Hydrafacial </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} xs={12} className="d-flex justify-content-center">
              <Card style={{ width: "20rem" }} className="kard">
                <Card.Img variant="top" src={facetreatment3} />
                <Card.Body>
                  <Card.Title>Microdermabrasion </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} xs={12} className="d-flex justify-content-center">
              <Card style={{ width: "20rem" }} className="kard">
                <Card.Img variant="top" src={facetreatment2} />
                <Card.Body>
                  <Card.Title>Chemical Peel</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <BookNow />
      </section>
    </>
  );
};

export default Services;
