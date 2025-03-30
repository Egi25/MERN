import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ReadAll = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/allItems/")
        .then((res) => {
          setItems(res.data);
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="main-banner"> Meet our team </h1>
      <Container>
        <p>
          Our team of experienced professionals is dedicated to helping you
          achieve your beauty and wellness goals. With expertise in laser
          treatments, dermal fillers, and advanced facial rejuvenation, our
          skilled specialists provide personalized care using the latest
          techniques and state-of-the-art equipment. Meet our friendly and
          highly trained staff, committed to ensuring you feel confident and
          radiant after every visit.
        </p>
        <Row className="g-2">
          {items.map((item) => {
            return (
              <Col xs={12} md={6} lg={4}>
                <Card className=" img-fluid doctors">
                  <Card.Img
                    variant="top"
                    src={`http://localhost:5000/images/${item.photo}`}
                  />
                  <Card.Body>
                    <Card.Title className="title">{item.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      
    </>
  );
};

export default ReadAll;
