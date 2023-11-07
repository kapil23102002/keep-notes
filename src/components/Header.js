import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-secondary">
        <Container>
          <Navbar.Brand href="#"> 💡 Notes</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
