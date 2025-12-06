import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { fetchAllProducts } from "../api/products"; // Import the API utility
import { toast } from "react-toastify";

// Helper component for a single product card (re-using the one from Shop.jsx for consistency)
const ProductCard = ({ product, addToCart, currency, rates }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success("Product added to cart!");
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    toast.success("Product added to wishlist!");
  };

  const displayPrice = product.price;

  const convertedPrice = displayPrice * (rates[currency] || 1);

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(convertedPrice);
  console.log(product);
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="product-card card border-0 rounded-0">
        <div className="image-wrapper position-relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-img img-fluid"
          />
          <div className="card-actions">
            <a href="#" className="btn-action" onClick={handleAddToWishlist}>
              <i className="far fa-heart"></i>
            </a>
            <a href="#" className="btn-action" onClick={handleAddToCart}>
              <i className="fas fa-shopping-cart"></i>
            </a>
            <Link to={`/product/${product._id}`} className="btn-action">
              <i className="fas fa-eye"></i>
            </Link>
          </div>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{product.name}</h5>
          <div className="product-price">
            <span className="fw-bold text-dark">{formattedPrice}</span>
          </div>
          <div className="product-rating">
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="far fa-star text-warning"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BestSelling({ currency, rates }) {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("all"); // State to manage active tab

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <section className="best-selling py-5">
        <div className="container text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading products...</span>
          </div>
          <p className="mt-2">Loading products...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="best-selling py-5">
        <div className="container text-center alert alert-danger">
          Error loading products: <strong>{error}</strong>
        </div>
      </section>
    );
  }

  // Filter products based on active tab.
  // This is a placeholder for actual categorization/filtering from the backend.
  const filteredProducts = products.filter((product) => {
    // For now, we'll just display all products regardless of the tab,
    // as the backend doesn't support category filtering yet.
    // In a real application, you'd filter by a 'category' or 'gender' property from the backend.
    return true;
  });

  return (
    <section className="best-selling py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Best Selling</h2>
          <ul className="nav nav-tabs" id="bestSellingTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "all" ? "active" : ""}`}
                id="all-tab"
                data-bs-toggle="tab"
                data-bs-target="#all"
                type="button"
                role="tab"
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
            </li>
            {/* The original tabs for Man, Woman, Baby are removed or commented out 
                because the current backend doesn't support this categorization.
                You would re-introduce them and implement filtering based on 
                actual product categories from the backend if available. */}
            {/*
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "man" ? "active" : ""}`}
                id="man-tab"
                data-bs-toggle="tab"
                data-bs-target="#man"
                type="button"
                role="tab"
                onClick={() => setActiveTab("man")}
              >
                Man
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "woman" ? "active" : ""}`}
                id="woman-tab"
                data-bs-toggle="tab"
                data-bs-target="#woman"
                type="button"
                role="tab"
                onClick={() => setActiveTab("woman")}
              >
                Woman
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "baby" ? "active" : ""}`}
                id="baby-tab"
                data-bs-toggle="tab"
                data-bs-target="#baby"
                type="button"
                role="tab"
                onClick={() => setActiveTab("baby")}
              >
                Baby
              </button>
            </li>
            */}
          </ul>
        </div>

        <div className="tab-content">
          <div className="tab-pane fade show active" id="all" role="tabpanel">
            <div className="row g-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id || product._id} // Use id or _id
                  product={product}
                  addToCart={addToCart}
                  currency={currency}
                  rates={rates}
                />
              ))}
            </div>
          </div>
          {/* Other tab panes (man, woman, baby) are removed or commented out for now */}
        </div>

        <div className="text-center mt-4">
          <a href="#" className="btn btn-primary px-4">
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
