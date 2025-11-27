import grid1 from "../assets/grid__1.png";
import grid4 from "../assets/grid__4.png";
import grid6 from "../assets/grid__6.png";
import grid11 from "../assets/grid__11.png";
import grid9 from "../assets/grid__9.png";
import grid13 from "../assets/grid__13.png";
import grey1 from "../assets/grey1.png";
import grid2 from "../assets/grid__2.png";
import womenSweater from "../assets/women-sweater.png";
import boyfriendPants from "../assets/boyfriend pants.jpg";
import dress1 from "../assets/dress1.jpg";
import leatherJacket from "../assets/leather jacket (1).jpg";
import baby1 from "../assets/baby1.jpg";
import baby2 from "../assets/baby2.jpg";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const { addToCart } = useCart();
// const navigate = useNavigate(); // لو حابة تروحي للكارت بعد الإضافة



export default function BestSelling() {
  return (
    <section className="best-selling py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Best Selling</h2>
          <ul className="nav nav-tabs" id="bestSellingTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="man-tab"
                data-bs-toggle="tab"
                data-bs-target="#man"
                type="button"
                role="tab"
              >
                Man
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="woman-tab"
                data-bs-toggle="tab"
                data-bs-target="#woman"
                type="button"
                role="tab"
              >
                Woman
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
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

        <div className="tab-content">
          <div className="tab-pane fade show active" id="man" role="tabpanel">
            <div className="row g-4">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={grid1}
                      alt="Product 1"
                      className="product-img img-fluid"
                    />
                    <div className="badges-wrapper">
                      <span className="badge-new-bestselling">New</span>
                      <span className="badge-discount-bestselling">-15%</span>
                    </div>
                    <div className="countdown-bestselling d-flex justify-content-between text-center mt-2">
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
                  <h5 className="text-center mt-3">W. Men Formal T-shirt</h5>
                  <p className="text-center mb-0">
                    <span className="card-text text-muted text-decoration-line-through">
                      $72.00
                    </span>
                    <span className="card-text ms-2">$47.00</span>
                  </p>

                  <div className="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span className="color-dot bg-primary"></span>
                    <span className="color-dot bg-success"></span>
                    <span className="color-dot bg-info"></span>
                    <span className="color-dot bg-dark"></span>
                    <span className="text-muted">+5</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={grid4}
                      alt="blue shoes"
                      className="product-img img-fluid"
                    />
                  </div>
                  <h5 className="text-center mt-3">B. Pair of Blue Shoes</h5>
                  <p className="text-center mb-0">
                    <span className="card-text">$40.00</span>
                  </p>
                  <div className="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span className="color-dot bg-primary"></span>
                    <span className="color-dot bg-success"></span>
                    <span className="color-dot bg-info"></span>
                    <span className="color-dot bg-dark"></span>
                    <span className="text-muted">+5</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={grid6}
                      alt="Ultimate Smart Watch"
                      className="product-img img-fluid"
                    />
                    <div className="badges-wrapper">
                      <span className="badge-new-bestselling">New</span>
                    </div>
                  </div>

                  <h5 className="text-center mt-3">F. Ultimate Smart Watch</h5>
                  <p className="text-center mb-0">
                    <span className="card-text">$47.00</span>
                  </p>
                  <div className="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span className="color-dot bg-primary"></span>
                    <span className="color-dot bg-success"></span>
                    <span className="color-dot bg-info"></span>
                    <span className="color-dot bg-dark"></span>
                    <span className="text-muted">+5</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={grid11}
                      alt="Denim Jacket"
                      className="product-img img-fluid"
                    />
                    <div className="badges-wrapper">
                      <span className="badge-new-bestselling">New</span>
                      <span className="badge-discount-bestselling">-15%</span>
                    </div>
                    <div className="countdown-bestselling d-flex justify-content-between text-center mt-2">
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
                  <h5 className="text-center mt-3">S. Denim Jacket</h5>
                  <p className="text-center mb-0">
                    <span className="card-text text-muted text-decoration-line-through">
                      $102.00
                    </span>
                    <span className="card-text ms-2">$70.00</span>
                  </p>
                  <div className="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span className="color-dot bg-primary"></span>
                    <span className="color-dot bg-success"></span>
                    <span className="color-dot bg-info"></span>
                    <span className="color-dot bg-dark"></span>
                    <span className="text-muted">+5</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={grid9}
                      alt="sun-glasses"
                      className="product-img img-fluid"
                    />
                  </div>
                  <h5 className="text-center mt-3">A. Stylist SunGlass</h5>
                  <p className="text-center mb-0">
                    <span className="card-text">$20.00</span>
                  </p>
                  <div className="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span className="color-dot bg-primary"></span>
                    <span className="color-dot bg-success"></span>
                    <span className="color-dot bg-info"></span>
                    <span className="color-dot bg-dark"></span>
                    <span className="text-muted">+5</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={grid13}
                      alt="basic t-shirt"
                      className="product-img img-fluid"
                    />
                  </div>

                  <h5 className="text-center mt-3">B. Basic T-shirt</h5>
                  <p className="text-center mb-0">
                    <span className="card-text">$47.00</span>
                  </p>
                  <div className="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span className="color-dot bg-primary"></span>
                    <span className="color-dot bg-success"></span>
                    <span className="color-dot bg-info"></span>
                    <span className="color-dot bg-dark"></span>
                    <span className="text-muted">+5</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={grey1}
                      alt="Off White T-Shirt"
                      className="product-img img-fluid t-shirt7"
                    />
                  </div>
                  <h5 className="text-center mt-3">B. Off White T-Shirt</h5>
                  <p className="text-center mb-0">
                    <span className="card-text">$47.00</span>
                  </p>
                  <div className="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span className="color-dot bg-primary"></span>
                    <span className="color-dot bg-success"></span>
                    <span className="color-dot bg-info"></span>
                    <span className="color-dot bg-dark"></span>
                    <span className="text-muted">+5</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={grid2}
                      alt="Classic shirt"
                      className="product-img img-fluid"
                    />
                  </div>
                  <h5 className="text-center mt-3">B. Classic shirt</h5>
                  <p className="text-center mb-0">
                    <span className="card-text">$72.00</span>
                  </p>
                  <div className="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span className="color-dot bg-primary"></span>
                    <span className="color-dot bg-success"></span>
                    <span className="color-dot bg-info"></span>
                    <span className="color-dot bg-dark"></span>
                    <span className="text-muted">+5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="woman" role="tabpanel">
            <div className="row g-4">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={womenSweater}
                      alt="Women’s Knitted Sweater"
                      className="product-img img-fluid"
                    />
                    <div className="badges-wrapper">
                      <span className="badge-new-bestselling">New</span>
                      <span className="badge-discount-bestselling">-20%</span>
                    </div>
                    <div className="countdown-bestselling d-flex justify-content-between text-center mt-2">
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
                  <h5 className="text-center mt-3">Women’s Knitted Sweater</h5>
                  <p className="text-center">
                    <span className="card-text text-muted text-decoration-line-through">
                      $100.00
                    </span>
                    <span className="card-text ms-2">$80.00</span>
                  </p>
                  <div className="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span className="color-dot bg-primary"></span>
                    <span className="color-dot bg-success"></span>
                    <span className="color-dot bg-info"></span>
                    <span className="color-dot bg-dark"></span>
                    <span className="text-muted">+5</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={boyfriendPants}
                      alt="Boyfriend Pants"
                      className="product-img img-fluid"
                    />
                  </div>
                  <h5 className="text-center mt-3">Boyfriend Pants</h5>
                  <p className="text-center">
                    <span className="card-text">$60.00</span>
                  </p>
                  <div className="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span className="color-dot bg-primary"></span>
                    <span className="color-dot bg-success"></span>
                    <span className="color-dot bg-info"></span>
                    <span className="color-dot bg-dark"></span>
                    <span className="text-muted">+5</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={dress1}
                      alt="Summer Dress"
                      className="product-img img-fluid"
                    />
                    <div className="badges-wrapper">
                      <span className="badge-new-bestselling">New</span>
                      <span className="badge-discount-bestselling">-20%</span>
                    </div>
                  </div>
                  <h5 className="text-center mt-3">Summer Dress</h5>
                  <p className="text-center">
                    <span className="card-text text-muted text-decoration-line-through">
                      $90.00
                    </span>
                    <span className="card-text ms-2">$70.00</span>
                  </p>
                  <div className="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span className="color-dot bg-danger"></span>
                    <span className="color-dot bg-warning"></span>
                    <span className="color-dot bg-dark"></span>
                    <span className="text-muted">+2</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={leatherJacket}
                      alt="Leather Jacket"
                      className="product-img img-fluid"
                    />
                  </div>
                  <h5 className="text-center mt-3">Leather Jacket</h5>
                  <p className="text-center">
                    <span className="card-text">$120.00</span>
                  </p>
                  <div className="product-colors d-flex justify-content-center align-items-center gap-2 mt-2">
                    <span className="color-dot bg-dark"></span>
                    <span className="color-dot bg-secondary"></span>
                    <span className="text-muted">+1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="baby" role="tabpanel">
            <div className="row g-4">
              <div className="col- col-md-4 col-lg-3">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={baby1}
                      alt="baby"
                      className="product-img img-fluid"
                    />
                    <div className="badges-wrapper">
                      <span className="badge-new-bestselling">New</span>
                      <span className="badge-discount-bestselling">-10%</span>
                    </div>
                    <div className="countdown-bestselling d-flex justify-content-between text-center mt-2">
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
                  <h5 className="text-center mt-3">Baby Body Suit</h5>
                  <p className="text-center">
                    <span className="card-text text-muted text-decoration-line-through">
                      $25.00
                    </span>
                    <span className="card-text ms-2">$45.00</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="product-card h-100 card">
                  <div className="card-overlay">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                  <div className="image-wrapper position-relative">
                    <img
                      src={baby2}
                      alt="baby2"
                      className="product-img img-fluid"
                    />
                  </div>
                  <h5 className="text-center mt-3">Baby Body Suit</h5>
                  <p className="text-center">
                    <span className="card-text">$54.00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="#" className="btn btn-primary px-4">
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
