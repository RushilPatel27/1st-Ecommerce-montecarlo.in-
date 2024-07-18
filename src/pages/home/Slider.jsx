import React from 'react';
import {Carousel} from 'react-bootstrap';
import SliderImg01 from '../../img/home/slider/slide-01.webp';
import SliderImg02 from '../../img/home/slider/slide-02.webp';
import SliderImg03 from '../../img/home/slider/slide-03.webp';
import SliderImg04 from '../../img/home/slider/slide-04.webp';

export default function Slider() {
  return (
    <div>
      
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderImg01}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderImg02}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderImg03}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderImg04}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    </div>
  )
}
