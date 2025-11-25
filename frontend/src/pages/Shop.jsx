import React, { useState, useEffect } from "react";
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

// Helper component for a single product card
const ProductCard = ({ product }) => {
  // In a real app, this function would update a global cart state (e.g., using Context or Redux)
  const handleAddToCart = () => {
    console.log(`Added product ${product.name} (ID: ${product.id}) to cart!`);
    // Example: show a temporary success notification
    alert(`Successfully added ${product.name} to cart!`);
  };

  // Format price to US dollars
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={product.imageUrl}
          className="card-img-top"
          alt={product.name}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{product.name}</h5>
          <p className="card-text text-muted small flex-grow-1">
            {product.description}
          </p>

          <div className="mt-auto pt-2">
            <h4 className="text-primary mb-3">{formattedPrice}</h4>

            {/* Product details page has been removed */}
            <button
              className="btn btn-outline-secondary btn-sm me-2"
              disabled
              title="Product details coming soon"
            >
              View Details
            </button>

            <button
              onClick={handleAddToCart}
              className="btn btn-success btn-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Shop Page Component
const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchProducts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Use mock data for the example
        setProducts(mockProducts);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
