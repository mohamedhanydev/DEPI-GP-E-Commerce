import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogPostPageWrapper from "./pages/BlogPostPageWrapper";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostPageWrapper />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
