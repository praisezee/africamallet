import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import farm from '../../assets/farm.jpg';
import fruits from '../../assets/fruits.jpg';
import smile from '../../assets/smile.jpg';
import cult from '../../assets/cult.jpg';
import vegitable from '../../assets/vegitable.jpg';


const Hero = () =>
{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Carousel activeIndex={index} onSelect={handleSelect} className='h-100'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={farm}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fruits}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cult}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={smile}
          alt="fourth slide"
        />

        <Carousel.Caption>
          <h3>fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Hero
