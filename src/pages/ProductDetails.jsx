import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProduct(id);
        setProduct(productData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container">Error: {error.message}</div>;
  }

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
