import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Create = () => {
   const [uploadedImage, setUploadedImage] = useState(null);
  const [item, setItem] = useState({
    title: "",
    desc: "",
    photo: ""
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setItem({ ...item, photo: e.target.files[0] });  // ⬅️ Fix: Access the first file
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(item).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await axios.post("http://localhost:5000/addItem", formData);
      console.log(res);
    } catch (err) {
      console.log("Data not added", err);
    }
  };

  return (
    <Container fluid>
      <h1>Create Item</h1>
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

        <Form.Group className="mb-3" controlId="file">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="file"
            name="photo"
            accept=".jpg,.jpeg,.png"
            onChange={handlePhoto} 
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
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Create;
