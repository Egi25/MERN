import React from "react";
import { Button, Image } from "react-bootstrap";
import book from "./Images/book.jpg";
const BookNow = () => {
  return (
    <div className="fotobook">
    <Image src={book} className="img-fluid" />
    <div>
      <h1>Book Now!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat
      </p>
      <Button variant="success">Book Now</Button>
    </div>
  </div>
  );
};

export default BookNow;
