import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const OurTeam = (props) => {
  return (
    
        
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={props.photo} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
    </Card>
    
    
    
  );
};

export default OurTeam;