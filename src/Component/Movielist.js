import React from 'react'
import {Card,Button, NavItem} from 'react-bootstrap';

export default function Movielist(props) {
    
  return (
    <div>
     <div>{
            props.data.map((item)=>{
                return(
                    <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={item.img} />
  <Card.Body>
      
    <Card.Title><span>{item.id}</span>{item.title}</Card.Title>
    <Card.Text>
      {item.distributor} <br></br>
      {item.year} <br></br>
      {item.amount} <br></br>
      {item.ranking}
    </Card.Text>
    <hr></hr>
  </Card.Body>
</Card>
                )
            })
         }
         
     </div>
    </div>
  )
}
