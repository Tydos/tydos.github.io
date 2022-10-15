import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Photography from '../Photgraphy'
import { BrowserRouter,Route, Link, Routes} from 'react-router-dom'


function Header() {
  return (
    
      <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as = {Link} to = {"/home"}>Smartphone Photography</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to = {"/gallery"}>Gallery</Nav.Link>
            <Nav.Link as = {Link} to = {"/pricing"}>Pricing</Nav.Link>  
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
      <Route path='/gallery' element = {<Photography/>} />
     
    </Routes>
    </BrowserRouter>
    
  )
}

export default Header