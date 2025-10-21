export default function BestSelling() {
  return (
    <section class="best-selling py-5">
      <div class="container">
        {/* <!--taps--> */}
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2 class="fw-bold">Best Selling</h2>
          <ul class="nav nav-tabs" id="bestSellingTabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="man-tab"
                data-bs-toggle="tab"
                data-bs-target="#man"
                type="button"
                role="tab"
              >
                Man
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="woman-tab"
                data-bs-toggle="tab"
                data-bs-target="#woman"
                type="button"
                role="tab"
              >
                Woman
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="baby-tab"
                data-bs-toggle="tab"
                data-bs-target="#baby"
                type="button"
                role="tab"
              >
                Baby
              </button>
            </li>
          </ul>
        </div>

        {/* <!--content of taps--> */}
        <div class="tab-content">
          {/* <!-- man --> */}
          <div class="tab-pane fade show active" id="man" role="tabpanel">
            <div class="row g-4">
              {/* <!-- product 1 --> */}
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/grid__1.png"
                      alt="Product 1"
                      class="product-img img-fluid"
                    />
                    <div class="badges-wrapper">
                      <span class="badge-new-bestselling">New</span>
                      <span class="badge-discount-bestselling">-15%</span>
                    </div>
                    <div class="countdown-bestselling d-flex justify-content-between text-center mt-2">
                      <div>
                        <span>543</span>
                        <br />
                        Days
                      </div>
                      <div>
                        <span>19</span>
                        <br />
                        Hrs
                      </div>
                      <div>
                        <span>57</span>
                        <br />
                        Min
                      </div>
                      <div>
                        <span>11</span>
                        <br />
                        Sec
                      </div>
                    </div>
                  </div>
                  <h5 class="text-center mt-3">W. Men Formal T-shirt</h5>
                  <p class="text-center mb-0">
                    <span class="card-text text-muted text-decoration-line-through">
                      $72.00
                    </span>
                    <span class="card-text ms-2">$47.00</span>
                  </p>

                  <div class="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span class="color-dot bg-primary"></span>
                    <span class="color-dot bg-success"></span>
                    <span class="color-dot bg-info"></span>
                    <span class="color-dot bg-dark"></span>
                    <span class="text-muted">+5</span>
                  </div>
                </div>
              </div>
              {/* <!-- product 2 --> */}
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/grid__4.png"
                      alt="blue shoes"
                      class="product-img img-fluid"
                    />
                  </div>
                  <h5 class="text-center mt-3">B. Pair of Blue Shoes</h5>
                  <p class="text-center mb-0">
                    <span class="card-text">$40.00</span>
                  </p>
                  <div class="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span class="color-dot bg-primary"></span>
                    <span class="color-dot bg-success"></span>
                    <span class="color-dot bg-info"></span>
                    <span class="color-dot bg-dark"></span>
                    <span class="text-muted">+5</span>
                  </div>
                </div>
              </div>
              {/* <!-- product 3 --> */}
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/grid__6.png"
                      alt="Ultimate Smart Watch"
                      class="product-img img-fluid"
                    />
                    <div class="badges-wrapper">
                      <span class="badge-new-bestselling">New</span>
                    </div>
                  </div>

                  <h5 class="text-center mt-3">F. Ultimate Smart Watch</h5>
                  <p class="text-center mb-0">
                    <span class="card-text">$47.00</span>
                  </p>
                  <div class="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span class="color-dot bg-primary"></span>
                    <span class="color-dot bg-success"></span>
                    <span class="color-dot bg-info"></span>
                    <span class="color-dot bg-dark"></span>
                    <span class="text-muted">+5</span>
                  </div>
                </div>
              </div>
              {/* <!-- product 4 --> */}
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/grid__11.png"
                      alt="Denim Jacket"
                      class="product-img img-fluid"
                    />
                    <div class="badges-wrapper">
                      <span class="badge-new-bestselling">New</span>
                      <span class="badge-discount-bestselling">-15%</span>
                    </div>
                    <div class="countdown-bestselling d-flex justify-content-between text-center mt-2">
                      <div>
                        <span>543</span>
                        <br />
                        Days
                      </div>
                      <div>
                        <span>19</span>
                        <br />
                        Hrs
                      </div>
                      <div>
                        <span>57</span>
                        <br />
                        Min
                      </div>
                      <div>
                        <span>11</span>
                        <br />
                        Sec
                      </div>
                    </div>
                  </div>
                  <h5 class="text-center mt-3">S. Denim Jacket</h5>
                  <p class="text-center mb-0">
                    <span class="card-text text-muted text-decoration-line-through">
                      $102.00
                    </span>
                    <span class="card-text ms-2">$70.00</span>
                  </p>
                  <div class="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span class="color-dot bg-primary"></span>
                    <span class="color-dot bg-success"></span>
                    <span class="color-dot bg-info"></span>
                    <span class="color-dot bg-dark"></span>
                    <span class="text-muted">+5</span>
                  </div>
                </div>
              </div>
              {/* <!-- product 5 --> */}
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/grid__9.png"
                      alt="sun-glasses"
                      class="product-img img-fluid"
                    />
                  </div>
                  <h5 class="text-center mt-3">A. Stylist SunGlass</h5>
                  <p class="text-center mb-0">
                    <span class="card-text">$20.00</span>
                  </p>
                  <div class="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span class="color-dot bg-primary"></span>
                    <span class="color-dot bg-success"></span>
                    <span class="color-dot bg-info"></span>
                    <span class="color-dot bg-dark"></span>
                    <span class="text-muted">+5</span>
                  </div>
                </div>
              </div>

              {/* <!-- product 6 --> */}
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/grid__13.png"
                      alt="basic t-shirt"
                      class="product-img img-fluid"
                    />
                  </div>

                  <h5 class="text-center mt-3">B. Basic T-shirt</h5>
                  <p class="text-center mb-0">
                    <span class="card-text">$47.00</span>
                  </p>
                  <div class="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span class="color-dot bg-primary"></span>
                    <span class="color-dot bg-success"></span>
                    <span class="color-dot bg-info"></span>
                    <span class="color-dot bg-dark"></span>
                    <span class="text-muted">+5</span>
                  </div>
                </div>
              </div>
              {/* <!-- product 7 --> */}
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/grey1.png"
                      alt="Off White T-Shirt"
                      class="product-img img-fluid t-shirt7"
                    />
                  </div>
                  <h5 class="text-center mt-3">B. Off White T-Shirt</h5>
                  <p class="text-center mb-0">
                    <span class="card-text">$47.00</span>
                  </p>
                  <div class="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span class="color-dot bg-primary"></span>
                    <span class="color-dot bg-success"></span>
                    <span class="color-dot bg-info"></span>
                    <span class="color-dot bg-dark"></span>
                    <span class="text-muted">+5</span>
                  </div>
                </div>
              </div>

              {/* <!-- product 8 --> */}
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/grid__2.png"
                      alt="Classic shirt"
                      class="product-img img-fluid"
                    />
                  </div>
                  <h5 class="text-center mt-3">B. Classic shirt</h5>
                  <p class="text-center mb-0">
                    <span class="card-text">$72.00</span>
                  </p>
                  <div class="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span class="color-dot bg-primary"></span>
                    <span class="color-dot bg-success"></span>
                    <span class="color-dot bg-info"></span>
                    <span class="color-dot bg-dark"></span>
                    <span class="text-muted">+5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- woman --> */}
          <div class="tab-pane fade" id="woman" role="tabpanel">
            <div class="row g-4">
              {/* <!-- product 1 --> */}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/women-sweater.png"
                      alt="Women’s Knitted Sweater"
                      class="product-img img-fluid"
                    />
                    <div class="badges-wrapper">
                      <span class="badge-new-bestselling">New</span>
                      <span class="badge-discount-bestselling">-20%</span>
                    </div>
                    <div class="countdown-bestselling d-flex justify-content-between text-center mt-2">
                      <div>
                        <span>300</span>
                        <br />
                        Days
                      </div>
                      <div>
                        <span>12</span>
                        <br />
                        Hrs
                      </div>
                      <div>
                        <span>40</span>
                        <br />
                        Min
                      </div>
                      <div>
                        <span>20</span>
                        <br />
                        Sec
                      </div>
                    </div>
                  </div>
                  <h5 class="text-center mt-3">Women’s Knitted Sweater</h5>
                  <p class="text-center">
                    <span class="card-text text-muted text-decoration-line-through">
                      $100.00
                    </span>
                    <span class="card-text ms-2">$80.00</span>
                  </p>
                  <div class="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span class="color-dot bg-primary"></span>
                    <span class="color-dot bg-success"></span>
                    <span class="color-dot bg-info"></span>
                    <span class="color-dot bg-dark"></span>
                    <span class="text-muted">+5</span>
                  </div>
                </div>
              </div>

              {/* <!-- product 2 --> */}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/boyfriend pants.jpg"
                      alt="Boyfriend Pants"
                      class="product-img img-fluid"
                    />
                  </div>
                  <h5 class="text-center mt-3">Boyfriend Pants</h5>
                  <p class="text-center">
                    <span class="card-text">$60.00</span>
                  </p>
                  <div class="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span class="color-dot bg-primary"></span>
                    <span class="color-dot bg-success"></span>
                    <span class="color-dot bg-info"></span>
                    <span class="color-dot bg-dark"></span>
                    <span class="text-muted">+5</span>
                  </div>
                </div>
              </div>

              {/* <!-- product 3 --> */}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/dress1.jpg"
                      alt="Summer Dress"
                      class="product-img img-fluid"
                    />
                    <div class="badges-wrapper">
                      <span class="badge-new-bestselling">New</span>
                      <span class="badge-discount-bestselling">-20%</span>
                    </div>
                  </div>
                  <h5 class="text-center mt-3">Summer Dress</h5>
                  <p class="text-center">
                    <span class="card-text text-muted text-decoration-line-through">
                      $90.00
                    </span>
                    <span class="card-text ms-2">$70.00</span>
                  </p>
                  <div class="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span class="color-dot bg-danger"></span>
                    <span class="color-dot bg-warning"></span>
                    <span class="color-dot bg-dark"></span>
                    <span class="text-muted">+2</span>
                  </div>
                </div>
              </div>

              {/* <!-- product 4 --> */}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/leather jacket (1).jpg"
                      alt="Leather Jacket"
                      class="product-img img-fluid"
                    />
                  </div>
                  <h5 class="text-center mt-3">Leather Jacket</h5>
                  <p class="text-center">
                    <span class="card-text">$120.00</span>
                  </p>
                  <div class="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span class="color-dot bg-dark"></span>
                    <span class="color-dot bg-secondary"></span>
                    <span class="text-muted">+1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- baby --> */}
          <div class="tab-pane fade" id="baby" role="tabpanel">
            <div class="row g-4">
              {/* <!-- product 1 --> */}
              <div class="col- col-md-4 col-lg-3">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/baby1.jpg"
                      alt="baby"
                      class="product-img img-fluid"
                    />
                    <div class="badges-wrapper">
                      <span class="badge-new-bestselling">New</span>
                      <span class="badge-discount-bestselling">-10%</span>
                    </div>
                    <div class="countdown-bestselling d-flex justify-content-between text-center mt-2">
                      <div>
                        <span>300</span>
                        <br />
                        Days
                      </div>
                      <div>
                        <span>12</span>
                        <br />
                        Hrs
                      </div>
                      <div>
                        <span>40</span>
                        <br />
                        Min
                      </div>
                      <div>
                        <span>20</span>
                        <br />
                        Sec
                      </div>
                    </div>
                  </div>
                  <h5 class="text-center mt-3">Baby Body Suit</h5>
                  <p class="text-center">
                    <span class="card-text text-muted text-decoration-line-through">
                      $25.00
                    </span>
                    <span class="card-text ms-2">$45.00</span>
                  </p>
                </div>
              </div>
              {/* <!-- product 2 --> */}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="product-card h-100 card">
                  <div class="card-overlay">
                    <button class="btn btn-primary">Add to Cart</button>
                  </div>
                  <div class="image-wrapper position-relative">
                    <img
                      src="assets/images/baby2.jpg"
                      alt="baby2"
                      class="product-img img-fluid"
                    />
                  </div>
                  <h5 class="text-center mt-3">Baby Body Suit</h5>
                  <p class="text-center">
                    <span class="card-text">$54.00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end tab-content --> */}

        <div class="text-center mt-4">
          <a href="#" class="btn btn-primary px-4">
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
