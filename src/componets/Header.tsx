import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <>
       <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>SHOPCART</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* Remove the direct link to the Category page */}
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {/* Link to the Category page */}
            <Nav.Link href="/products">Categories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Add the Category section to the navbar */}
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
