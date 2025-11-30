import React from "react";
import { useCart } from "../context/CartContext";
import grid1 from "../assets/grid__1.png";
import grid4 from "../assets/grid__4.png";
import grid6 from "../assets/grid__6.png";
import grid11 from "../assets/grid__11.png";
import grid9 from "../assets/grid__9.png";
import grid13 from "../assets/grid__13.png";
import grey1 from "../assets/grey1.png";
import grid2 from "../assets/grid__2.png";
import womenSweater from "../assets/women-sweater.png";
import boyfriendPants from "../assets/boyfriend pants.jpg";
import dress1 from "../assets/dress1.jpg";
import leatherJacket from "../assets/leather jacket (1).jpg";
import baby1 from "../assets/baby1.jpg";
import baby2 from "../assets/baby2.jpg";

const products_data = {
  man: [
    {
      id: 1,
      name: "W. Men Formal T-shirt",
      price_old: 72.0,
      price_new: 47.0,
      image: grid1,
      badge_new: true,
      badge_discount: "-15%",
      countdown: true,
    },
    {
      id: 2,
      name: "B. Pair of Blue Shoes",
      price_new: 40.0,
      image: grid4,
    },
    {
      id: 3,
      name: "F. Ultimate Smart Watch",
      price_new: 47.0,
      image: grid6,
      badge_new: true,
    },
    {
      id: 4,
      name: "S. Denim Jacket",
      price_old: 102.0,
      price_new: 70.0,
      image: grid11,
      badge_new: true,
      badge_discount: "-15%",
      countdown: true,
    },
    {
      id: 5,
      name: "A. Stylist SunGlass",
      price_new: 20.0,
      image: grid9,
    },
    {
      id: 6,
      name: "B. Basic T-shirt",
      price_new: 47.0,
      image: grid13,
    },
    {
      id: 7,
      name: "B. Off White T-Shirt",
      price_new: 47.0,
      image: grey1,
    },
    {
      id: 8,
      name: "B. Classic shirt",
      price_new: 72.0,
      image: grid2,
    },
  ],
  woman: [
    {
      id: 9,
      name: "Women’s Knitted Sweater",
      price_old: 100.0,
      price_new: 80.0,
      image: womenSweater,
      badge_new: true,
      badge_discount: "-20%",
      countdown: true,
    },
    {
      id: 10,
      name: "Boyfriend Pants",
      price_new: 60.0,
      image: boyfriendPants,
    },
    {
      id: 11,
      name: "Summer Dress",
      price_old: 90.0,
      price_new: 70.0,
      image: dress1,
      badge_new: true,
      badge_discount: "-20%",
    },
    {
      id: 12,
      name: "Leather Jacket",
      price_new: 120.0,
      image: leatherJacket,
    },
  ],
  baby: [
    {
      id: 13,
      name: "Baby Body Suit",
      price_old: 25.0,
      price_new: 45.0,
      image: baby1,
      badge_new: true,
      badge_discount: "-10%",
      countdown: true,
    },
    {
      id: 14,
      name: "Baby Body Suit",
      price_new: 54.0,
      image: baby2,
    },
  ],
};

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

export default function BestSelling({ currency, rates }) {
  const { addToCart } = useCart();
  return (
    <section className="best-selling py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Best Selling</h2>
          <ul className="nav nav-tabs" id="bestSellingTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="man-tab"
                data-bs-toggle="tab"
                data-bs-target="#man"
                type="button"
                role="tab"
              >
                Man
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="woman-tab"
                data-bs-toggle="tab"
                data-bs-target="#woman"
                type="button"
                role="tab"
              >
                Woman
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="baby-tab"
                data-bs-toggle="tab"
                data-bs-target="#baby"
                type="button"
                role="tab"
              >
                Baby
              </button>
            </li>
          </ul>
        </div>

        <div className="tab-content">
          <div className="tab-pane fade show active" id="man" role="tabpanel">
            <div className="row g-4">
              {products_data.man.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  currency={currency}
                  rates={rates}
                />
              ))}
            </div>
          </div>

          <div className="tab-pane fade" id="woman" role="tabpanel">
            <div className="row g-4">
              {products_data.woman.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  currency={currency}
                  rates={rates}
                />
              ))}
            </div>
          </div>

          <div className="tab-pane fade" id="baby" role="tabpanel">
            <div className="row g-4">
              {products_data.baby.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  currency={currency}
                  rates={rates}
                />
              ))}
            </div>
          </div>
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
