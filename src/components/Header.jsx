import React from 'react'
import
  {Navbar, Nav,  Container, NavbarBrand,NavLink  } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
const Header = () =>
{
  
  return (
    <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'  fixed='top'>
      <Container fluid className='px-5'>
        <NavbarBrand >
          <Link to='/' className='nav-link d-flex'>
            <img src="/vite.svg" alt="" width='30' height='30' className='d-inline-block align-top' />
            <p className="d-none d-md-block h3">Africa Mallet</p>
          </Link>
        </NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink eventKey={1}>
              <Link className='nav-link py-1' to='/'>Home</Link>
            </NavLink>
            <NavLink eventKey={2} href="#memes">
              <Link className='nav-link py-1' to='about'>About</Link>
            </NavLink>
            <NavLink eventKey={3}>
              <Link className='nav-link py-1' to='contact'>Contact</Link>
            </NavLink>
            <NavLink eventKey={4}>
              <Link className='nav-link py-1' to='community'>Community</Link>
            </NavLink>
            <NavLink eventKey={5}>
              <Link className='nav-link py-1' to='store'>Store</Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
