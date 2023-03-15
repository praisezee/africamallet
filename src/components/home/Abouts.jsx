import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const Abouts = () => {
  return (
    <div id='about' className='vh-100 d-flex justify-content-center align-items-center'>
      <Card border='secondary bg-dark'>
        <Row className='g-0'>
          <Col md={ 4 } className='my-auto'>
            <Card.Img src='' alt='owners image' className='card-img-top w-25 img-fluid rounded-circle mx-auto border border-danger'/>
          </Col>
          <Col md={ 8 }>
            <Card.Body>
              <Card.Title className='text-center text-uppercase fw-bold'>
                About Us
              </Card.Title>
              <hr className="w-25 mx-auto opacity-1" />
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quo, quibusdam alias fugit quod aut nisi facere necessitatibus, quas tempora esse delectus cum nobis quia aliquam maiores, porro corrupti ut.Iste praesentium impedit modi iure quibusdam commodi veniam sit quisquam saepe velit, temporibus molestias harum error? Fugiat harum voluptas deleniti, beatae voluptate obcaecati tempora neque commodi porro cumque error ab.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default Abouts
