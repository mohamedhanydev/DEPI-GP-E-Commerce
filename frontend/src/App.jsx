import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login"; // Import Login component
import Register from "./pages/Register"; // Import Register component
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogPostPageWrapper from "./pages/BlogPostPageWrapper";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import AboutUs from "./pages/AboutUs";
import { CartProvider } from "./context/CartContext";
import CartPage from "./components/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostPageWrapper />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsAndConditions />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="return-policy" element={<ReturnPolicy />} />
          <Route path="/login" element={<Login />} /> {/* Login Route */}
          <Route path="/register" element={<Register />} /> {/* Register Route */}
          {/* cart page */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="*"
            element={<h1 className="container">404: Page Not Found</h1>}
          />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}
export default App;