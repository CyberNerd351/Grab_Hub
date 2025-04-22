// CustomCarousel.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CustomCarousel = () => {
  return (
    <Carousel>

      <Carousel.Item>
        <img className="d-block w-100" src="/images/Icecream.jpeg" alt="First slide" style={{ height: '300px', objectFit: 'cover' }} />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/images/Pancakes.jpeg" alt="Second slide" style={{ height: '300px', objectFit: 'cover' }}  />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/images/Pizza.jpeg" alt="Third slide" style={{ height: '300px', objectFit: 'cover' }}  />
      </Carousel.Item>
      
    </Carousel>
  );
};

export default CustomCarousel;