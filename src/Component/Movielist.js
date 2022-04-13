import React from 'react'
import {Card} from 'react-bootstrap';
import './Movielist.css'
export default function Movielist(props) {
    
  return (
    <div >
     <div  >{
            props.data.map((item)=>{
                return(
                    <Card  className='styling' style={{ width: '18rem'  }} >
  <Card.Img variant="top" src={item.img.src} alt={item.img.alt} /><hr></hr>
  <Card.Body>
      
    <Card.Title>
    <h2>#{item.id}-{item.title}</h2></Card.Title>
    <Card.Text>
      Distributor:{item.distributor} <br></br><hr></hr>
      Year:{item.year} <br></br><hr></hr>
      Amount:{item.amount} <br></br><hr></hr>
      Ranking:{item.ranking}
    </Card.Text>
    
  </Card.Body>
</Card>
                )
            })
         }
         
     </div>
    </div>
  )
}
