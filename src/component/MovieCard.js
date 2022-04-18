import React from 'react'
import { Card ,Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
function MovieCard({movie}) {
  return (
    <div>
       <Card style={{ width: '18rem',height:'500px' }}>
           <Card.Img variant="top" src={movie.posterUrl} style={{ height:'400px' }}/>
           <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Button variant="primary" as={Link} to={`/details/${movie.id}`}>details</Button>
    
            </Card.Body>
        </Card>
      </div>
  )
}

export default MovieCard