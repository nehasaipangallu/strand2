import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  const isLoggedin = localStorage.getItem('isLoggedin');

  function logout() {
    localStorage.clear();
    window.location.replace('#/login');
    window.location.reload(false);
  }
  return (
    <header className="header">
      <Navbar bg="#0000" variant="light">
        <Container>
          <Navbar.Brand href="#/home">
            <img
              src="https://github.com/nehasaipangallu/strand2/blob/main/public/StrandBrandGuide-2%20(1).svg?raw=true"
              className="logo"
            />
          </Navbar.Brand>
          <Nav
            className="me-auto nav-items"
            activeKey="/home"
            onSelect={(selectedKey, event) => console.log(`selected ${event}`)}
          >
            <Nav.Link href="#/home">Health Insights</Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#faq">Faq</Nav.Link>
            <Nav.Link href="#download">Download</Nav.Link>
            <Nav.Link href="#articles">Articles</Nav.Link>
            {localStorage.getItem('isLoggedin') === null && (
              <Nav.Link href="#/login">Login</Nav.Link>
            )}
            {localStorage.getItem('isLoggedin') === 'true' && (
              <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
