import React from "react";
import { useCart } from "../context/CartContext";
import grid11 from "../assets/grid__11.png";
import grid13 from "../assets/grid__13.png";
import grid14 from "../assets/grid__14.png";
import grid2 from "../assets/grid__2.png";

const products = [
  {
    id: 15,
    name: "W. Men Formal T-shirt",
    price_old: 72.0,
    price_new: 47.0,
    image: grid11,
    badge_new: true,
    badge_discount: "-15%",
    countdown: true,
  },
  {
    id: 16,
    name: "B. Pair Of Blue Shoes",
    price_new: 47.0,
    image: grid13,
  },
  {
    id: 17,
    name: "F. Ultmate Smart Watch",
    price_new: 47.0,
    image: grid14,
    badge_new: true,
  },
  {
    id: 18,
    name: "S. Mokmol Jacket",
    price_old: 72.0,
    price_new: 47.0,
    image: grid2,
    badge_discount: "-15%",
    countdown: true,
  },
];

import { toast } from "react-toastify";

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

  const formatPrice = (price) => {
    const convertedPrice = price * (rates[currency] || 1);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(convertedPrice);
  };

  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="product-card card border-0 rounded-0">
        <div className="image-wrapper position-relative">
          <img
            src={product.image}
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
                {formatPrice(product.price_old)}
              </span>
            )}
            <span className="fw-bold text-dark">
              {formatPrice(product.price_new)}
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
  return (
    <section className="new arrivals py-4">
      <div className="container">
        <div className="row">
          <div className="main-section-text">
            <h3>new arrivals</h3>
          </div>
        </div>
        <div className="row gy-4 mb-4">
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
        <a
          className="btn btn-primary d-block mx-auto"
          href="index.html"
          role="button"
          style={{ width: "fit-content" }}
        >
          view All
        </a>
      </div>
    </section>
  );
}
