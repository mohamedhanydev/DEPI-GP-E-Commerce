export default function NewArrivals() {
  return (
    <section class="new arrivals py-4">
      <div class="container">
        <div class="row">
          <div class="main-section-text">
            <h3>new arrivals</h3>
          </div>
        </div>
        <div class="row gy-4 mb-4">
          <div class="col-lg-3 col-md-6 col-12">
            <div class="card">
              <span class="badge-new">New</span>
              <span class="badge-dicount">-15%</span>
              <img
                src="assets/images/grid__11.png"
                class="card-img-top"
                alt="chemiz"
              />
              <div class="countdown">
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
              <div class="card-body">
                <h5 class="card-title">W. Men Formal T-shirt</h5>
                <p class="card-text text-center">
                  <del class="offer">$72.00</del> $47.00
                </p>
              </div>
              <div class="card-overlay">
                <button class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div class="card">
              <img
                src="assets/images/grid__13.png"
                class="card-img-top"
                alt="shirt"
              />
              <div class="card-body">
                <h5 class="card-title">B. Pair Of Blue Shoes</h5>
                <p class="card-text text-center">$47.00</p>
              </div>
              <div class="card-overlay">
                <button class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div class="card">
              <span class="badge-new">New</span>

              <img
                src="assets/images/grid__14.png"
                class="card-img-top"
                alt="shoes"
              />
              <div class="card-body">
                <h5 class="card-title">F. Ultmate Smart Watch</h5>
                <p class="card-text text-center">$47.00</p>
              </div>
              <div class="card-overlay">
                <button class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div class="card">
              <span class="badge-dicount">-15%</span>
              <img
                src="assets/images/grid__2.png"
                class="card-img-top"
                alt="watch"
              />
              <div class="countdown">
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
              <div class="card-body">
                <h5 class="card-title">S. Mokmol Jacket</h5>
                <p class="card-text text-center">
                  <del class="offer">$72.00</del> $47.00
                </p>
              </div>
              <div class="card-overlay">
                <button class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <a
          class="btn btn-primary d-block mx-auto"
          href="index.html"
          role="button"
          style="width: fit-content"
        >
          view All
        </a>
      </div>
    </section>
  );
}
