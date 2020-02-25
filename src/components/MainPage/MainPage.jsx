import React from 'react';
import './MainPage.css';

function Slider() {
  return (
  <React.Fragment>
  <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-interval="500">
        <img src="" class="d-block w-100" alt="..."></img>
      </div>
      <div class="carousel-item" data-interval="500">
        <img src="" class="d-block w-100" alt="..."></img>
      </div>
      <div class="carousel-item" data-interval="500">
        <img src="" class="d-block w-100" alt="..."></img>
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
