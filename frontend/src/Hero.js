import React from "react";
import { Image } from "react-bootstrap";
import herophoto from "./Images/herophoto.jpg";
import Button from "react-bootstrap/Button";
import './SiteCSS.css';

const Hero = () => {
  return (
    <>
      <Image
        className="fotohero img-fluid"
        src={herophoto}
        alt="a pation with doctor"
      />
      <div>
        <h1>Lorem ipsum dolor sit amet <br></br> consectetur adipiscing el</h1>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <Button variant="primary" style={{ margin: "1em" }}>
          Primary
        </Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </>
  );
};

export default Hero;
