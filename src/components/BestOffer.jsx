import banner3 from "../assets/banner__3.png";

export default function BestOffer() {
  return (
    <section className="offer-section py-5 my-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3">
              Best <span className="text-dark">Offer</span> - Up to
              <span className="text-primary">50%</span>
            </h2>
            <p className="text-muted mb-4">
              Explore our latest New Arrivals & unlock discounts of up to 50%
              off!
            </p>

            <div>
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                <div className="count-box text-center">
                  <h4 className="fw-bold mb-0">392</h4>
                  <small>Days</small>
                </div>
                <div className="count-box text-center">
                  <h4 className="fw-bold mb-0">20</h4>
                  <small>Hrs</small>
                </div>
                <div className="count-box text-center">
                  <h4 className="fw-bold mb-0">57</h4>
                  <small>Min</small>
                </div>
                <div className="count-box text-center">
                  <h4 className="fw-bold mb-0">09</h4>
                  <small>Sec</small>
                </div>
              </div>
              <a href="#" className="btn btn-primary px-4">
                Shop Now
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center order-md-last">
            <img src={banner3} alt="Offer Product" className="img-fluid w-75" />
          </div>
        </div>
      </div>
    </section>
  );
}
