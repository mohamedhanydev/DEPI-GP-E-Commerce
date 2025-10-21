export default function Header() {
  return (
    <header class="header" id="main-header">
      <div class="top-header bg-dark py-2 text-white">
        <div class="container d-flex justify-content-between align-items-center">
          <div class="top-header-left d-flex gap-2">
            <a
              href="mailto:info@depigp.com"
              class="text-white text-decoration-none"
            >
              <i class="fa-solid fa-envelope"></i>
              <span>info@depigp.com</span>
            </a>
            <a href="#" class="text-white text-decoration-none">
              <i class="fa-solid fa-location-dot"></i>
              <span>123 Main St, Anytown, USA</span>
            </a>
          </div>
          <div class="top-header-right d-flex gap-3">
            <div class="dropdown">
              <button
                type="button"
                class="btn nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                English
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Arabic
                  </a>
                </li>
                <li>
                  <a class="dropdown-item active" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    French
                  </a>
                </li>
              </ul>
            </div>
            <div class="links">
              <a href="#" class="text-white">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" class="text-white">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#" class="text-white">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" class="text-white">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img
              src="assets/images/logo__1.png"
              alt="DEPI-GP Logo"
              class="img-fluid"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div class="more-details d-flex align-items-center">
              <div class="dropdown">
                <button
                  type="button"
                  class="btn nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  USD
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      EUR
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item active" href="#">
                      USD
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      GBP
                    </a>
                  </li>
                </ul>
              </div>
              <a href="#" class="text-dark mx-2 hide-on-collapse">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
              <a href="#" class="text-dark mx-2 hide-on-collapse">
                <i class="fa-regular fa-user"></i>
              </a>
              <a
                href="#"
                class="text-dark mx-2 position-relative hide-on-collapse"
              >
                <i class="fa-solid fa-bag-shopping"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
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
