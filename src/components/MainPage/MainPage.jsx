import React from 'react';
import './MainPage.css';

import slide1 from '../../images/main-page/slide_img-1.jpg';
import slide2 from '../../images/main-page/slide_img-2.jpg';
import slide3 from '../../images/main-page/slide_img-3.jpg';

function Slider() {
  return (
  <React.Fragment>
  <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-interval="100">
        <img src={slide1} class="d-block w-100" alt="123"></img>
      </div>
      <div class="carousel-item" data-interval="100">
        <img src={slide2} class="d-block w-100" alt="228"></img>
      </div>
      <div class="carousel-item" data-interval="100">
        <img src={slide3} class="d-block w-100" alt="322"></img>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  </React.Fragment>
  );
}

function MainPage() {
  return (
  <React.Fragment>
    <Slider />
  </React.Fragment>
  );
}


export default MainPage;
