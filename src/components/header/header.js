import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <header className="header">
      <Navbar bg="#0000" variant="light">
        <Container>
          <Navbar.Brand>
            <img
              src="https://github.com/nehasaipangallu/strand2/blob/main/public/StrandBrandGuide-2%20(1).svg?raw=true"
              className=""
            />
          </Navbar.Brand>
          <Nav className="me-auto nav-items">
            <Nav.Link href="#health-insights">Health Insights</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#faq">Faq</Nav.Link>
            <Nav.Link href="#download">Download</Nav.Link>
            <Nav.Link href="#articles">Articles</Nav.Link>
            <Nav.Link href="#/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
