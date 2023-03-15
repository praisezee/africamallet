import React from 'react'
import Hero from './home/Hero';
import Offer from './home/Offer';
import Testimonial from './home/Testimonial';
import Abouts from './home/Abouts';
import Contact from './home/Contact';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Hero />
      <Container fluid>
        <Offer />
        <Testimonial />
        <Abouts />
        <Contact/>
      </Container>
    </> 
  )
}

export default Home
