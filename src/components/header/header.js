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
    <header className="header topnav" id="myTopnav">
      <Navbar collapseOnSelect fixed="top" expand="sm">
        <Container fluid>
          <Navbar.Brand href="#/home" className="nav-brand-img">
            <img
              src="https://github.com/nehasaipangallu/strand2/blob/main/public/StrandBrandGuide-2%20(1).svg?raw=true"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="nav-items ml-auto" activeKey="/home">
            <Nav.Link href="#/home" className="m-2">
              Health Insights
            </Nav.Link>

            <Nav.Link href="#contact" className="m-2">
              Contact
            </Nav.Link>
            <Nav.Link href="#/faq" className="m-2">
              Faq
            </Nav.Link>
            <Nav.Link href="#/download" className="m-2">
              Download
            </Nav.Link>
            <Nav.Link href="#/articles" className="m-2">
              Articles
            </Nav.Link>
            {localStorage.getItem('isLoggedin') === null && (
              <Nav.Link href="#/login" className="m-2">
                Login
              </Nav.Link>
            )}
            {localStorage.getItem('isLoggedin') === 'true' && (
              <Nav.Link onClick={() => logout()} className="m-2">
                Logout
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
