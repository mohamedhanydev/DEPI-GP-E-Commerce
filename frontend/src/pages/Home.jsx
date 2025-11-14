import { useState } from "react";
import "../App.css";
import Hero from "../components/Hero";
import BestSelling from "../components/BestSelling";
import BestOffer from "../components/BestOffer";
import FeaturedCollection from "../components/FeaturedCollection";
import NewArrivals from "../components/NewArrivals";
import LatestBlog from "../components/LatestBlog";
import ShopPerks from "../components/ShopPerks";
import Instagram from "../components/Instagram";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <BestSelling />
      <BestOffer />
      <FeaturedCollection />
      <NewArrivals />
      <LatestBlog />
      <ShopPerks />
      <Instagram />
    </>
  );
}

export default App;
