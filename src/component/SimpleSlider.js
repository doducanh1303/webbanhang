import React, { Component } from 'react';
import Slider from "react-slick";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      autoplay: true
    };
    return (
      <div>
 <div className="container">
    <div className="row">
      {/* Begin Slider Area */}
      <div className="col-lg-8 col-md-8">
        <div className="slider-area">
    
            {/* Begin Single Slide Area */}
        
        <Slider {...settings}>
          <div>
          <div className="single-slide align-center-left  animation-style-01 bg-1">
  <div className="slider-progress" />
  <div className="slider-content">
    <h5>Sale Offer <span>-20% Off</span> This Week</h5>
    <h2>Chamcham Galaxy S9 | S9+</h2>
    <h3>Starting at <span>$1209.00</span></h3>
    <div className="default-btn slide-btn">
      <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
    </div>
  </div>
</div>

          </div>
          <div>
          <div className="single-slide align-center-left animation-style-02 bg-2">
  <div className="slider-progress" />
  <div className="slider-content">
    <h5>Sale Offer <span>Black Friday</span> This Week</h5>
    <h2>Work Desk Surface Studio 2018</h2>
    <h3>Starting at <span>$824.00</span></h3>
    <div className="default-btn slide-btn">
      <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="single-slide align-center-left animation-style-01 bg-3">
  <div className="slider-progress" />
  <div className="slider-content">
    <h5>Sale Offer <span>-10% Off</span> This Week</h5>
    <h2>Phantom 4 Pro+ Obsidian</h2>
    <h3>Starting at <span>$1849.00</span></h3>
    <div className="default-btn slide-btn">
      <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
    </div>
  </div>
</div>
          </div>
       
        </Slider>
            {/* Single Slide Area End Here */}
   
        </div>
      </div>
      {/* Slider Area End Here */}
      {/* Begin Li Banner Area */}
      <div className="col-lg-4 col-md-4 text-center pt-xs-30">
        <div className="li-banner">
          <a href="#">
            <img src="images/banner/1_1.jpg" alt="" />
          </a>
        </div>
        <div className="li-banner mt-15 mt-sm-30 mt-xs-30">
          <a href="#">
            <img src="images/banner/1_2.jpg" alt="" />
          </a>
        </div>
      </div>
      {/* Li Banner Area End Here */}
    </div>
  </div>
      </div>
    );
  }
}

export default SimpleSlider;