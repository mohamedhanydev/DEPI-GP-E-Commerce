import React from 'react';
import '../styles/about-us.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        {/* Hero Section */}
        <section className="about-hero fade-in">
          <h1>About Minimalist</h1>
          <p>Our journey, our mission, and what we stand for.</p>
        </section>

        {/* Statistics Section */}
        <section className="stats-section py-5">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <h3 className="stat-number">5000+</h3>
                <p className="stat-label">Happy Customers</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">1500+</h3>
                <p className="stat-label">Quality Products</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">4+</h3>
                <p className="stat-label">Years of Excellence</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">4.9</h3>
                <p className="stat-label">Average Rating</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">24/7</h3>
                <p className="stat-label">Customer Support</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">99%</h3>
                <p className="stat-label">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section fade-in">
          <h2>Our Story</h2>
          <div className="story-content">
            <p>
              Founded in 2025 by a small team of tech enthusiasts in Cairo, began with a simple idea: to make cutting-edge technology accessible to everyone. We noticed a gap in the market for quality, curated electronics and decided to fill it with a personalized shopping experience.
            </p>
            <p>
              What started in a small garage has grown into a trusted online retailer, but our commitment to our founding principles—quality, transparency, and customer focus—has remained the same.
            </p>
            <div className="story-image-container">
              <img
                src="/src/assets/m.jpg"
                alt="Modern Office Space"
                className="story-image"
                onError={(e) => e.target.src = 'https://via.placeholder.com/800x400?text=Modern+Office+Space'}
              />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section py-5 bg-white">
          <div className="container">
            <h2 className="text-center mb-5 fw-bold text-primary">Our Journey</h2>
            <div className="timeline">
              <div className="timeline-item left">
                <div className="timeline-content">
                  <div className="timeline-image-container">
                    <img
                      src="/src/assets/p1.jpg"
                      alt="Founded in Cairo"
                      className="timeline-image"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/200x150?text=2025'}
                    />
                  </div>
                  <div className="timeline-text">
                    <div className="timeline-year">2025</div>
                    <h4>Founded in Cairo</h4>
                    <p>Started with a vision to make cutting-edge technology accessible to everyone.</p>
                  </div>
                </div>
              </div>
              <div className="timeline-item right">
                <div className="timeline-content">
                  <div className="timeline-image-container">
                    <img
                      src="/src/assets/p2.jpg"
                      alt="First 1000 Customers"
                      className="timeline-image"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/200x150?text=2026'}
                    />
                  </div>
                  <div className="timeline-text">
                    <div className="timeline-year">2026</div>
                    <h4>First 1000 Customers</h4>
                    <p>Achieved our first major milestone with growing customer base.</p>
                  </div>
                </div>
              </div>
              <div className="timeline-item left">
                <div className="timeline-content">
                  <div className="timeline-image-container">
                    <img
                      src="/src/assets/p3.jpg"
                      alt="Product Expansion"
                      className="timeline-image"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/200x150?text=2027'}
                    />
                  </div>
                  <div className="timeline-text">
                    <div className="timeline-year">2027</div>
                    <h4>Product Expansion</h4>
                    <p>Expanded our curated collection to serve more customer needs.</p>
                  </div>
                </div>
              </div>
              <div className="timeline-item right">
                <div className="timeline-content">
                  <div className="timeline-image-container">
                    <img
                      src="/src/assets/p4.jpg"
                      alt="Excellence Award"
                      className="timeline-image"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/200x150?text=2028'}
                    />
                  </div>
                  <div className="timeline-text">
                    <div className="timeline-year">2028</div>
                    <h4>Excellence Award</h4>
                    <p>Recognized for outstanding customer service and product quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="video-section py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="mb-4 fw-bold text-primary">Our Story in Motion</h2>
                <p className="mb-4">
                  Watch our journey from a small garage startup to a trusted e-commerce platform.
                  See the passion and dedication that drives everything we do.
                </p>
                <div className="video-stats">
                  <div className="video-stat">
                    <span className="stat-number">2M+</span>
                    <span className="stat-text">Views</span>
                  </div>
                  <div className="video-stat">
                    <span className="stat-number">15K</span>
                    <span className="stat-text">Subscribers</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="video-container">
                  <div className="video-placeholder">
                    <img
                      src="/src/assets/m.jpg"
                      alt="Company video thumbnail"
                      className="video-thumbnail"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/500x280?text=Company+Video'}
                    />
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                    <div className="video-overlay">
                      <h5>Watch Our Story</h5>
                      <p>2:34 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section fade-in">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower our customers with the best tools and gadgets available, simplifying their lives and enhancing their creativity. We strive to be more than just a shop; we aim to be a curator and guide in the fast-paced world of technology.
          </p>

          <div className="mission-quote">
            <p>
              "To deliver innovation and delight our customers with
              exceptional quality and unforgettable service, one product at a
              time."
            </p>
            <div className="quote-author">— The Founders of Minmalist</div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section fade-in">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">1</div>
              <h5>Quality Assurance</h5>
              <p>
                Every product is rigorously tested to ensure it meets our high
                standards of performance and durability.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">2</div>
              <h5>Customer Commitment</h5>
              <p>
                We put our customers first, offering responsive support and
                hassle-free returns. Your satisfaction is the benchmark of our
                success.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">3</div>
              <h5>Sustainable Growth</h5>
              <p>
                We seek to operate responsibly, minimizing our environmental
                footprint through efficient packaging and ethical sourcing.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="sustainability-section py-5 bg-white">
          <div className="container">
            <h2 className="text-center mb-5 fw-bold text-primary">Our Commitment to Sustainability</h2>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="sustainability-card">
                  <div className="sustainability-icon">
                    <i className="fas fa-recycle"></i>
                  </div>
                  <h4>Eco-Friendly Packaging</h4>
                  <p>All our shipments use 100% recyclable materials and minimal plastic packaging.</p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="sustainability-card">
                  <div className="sustainability-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h4>Carbon Neutral Shipping</h4>
                  <p>We offset 100% of our shipping emissions through certified carbon credit programs.</p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="sustainability-card">
                  <div className="sustainability-icon">
                    <i className="fas fa-seedling"></i>
                  </div>
                  <h4>Ethical Sourcing</h4>
                  <p>We partner with suppliers who share our commitment to ethical manufacturing practices.</p>
                </div>
              </div>
            </div>
            <div className="sustainability-stats mt-5">
              <div className="row text-center">
                <div className="col-md-3">
                  <div className="sustainability-stat">
                    <h3>85%</h3>
                    <p>Recycled Packaging</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sustainability-stat">
                    <h3>50K</h3>
                    <p>Trees Planted</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sustainability-stat">
                    <h3>0%</h3>
                    <p>Plastic Waste</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sustainability-stat">
                    <h3>100%</h3>
                    <p>Renewable Energy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section fade-in">
          <h3>Ready to Join Our Community?</h3>
            <p>
            Explore our curated selection and become part of the Minimalist
            family!
          </p>
          <a href="/shop" className="cta-button">
            Start Shopping Now
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
