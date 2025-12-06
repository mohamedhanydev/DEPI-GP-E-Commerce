import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CheckoutSuccess() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { clearCart } = useCart();

  useEffect(() => {
    const sessionId = new URLSearchParams(location.search).get("session_id");

    if (sessionId) {
      const createOrder = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(
            "http://localhost:3700/api/orders/create-order-from-session",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ sessionId }),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to create order");
          }
          await clearCart();
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };

      createOrder();
    } else {
      setLoading(false);
      setError("No session ID found.");
    }
  }, [location, clearCart]);

  return (
    <div className="container mt-5 text-center">
      {loading && <h2>Processing your order...</h2>}
      {error && <h2>{error}</h2>}
      {!loading && !error && (
        <>
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
          <p>Your order has been processed and will be shipped shortly.</p>
        </>
      )}
      <Link to="/" className="btn btn-primary mt-3">
        Continue Shopping
      </Link>
    </div>
  );
}
