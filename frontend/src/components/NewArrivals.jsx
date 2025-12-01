import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { fetchAllProducts } from "../api/products"; // Import the API utility
import { toast } from "react-toastify";

const ProductCard = ({ product, addToCart, currency, rates }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({ ...product, price: product.price_new || product.price }); // Use price_new if available, else price
    toast.success("Product added to cart!");
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    toast.success("Product added to wishlist!");
  };

  // Use price_new if available, otherwise fallback to price
  const displayPrice = product.price_new || product.price;

  const convertedPrice = displayPrice * (rates[currency] || 1);

  // Format price to US dollars
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(convertedPrice);

  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="product-card card border-0 rounded-0">
        <div className="image-wrapper position-relative">
          <img
            src={product.imageUrl || product.image} // Use imageUrl or image
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
            <a href="#" className="btn-action">
              <i className="fas fa-eye"></i>
            </a>
          </div>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{product.name}</h5>
          <div className="product-price">
            {product.price_old && (
              <span className="text-muted text-decoration-line-through me-2">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: currency,
                }).format(product.price_old * (rates[currency] || 1))}
              </span>
            )}
            <span className="fw-bold text-dark">
              {formattedPrice}
            </span>
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

export default function NewArrivals({ currency, rates }) {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchAllProducts();
        // Take a subset of products for "new arrivals"
        setProducts(data.slice(0, 4)); 
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
      <section className="new-arrivals py-4">
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
      <section className="new-arrivals py-4">
        <div className="container text-center alert alert-danger">
          Error loading products: <strong>{error}</strong>
        </div>
      </section>
    );
  }

  return (
    <section className="new-arrivals py-4">
      <div className="container">
        <div className="row">
          <div className="main-section-text">
            <h3>new arrivals</h3>
          </div>
        </div>
        <div className="row gy-4 mb-4">
          {products.map((product) => (
            <ProductCard
              key={product.id || product._id}
              product={product}
              addToCart={addToCart}
              currency={currency}
              rates={rates}
            />
          ))}
        </div>
        <a
          className="btn btn-primary d-block mx-auto"
          href="shop.html" // Changed to shop.html
          role="button"
          style={{ width: "fit-content" }}
        >
          view All
        </a>
      </div>
    </section>
  );
}
