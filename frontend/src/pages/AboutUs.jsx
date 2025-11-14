const AboutUs = () => {
  return (
    <div className="container my-5 py-3">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">🌟 About minimalist</h1>
        <p className="lead text-muted">
          Our journey, our mission, and what we stand for.
        </p>
      </header>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* --- Section 1: Our Story --- */}
          <section className="mb-5">
            <h2 className="mb-4 fw-bold text-primary">Our Story</h2>
            <p>
              Founded in 2025 by a small team of tech enthusiasts in cairo,
              minimalist began with a simple idea: to make cutting-edge
              technology accessible to everyone. We noticed a gap in the market
              for quality, curated electronics and decided to fill it with a
              personalized shopping experience.
            </p>
            <p>
              What started in a small garage has grown into a trusted online
              retailer, but our commitment to our founding principles—**quality,
              transparency, and customer focus**—has remained the same.
            </p>
            <div className="text-center my-4">
              {/* Optional image to break up text */}
              [Image of modern office space]
            </div>
          </section>

          <hr />

          {/* --- Section 2: Our Mission --- */}
          <section className="mb-5">
            <h2 className="mb-4 fw-bold text-primary">Our Mission</h2>
            <p>
              Our mission is to **empower our customers** with the best tools
              and gadgets available, simplifying their lives and enhancing their
              creativity. We strive to be more than just a shop; we aim to be a
              **curator and guide** in the fast-paced world of technology.
            </p>

            <blockquote className="blockquote border-start border-primary border-5 ps-3 py-2 my-4 bg-light rounded shadow-sm">
              <p className="mb-0 fst-italic">
                "To deliver innovation and delight our customers with
                exceptional quality and unforgettable service, one product at a
                time."
              </p>
              <footer className="blockquote-footer mt-2">
                The Founders of minimalist
              </footer>
            </blockquote>
          </section>

          <hr />

          {/* --- Section 3: Our Core Values --- */}
          <section className="mb-5">
            <h2 className="mb-4 fw-bold text-primary">Our Core Values</h2>
            <div className="row">
              <div className="col-md-4">
                <h5 className="fw-bold">1. Quality Assurance</h5>
                <p className="text-muted">
                  Every product is rigorously tested to ensure it meets our high
                  standards of performance and durability.
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">2. Customer Commitment</h5>
                <p className="text-muted">
                  We put our customers first, offering responsive support and
                  hassle-free returns. Your satisfaction is the benchmark of our
                  success.
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">3. Sustainable Growth</h5>
                <p className="text-muted">
                  We seek to operate responsibly, minimizing our environmental
                  footprint through efficient packaging and ethical sourcing.
                </p>
              </div>
            </div>
          </section>

          <hr />

          {/* --- Call to Action --- */}
          <section className="text-center mt-5">
            <h3 className="fw-bold">Ready to Join Our Community?</h3>
            <p className="lead">
              Explore our curated selection and become part of the minimalist
              family!
            </p>
            <a href="/shop" className="btn btn-primary btn-lg mt-3">
              Start Shopping Now
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
