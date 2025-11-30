import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import BestSelling from "../components/BestSelling";
import BestOffer from "../components/BestOffer";
import FeaturedCollection from "../components/FeaturedCollection";
import NewArrivals from "../components/NewArrivals";
import LatestBlog from "../components/LatestBlog";
import ShopPerks from "../components/ShopPerks";
import Instagram from "../components/Instagram";
import { useCart } from "../context/CartContext";

function Home() {
  const { addToCart, currency, rates } = useCart();

  if (!rates) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <BestSelling addToCart={addToCart} currency={currency} rates={rates} />
      <BestOffer />
      <FeaturedCollection
        addToCart={addToCart}
        currency={currency}
        rates={rates}
      />
      <NewArrivals addToCart={addToCart} currency={currency} rates={rates} />
      <LatestBlog />
      <ShopPerks />
      <Instagram />
    </>
  );
}

export default Home;
