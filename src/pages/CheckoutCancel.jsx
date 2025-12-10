import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutCancel() {
  return (
    <div className="container mt-5 text-center">
      <h2>Payment Canceled</h2>
      <p>Your payment was not processed.</p>
      <p>
        You can go back to the checkout page to try again.
      </p>
      <Link to="/checkout" className="btn btn-warning mt-3">
        Back to Checkout
      </Link>
    </div>
  );
}
