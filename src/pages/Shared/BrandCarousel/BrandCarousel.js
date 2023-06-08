import React from "react";
import Carousel from "react-bootstrap/Carousel";
import brand1 from '../../../assets/Brands/brand1.png'
import brand2 from '../../../assets/Brands/brand2.png'

const BrandCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand2}
        />
      </Carousel.Item>
      
    </Carousel>
  );
};

export default BrandCarousel;
