import React from 'react'
import { Card ,Button} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function MovieDetails({Data}) {
    let { id } = useParams();
    let navigate=useNavigate();
  return (
    <div>
     
    
        {Data.filter((movie)=>movie.id==id).map((el)=>
           <div > 
             
              <Card style={{ width: '800px',height:'500px',marginTop:"25px",marginLeft:"15px" }}>
              <h1 >{el.title}</h1>
              <iframe width="560" height="315" src={el.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
              <Card.Body>
              <Card.Text>{el.description}</Card.Text>
              </Card.Body>
              <Button variant="primary" onClick={()=>navigate("/")} style={{width:"200px" ,transform:"translate(100%,0%)"}}>go back</Button> 
              </Card>
            </div>)}
    </div>

    
  )
}

export default MovieDetails