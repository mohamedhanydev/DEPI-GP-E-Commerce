import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import banner4 from "/assets/banner__4.png";
import grid4 from "/assets/grid__4.png";
import grid6 from "/assets/grid__6.png";

export default function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="hero-slider"
      >
        <SwiperSlide>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1 className="hero-title">Modern Collection</h1>
                  <p className="hero-text">
                    Discover our new collection of minimalist and modern
                    designs.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="col-lg-6 hero-image-container">
                <img
                  src={banner4}
                  alt="Modern Collection"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1 className="hero-title">Summer Vibes</h1>
                  <p className="hero-text">
                    Feel the summer vibes with our latest arrivals.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="col-lg-6 hero-image-container">
                <img src={grid4} alt="Summer Vibes" className="img-fluid" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1 className="hero-title">New Arrivals</h1>
                  <p className="hero-text">
                    Check out our new arrivals and get the best deals.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="col-lg-6 hero-image-container">
                <img src={grid6} alt="New Arrivals" className="img-fluid" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
