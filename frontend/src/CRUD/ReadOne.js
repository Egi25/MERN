import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Container,Row,Col,Button} from 'react-bootstrap'
import  {useNavigate, useParams} from 'react-router-dom' 

const ReadOne = () => {
    const {id}= useParams()
    const [item,setItem]=useState({})
    const nav = useNavigate()
    useEffect(()=>{
        const fetchData = async () => {
            await axios.get("http://localhost:5000/oneItem/"+id)
            .then(res=>setItem(res.data))
            .catch((err)=>console.log(err));
        };
        fetchData();
      
    },[id])
    const handleDelete = async () =>{
        await axios.delete("http://localhost:5000/deleteItem/"+id)
        .then(res=>nav("/."))
        .catch((err)=>console.log(err));
    }
  return (
   <Container>
<Row>
    <Col xs={12} >
    <img src={`http://localhost:5000/images/${item.photo}`}/>
    </Col>
    <Col xs={12} >
    <h2>{item.title}</h2>
    <p>{item.desc}</p>
    <Button variant="danger" onClick={()=>handleDelete(item._id)}>Delete</Button>
    <Button variant="warning" href={`/update/${item._id}`}>update</Button>
    </Col>
</Row>
   </Container>
  )
}

export default ReadOne