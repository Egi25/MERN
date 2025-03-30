import React from "react";
import { Button, Image } from "react-bootstrap";
import book from "./Images/book.jpg";
const BookNow = () => {
  return (
    <div className="fotobook">
      <Image src={book} className="img-fluid" />
      <div>
        <h1 className="julius-sans-one-regular" style={{ color: "whitesmoke" }}>
          Book Now!
        </h1>
        <p style={{fontSize:"20px",color:"rgb(213, 204, 195)"}}>
          Don't wait—your glow-up starts today! Secure your appointment for
          radiant, flawless skin.
        </p>
        <Button
          href="/contact/"
          variant="light"
          className="julius-sans-one-regular"
          style={{ color: "#9d8a79" }}
        >
          Contact Now
        </Button>
      </div>
    </div>
  );
};

export default BookNow;
