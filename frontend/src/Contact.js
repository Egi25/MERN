
import React, {useState} from 'react'
import {Container, Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import axios from 'axios'
const Contact = () => {

const [addContact,setAddContact]=useState({

    firstname:"",
    lastname:"",
    email:"",
    comment:"",
});


const handleChange= (e) =>{
    setAddContact({...addContact,[e.target.name]:e.target.value});
};

const handleSubmit = async(e)=>{
    e.preventDefault();
    await axios
    .post ("http://localhost:5000/addContact",addContact)

    .then((res)=>{
        console.log("Contact added");
    })
    .catch((err)=>console.log("Contact not added",err));
}
  return (
    <Container>

<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="firstname">
        <Form.Label>First NAme</Form.Label>
        <Form.Control type="text" value={addContact.firstname} name="firstname" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" value={addContact.lastname} name="lastname" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3}value={addContact.comment} name="comment" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  value={addContact.email} name="email" onChange={handleChange}/>
      </Form.Group>
 
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    </Container>
  )
}

export default Contact
