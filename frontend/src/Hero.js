import React from "react";
import { Image } from "react-bootstrap";
import herophoto from "./Images/herophoto.jpg";
import herophoto2 from "./Images/herophoto2.jpg"
import Button from "react-bootstrap/Button";
import "./SiteCSS.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image className="fotohero" src={herophoto2} alt="A patient with doctor" />
      <div className="hero-content">
        <h1>Glow with Confidence – Your Beauty, Our Expertise</h1>

        <Button
          href="/contact/"
          variant="light"
          className="fw-bold"
          style={{ margin: "1em", color: "#9d8a79" }}
        >
          Contact Now
        </Button>
        <Button
          href="/services/"
          className="fw-bold"
          style={{ backgroundColor: "#9d8a79", border: "none" }}
        >
          Our Services
        </Button>
      </div>
    </div>
  );
};

export default Hero;
