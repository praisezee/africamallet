import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, NavLink, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className='bg-danger'>
      <Row>
        <Col xs={ 6 }>
          <NavLink href='#home' eventKey={1}>
            Home
          </NavLink>
          <NavLink eventKey={2} href="#about">
            About
          </NavLink>
          <NavLink eventKey={4}>
            <Link className='nav-link' to='community'>
              Community
            </Link>
          </NavLink>
          <NavLink eventKey={ 5 }>
            <Link className='nav-link' to='store'>
              Store
            </Link>
          </NavLink>
        </Col>
        <Col xs={ 6 } className='my-auto'>
          <p className='h-4 my-0'>
            Terms and Condition
          </p>
          <p className='h-4 my-0'>
            Privacy
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
