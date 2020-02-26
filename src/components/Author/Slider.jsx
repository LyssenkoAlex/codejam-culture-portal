import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

export default function Slider(props) {
  const { images } = props;
  return (
    <div className="gallery">
      <Carousel width="40%" emulateTouch={true} dynamicHeight={true}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt="one of works" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

Slider.propTypes = {
  images: PropTypes.array
};