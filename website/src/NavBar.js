import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";


function NavBar() {
  return (
    <div>
    <Navbar bg="primary" expand="lg">
    <Navbar.Brand href="#home">TWEBSITE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#ser">Service</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#con">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
  </Navbar>  
    </div>
  )
}


export default NavBar



