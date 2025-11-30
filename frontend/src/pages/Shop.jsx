import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
// Don't forget to import 'bootstrap/dist/css/bootstrap.min.css' in your main file

// Mock data structure for e-commerce products
const mockProducts = [
  {
    id: 101,
    name: "Wireless Mechanical Keyboard",
    description:
      "A compact 60% mechanical keyboard with customizable RGB backlighting and tactile switches.",
    price: 99.99,
    imageUrl: "https://via.placeholder.com/600x400?text=Keyboard",
    slug: "/product/wireless-keyboard",
  },
  {
    id: 102,
    name: "Noise-Cancelling Headphones",
    description:
      "Over-ear headphones with industry-leading noise cancellation and 30 hours of battery life.",
    price: 149.5,
    imageUrl: "https://via.placeholder.com/600x400?text=Headphones",
    slug: "/product/noise-cancelling-headphones",
  },
  {
    id: 103,
    name: "4K Ultra HD Monitor",
    description:
      "27-inch monitor with stunning 4K resolution, 1ms response time, perfect for gaming and design.",
    price: 349.0,
    imageUrl: "https://via.placeholder.com/600x400?text=Monitor",
    slug: "/product/4k-monitor",
  },
  {
    id: 104,
    name: "Portable SSD 1TB",
    description:
      "Fast and reliable external solid-state drive with USB-C connectivity.",
    price: 119.99,
    imageUrl: "https://via.placeholder.com/600x400?text=SSD",
    slug: "/product/portable-ssd",
  },
];

import { toast } from "react-toastify";

// Helper component for a single product card
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

  const convertedPrice = product.price * (rates[currency] || 1);

  // Format price to US dollars
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(convertedPrice);

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
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
            <a href="#" className="btn-action">
              <i className="fas fa-eye"></i>
            </a>
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

// Main Shop Page Component
const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart, currency, rates } = useCart();
  useEffect(() => {
    // Simulate fetching data from an API
    const fetchProducts = async () => {
      try {
        // Use mock data for the example
        setProducts(mockProducts);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  if (!rates) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5 text-center alert alert-danger">
        Error loading products: **{error}**
      </div>
    );
  }

  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">🛒 Our Shop</h1>
        <p className="lead">
          Explore the latest and greatest tech accessories.
        </p>
        <hr className="w-25 mx-auto" />
      </header>

      {products.length === 0 ? (
        <div className="alert alert-info text-center">
          No products are available right now.
        </div>
      ) : (
        <div className="row">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              currency={currency}
              rates={rates}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
