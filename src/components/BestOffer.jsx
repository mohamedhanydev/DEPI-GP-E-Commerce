export default function BestOffer() {
  return (
    <section class="offer-section py-5 my-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 text-center mb-4 mb-lg-0">
            <h2 class="fw-bold mb-3">
              Best <span class="text-dark">Offer</span> - Up to
              <span class="text-primary">50%</span>
            </h2>
            <p class="text-muted mb-4">
              Explore our latest New Arrivals & unlock discounts of up to 50%
              off!
            </p>

            {/* <!--Countdown --> */}
            <div>
              <div class="d-flex flex-wrap justify-content-center gap-3 mb-4">
                <div class="count-box text-center">
                  <h4 class="fw-bold mb-0">392</h4>
                  <small>Days</small>
                </div>
                <div class="count-box text-center">
                  <h4 class="fw-bold mb-0">20</h4>
                  <small>Hrs</small>
                </div>
                <div class="count-box text-center">
                  <h4 class="fw-bold mb-0">57</h4>
                  <small>Min</small>
                </div>
                <div class="count-box text-center">
                  <h4 class="fw-bold mb-0">09</h4>
                  <small>Sec</small>
                </div>
              </div>
              {/* <!-- Button --> */}
              <a href="#" class="btn btn-primary px-4">
                Shop Now
              </a>
            </div>
          </div>

          {/* <!-- Image --> */}
          <div class="col-lg-6 text-center order-md-last">
            <img
              src="assets/images/banner__3.png"
              alt="Offer Product"
              class="img-fluid w-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
