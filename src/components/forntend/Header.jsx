import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
 
 const Header = () => {
  return ( <Navbar expand="lg" className="bg-body-tertiary" style={{ zIndex :'999'}}>
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav d-flex">
              <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Services</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
                <Nav.Link href="login"> <span  className="btn btn-primary">Login </span></Nav.Link>
                <Nav.Link href="login" style={{ marginLeft: '0px' }}> <span  className="btn btn-info" >Register </span></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
   );
};

export default Header;