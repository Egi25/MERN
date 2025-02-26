import React, {useState,useEffect} from 'react'
import axios from "axios";
import {Container,Row,Col,Card, Button} from 'react-bootstrap'


const ReadAll = () => {
    const [items,setItems]= useState([])
    useEffect(()=>{
        const fetchData = async () => {
            await axios.get("http://localhost:5000/allItems/")
            .then(res=>{
              setItems(res.data);
          console.log(res)})
            .catch((err)=>console.log(err));
        };
        fetchData();
      
    },[])
    
  return (
    <Container>
        <h1> Read All </h1>
        <Row>

       {items.map((item)=> {
       
        return (
       
        <Col xs= {12} md= {6} lg={4}>
            
        <Card >
      <Card.Img variant="top" src={`http://localhost:5000/images/${item.photo}`} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" href={`/readOne/${item._id}`}>Read more</Button>
      </Card.Body>
    </Card> 
        </Col>
       )})}
      </Row>
    </Container>
  )

};

export default ReadAll