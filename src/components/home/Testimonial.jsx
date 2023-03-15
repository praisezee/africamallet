import React, {useState} from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { testimonials } from '../../api/offer';

const Testimonial = () =>
{
  const [testimonial, setTestimonial] = useState(testimonials)
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='my-2 d-flex justify-content-center align-items-center vh-100'>
      <div>
        <p className="h2 text-center mx-auto text-uppercase">
        Testimonials
      </p>
      <hr className="w-25 opacity-1 mx-auto" />
      <div className="d-flex">
        <div className="w-75 mx-auto">
          <Carousel activeIndex={index} onSelect={handleSelect}>
          { testimonial.map( item => (
            <Carousel.Item >
            <Card className="bg-dark my-2 py-3" border='secondary'>
              <Card.Img src={ item.src } alt="" className='card-img-top w-25 img-fluid rounded-circle mx-auto border border-danger' />
              <Card.Body>
                  <Card.Title className="text-center text-capitalize">{item.title }</Card.Title>
                  <Card.Text className="text-center">{ item.text }</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          ))}
    </Carousel>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Testimonial
