import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [item, setItem] = useState({
    title: "",
    desc: "",
    photo: "",
  });
  const navigate = useNavigate();

  const [uploadedImage, setUploadedImage] = useState(null);
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setItem({ ...item, photo: e.target.files[0] });
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(item).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await axios
      .post("http://localhost:5000/addItem", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log("Data not added.", err));
    navigate("/readAll");
  };

  return (
    <Container>
      <h1>Create item</h1>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={item.title}
            name="title"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="file"
            onChange={handlePhoto}
            name="photo"
            accept=".jpg, .png, .jpeg, .webp"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={item.desc}
            name="desc"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
      <img src={uploadedImage} alt={item.title} className="img-fluid" />
    </Container>
  );
};

export default Create;
