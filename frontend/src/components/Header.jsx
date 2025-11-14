import logo from "../assets/logo__1.png";

export default function Header() {
  return (
    <header className="header" id="main-header">
      <div className="top-header bg-dark py-2 text-white">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="top-header-left d-flex gap-2">
            <a
              href="mailto:info@depigp.com"
              className="text-white text-decoration-none"
            >
              <i className="fa-solid fa-envelope"></i>
              <span>info@depigp.com</span>
            </a>
            <a href="#" className="text-white text-decoration-none">
              <i className="fa-solid fa-location-dot"></i>
              <span>123 Main St, Anytown, USA</span>
            </a>
          </div>
          <div className="top-header-right d-flex gap-3">
            <div className="dropdown">
              <button
                type="button"
                className="btn nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                English
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Arabic
                  </a>
                </li>
                <li>
                  <a className="dropdown-item active" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    French
                  </a>
                </li>
              </ul>
            </div>
            <div className="links">
              <a href="#" className="text-white">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="DEPI-GP Logo" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="more-details d-flex align-items-center">
              <div className="dropdown">
                <button
                  type="button"
                  className="btn nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  USD
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      EUR
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item active" href="#">
                      USD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      GBP
                    </a>
                  </li>
                </ul>
              </div>
              <a href="#" className="text-dark mx-2 hide-on-collapse">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
              <a href="#" className="text-dark mx-2 hide-on-collapse">
                <i className="fa-regular fa-user"></i>
              </a>
              <a
                href="#"
                className="text-dark mx-2 position-relative hide-on-collapse"
              >
                <i className="fa-solid fa-bag-shopping"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
