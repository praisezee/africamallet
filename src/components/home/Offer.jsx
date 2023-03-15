import React, { useState } from 'react'
import { myOffer } from '../../api/offer'
import { Card, Col, Row } from 'react-bootstrap';

const Offer = () =>
{
  const [ offer, setOffer ] = useState(myOffer)
  return (
    <div className='mt-5'>
      <p className="text-center text-uppercase mx-auto h1 my-5">
        What we have to offer
        <hr className="mx-auto opacity-1 text-white w-50" />
      </p>
      { offer.map( item => (
        <Card border='secondary' className='my-3 py-2 bg-dark'>
        <Row className='g-0 bg-dark'>
          <Col md={ 4 } className='my-auto'>
            <Card.Img src={item.src} alt='owners image'/>
          </Col>
          <Col md={ 8 }>
            <Card.Body>
              <Card.Title className='text-center text-uppercase fw-bold'>
                {item.title}
              </Card.Title>
              <hr className="w-25 mx-auto opacity-1" />
              <Card.Text>
                {item.text}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      ))}
    </div>
  )
}

export default Offer