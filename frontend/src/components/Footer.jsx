export default function Footer() {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-about pb-4">
              <h3 className="h3">About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="social-icons">
                <a href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </div>
              <p>Guaranteed Payment Solutions</p>
              <div className="payment-icons">
                <i className="fab fa-paypal"></i>
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-links">
              <h3
                className="footer-title"
                data-bs-toggle="collapse"
                data-bs-target="#quick-links"
              >
                Quick Links
                <ion-icon
                  name="chevron-down-outline"
                  className="d-md-none"
                ></ion-icon>
              </h3>
              <ul id="quick-links" className="collapse d-md-block">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-links">
              <h3
                className="footer-title"
                data-bs-toggle="collapse"
                data-bs-target="#information"
              >
                Information
                <ion-icon
                  name="chevron-down-outline"
                  className="d-md-none"
                ></ion-icon>
              </h3>
              <ul id="information" className="collapse d-md-block">
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Order History</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-links">
              <h3
                className="footer-title"
                data-bs-toggle="collapse"
                data-bs-target="#policies"
              >
                Policies
                <ion-icon
                  name="chevron-down-outline"
                  className="d-md-none"
                ></ion-icon>
              </h3>
              <ul id="policies" className="collapse d-md-block">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Shipping Policy</a>
                </li>
                <li>
                  <a href="#">Return Policy</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container py-3">
        <div className="row">
          <p className="text-center">© 2025 E-Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}