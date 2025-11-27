import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  // احسب التوتال
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  };

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Cart</h2>

      {/* جدول الكارت */}
      <table className="table align-middle text-center">
        <thead className="bg-light">
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="6" className="py-5">
                🛒 Your cart is empty
              </td>
            </tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.imageUrl}
                    width="70"
                    className="rounded"
                    alt=""
                  />
                </td>

                <td>{item.name}</td>
                <td>${item.price}</td>

                <td>
                  <button className="btn btn-sm btn-outline-secondary me-2">
                    −
                  </button>
                  1
                  <button className="btn btn-sm btn-outline-secondary ms-2">
                    +
                  </button>
                </td>

                <td>${item.price}</td>

                <td>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn text-danger"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* أزرار تحت الجدول */}
      <div className="d-flex justify-content-between mb-4">
        <a href="/shop" className="btn btn-secondary">
          Continue Shopping
        </a>

        <div>
          <button className="btn btn-primary me-2">Update Cart</button>
          <button onClick={clearCart} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      </div>

      {/* 3 كرايت زي اللي في الصورة */}
      <div className="row">
        {/* Estimate Shipping */}
        <div className="col-md-4">
          <div className="p-3 border rounded">
            <h5>Estimate Shipping And Tax</h5>
            <p className="text-muted small">
              Enter your destination to get a shipping estimate.
            </p>

            <label className="fw-bold">Country</label>
            <select className="form-control mb-3">
              <option>Egypt</option>
              <option>USA</option>
              <option>UAE</option>
              <option>Saudi Arabia</option>
            </select>

            <label className="fw-bold">Zip / Postal Code</label>
            <input type="text" className="form-control mb-3" />

            <button className="btn btn-primary w-100">Calculate Shipping</button>
          </div>
        </div>

        {/* Cart Note */}
        <div className="col-md-4">
          <div className="p-3 border rounded">
            <h5>Cart Note</h5>
            <textarea
              className="form-control"
              rows="5"
              placeholder="Special instructions for the seller"
            />
          </div>
        </div>

        {/* Cart Total */}
        <div className="col-md-4">
          <div className="p-3 border rounded">
            <h5>Cart Total</h5>

            <div className="d-flex justify-content-between mb-3">
              <span className="fw-bold">Cart Total</span>
              <span className="fw-bold">${calculateTotal()}</span>
            </div>

            <button className="btn btn-success w-100">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
