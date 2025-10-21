export default function Hero() {
  return (
    <section class="hero">
      <div class="swiper hero-slider">
        <div class="swiper-wrapper">
          {/* Slide 1 */}
          <div class="swiper-slide">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="hero-content">
                    <h1 class="hero-title">Modern Collection</h1>
                    <p class="hero-text">
                      Discover our new collection of minimalist and modern
                      designs.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Shop Now
                    </a>
                  </div>
                </div>
                <div class="col-lg-6 hero-image-container">
                  <img
                    src="assets/images/banner__4.png"
                    alt="Modern Collection"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div class="swiper-slide">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="hero-content">
                    <h1 class="hero-title">Summer Vibes</h1>
                    <p class="hero-text">
                      Feel the summer vibes with our latest arrivals.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Shop Now
                    </a>
                  </div>
                </div>
                <div class="col-lg-6 hero-image-container">
                  <img
                    src="assets/images/grid__4.png"
                    alt="Summer Vibes"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div class="swiper-slide">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="hero-content">
                    <h1 class="hero-title">New Arrivals</h1>
                    <p class="hero-text">
                      Check out our new arrivals and get the best deals.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Shop Now
                    </a>
                  </div>
                </div>
                <div class="col-lg-6 hero-image-container">
                  <img
                    src="assets/images/grid__6.png"
                    alt="New Arrivals"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add Pagination */}
        <div class="swiper-pagination"></div>
      </div>
    </section>
  );
}
