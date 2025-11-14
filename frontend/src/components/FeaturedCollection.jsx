import grid1 from "../assets/grid__1.png";
import grid2 from "../assets/grid__2.png";
import grid6 from "../assets/grid__6.png";
import grid4 from "../assets/grid__4.png";

export default function FeaturedCollection() {
  return (
    <section className="featured-collection py-4 my-4">
      <div className="container">
        <div className="row">
          <div className="main-section-text">
            <h3>Featured Collection</h3>
          </div>
        </div>
        <div className="row gy-4 mb-4">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card product-card">
              <span className="badge-new">New</span>
              <span className="badge-dicount">-15%</span>
              <img
                src={grid1}
                className="card-img-top"
                alt="chemiz"
              />
              <div className="countdown">
                <div>
                  <b>543</b> <br />
                  Days
                </div>
                <div>
                  <b>10</b> <br />
                  Hrs
                </div>
                <div>
                  <b>57</b> <br />
                  Min
                </div>
                <div>
                  <b>09</b> <br />
                  sec
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">W. Men Formal T-shirt</h5>
                <p className="card-text text-center">
                  <del className="offer">$72.00</del> $47.00
                </p>
              </div>
              <div className="card-overlay">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card">
              <img
                src={grid2}
                className="card-img-top"
                alt="shirt"
              />
              <div className="card-body">
                <h5 className="card-title">B. Pair Of Blue Shoes</h5>
                <p className="card-text text-center">$47.00</p>
              </div>
              <div className="card-overlay">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card">
              <span className="badge-new">New</span>

              <img
                src={grid6}
                className="card-img-top"
                alt="shoes"
              />
              <div className="card-body">
                <h5 className="card-title">F. Ultmate Smart Watch</h5>
                <p className="card-text text-center">$47.00</p>
              </div>
              <div className="card-overlay">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card">
              <span className="badge-dicount">-15%</span>
              <img
                src={grid4}
                className="card-img-top"
                alt="watch"
              />
              <div className="countdown">
                <div>
                  <b>543</b> <br />
                  Days
                </div>
                <div>
                  <b>10</b> <br />
                  Hrs
                </div>
                <div>
                  <b>57</b> <br />
                  Min
                </div>
                <div>
                  <b>09</b> <br />
                  sec
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">S. Mokmol Jacket</h5>
                <p className="card-text text-center">
                  <del className="offer">$72.00</del> $47.00
                </p>
              </div>
              <div className="card-overlay">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <a
          className="btn btn-primary d-block mx-auto"
          href="index.html"
          role="button"
          style={{ width: "fit-content" }}
        >
          view All
        </a>
      </div>
    </section>
  );
}