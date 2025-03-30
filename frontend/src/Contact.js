import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
const Contact = () => {
  const [addContact, setAddContact] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setAddContact({ ...addContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/addContact", addContact)

      .then((res) => {
        console.log("Contact added");
      })
      .catch((err) => console.log("Contact not added", err));
  };
  return (
    <Container>
      
      <Row>
        <Col className="kontakt ">
          <h1 className="text-center fw-bold">Contact form</h1>
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="firstname">
              <Form.Control
                type="text"
                value={addContact.firstname}
                name="firstname"
                onChange={handleChange}
                placeholder="First Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastname">
              <Form.Control
                type="text"
                value={addContact.lastname}
                name="lastname"
                onChange={handleChange}
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                value={addContact.email}
                name="email"
                onChange={handleChange}
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="comment">
              <Form.Control
                as="textarea"
                rows={3}
                value={addContact.comment}
                name="comment"
                onChange={handleChange}
                placeholder="Your message"
              />
            </Form.Group>

            <Button className="contact-btn" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg="5" xs="12" >
          <div className="p-5  information" >
            <h1 className="fw-bold">Information</h1>
            <p className="mt-4">
              <i className="fa-brands fa-instagram"></i> sisal.beauty
            </p>
            <p className="mt-4">
              <i class="fa-solid fa-envelope"></i> sisal.beauty@gmail.com
            </p>

            <p className="mt-4">
              <i class="fa-solid fa-phone"></i> +355 677899015
            </p>
            
            
            <p className="mt-4">
            <i class="fa-solid fa-location-dot"></i> Rr. Sulejman Delvina
            </p>
          </div>
        </Col>
      </Row>
      <div className="map-container mt-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5527627319602!2d19.806309375934312!3d41.31859207130868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031002aacb2ab%3A0xaa4e9f05325f36!2sRruga%20Sulejman%20Delvina%2C%20Tiran%C3%AB%2C%20Shqip%C3%ABria!5e0!3m2!1ssq!2s!4v1742749875226!5m2!1ssq!2s"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </Container>

  );
};

export default Contact;
