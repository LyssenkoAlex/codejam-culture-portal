import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

export default function Slider(props) {
  const { images } = props;
  return (
    <Carousel width="60%" emulateTouch={true}>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt="one of works"/>
        </div>
      ))}
    </Carousel>
  );
}

Slider.propTypes = {
  images: PropTypes.array
};