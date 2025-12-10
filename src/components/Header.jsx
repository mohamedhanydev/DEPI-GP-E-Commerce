import { useCart } from "../context/CartContext";
import { getToken, getCurrentUser } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const currencies = ["USD", "EUR", "GBP"];

export default function Header() {
  const { currency, setCurrency, logout, cartItemCount } = useCart();
  const navigate = useNavigate();
  const isAuthenticated = getToken();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("main-header");
      if (window.scrollY > 100) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <Link className="navbar-brand" to="/">
            <img src="/assets/logo__1.png" alt="DEPI-GP Logo" className="img-fluid" />
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              {user && user.role === "admin" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="more-details d-flex align-items-center">
              <div className="dropdown">
                <button
                  type="button"
                  className="btn nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {currency}
                </button>
                <ul className="dropdown-menu">
                  {currencies.map((c) => (
                    <li key={c}>
                      <a
                        className={`dropdown-item ${
                          c === currency ? "active" : ""
                        }`}
                        href="#"
                        onClick={() => setCurrency(c)}
                      >
                        {c}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="text-dark mx-2 hide-on-collapse">
                <i className="fa-solid fa-magnifying-inspect"></i>
              </a>
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-link text-dark mx-2 hide-on-collapse"
                >
                  <i className="fa-solid fa-sign-out-alt"></i>
                </button>
              ) : (
                <Link to="/login" className="text-dark mx-2 hide-on-collapse">
                  <i className="fa-regular fa-user"></i>
                </Link>
              )}
              <Link
                to="/cart"
                className="text-dark mx-2 position-relative hide-on-collapse"
              >
                <i className="fa-solid fa-bag-shopping"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItemCount}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

