import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div style={{backgroundColor:'#0066cc' ,height:'50px'}}>
        <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link as={Link} to='/' style={{color:'white' }}>Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  as={Link} to='/service' style={{color:'white' }}>Service</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link}  to='/about' style={{color:'white' }}>About</Nav.Link>
  </Nav.Item>
</Nav>
    </div>
  )
}

export default Navigation