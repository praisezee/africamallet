import React from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
    <Container id='contact'>
      <Row>
          <p className="h3 text-center text-uppercase">
            Contact us
          </p>
          <hr className="w-25 opacity-1 mx-auto" />
          <Form className='border border-secondary rounded my-2'>
            <Row>
              <Col className='my-2' md={ 6 }>
                <FormGroup controlId='name'>
                  <FormLabel>
                    Name
                  </FormLabel>
                  <FormControl type='text' placeholder='Enter your Fullname'/>
                </FormGroup>
              </Col>
              <Col className='my-2' md={ 6 }>
                <FormGroup controlId='name'>
                  <FormLabel>
                    Email
                  </FormLabel>
                  <FormControl type='email' placeholder='Enter your Email'/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className='my-2'>
                <FormGroup controlId='name'>
                  <FormLabel>
                    Message
                  </FormLabel>
                  <FormControl type='text' as='textarea' placeholder='Enter your message'/>
                </FormGroup>
              </Col>
            </Row>
            <Button variant='danger' type='submit' className='mb-2 float-end'>
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
